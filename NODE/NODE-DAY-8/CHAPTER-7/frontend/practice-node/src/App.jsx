import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditID] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:3000/");
      setData(response.data.data);
    };
    getProducts();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    if (!price.trim()) {
      return;
    }
    const product = {
      name,
      price: Number(price),
    };

    try {
      if (editId) {
        await axios.put(`http://localhost:3000/${editId}`, product);
      } else {
        await axios.post("http://localhost:3000/", product);
      }

      const response = await axios.get("http://localhost:3000/");

      setData(response.data.data);

      setName("");
      setPrice("");
      setEditID(null);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async (id) => {
    const product = data.find((product) => product._id === id);
    if (product) {
      try {
        await axios.delete(`http://localhost:3000/${id}`);
        const response = await axios.get("http://localhost:3000/");
        setData(response.data.data);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const editProduct = async (product) => {
    setEditID(product._id);
    setName(product.name);
    setPrice(product.price);
  };
  return (
    <>
      <div>
        <h1>Add product</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <br />
          <input
            type="submit"
            value={editId ? "Update Product" : "Add Product"}
          />
        </form>
      </div>
      <h1>Here are prducts fethed from the api</h1>
      {data !== null &&
        data.map((product) => (
          <div key={product._id}>
            <p>NAME : {product.name}</p>
            <p>PRICE : {product.price}</p>
            <button
              onClick={() => {
                deleteProduct(product._id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                editProduct(product);
              }}
            >
              Edit
            </button>
          </div>
        ))}
    </>
  );
}

export default App;
