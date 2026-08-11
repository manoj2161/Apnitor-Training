// Q1: Given:
// const numbers = [1, 2, 3, 4, 5];
// Return:
// [2, 4, 6, 8, 10]

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map(number=>number*2));

// Q2: Given:
// const users = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
// ];
// Return only the user names.

// const users = [
//   { name: "John", age: 25 },
//   { name: "Alice", age: 30 },
// ];

// console.log(users.map(user=>user.name));

// Q3: Return employees whose salary is greater than ₹50,000. 
// const employees = 
//  [ { name: "Rahul", salary: 45000 }, 
//     { name: "Priya", salary: 65000 }, 
//     {name: "Aman", salary: 55000 },
//  ]; 
// console.log(employees.filter(employee=>employee.salary>50000));

// Q4: Find the average salary of all employees. 
// const employees =
//  [ { name: "Rahul", salary: 40000 },
//      { name: "Priya", salary: 60000 },
//       { name: "Aman", salary: 50000 }, 
//     ]; 
// console.log(employees.reduce((acc,curr)=>
//     acc+curr.salary/employees.length
//     ,0));


// // Q5: Find the first student whose marks are greater than 90.
// const students =
//  [ { name: "Rahul", marks: 75 }, 
//     { name: "Priya", marks: 92 }, 
//     { name: "Aman", marks: 95 }, 
// ];

// console.log(students.find(student=>student.marks>90));

// // Q6: Sort employees by salary, highest first. 
// const employees =
//  [ { name: "Rahul", salary: 45000 }, 
//     { name: "Priya", salary: 75000 }, 
//     { name: "Aman", salary: 60000 },
//  ]; 
// console.log(employees.sort((a,b)=>b.salary-a.salary));


// Q7: Create a new array containing elements from index 2 to index 5. 
// const numbers = [10, 20, 30, 40, 50, 60, 70]; 
// const newArray = numbers.slice(2,6);
// console.log(newArray);

// // Q8: Replace the employee at index 1. 
// const employees = [ "Rahul", "Priya", "Aman", ]; 
// const updatedEmployees = [...employees];
// updatedEmployees[1]="Manoj";
// console.log(updatedEmployees);

// Q9: Each employee has multiple skills. Return all skills in one array. 
// const employees = 
// [ 
//     { name: "Rahul", skills: ["JavaScript", "React"], },
//      { name: "Priya", skills: ["HTML", "CSS"], },
//       { name: "Aman", skills: ["Node.js", "MongoDB"], },
//      ]; 
// const allSkills = employees.map(employee=>employee.skills).flat(1);
// console.log(allSkills);


// Q10: You are given the following employee data: 
const departments = [ 
[ 
{ id: 1, name: "Rahul", department: "IT", salary: 60000, isActive: true }, 
{ id: 2, name: "Priya", department: "HR", salary: 45000, isActive: false },
], 
[ 
{ id: 3, name: "Aman", department: "IT", salary: 85000, isActive: true }, 
{ id: 4, name: "Neha", department: "Sales", salary: 55000, isActive: true }, 
],
[ 
{ id: 5, name: "Rohit", department: "IT", salary: 90000, isActive: true }, 
{ id: 6, name: "Simran", department: "HR", salary: 70000, isActive: true },
 ],
]; 

const allEmployees = departments.flat(1);
console.log(allEmployees);
const updatedEmployees = allEmployees.splice(1,1)
console.log(allEmployees);

const newEmployee = allEmployees.splice(1,1,{
  id: 7,
  name: "Karan",
  department: "IT",
  salary: 75000,
  isActive: true}
);
console.log(allEmployees);

const activeEmployees = allEmployees.filter(employee=>employee.isActive);

console.log(activeEmployees);

const greater50k = allEmployees.filter(employee=>employee.salary>50000);

console.log(greater50k);



const sorting = allEmployees.sort((a,b)=>b.salary-a.salary);
console.log(sorting);


const highestPaid = allEmployees.

sort((a,b)=>b.salary-a.salary)

.slice(0,3).

map(employee=>`${employee.name}-${employee.department}-${employee.salary}`);

console.log(highestPaid);

const teamIT= highestPaid.some(employee=>employee.includes('IT'));
console.log(teamIT)

highestPaid.forEach(employee=>console.log(employee));

const highestPaidTotal = allEmployees.
sort((a,b)=>b.salary-a.salary)
.slice(0,3).reduce((acc,curr)=>acc+curr.salary,0);
console.log(highestPaidTotal);
