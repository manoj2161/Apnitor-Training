import express from "express";
import "dotenv/config";
import dns from "node:dns";
import { connectdb } from "./src/db/db.js";
import userRoutes from "./src/router/userRouter.js";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express();
app.use(express.json());
const port = process.env.PORT;
connectdb(); 
app.use("/api/auth", userRoutes);
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
