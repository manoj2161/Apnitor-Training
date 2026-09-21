import express from "express";
import { createError } from "./utils/AppError.js";
import type { NextFunction, Request, Response } from "express";
import { PORT, APP_NAME } from "./config/env.config.js";
import { productRouter } from "./routes/product.routes.js";
const app = express();
app.use(express.json());
app.use("/products", productRouter);
app.get("/error", (req, res, next) => {
  next(createError("Something went wrong", 400));
});
app.use((req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(err.message);

  const statusCode = (err as Error & { statusCode?: number }).statusCode ?? 500;

  return res.status(statusCode).json({
    success: false,
    message: err.message,
  });
};
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`${APP_NAME} is running at port ${PORT}`);
});
