/* =====================================================================
   EMPLOYEE MANAGEMENT SYSTEM — JAVASCRIPT
   This file is organized into clear sections:
     1. Data (the list of employees we're managing)
     2. Grabbing references to HTML elements
     3. Rendering functions (turn data into HTML)
     4. Validation functions
     5. CRUD functions (Create, Read, Update, Delete)
     6. Search / Filter / Sort logic
     7. Modal open/close helpers
     8. Event listeners (wiring everything together)

   NOTE: Data lives only in memory (a JavaScript array). Refreshing the
   page will reset it back to the sample employees below. If you want
   the data to survive a page refresh, you could save it to a database
   or backend — that's outside the scope of this simple demo.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1. DATA
   Each employee is a plain JavaScript object. We keep everything in
   one array called `employees`. Every function below reads from or
   writes to this array.
   --------------------------------------------------------------------- */
let employees = [
  { id: 1, name: "Aarav Mehta",     email: "aarav.mehta@company.com",   department: "Engineering",     salary: 95000, experience: 4,   status: "Active" },
  { id: 2, name: "Priya Sharma",    email: "priya.sharma@company.com",  department: "Marketing",       salary: 62000, experience: 2.5, status: "Active" },
  { id: 3, name: "Rohan Iyer",      email: "rohan.iyer@company.com",    department: "Sales",           salary: 58000, experience: 1,   status: "Inactive" },
  { id: 4, name: "Sneha Kapoor",    email: "sneha.kapoor@company.com",  department: "Human Resources", salary: 71000, experience: 6,   status: "Active" },
  { id: 5, name: "Vikram Nair",     email: "vikram.nair@company.com",   department: "Finance",         salary: 88000, experience: 5,   status: "Active" },
  { id: 6, name: "Anjali Desai",    email: "anjali.desai@company.com",  department: "Design",          salary: 67000, experience: 3,   status: "Inactive" },
  { id: 7, name: "Karan Malhotra",  email: "karan.malhotra@company.com",department: "Engineering",     salary: 110000,experience: 8,   status: "Active" },
  { id: 8, name: "Neha Joshi",      email: "neha.joshi@company.com",    department: "Support",         salary: 49000, experience: 1.5, status: "Active" },
];

// Keeps track of the next unique ID to hand out to a new employee
let nextId = employees.length + 1;

// Keeps track of which employee is currently being deleted (while the
// delete confirmation modal is open)
let employeeIdPendingDelete = null;

// A small fixed color list used to give each department a consistent
// colored dot in the table (purely a visual touch).
const departmentColors = {
  "Engineering": "#1B2A4A",
  "Sales": "#E8A33D",
  "Marketing": "#2F9E63",
  "Human Resources": "#C9A227",
  "Finance": "#5B7083",
  "Support": "#D64545",
  "Operations": "#8B95A5",
  "Design": "#2D4356",
};


/* ---------------------------------------------------------------------
   2. GRABBING HTML ELEMENT REFERENCES
   Doing this once at the top makes the rest of the code easier to read.
   --------------------------------------------------------------------- */

// Stats
const statTotal     = document.getElementById("statTotal");
const statActive     = document.getElementById("statActive");
const statInactive   = document.getElementById("statInactive");
const statAvgSalary  = document.getElementById("statAvgSalary");
const statMaxSalary  = document.getElementById("statMaxSalary");
const statMinSalary  = document.getElementById("statMinSalary");

// Toolbar (search / filter / sort)
const searchInput      = document.getElementById("searchInput");
const filterStatus     = document.getElementById("filterStatus");
const filterDepartment = document.getElementById("filterDepartment");
const filterSalaryMin  = document.getElementById("filterSalaryMin");
const filterSalaryMax  = document.getElementById("filterSalaryMax");
const sortBySelect     = document.getElementById("sortBy");
const resetFiltersBtn  = document.getElementById("resetFiltersBtn");
const resultsCount     = document.getElementById("resultsCount");

// Table
const employeeTableBody = document.getElementById("employeeTableBody");
const emptyState         = document.getElementById("emptyState");

// Add/Edit modal
const employeeModal   = document.getElementById("employeeModal");
const modalTitle       = document.getElementById("modalTitle");
const employeeForm     = document.getElementById("employeeForm");
const addEmployeeBtn   = document.getElementById("addEmployeeBtn");
const closeModalBtn    = document.getElementById("closeModalBtn");
const cancelFormBtn    = document.getElementById("cancelFormBtn");

// Form fields
const employeeIdField = document.getElementById("employeeId");
const empName         = document.getElementById("empName");
const empEmail        = document.getElementById("empEmail");
const empDepartment   = document.getElementById("empDepartment");
const empSalary       = document.getElementById("empSalary");
const empExperience   = document.getElementById("empExperience");
const empStatus       = document.getElementById("empStatus");

// Form error message spans
const errName        = document.getElementById("errName");
const errEmail       = document.getElementById("errEmail");
const errDepartment  = document.getElementById("errDepartment");
const errSalary      = document.getElementById("errSalary");
const errExperience  = document.getElementById("errExperience");

// View details modal
const viewModal          = document.getElementById("viewModal");
const viewDetailsContent = document.getElementById("viewDetailsContent");
const closeViewModalBtn  = document.getElementById("closeViewModalBtn");
const closeViewBtn       = document.getElementById("closeViewBtn");

// Delete confirmation modal
const deleteModal       = document.getElementById("deleteModal");
const cancelDeleteBtn   = document.getElementById("cancelDeleteBtn");
const confirmDeleteBtn  = document.getElementById("confirmDeleteBtn");

// Toast
const toast = document.getElementById("toast");


/* ---------------------------------------------------------------------
   3. RENDERING FUNCTIONS
   These functions read from `employees` and update the page.
   We never edit the HTML by hand — we always regenerate it from data,
   which keeps the table and the data array in sync.
   --------------------------------------------------------------------- */

/**
 * Formats a number as US dollars, e.g. 65000 -> "$65,000"
 */
function formatSalary(amount) {
  return "$" + Number(amount).toLocaleString("en-US");
}

/**
 * Builds a single <tr> (table row) of HTML for one employee.
 * The data-label attributes are used by style.css on small screens
 * to turn the table into a stack of labeled cards.
 */
function buildEmployeeRow(employee) {
  const statusClass = employee.status === "Active" ? "active" : "inactive";
  const dotColor = departmentColors[employee.department] || "#8B95A5";

  return `
    <tr data-id="${employee.id}">
      <td data-label="Status">
        <span class="status-tab ${statusClass}">
          <span class="dot"></span> ${employee.status}
        </span>
      </td>
      <td data-label="Name" class="emp-name-cell">${escapeHtml(employee.name)}</td>
      <td data-label="Email" class="emp-email-cell">${escapeHtml(employee.email)}</td>
      <td data-label="Department">
        <span class="dept-dot" style="background-color:${dotColor}"></span>${escapeHtml(employee.department)}
      </td>
      <td data-label="Salary" class="salary-cell">${formatSalary(employee.salary)}</td>
      <td data-label="Experience">${employee.experience} yr${employee.experience === 1 ? "" : "s"}</td>
      <td data-label="Actions">
        <div class="actions-cell">
          <button class="btn-icon view" onclick="openViewModal(${employee.id})">View</button>
          <button class="btn-icon edit" onclick="openEditModal(${employee.id})">Edit</button>
          <button class="btn-icon delete" onclick="openDeleteModal(${employee.id})">Delete</button>
        </div>
      </td>
    </tr>
  `;
}

/**
 * Escapes HTML special characters so employee data can never break
 * the page layout or inject unwanted HTML/scripts.
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Main render function: gets the filtered + sorted list of employees
 * and redraws the table with it. Called after every change to the
 * data, search box, filters, or sort order.
 */
function renderTable() {
  const list = getFilteredAndSortedEmployees();

  if (list.length === 0) {
    employeeTableBody.innerHTML = "";
    emptyState.hidden = false;
  } else {
    emptyState.hidden = true;
    employeeTableBody.innerHTML = list.map(buildEmployeeRow).join("");
  }

  resultsCount.textContent = `Showing ${list.length} of ${employees.length} employee${employees.length === 1 ? "" : "s"}`;

  renderStats();
}

/**
 * Recalculates and displays the statistics cards.
 * Stats are always based on the FULL employee list, not the
 * filtered/search results, so they reflect the whole team.
 */
function renderStats() {
  const total = employees.length;
  const active = employees.filter(e => e.status === "Active").length;
  const inactive = total - active;

  statTotal.textContent = total;
  statActive.textContent = active;
  statInactive.textContent = inactive;

  if (total === 0) {
    statAvgSalary.textContent = "$0";
    statMaxSalary.textContent = "$0";
    statMinSalary.textContent = "$0";
    return;
  }

  const salaries = employees.map(e => e.salary);
  const avgSalary = salaries.reduce((sum, s) => sum + s, 0) / total;
  const maxSalary = Math.max(...salaries);
  const minSalary = Math.min(...salaries);

  statAvgSalary.textContent = formatSalary(Math.round(avgSalary));
  statMaxSalary.textContent = formatSalary(maxSalary);
  statMinSalary.textContent = formatSalary(minSalary);
}


/* ---------------------------------------------------------------------
   4. VALIDATION FUNCTIONS
   Each function checks one field and returns an error message string,
   or an empty string "" if the field is valid.
   --------------------------------------------------------------------- */

function validateName(value) {
  if (value.trim() === "") {
    return "Name cannot be empty.";
  }
  return "";
}

function validateEmail(value) {
  if (value.trim() === "") {
    return "Email cannot be empty.";
  }
  // Simple, readable email pattern: something@something.something
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value.trim())) {
    return "Please enter a valid email address.";
  }
  return "";
}

function validateDepartment(value) {
  if (value === "") {
    return "Please select a department.";
  }
  return "";
}

function validateSalary(value) {
  if (value === "" || isNaN(value)) {
    return "Salary is required.";
  }
  if (Number(value) <= 0) {
    return "Salary must be greater than 0.";
  }
  return "";
}

function validateExperience(value) {
  if (value === "" || isNaN(value)) {
    return "Experience is required.";
  }
  if (Number(value) < 0) {
    return "Experience cannot be negative.";
  }
  return "";
}

/**
 * Runs all field validators, displays any error messages on the form,
 * and returns true only if every field is valid.
 */
function validateForm() {
  const nameError = validateName(empName.value);
  const emailError = validateEmail(empEmail.value);
  const departmentError = validateDepartment(empDepartment.value);
  const salaryError = validateSalary(empSalary.value);
  const experienceError = validateExperience(empExperience.value);

  showFieldError(empName, errName, nameError);
  showFieldError(empEmail, errEmail, emailError);
  showFieldError(empDepartment, errDepartment, departmentError);
  showFieldError(empSalary, errSalary, salaryError);
  showFieldError(empExperience, errExperience, experienceError);

  // The form is valid only if none of the individual checks failed
  return !(nameError || emailError || departmentError || salaryError || experienceError);
}

/**
 * Shows or clears an error message under a form field, and toggles
 * the red "invalid" outline style on the input itself.
 */
function showFieldError(inputEl, errorEl, message) {
  errorEl.textContent = message;
  inputEl.classList.toggle("invalid", Boolean(message));
}

/**
 * Clears every validation error message on the form (used when
 * opening the modal fresh, so old errors don't linger).
 */
function clearFormErrors() {
  [errName, errEmail, errDepartment, errSalary, errExperience].forEach(el => el.textContent = "");
  [empName, empEmail, empDepartment, empSalary, empExperience].forEach(el => el.classList.remove("invalid"));
}


/* ---------------------------------------------------------------------
   5. CRUD FUNCTIONS (Create, Read, Update, Delete)
   --------------------------------------------------------------------- */

/**
 * Reads the current values out of the form and returns a plain
 * employee object (without an id).
 */
function getFormValues() {
  return {
    name: empName.value.trim(),
    email: empEmail.value.trim(),
    department: empDepartment.value,
    salary: Number(empSalary.value),
    experience: Number(empExperience.value),
    status: empStatus.value,
  };
}

/**
 * Handles the form's "submit" event for BOTH adding a new employee
 * and editing an existing one. We can tell which mode we're in by
 * checking whether the hidden `employeeId` field has a value.
 */
function handleFormSubmit(event) {
  event.preventDefault(); // stop the page from reloading

  if (!validateForm()) {
    return; // stop here if any field failed validation
  }

  const formValues = getFormValues();
  const idBeingEdited = employeeIdField.value;

  if (idBeingEdited) {
    // ----- UPDATE an existing employee -----
    const index = employees.findIndex(e => e.id === Number(idBeingEdited));
    if (index !== -1) {
      employees[index] = { ...employees[index], ...formValues };
      showToast("Employee updated successfully.");
    }
  } else {
    // ----- CREATE a new employee -----
    const newEmployee = { id: nextId, ...formValues };
    nextId += 1;
    employees.push(newEmployee);
    showToast("Employee added successfully.");
  }

  closeEmployeeModal();
  renderTable();
}

/**
 * Deletes the employee whose id matches `employeeIdPendingDelete`.
 * Called when the user confirms the delete modal.
 */
function deleteEmployee() {
  employees = employees.filter(e => e.id !== employeeIdPendingDelete);
  employeeIdPendingDelete = null;
  closeDeleteModal();
  renderTable();
  showToast("Employee deleted.");
}


/* ---------------------------------------------------------------------
   6. SEARCH / FILTER / SORT LOGIC
   All three combine into a single function so the table always
   reflects search + filters + sort order together.
   --------------------------------------------------------------------- */

function getFilteredAndSortedEmployees() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const statusValue = filterStatus.value;
  const departmentValue = filterDepartment.value;
  const minSalary = filterSalaryMin.value ? Number(filterSalaryMin.value) : null;
  const maxSalary = filterSalaryMax.value ? Number(filterSalaryMax.value) : null;

  let result = employees.filter(employee => {
    // Search matches on name OR department
    const matchesSearch =
      searchTerm === "" ||
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm);

    const matchesStatus = statusValue === "" || employee.status === statusValue;
    const matchesDepartment = departmentValue === "" || employee.department === departmentValue;

    const matchesMinSalary = minSalary === null || employee.salary >= minSalary;
    const matchesMaxSalary = maxSalary === null || employee.salary <= maxSalary;

    return matchesSearch && matchesStatus && matchesDepartment && matchesMinSalary && matchesMaxSalary;
  });

  // Apply sorting, if the user picked a sort option
  const sortValue = sortBySelect.value;
  if (sortValue) {
    const [field, direction] = sortValue.split("-"); // e.g. "salary-desc" -> ["salary", "desc"]

    result = result.slice().sort((a, b) => {
      let comparison = 0;

      if (field === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (field === "salary") {
        comparison = a.salary - b.salary;
      } else if (field === "experience") {
        comparison = a.experience - b.experience;
      }

      return direction === "desc" ? -comparison : comparison;
    });
  }

  return result;
}


/* ---------------------------------------------------------------------
   7. MODAL OPEN / CLOSE HELPERS
   --------------------------------------------------------------------- */

/** Opens the Add/Edit modal in "Add" mode, with a blank form. */
function openAddModal() {
  modalTitle.textContent = "Add Employee";
  employeeForm.reset();
  employeeIdField.value = "";
  clearFormErrors();
  employeeModal.hidden = false;
  empName.focus();
}

/** Opens the Add/Edit modal in "Edit" mode, pre-filled with an employee's data. */
function openEditModal(id) {
  const employee = employees.find(e => e.id === id);
  if (!employee) return;

  modalTitle.textContent = "Edit Employee";
  clearFormErrors();

  employeeIdField.value = employee.id;
  empName.value = employee.name;
  empEmail.value = employee.email;
  empDepartment.value = employee.department;
  empSalary.value = employee.salary;
  empExperience.value = employee.experience;
  empStatus.value = employee.status;

  employeeModal.hidden = false;
  empName.focus();
}

function closeEmployeeModal() {
  employeeModal.hidden = true;
  employeeForm.reset();
  clearFormErrors();
}

/** Opens the read-only "View Details" modal for one employee. */
function openViewModal(id) {
  const employee = employees.find(e => e.id === id);
  if (!employee) return;

  viewDetailsContent.innerHTML = `
    <div class="view-row">
      <span class="view-label">Name</span>
      <span class="view-value">${escapeHtml(employee.name)}</span>
    </div>
    <div class="view-row">
      <span class="view-label">Email</span>
      <span class="view-value">${escapeHtml(employee.email)}</span>
    </div>
    <div class="view-row">
      <span class="view-label">Department</span>
      <span class="view-value">${escapeHtml(employee.department)}</span>
    </div>
    <div class="view-row">
      <span class="view-label">Salary</span>
      <span class="view-value">${formatSalary(employee.salary)}</span>
    </div>
    <div class="view-row">
      <span class="view-label">Experience</span>
      <span class="view-value">${employee.experience} year${employee.experience === 1 ? "" : "s"}</span>
    </div>
    <div class="view-row">
      <span class="view-label">Status</span>
      <span class="view-value">${employee.status}</span>
    </div>
  `;

  viewModal.hidden = false;
}

function closeViewModal() {
  viewModal.hidden = true;
}

/** Opens the delete confirmation modal for a given employee id. */
function openDeleteModal(id) {
  const employee = employees.find(e => e.id === id);
  if (!employee) return;

  employeeIdPendingDelete = id;
  document.getElementById("deleteMessage").textContent =
    `Are you sure you want to delete "${employee.name}"? This action cannot be undone.`;
  deleteModal.hidden = false;
}

function closeDeleteModal() {
  deleteModal.hidden = true;
  employeeIdPendingDelete = null;
}

/** Shows a short-lived confirmation message at the bottom of the screen. */
function showToast(message) {
  toast.textContent = message;
  toast.hidden = false;

  // Hide it again automatically after 2.5 seconds
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 2500);
}


/* ---------------------------------------------------------------------
   8. EVENT LISTENERS
   This is where we connect all the buttons/inputs on the page to the
   functions defined above.
   --------------------------------------------------------------------- */

// Open the Add Employee modal
addEmployeeBtn.addEventListener("click", openAddModal);

// Close the Add/Edit modal (via the X button, Cancel button, or
// clicking on the dark overlay outside the modal box)
closeModalBtn.addEventListener("click", closeEmployeeModal);
cancelFormBtn.addEventListener("click", closeEmployeeModal);
employeeModal.addEventListener("click", (event) => {
  if (event.target === employeeModal) closeEmployeeModal();
});

// Submit the Add/Edit form
employeeForm.addEventListener("submit", handleFormSubmit);

// Close the View Details modal
closeViewModalBtn.addEventListener("click", closeViewModal);
closeViewBtn.addEventListener("click", closeViewModal);
viewModal.addEventListener("click", (event) => {
  if (event.target === viewModal) closeViewModal();
});

// Delete confirmation modal buttons
cancelDeleteBtn.addEventListener("click", closeDeleteModal);
confirmDeleteBtn.addEventListener("click", deleteEmployee);
deleteModal.addEventListener("click", (event) => {
  if (event.target === deleteModal) closeDeleteModal();
});

// Close any open modal when the Escape key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (!employeeModal.hidden) closeEmployeeModal();
    if (!viewModal.hidden) closeViewModal();
    if (!deleteModal.hidden) closeDeleteModal();
  }
});

// Re-render the table whenever search, filters, or sort order change
searchInput.addEventListener("input", renderTable);
filterStatus.addEventListener("change", renderTable);
filterDepartment.addEventListener("change", renderTable);
filterSalaryMin.addEventListener("input", renderTable);
filterSalaryMax.addEventListener("input", renderTable);
sortBySelect.addEventListener("change", renderTable);

// Reset button clears every search/filter/sort control back to default
resetFiltersBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterStatus.value = "";
  filterDepartment.value = "";
  filterSalaryMin.value = "";
  filterSalaryMax.value = "";
  sortBySelect.value = "";
  renderTable();
});


/* ---------------------------------------------------------------------
   INITIAL RENDER
   Draws the table and stats as soon as the page loads.
   --------------------------------------------------------------------- */
renderTable();
