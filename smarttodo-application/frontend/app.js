/**
 * SmartTodo — Frontend logic (vanilla JS, no framework/build step)
 *
 * Talks to the Flask backend via fetch(). Ownership (FR-001/FR-002) is
 * enforced server-side; this file just carries the X-User-Id header.
 */

const API_BASE = "http://localhost:5001/api";

// ---------------------------------------------------------------------
// State
// ---------------------------------------------------------------------
let currentUser = null; // { user_id, username }
let tasks = [];
let filters = { search: "", statuses: [], priorities: [] };
let pendingDeleteId = null;

// ---------------------------------------------------------------------
// DOM refs
// ---------------------------------------------------------------------
const loginScreen = document.getElementById("login-screen");
const appShell = document.getElementById("app-shell");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username-input");
const loginError = document.getElementById("login-error");
const usernameDisplay = document.getElementById("username-display");
const logoutBtn = document.getElementById("logout-btn");

const searchInput = document.getElementById("search-input");
const clearFiltersBtn = document.getElementById("clear-filters-btn");

const newEntryForm = document.getElementById("new-entry-form");
const newEntryPanel = document.getElementById("new-entry-panel");
const titleInput = document.getElementById("title-input");
const titleCount = document.getElementById("title-count");
const descriptionInput = document.getElementById("description-input");
const descriptionCount = document.getElementById("description-count");
const priorityInput = document.getElementById("priority-input");
const dueDateInput = document.getElementById("due-date-input");
const formErrors = document.getElementById("form-errors");

const logList = document.getElementById("log-list");
const logCount = document.getElementById("log-count");
const emptyState = document.getElementById("empty-state");

const toast = document.getElementById("toast");

// ---------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------
function init() {
  const stored = localStorage.getItem("smarttodo_user");
  if (stored) {
    currentUser = JSON.parse(stored);
    showApp();
  } else {
    showLogin();
  }

  loginForm.addEventListener("submit", handleLogin);
  logoutBtn.addEventListener("click", handleLogout);
  newEntryForm.addEventListener("submit", handleCreateTask);
  titleInput.addEventListener("input", () => updateCharCount(titleInput, titleCount, 100));
  descriptionInput.addEventListener("input", () => updateCharCount(descriptionInput, descriptionCount, 500));
  searchInput.addEventListener("input", debounce(handleFilterChange, 250));
  clearFiltersBtn.addEventListener("click", handleClearFilters);

  document.querySelectorAll(".filter-status").forEach((el) =>
    el.addEventListener("change", handleFilterChange)
  );
  document.querySelectorAll(".filter-priority").forEach((el) =>
    el.addEventListener("change", handleFilterChange)
  );

  // FR-014: the client cannot pick a past date in the native picker either
  dueDateInput.min = new Date().toISOString().split("T")[0];
}

function showLogin() {
  loginScreen.classList.remove("hidden");
  appShell.classList.add("hidden");
}

function showApp() {
  loginScreen.classList.add("hidden");
  appShell.classList.remove("hidden");
  usernameDisplay.textContent = currentUser.username;
  loadTasks();
}

// ---------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------
async function handleLogin(e) {
  e.preventDefault();
  loginError.classList.add("hidden");
  const username = usernameInput.value.trim();
  if (!username) return;

  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    if (!res.ok) {
      loginError.textContent = data.error || "Une erreur est survenue.";
      loginError.classList.remove("hidden");
      return;
    }
    currentUser = data;
    localStorage.setItem("smarttodo_user", JSON.stringify(currentUser));
    showApp();
  } catch (err) {
    loginError.textContent = "Impossible de contacter le serveur. Le backend est-il démarré ?";
    loginError.classList.remove("hidden");
  }
}

function handleLogout() {
  localStorage.removeItem("smarttodo_user");
  currentUser = null;
  tasks = [];
  showLogin();
}

// ---------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------
function authHeaders() {
  return {
    "Content-Type": "application/json",
    "X-User-Id": currentUser.user_id,
  };
}

async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: { ...authHeaders(), ...(options.headers || {}) },
  });
  if (res.status === 401) {
    handleLogout();
    throw new Error("Session expirée.");
  }
  return res;
}

// ---------------------------------------------------------------------
// Load & render tasks
// ---------------------------------------------------------------------
async function loadTasks() {
  const params = new URLSearchParams();
  if (filters.search) params.set("search", filters.search);
  // FR-021/FR-022: statuses/priorities can combine freely with search and
  // with each other. Multiple selected values of the same kind are OR'd
  // client-side by issuing one request per active value and merging — kept
  // simple here: if more than one status/priority is checked, we fetch
  // without that specific server-side filter and filter client-side instead,
  // so the UI can offer multi-select while the API stays single-value.
  const singleStatus = filters.statuses.length === 1 ? filters.statuses[0] : "";
  const singlePriority = filters.priorities.length === 1 ? filters.priorities[0] : "";
  if (singleStatus) params.set("status", singleStatus);
  if (singlePriority) params.set("priority", singlePriority);

  try {
    const res = await apiFetch(`/tasks?${params.toString()}`);
    let data = await res.json();
    if (!res.ok) {
      showToast(data.error || "Erreur de chargement.", true);
      return;
    }

    // Client-side pass for multi-select status/priority (see note above)
    if (filters.statuses.length > 1) {
      data = data.filter((t) => filters.statuses.includes(t.status));
    }
    if (filters.priorities.length > 1) {
      data = data.filter((t) => filters.priorities.includes(t.priority));
    }

    tasks = data;
    renderTasks();
  } catch (err) {
    showToast(err.message || "Erreur réseau.", true);
  }
}

function renderTasks() {
  logList.innerHTML = "";
  logCount.textContent = tasks.length
    ? `${tasks.length} entrée${tasks.length > 1 ? "s" : ""}`
    : "";

  if (tasks.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  tasks.forEach((task, idx) => {
    logList.appendChild(renderEntry(task, idx + 1));
  });
}

function renderEntry(task, index) {
  const row = document.createElement("div");
  row.className = "log-entry" + (task.status === "Terminée" ? " is-done" : "");
  row.dataset.taskId = task.id;

  const isDeleting = pendingDeleteId === task.id;

  row.innerHTML = `
    <div class="entry-index">${String(index).padStart(3, "0")}</div>
    <div class="entry-body">
      <p class="entry-title">${escapeHtml(task.title)}</p>
      ${task.description ? `<p class="entry-description">${escapeHtml(task.description)}</p>` : ""}
      <div class="entry-meta">
        <span class="pill pill-priority ${priorityClass(task.priority)}">${task.priority}</span>
        <span class="pill pill-status ${task.status === "Terminée" ? "terminee" : "a-faire"}">${task.status}</span>
        ${task.due_date ? `<span class="due-date">échéance ${formatDate(task.due_date)}</span>` : `<span>sans échéance</span>`}
      </div>
    </div>
    <div class="entry-actions">
      ${isDeleting ? renderConfirmDelete() : renderActions(task)}
    </div>
  `;

  if (!isDeleting) {
    row.querySelector(".toggle-status").addEventListener("click", () => toggleStatus(task));
    row.querySelector(".delete-btn").addEventListener("click", () => {
      pendingDeleteId = task.id;
      renderTasks();
    });
  } else {
    row.querySelector(".confirm-yes").addEventListener("click", () => deleteTask(task.id));
    row.querySelector(".confirm-no").addEventListener("click", () => {
      pendingDeleteId = null;
      renderTasks();
    });
  }

  return row;
}

function renderActions(task) {
  const nextLabel = task.status === "À faire" ? "Marquer terminée" : "Rétablir à faire";
  return `
    <button class="action-btn toggle-status" type="button">${nextLabel}</button>
    <button class="action-btn delete-btn" type="button">Supprimer</button>
  `;
}

function renderConfirmDelete() {
  return `
    <div class="confirm-delete">
      <p>Suppression définitive, sans possibilité de retour.</p>
      <div class="row">
        <button class="action-btn confirm-no" type="button">Annuler</button>
        <button class="action-btn confirm-yes" type="button">Confirmer</button>
      </div>
    </div>
  `;
}

// ---------------------------------------------------------------------
// Create task
// ---------------------------------------------------------------------
async function handleCreateTask(e) {
  e.preventDefault();
  formErrors.classList.add("hidden");
  formErrors.innerHTML = "";

  const payload = {
    title: titleInput.value.trim(),
    description: descriptionInput.value.trim(),
    priority: priorityInput.value,
    due_date: dueDateInput.value || null,
  };

  try {
    const res = await apiFetch("/tasks", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) {
      renderFormErrors(data.errors || [data.error] || ["Erreur inconnue."]);
      return;
    }
    newEntryForm.reset();
    titleCount.textContent = "0";
    descriptionCount.textContent = "0";
    newEntryPanel.removeAttribute("open");
    showToast("Tâche ajoutée au journal.");
    loadTasks();
  } catch (err) {
    renderFormErrors([err.message || "Erreur réseau."]);
  }
}

function renderFormErrors(errors) {
  formErrors.innerHTML = errors.map((e) => `<div>• ${escapeHtml(e)}</div>`).join("");
  formErrors.classList.remove("hidden");
}

// ---------------------------------------------------------------------
// Status toggle (FR-003/FR-005)
// ---------------------------------------------------------------------
async function toggleStatus(task) {
  const nextStatus = task.status === "À faire" ? "Terminée" : "À faire";
  try {
    const res = await apiFetch(`/tasks/${task.id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: nextStatus }),
    });
    const data = await res.json();
    if (!res.ok) {
      showToast(data.error || "Erreur lors du changement de statut.", true);
      return;
    }
    loadTasks();
  } catch (err) {
    showToast(err.message || "Erreur réseau.", true);
  }
}

// ---------------------------------------------------------------------
// Delete (FR-016/FR-017/FR-018)
// ---------------------------------------------------------------------
async function deleteTask(taskId) {
  try {
    const res = await apiFetch(`/tasks/${taskId}`, { method: "DELETE" });
    if (!res.ok && res.status !== 204) {
      const data = await res.json();
      showToast(data.error || "Erreur lors de la suppression.", true);
      return;
    }
    pendingDeleteId = null;
    showToast("Tâche supprimée définitivement.");
    loadTasks();
  } catch (err) {
    showToast(err.message || "Erreur réseau.", true);
  }
}

// ---------------------------------------------------------------------
// Filters (FR-019 to FR-022)
// ---------------------------------------------------------------------
function handleFilterChange() {
  filters.search = searchInput.value.trim();
  filters.statuses = Array.from(document.querySelectorAll(".filter-status:checked")).map((el) => el.value);
  filters.priorities = Array.from(document.querySelectorAll(".filter-priority:checked")).map((el) => el.value);
  loadTasks();
}

function handleClearFilters() {
  searchInput.value = "";
  document.querySelectorAll(".filter-status, .filter-priority").forEach((el) => (el.checked = false));
  filters = { search: "", statuses: [], priorities: [] };
  loadTasks();
}

// ---------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------
function updateCharCount(input, counter, max) {
  counter.textContent = input.value.length;
  counter.style.color = input.value.length > max ? "var(--danger)" : "";
}

function priorityClass(priority) {
  return { Basse: "basse", Moyenne: "moyenne", Haute: "haute" }[priority] || "";
}

function formatDate(isoDate) {
  const [y, m, d] = isoDate.split("-");
  return `${d}/${m}/${y}`;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function debounce(fn, delay) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), delay);
  };
}

let toastTimer;
function showToast(message, isError = false) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  toast.classList.toggle("toast-error", isError);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 3500);
}

// ---------------------------------------------------------------------
init();
