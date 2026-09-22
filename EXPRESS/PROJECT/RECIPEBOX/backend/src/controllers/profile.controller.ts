import type { Request, Response } from "express";

export const getProfile = (req: Request, res: Response) => {
  return res.status(200).json({
    message: "You are authenticated",
    userId: req.user,
  });
};
