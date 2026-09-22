import { Router } from "express";
import { createUser, getUser } from "../controllers/user.controller.js";
import { getCurrentUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/users", createUser);
router.post("/login", getUser);
router.get("/users/me", authMiddleware, getCurrentUser);
export default router;
