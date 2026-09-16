import { useMemo } from "react";
import { useState } from "react";

export const Exercise2 = () => {
  const [search, setSearch] = useState("");
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1800,
      category: "Accessories",
    },
    {
      id: 5,
      name: "Mouse",
      price: 900,
      category: "Accessories",
    },
    {
      id: 6,
      name: "Monitor",
      price: 12000,
      category: "Electronics",
    },
    {
      id: 7,
      name: "Smartwatch",
      price: 5000,
      category: "Wearables",
    },
    {
      id: 8,
      name: "Tablet",
      price: 18000,
      category: "Electronics",
    },
    {
      id: 9,
      name: "USB Cable",
      price: 500,
      category: "Accessories",
    },
    {
      id: 10,
      name: "Power Bank",
      price: 1500,
      category: "Accessories",
    },
  ];
  const filteredProduct = useMemo(() => {
    return products.find((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);
  return (
    <>
      <span>Search Product</span>
      <br />
      <input
        type="text"
        value={search}
        placeholder="Enter the name of the product.."
        onChange={(e) => setSearch(e.target.value)}
      />
      {search === "" ? (
        <p>Start searching...</p>
      ) : filteredProduct ? (
        <div>
          <p>Name: {filteredProduct.name}</p>
          <p>Price: ₹{filteredProduct.price}</p>
          <p>Category: {filteredProduct.category}</p>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </>
  );
};
