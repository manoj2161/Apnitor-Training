import dns from "node:dns";
import profileRoutes from "./routes/profile.routes.js";
import router from "./routes/user.routes.js";
import savedRecipeRoutes from "./routes/savedRecipe.routes.js";
import recipeRoutes from "./routes/recipe.routes.js";
import express from "express";
import { connectDB } from "./config/db.js";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express();
app.use(express.json());
connectDB();
app.use(router);
app.use(profileRoutes);
app.use(savedRecipeRoutes);
app.use(recipeRoutes);
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
