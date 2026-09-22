import mongoose from "mongoose";
const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    ingredients: [
      {
        ingredient: {
          type: String,
          required: true,
        },
        measure: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);
export const Recipe = mongoose.model("Recipe", recipeSchema);
