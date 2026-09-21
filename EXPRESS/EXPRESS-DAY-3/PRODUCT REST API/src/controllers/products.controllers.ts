import type { Request, Response } from "express";
import {
  getProducts,
  productById,
  createNewProduct,
  deleteProductById,
} from "../services/product.services.js";
export const getAllProducts = (req: Request, res: Response) => {
  const products = getProducts();
  const category = req.query.category;
  const search = req.query.search;
  const sort = req.query.sort;
  const order = req.query.order;
  const limitQuery = req.query.limit;
  const pageQuery = req.query.page;
  let result = products;
  if (category) {
    result = result.filter((product) => product.category === category);
  }
  if (search) {
    result = result.filter((product) =>
      product.name.toLowerCase().includes(search.toString().toLowerCase()),
    );
  }
  if (sort === "price") {
    if (order === "desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else {
      result = [...result].sort((a, b) => a.price - b.price);
    }
  }
  if (pageQuery !== undefined && limitQuery !== undefined) {
    const page = Number(pageQuery);
    const limit = Number(limitQuery);
    const skip: number = (page - 1) * limit;
    result = result.slice(skip, skip + limit);
  }
  return res.status(200).json({
    success: true,
    data: result,
  });
};

export const getProductById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const existsProduct = productById(id);
  if (existsProduct) {
    return res.status(200).json({
      success: true,
      data: existsProduct,
    });
  }
  return res.status(404).json({
    success: false,
    message: "Product not found",
  });
};

export const createProduct = (req: Request, res: Response) => {
  const data = req.body;
  if (typeof data.name !== "string" || data.name.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Invalid product data",
    });
  }

  if (typeof data.category !== "string" || data.category.trim() === "") {
    return res.status(400).json({
      success: false,
      message: "Invalid product data",
    });
  }
  if (typeof data.price !== "number" || data.price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid product data",
    });
  }
  const newProduct = createNewProduct(data);
  if (!newProduct) {
    return res.status(409).json({
      success: false,
      message: "Product already exists",
    });
  } else {
    return res.status(201).json({
      success: true,
      data: newProduct,
    });
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const filteredProducts = deleteProductById(id);
  if (filteredProducts) {
    return res.status(200).json({
      success: true,
      data: filteredProducts,
    });
  }
  return res.status(404).json({
    success: false,
    message: "No product found",
  });
};
