// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
// };

// const product1: Product = {
//   id: 1,
//   name: "Mouse",
//   price: 230,
//   category: "electronics"
// };
// console.log(product1);

// optional property
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category?: string;
// };

// const product1: Product = {
//   id: 1,
//   name: "Mouse",
//   price: 230,
// };
// console.log(product1);

// // nested objects
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category: {
//     city: string;
//     state: string;
//     pincode: number;
//   };
// };

// const product1: Product = {
//   id: 1,
//   name: "Mouse",
//   price: 230,
//   category: {
//     city: "Bilaspur",
//     state: "HP",
//     pincode: 174030,
//   },
// };
// console.log(product1);

// nested objects + array
type Product = {
  id: number;
  name: string;
  price: number;
  address: {
    city: string;
    state: string;
    pincode: number;
  };
  skills: string[];
};

const product1: Product = {
  id: 1,
  name: "Mouse",
  price: 230,
  address: {
    city: "Bilaspur",
    state: "HP",
    pincode: 174030,
  },
  skills: ["HTML", "CSS", "JS"],
};
console.log(product1);
