import { Product } from "../Models/productSchema.js";
export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json({
    message: "Request accepted",
    data: products,
  });
};
export const createProduct = async (req, res) => {
  const { name, price } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      message: "Name is required",
    });
  }

  if (price === undefined || price === null || price === "") {
    return res.status(400).json({
      message: "Price is required",
    });
  }

  if (Number(price) <= 0) {
    return res.status(400).json({
      message: "Price must be greater than 0",
    });
  }
  try {
    const product = await Product.create({
      name: name.trim(),
      price: Number(price),
    });

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
    res.json({ message: "Product updated Successfully", data: updatedProduct });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
