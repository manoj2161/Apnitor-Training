import mongoose from "mongoose";
import "dotenv/config";
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("MogngoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
    process.exit(1);
  }
};
