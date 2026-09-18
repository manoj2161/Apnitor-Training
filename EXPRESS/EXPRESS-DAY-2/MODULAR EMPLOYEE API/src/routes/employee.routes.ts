import express from "express";
import {
  getEmployees,
  employeeById,
  createdEmployee,
  deletedEmployees,
} from "../controllers/employees.controller.js";
export const employeeRouter = express.Router();
employeeRouter.get("/", getEmployees);
employeeRouter.get("/:id", employeeById);
employeeRouter.post("/", createdEmployee);
employeeRouter.delete("/:id", deletedEmployees);
