import type { Request, Response } from "express";
import { SavedRecipe } from "../models/savedRecipe.model.js";
import { Recipe } from "../models/recipe.model.js";

export const saveRecipe = async (req: Request, res: Response) => {
  try {
    const userId = req.user;
    const { recipeId } = req.params;
    if (!recipeId || Array.isArray(recipeId)) {
      return res.status(400).json({
        message: "Invalid recipe ID",
      });
    }
    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    const existingSavedRecipe = await SavedRecipe.findOne({
      userId,
      recipeId,
    });

    if (existingSavedRecipe) {
      return res.status(409).json({
        message: "Recipe already saved",
      });
    }

    const savedRecipe = await SavedRecipe.create({
      userId,
      recipeId,
    });

    return res.status(201).json({
      message: "Recipe saved successfully",
      savedRecipe,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to save recipe",
    });
  }
};
