
const employees = [
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
    const newEmployee = createEmployee("Karan","karan@gmail.com","IT",20000,0,employees);
    const updatedEmployees = [...employees,newEmployee]
    
    
    function renderEmployees(employees){
        const employeeHTML = employees.map(employee=>{
            return `<div class="employee">
            <p>ID : ${employee.id}</p>
            <p>NAME : ${employee.name}</p>
            <p>EMAIL : ${employee.email}</p>
            <p>DEPARTMENT : ${employee.department}</p>
            <p>SALARY : ${employee.salary}</p>
            <p>EXPERIENCE : ${employee.experience}</p>
            <p>STATuS : ${employee.status}</p>
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
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const salary = document.querySelector("#salary").value;
    const department = document.querySelector('input[name="department"]:checked').value;
    const experience = document.querySelector("#experience").value;
    console.log(name);
    console.log(email);
    console.log(salary);
    console.log(experience);
    console.log(department);
});    
    
showEmployee.innerHTML=renderEmployees(updatedEmployees);