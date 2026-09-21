import type { Product } from "../model/products.model.js";
export let products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
  },
  {
    id: 2,
    name: "Keyboard",
    category: "Electronics",
    price: 2000,
  },
  {
    id: 3,
    name: "Chair",
    category: "Furniture",
    price: 5000,
  },
  {
    id: 4,
    name: "Mouse",
    category: "Electronics",
    price: 1200,
  },
  {
    id: 5,
    name: "Monitor",
    category: "Electronics",
    price: 15000,
  },
  {
    id: 6,
    name: "Desk",
    category: "Furniture",
    price: 8000,
  },
  {
    id: 7,
    name: "Headphones",
    category: "Electronics",
    price: 3500,
  },
  {
    id: 8,
    name: "Webcam",
    category: "Electronics",
    price: 4500,
  },
  {
    id: 9,
    name: "Office Chair",
    category: "Furniture",
    price: 12000,
  },
  {
    id: 10,
    name: "USB Cable",
    category: "Accessories",
    price: 500,
  },
  {
    id: 11,
    name: "Mobile Phone",
    category: "Electronics",
    price: 25000,
  },
  {
    id: 12,
    name: "Bookshelf",
    category: "Furniture",
    price: 7000,
  },
  {
    id: 13,
    name: "Tablet",
    category: "Electronics",
    price: 18000,
  },
  {
    id: 14,
    name: "Backpack",
    category: "Accessories",
    price: 2500,
  },
  {
    id: 15,
    name: "Printer",
    category: "Electronics",
    price: 10000,
  },
  {
    id: 16,
    name: "Notebook",
    category: "Stationery",
    price: 150,
  },
  {
    id: 17,
    name: "Pen Set",
    category: "Stationery",
    price: 300,
  },
  {
    id: 18,
    name: "Desk Lamp",
    category: "Furniture",
    price: 1800,
  },
  {
    id: 19,
    name: "Power Bank",
    category: "Electronics",
    price: 2200,
  },
  {
    id: 20,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 4000,
  },
];
let highestId = 0;
for (const product of products) {
  if (product.id > highestId) {
    highestId = product.id;
  }
}
let nextId = highestId + 1;
export const getProducts = () => {
  return products;
};
export const productById = (id: number) => {
  const existsProduct = products.find((product) => product.id === id);
  return existsProduct;
};

export const createNewProduct = (data: Omit<Product, "id">) => {
  const existsProduct = products.find((product) => product.name === data.name);
  if (existsProduct) {
    return null;
  }

  const newProduct: Product = {
    id: nextId,
    name: data.name,
    category: data.category,
    price: data.price,
  };
  products.push(newProduct);
  nextId++;
  return newProduct;
};

export const deleteProductById = (id: number) => {
  const existsProduct = products.find((product) => product.id === id);
  if (existsProduct) {
    products = products.filter((product) => product.id !== id);
    return products;
  } else {
    return null;
  }
};
