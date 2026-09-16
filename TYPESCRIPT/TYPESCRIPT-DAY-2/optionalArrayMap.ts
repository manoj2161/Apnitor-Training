type Product = {
  id: number;
  name: string;
  price: number;
  discount?: number;
  tags: string[];
};
const products: Product[] = [
  {
    id: 1,
    name: "Mouse",
    price: 99,
    discount: 10,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 2,
    name: "Keyboard",
    price: 199,
    discount: 20,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 3,
    name: "PC",
    price: 499,
    discount: 30,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 4,
    name: "RAM",
    price: 299,

    tags: ["Gaming", "Electronics"],
  },
  {
    id: 5,
    name: "ROM",
    price: 399,
    tags: ["Gaming", "Electronics"],
  },
];

products.map((product) => {
  if (product.discount !== undefined) {
    const finalPrice: number =
      product.price - (product.price * product.discount) / 100;
    console.log(
      product.name,
      "has discount of ",
      product.discount,
      "%",
      "total price",
      product.price,
      "Final Price",
      finalPrice,
    );
  } else {
    console.log(product.name, "has no discount", "total price ", product.price);
  }
});
