import type { Response, Request } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  deleteEmployee,
} from "../services/employees.service.js";
export const getEmployees = (req: Request, res: Response) => {
  const users = getAllEmployees();
  res.status(200).json(users);
};
export const employeeById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const employee = getEmployeeById(id);
  if (!employee) {
    return res.status(404).json({
      success: false,
      message: "Employee does not exist",
    });
  }
  res.status(200).json({
    success: true,
    data: employee,
  });
};

export const createdEmployee = (req: Request, res: Response) => {
  const data = req.body;
  const updatedEmployees = createEmployee(data);
  res.status(201).json(updatedEmployees);
};

export const deletedEmployees = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const employees = deleteEmployee(id);
  if (!employees) {
    return res.status(404).send("Employee does not exist");
  }
  res.status(200).json(employees);
};
