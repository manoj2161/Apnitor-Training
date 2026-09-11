type Employee = {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: number;
  gender: string;
};

let employees: Employee[] = [];
function addEmployee(
  id: string,
  name: string,
  age: number,
  email: string,
  phone: number,
  gender: string,
): void {
  const result = employees.push({
    id: id,
    name: name,
    age: age,
    email: email,
    phone: phone,
    gender: gender,
  });
  console.log(employees);
}

addEmployee("3", "Manoj", 22, "manoj@gmail.com", 456, "Male");
addEmployee("4", "Manoj", 22, "manoj@gmail.com", 456, "Male");

function findEmoloyee(id: string): void {
  let employee = employees.find((employee) => {
    employee.id === id;
  });
  
}
