import mongoose from "mongoose";
import "dotenv/config";
export const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI ,{ dbName: "JWT_Practice"});
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.error(`Database connection error : ${error.message}`);
    process.exit(1);
  }
};
