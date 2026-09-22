import type { Request, Response } from "express";
import { Recipe } from "../models/recipe.model.js";

export const createRecipe = async (req: Request, res: Response) => {
  try {
    const { name, category, country, image, instructions, ingredients } =
      req.body;

    const recipe = await Recipe.create({
      name,
      category,
      country,
      image,
      instructions,
      ingredients,
    });

    return res.status(201).json(recipe);
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to create recipe",
    });
  }
};
