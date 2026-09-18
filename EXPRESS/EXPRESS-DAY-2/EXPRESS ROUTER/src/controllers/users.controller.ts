import type { Request, Response } from "express";
import {
  getAllUsers,
  createNewUser,
  deleteUserById,
} from "../services/user.service.js";
export const getUsers = (req: Request, res: Response) => {
  const users = getAllUsers();
  res.status(200).json(users);
};
export const getUserbyId = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  res.status(200).json({
    message: `User :${id}`,
  });
};

export const createUser = (req: Request, res: Response) => {
  const data = req.body;
  const users = createNewUser(data);
  res.status(201).json(users);
};

export const deleteUser = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const users = deleteUserById(id);
  if (!users) {
    return res.status(404).send("No user found");
  }

  res.status(200).json(users);
};
