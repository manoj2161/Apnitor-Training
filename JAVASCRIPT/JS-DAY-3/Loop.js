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

for (employee of employees) {
  console.log(employee.name);
}
let count = 0;
for (const element of employees) {
  if (element.status === "Active") {
   count ++;
}
}
console.log(count)

let highestSalary = employees[0]
for (const element of employees) {
    if(element.salary>highestSalary.salary){
        highestSalary=element;
    }
}
console.log(highestSalary);
const firstEmployee = employees[0];
for (const key in firstEmployee) {
    // if (!Object.hasOwn(firstEmployee, key)) continue;
    const element = firstEmployee[key];
    console.log(key,":",element); 
}
