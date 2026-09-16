type Product = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  tags: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Mouse",
    price: 99,
    inStock: true,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 2,
    name: "Keyboard",
    price: 199,
    inStock: true,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 3,
    name: "PC",
    price: 499,
    inStock: true,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 4,
    name: "RAM",
    price: 299,
    inStock: false,
    tags: ["Gaming", "Electronics"],
  },
  {
    id: 5,
    name: "ROM",
    price: 399,
    inStock: false,
    tags: ["Gaming", "Electronics"],
  },
];
console.log(products);
console.log(products[0].name);
console.log(products[1].price);
