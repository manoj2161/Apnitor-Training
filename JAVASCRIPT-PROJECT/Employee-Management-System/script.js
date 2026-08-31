// Step 1 creating employees object data
let employees = [
  {
    id: 1,
    name: "Manoj",
    email: "manoj@gmail.com",
    department: "IT",
    salary: 50000,
    experience: 2,
    status: "Active",
  },
  {
    id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    department: "HR",
    salary: 30000,
    experience: 1,
    status: "Active",
  },
  {
    id: 3,
    name: "Rahul kumar",
    email: "rahul23@gmail.com",
    department: "HR",
    salary: 35000,
    experience: 1,
    status: "Inactive",
  },
  {
    id: 4,
    name: "Aman kumar",
    email: "aman@gmail.com",
    department: "FINANCE",
    salary: 350000,
    experience: 3,
    status: "Active",
  },
];

// Step 2 Initilize the initial id to null
let editingId = null;

// Step 3 creating employee function
function createEmployee(
  name,
  email,
  department,
  salary,
  experience,
  employees,
) {
  // retrieving highest id from the object data
  const highestId = employees.reduce((acc, curr) => {
    if (acc > curr.id) {
      return acc;
    } else {
      return curr.id;
    }
  }, 0);
  // Storing newuser id in next id
  const nextId = highestId + 1;
  const newEmployee = {
    id: nextId,
    name,
    email,
    department,
    salary,
    experience,
    status: "Active",
  };
  // return newEmployee object
  return newEmployee;
}

// Step 4 rendring employee data with DOM
function renderEmployees(employees) {
  // storing employee render structure in employeeHTML
  const employeeHTML = employees
    .map((employee) => {
      return `
      <div class="employee" data-id=${employee.id}>
            <p>ID : ${employee.id}</p>
            <p>NAME : ${employee.name}</p>
            <p>EMAIL : ${employee.email}</p>
            <p>DEPARTMENT : ${employee.department}</p>
            <p>SALARY : ${employee.salary}</p>
            <p>EXPERIENCE : ${employee.experience}</p>
            <p>STATUS : ${employee.status}</p>
            <br>
            <button class="delete">Delete</button>                <button class="edit">Edit</button>
            </div>
            `;
    })
    .join("");
  // return employeeHtml structure whenever needed
  return employeeHTML;
}

const statistics = document.querySelector("#statistics");
function renderStats(employees) {
  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active",
  );
  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive",
  );
  const totalSalary = employees.reduce(
    (acc, curr) => acc + Number(curr.salary),
    0,
  );
  const averageSalary = employees.length ? totalSalary / employees.length : 0;
  const sortedBySalaryDesc = [...employees].sort((a, b) => b.salary - a.salary);
  const sortedBySalaryAsc = [...employees].sort((a, b) => a.salary - b.salary);
  const highestSalary = employees.length ? sortedBySalaryDesc[0].salary : 0;
  const lowestSalary = employees.length ? sortedBySalaryAsc[0].salary : 0;
  const totalEmployees = `
<div style="display:grid;gap:10px;">
<span>Total employees : ${employees.length}</span>   
<span>Active employees : ${activeEmployees.length}</span>   
<span>Inactive employees: ${inactiveEmployees.length}</span>   
<span>Average Salary : ${averageSalary.toFixed(2)}</span>   
<span>Highest Salary : ${highestSalary}</span>   
<span>Lowest Salary : ${lowestSalary}</span>   
</div>`;
  return totalEmployees;
}
statistics.innerHTML = renderStats(employees);
// Step 5 Accessing form and employee data div
const myForm = document.querySelector("#myForm");
const showEmployee = document.querySelector("#employeeList");

// Step 6 Showing renderEmployee function data with employees object in HTML
showEmployee.innerHTML = renderEmployees(employees);

// Step 7 Taking input data from form when sumbitted
myForm.addEventListener("submit", (event) => {
  // this helps to prevent page from refreshing
  event.preventDefault();

  // Taking the input data of all the input fields
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value;
  const salary = Number(document.querySelector("#salary").value);
  const department = document.querySelector(
    'input[name="department"]:checked',
  ).value;
  const experience = Number(document.querySelector("#experience").value);

  // Implementing Validations
  if (!name || name === " ") {
    return console.log("Name should not be empty");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return console.log("Email is not valid");
  }
  if (!salary || salary <= 0) {
    return console.log("Salary should not be empty");
  }
  if (!department) {
    return console.log("Department should not be empty");
  }
  if (!experience || experience < 0) {
    return console.log("Experience should not be empty");
  }

  // if the id does not exits then create new employee
  if (editingId === null) {
    const newEmployee = createEmployee(
      name,
      email,
      department,
      salary,
      experience,
      employees,
    );
    employees.push(newEmployee);
    myForm.reset();
    showEmployee.innerHTML = renderEmployees(employees);
    statistics.innerHTML = renderStats(employees);
    return;
  }

  // If the id exists Update the existing employee
  else {
    employees = employees.map((employee) => {
      // if the edit id mathes employee id then update the employee
      if (employee.id === editingId.id) {
        return {
          ...employee,
          name: name,
          email: email,
          salary: salary,
          department: department,
          experience: experience,
        };
      }

      //  if the id dones not matches return default employees
      else {
        return employee;
      }
    });
  }

  // Reassign the editingid to null
  editingId = null;
  myForm.reset();
  // Render the employees after updatation
  showEmployee.innerHTML = renderEmployees(employees);
  statistics.innerHTML = renderStats(employees);
});

// Step 8 getting the id of the element which is selected by using clck event on the showEmployee div
showEmployee.addEventListener("click", (event) => {
  // store the employee data in card variable
  const card = event.target.closest(".employee");
  if (card) {
    // if the card is clicked then work only if the delete button is clicked
    if (event.target.matches(".delete")) {
      // if delete button clicked remove that employee
      employees = employees.filter(
        (employee) => employee.id !== Number(card.dataset.id),
      );

      // Render the employee after deleting the data
      showEmployee.innerHTML = renderEmployees(employees);
      statistics.innerHTML = renderStats(employees);
      return;
    }

    // if the edit button is clicked then this code works
    else if (event.target.matches(".edit")) {
      // when the edit button clicked find the id of the clicked object
      const employeeToEdit = employees.find(
        (employee) => employee.id === Number(card.dataset.id),
      );

      // store the object into editingid
      editingId = employeeToEdit;

      // if the editing id is ture then take the data of the object and put it into the input fileds of the form
      if (editingId.id) {
        document.querySelector("#name").value = editingId.name;
        document.querySelector("#email").value = editingId.email;
        document.querySelector("#salary").value = editingId.salary;
        document.querySelector("#experience").value = editingId.experience;
        const deptRadio = document.querySelector(
          `input[name="department"][value="${editingId.department}"]`,
        );
        deptRadio.checked = true;
      }
    }
  }
});

// Step 9 Initilizing search value to empty so it can be access later in the functions
let searchValue = "";

//Searching the employee with input event listener
const searchInput = document.querySelector("#search");

// input event helps to filter result on each key pressed
searchInput.addEventListener("input", (event) => {
  // Storing the searched result in the searchvalue variable
  searchValue = event.target.value.toLowerCase().trim();
  // by using filter methods filter the emoloyees that are searched
  return updateDisplay();
});

// Storing the search result in applysearch function
function appllySearch(employees) {
  let filterdEmployee = employees.filter((employee) => {
    // if the search value mathes the object values then gives true which retur the updated filtered employees
    if (
      employee.name.toLowerCase().includes(searchValue) ||
      employee.department.toLowerCase().includes(searchValue)
    ) {
      return true;
    }
    // if the serach value dones not mathces the result then it dones not provide any data and show no employee data
    else {
      return false;
    }
  });
  return filterdEmployee;
}

// Storing the result of active of inactive memebers in applyFilter function Initilize the status to all
let statusFilter = "all";
let departmentFilterValue = "all";
const status = document.querySelector("#status");
status.addEventListener("change", (event) => {
  statusFilter = event.target.value;
  updateDisplay();
});

const departments = document.querySelector("#searchdepartment");
departments.addEventListener("change", (event) => {
  departmentFilterValue = event.target.value;
  updateDisplay();
});

let minSalary = "";
let maxSalary = "";
const minSalaryFilter = document.querySelector("#minSalary");
const maxSalaryFilter = document.querySelector("#maxSalary");

minSalaryFilter.addEventListener("input", (event) => {
  minSalary = event.target.value;
  updateDisplay();
});

maxSalaryFilter.addEventListener("input", (event) => {
  maxSalary = event.target.value;
  updateDisplay();
});

function applyFilters(employees) {
  let filterdEmployee = employees.filter((employee) => {
    const statusMatch =
      statusFilter === "all" || employee.status.toLowerCase() === statusFilter;
    const departmentMatches =
      departmentFilterValue === "all" ||
      employee.department.toLowerCase() === departmentFilterValue;
    const minSalaryInput = Number(minSalary) || 0;
    const maxSalaryInput = Number(maxSalary) || Infinity;
    const salryMatch =
      employee.salary >= minSalaryInput && employee.salary <= maxSalaryInput;
    return statusMatch && departmentMatches && salryMatch;
  });
  return filterdEmployee;
}

let sortBtn = "all";
let sortinByName = document.querySelector("#sortBtn");
sortinByName.addEventListener("change", (event) => {
  sortBtn = event.target.value;
  sortUpdate();
});
function applySort(employees) {
  const defaultsort = [...employees];
  let sorted = [...employees];
  if (sortBtn === "nameA-Z") {
    return sorted.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBtn === "nameZ-A") {
    return sorted.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBtn === "salaryMin") {
    return sorted.sort((a, b) => a.salary - b.salary);
  } else if (sortBtn === "salaryMax") {
    return sorted.sort((a, b) => b.salary - a.salary);
  } else if (sortBtn === "experienceMin") {
    return sorted.sort((a, b) => a.experience - b.experience);
  } else if (sortBtn === "experienceMax") {
    return sorted.sort((a, b) => b.experience - a.experience);
  } else {
    return defaultsort;
  }
}

function sortUpdate() {
  let result = applySort(employees);
  return (showEmployee.innerHTML = renderEmployees(result));
}
// redner the list of employees after searching and using filter
function updateDisplay() {
  let result = appllySearch(employees);
  result = applyFilters(result);
  return (showEmployee.innerHTML = renderEmployees(result));
}
