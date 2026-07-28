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
console.log(updatedEmployees);

const employeeList = document.querySelector("#employee-list");
function renderEmployees(employees){
    const employeeHTML = employees.map(employee=>{
        return `<div>
        <p>${employee.id}</p>
        <p>${employee.name}</p>
        <p>${employee.email}</p>
        <p>${employee.department}</p>
        <p>${employee.salary}</p>
        <p>${employee.experience}</p>
        <p>${employee.status}</p>
        <button>Delete</button><button>Edit</button>
        </div>
        `
    }).join("");
    return employeeHTML;
};
employeeList.innerHTML=renderEmployees(employees);