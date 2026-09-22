import type { Request, Response } from "express";
import { loginUser, registerUser } from "../services/users.services.js";
import { User } from "../models/user.model.js";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await registerUser(name, email, password);

    res.status(201).json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to create user",
    });
  }
};
export const getUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const result = await loginUser(email, password);

    if (result !== null) {
      return res.status(200).json({
        name: result.user.name,
        email: result.user.email,
        token: result.token,
      });
    }
    return res.status(404).json({
      message: "User not found",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to find user",
    });
  }
};
export const getCurrentUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user).select("-passwordHash");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to get user",
    });
  }
};
