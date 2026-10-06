import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/userControllers.js";
import { authToken } from "../middleware/authMiddleware.js";
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authToken, getUserProfile);
export default router;
