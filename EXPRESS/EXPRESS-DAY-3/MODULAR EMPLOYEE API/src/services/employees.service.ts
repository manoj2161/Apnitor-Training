import type { Employee } from "../models/employee.model.js";
export let employees: Employee[] = [
  { id: 1, name: "Manu", role: "Developer" },
  { id: 2, name: "Karan", role: "Designer" },
];

let generatedId: number = 0;
for (const employee of employees) {
  if (employee.id > generatedId) {
    generatedId = employee.id;
  }
}
export const getAllEmployees = () => {
  return employees;
};
export const getEmployeeById = (id: number) => {
  const existsEmployee = employees.find((employee) => employee.id === id);
  if (existsEmployee) {
    return existsEmployee;
  } else {
    return null;
  }
};
export const createEmployee = (data: Omit<Employee, "id">) => {
  const newEmployee: Employee = {
    id: generatedId + 1,
    name: data.name,
    role: data.role,
  };
  employees.push(newEmployee);
  generatedId++;
  return employees;
};

export const deleteEmployee = (id: number) => {
  const existsEmployee = employees.find((employee) => employee.id === id);
  if (existsEmployee) {
    return (employees = employees.filter((employee) => employee.id !== id));
  } else {
    return null;
  }
};
