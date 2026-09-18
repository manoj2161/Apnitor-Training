import express from "express";
import userRouter from "./routes/user.routes.js";
import { PORT, APP_NAME } from "./config/env.js";
import { logger } from "./middleware/logger.middleware.js";
const app = express();
app.use(express.json());
app.use(logger);
app.use("/users", userRouter);
app.listen(PORT, () => {
  console.log(`${APP_NAME} is running at port ${PORT}`);
});
