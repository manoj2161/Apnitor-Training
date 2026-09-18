import express from "express";
import { PORT, APP_NAME } from "./config/env.js";
import { logger } from "./middleware/logger.middleware.js";
import { employeeRouter } from "./routes/employee.routes.js";
const app = express();
app.use(express.json());
app.use(logger);
app.use("/employees", employeeRouter);
app.listen(PORT, () => {
  console.log(`${APP_NAME} is running on port ${PORT}`);
});
