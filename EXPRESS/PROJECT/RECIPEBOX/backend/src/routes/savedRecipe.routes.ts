import { Router } from "express";
import { saveRecipe } from "../controllers/savedRecipe.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.post("/users/me/recipes/:recipeId", authMiddleware, saveRecipe);

export default router;
