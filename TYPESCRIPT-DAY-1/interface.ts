// interface User {
//   name: string;
//   age: number;
//   id: number;
//   address: {
//     city: string;
//     state: string;
//     pincode: number;
//   };
//   skills: string[];
// }

// const user1: User = {
//   id: 1,
//   name: "Manu",
//   age: 23,
//   address: {
//     city: "Bilaspur",
//     state: "HP",
//     pincode: 174030,
//   },
//   skills: ["HTML", "CSS"],
// };

// console.log(user1);

// // interface Extends
// interface User {
//   name: string;
//   age: number;
//   id: number;
//   email: string;
//   skills?: string[];
// }

// interface Admin extends User {
//   role: string;
//   permission: string[];
//   address: {
//     city: string;
//     state: string;
//     pincode: number;
//   };
// }
// const user1: User = {
//   id: 1,
//   name: "Manu",
//   age: 23,
//   address: {
//     city: "Bilaspur",
//     state: "HP",
//     pincode: 174030,
//   },
//   skills: ["HTML", "CSS"],
// };

// const admin1: Admin = {
//   id: 1,
//   name: "Manoj",
//   role: "Admin",
//   age: 23,
//   email: "thakurmanu065@gmail.com",
//   address: {
//     city: "BLP",
//     state: "HP",
//     pincode: 174030,
//   },
//   permission: ["ADD", "DELETE", "UPDATE"],
// };
// console.log(admin1);

// // type insertion with &
// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category: string;
//   tags: string[];
// };

// type DigitalProduct = Product & {
//   downloadUrl: string;
// };

// const digitalProduct1: DigitalProduct = {
//     id: 1,
//     name: "Mouse",
//     price: 230,
//     category: "Electronics",
//     tags: ["Gaming", "Mouse"],
//   downloadUrl: "https://www.google.com",
// };
// console.log(digitalProduct1);
// 2

// // exercise 1
// type Person = {
//   name: string;
//   age: number;
//   email: string;
// };
// type Employee = Person & {
//   employeeId: number;
//   department: string;
// };

// const e1: Employee = {
//   name: "Manu",
//   age: 23,
//   email: "manu@gmail.com",
//   employeeId: 101,
//   department: "IT",
// };

// console.log(e1);

// exercise 2
type User = {
  readonly id: number;
  name: string;
  email: string;
  phone?: number;
};

type Customer = User & {
  membership: string;
  orders: number;
};

const c1: Customer = {
  id: 1,
  name: "Manu",
  email: "thakurmanu065@gmail.com",
  membership: "Pro",
  orders: 8,
};

console.log(c1);
