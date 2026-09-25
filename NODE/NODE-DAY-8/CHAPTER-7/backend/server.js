import express from "express";
import dns from "node:dns";
import cors from "cors";
import "dotenv/config";
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from "./src/Controllers/product.controller.js";
import { mongoDb } from "./src/Utils/db.js";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT;
mongoDb();
app.get("/", getProducts);
app.post("/", createProduct);

app.delete("/:id", deleteProduct);

app.put("/:id", updateProduct);
app.listen(port, () => {
  console.log("Server is running at port", port);
});
