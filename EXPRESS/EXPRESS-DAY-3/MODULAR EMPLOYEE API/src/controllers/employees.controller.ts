import type { Response, Request } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  deleteEmployee,
} from "../services/employees.service.js";
export const getEmployees = (req: Request, res: Response) => {
  const role = req.query.role;
  const search = req.query.search;
  const sort = req.query.sort;
  const order = req.query.order;
  const page = Number(req.query.page);
  const limit = Number(req.query.limit);
  const users = getAllEmployees();
  if (role) {
    const filteredEmployees = users.filter(
      (employee) => employee.role === role,
    );
    return res.status(200).json({
      success: true,
      data: filteredEmployees,
    });
  } else if (search) {
    const filteredEmployees = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
    return res.status(200).json({
      success: true,
      data: filteredEmployees,
    });
  } else if (sort) {
    if (order === "desc") {
      const descSortedEmployees = [...users].sort((a, b) =>
        b.name.localeCompare(a.name),
      );

      return res.status(200).json({
        success: true,
        data: descSortedEmployees,
      });
    }
    const sortedEmployees = [...users].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    return res.status(200).json({
      success: true,
      data: sortedEmployees,
    });
  } else if (page !== undefined && limit !== undefined) {
    const skip = (page - 1) * limit;
    const employees = users.slice(skip, skip + limit);
    return res.status(200).json({
      success: true,
      data: employees,
    });
  }
  return res.status(200).json({
    success: true,
    data: users,
  });
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
