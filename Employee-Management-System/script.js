
let employees = [
    {
        id:1,
        name:"Manoj",
        email:"manoj@gmail.com",
        department:"IT",
        salary:50000,
        experience:2,
        status:"Active"
    },
    {
        id:2,
        name:"Rahul",
        email:"rahul@gmail.com",
        department:"HR",
        salary:30000,
        experience:1,
        status:"Inactive"
    },
    {
        id:3,
        name:"Rahul kumar",
        email:"rahul23@gmail.com",
        department:"HR",
        salary:35000,
        experience:1,
        status:"Inactive"
    }
];


function createEmployee(
    name,
    email,
    department,
    salary,
    experience,
    employees){
        const highestId = employees.reduce((acc,curr)=>{
            if(acc>curr.id){
                return acc;
            }
            else{
                return curr.id;
            }
        },0)
        const nextId = highestId+1;
        const newEmployee = {
            id:nextId,
            name,
            email,
            department,
            salary,
            experience,
            status:"Active"
        };
        return newEmployee;
    }

    
    function renderEmployees(employees){
        const employeeHTML = employees.map(employee=>{
            return `<div class="employee">
            <p>ID : ${employee.id}</p>
            <p>NAME : ${employee.name}</p>
            <p>EMAIL : ${employee.email}</p>
            <p>DEPARTMENT : ${employee.department}</p>
            <p>SALARY : ${employee.salary}</p>
            <p>EXPERIENCE : ${employee.experience}</p>
            <p>STATUS : ${employee.status}</p>
            <br>
            <button>Delete</button><button>Edit</button>
            </div>
            `
        }).join("");
        return employeeHTML;
    };
    
    const myForm = document.querySelector("#myForm");
    const showEmployee = document.querySelector("#employeeList");
    
    myForm.addEventListener("submit",(event)=>{
        showEmployee.innerHTML=renderEmployees(employees);
        event.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const salary = document.querySelector("#salary").value;
        const department = document.querySelector('input[name="department"]:checked').value;
        const experience = document.querySelector("#experience").value;
        if(!name){
            return console.log("Name should not be empty");
        }
        if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)){
            return console.log("Email is not valid");
        }
        if(!salary){
            return console.log("Salary should not be empty");
        }
        if(!department && department==null){
            return console.log("Department should not be empty");
        }
        if(!experience){
            return console.log("Experience should not be empty");
        }
        const newEmployee = createEmployee(name,email,department,salary,experience,employees);
        employees = [...employees,newEmployee];
        showEmployee.innerHTML=renderEmployees(employees);
        
    });       