// import { useState } from "react";
import { useState } from "react";
import { CartContext } from "./components/Exercise4/CartContext";
import { ProductPage } from "./components/ProductPage";

function App() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [visible, setVisible] = useState(false);
  let products = [
    {
      id: 1,
      name: "Iphone 18",
      price: 499,
      img: "https://s3ng.cashify.in/cashify/store/product/069582108a4e4538a21358aee57042e7.jpg?w=400&dpr=1.0",
    },
    {
      id: 2,
      name: "Iphone 17",
      price: 399,
      img: "https://s3ng.cashify.in/cashify/store/product//8f27f54444154857b83b0e203c31426e-box.jpg?w=400&dpr=1.0",
    },
    {
      id: 3,
      name: "Iphone 16",
      price: 299,
      img: "https://s3ng.cashify.in/cashify/store/product/29be8748193046e5b02ac58a340511c1.jpeg?w=400&dpr=1.0",
    },
    {
      id: 4,
      name: "Iphone 15",
      price: 199,
      img: "https://s3ng.cashify.in/cashify/store/product//c18df15ff3554c769a4567624aa952a1-box.jpg?w=400&dpr=1.0",
    },
    {
      id: 5,
      name: "Iphone 14",
      price: 99,
      img: "https://s3ng.cashify.in/cashify/store/product//20cf3aba9edd4100977f8d80a4c5ffd3-box.jpg?w=400&dpr=1.0",
    },
  ];
  function addItem(id) {
    const product = products.find((item) => item.id === id);

    if (!product) {
      return;
    }

    setItems((previousItems) => {
      const existingProduct = previousItems.find((item) => item.id === id);

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === id ? { ...item, units: item.units + 1 } : item,
        );
      }

      return [
        ...previousItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          units: 1,
        },
      ];
    });

    setQuantity((previousQuantity) => previousQuantity + 1);
  }
  function removeItem(id) {
    setItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === id ? { ...item, units: item.units - 1 } : item,
        )
        .filter((item) => item.units > 0),
    );

    setQuantity((previousQuantity) => previousQuantity - 1);
  }

  return (
    <>
      <CartContext.Provider
        value={{
          quantity,
          setQuantity,
          products,
          addItem,
          items,
          removeItem,
          visible,
          setVisible,
        }}
      >
        <ProductPage products={products} />
      </CartContext.Provider>
    </>
  );
}

export default App;
