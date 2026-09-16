import dns from "node:dns";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { User } from "./models/User.js";
import { Savedrecipes } from "./models/SavedRecipes.js";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
dotenv.config();
const startServer = async () => {
  await connectDB();
  //   const newUser = await User.create({
  //     fullName: "Test User3",
  //     email: "test3@example.com",
  //     password: "Manu@123",
  //     confirmPassword: "Manu@123",
  //   });
  //   const updateUser = await User.updateOne(
  //     { email: "text@example.com" },
  //     { fullName: "Manoj" },
  //   );

  //   const deleteUser = await User.deleteOne({ email: "text@example.com" });

  const user = await User.findOne({
    email: "test@example.com",
  });
  if (!user) {
    console.log("User not found");
    return;
  }

  const savedrecipe = await Savedrecipes.create({
    userId: user!._id,
    recipes: [
      {
        id: 1,
        name: "Paneer",
        category: "veg",
        img: "image",
      },
    ],
  });
  console.log(savedrecipe);
};
startServer();
