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

// products
//   .filter((product) => {
//     return product.discount !== undefined;
//   })
//   .map((product) => {
//     console.log(product.name);
//   });

const foundProduct = products.find((product) => product.id === 1);

if (foundProduct) {
  console.log(foundProduct.name);
  console.log(foundProduct.price);
} else {
  console.log("Product not found");
}
