import mongoose from "mongoose";
import "dotenv/config";
export const mongoDb = async () =>
  await mongoose
    .connect(process.env.MONGODB_URI, { dbName: "Node_Practice" })
    .then(async () => {
      console.log("MongoDB Connected successfully...");
    })
    .catch((error) => {
      console.log(error.message);
    });
