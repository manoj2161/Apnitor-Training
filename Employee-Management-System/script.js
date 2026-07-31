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
            <button class="delete">Delete</button><button class="edit">Edit</button>
            </div>
            `;
    })
    .join("");
    // return employeeHtml structure whenever needed
  return employeeHTML;
}

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
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const salary = document.querySelector("#salary").value;
  const department = document.querySelector('input[name="department"]:checked',).value;
  const experience = document.querySelector("#experience").value;

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
    employees = [...employees, newEmployee];
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

  // Render the employees after updatation
  showEmployee.innerHTML = renderEmployees(employees);
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
      return (showEmployee.innerHTML = renderEmployees(employees));
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
          `input[name="department"][value="${editingId.department.toLowerCase()}"]`,
        );
        deptRadio.checked = true;
      }
    }
  }
});
