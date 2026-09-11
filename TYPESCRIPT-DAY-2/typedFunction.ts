// function in typescript
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }
// console.log(addNumbers(1, 2));

// optional and default parameters
// function calculatePrice(price: number, discount?: number): number {
//   if (discount !== undefined) {
//     return price - (price * discount) / 100;
//   } else {
//     return price;
//   }
// }
// console.log(calculatePrice(1000, 20));
// console.log(calculatePrice(1000));

// // default parameter
// function greetUser(name: string, greeting: string = "Hello"): string {
//   return `${greeting},${name}`;
// }
// console.log(greetUser("Manu"));

// // Object as a function parameter

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// function printUser(name: string, age: number, email: string): User {
//   return {
//     name :name,
//     age:age,
//     email:email,
//   };
// }

// const user1 = printUser("Manu",23,"manu@gmail.com" );
// console.log(user1);

// // UNION types |

// function printId(id: number | string) {
//   return id;
// }

// console.log(printId(2));
// console.log(printId("ab12"));

// UNION types + type Narrowing

// function formatId(id: number | string): string {
//   if (typeof id === "number") {
//     return `Numeric ID : ${id}`;
//   } else {
//     return `String ID : ${id}`;
//   }
// }

// console.log(formatId(1));

// console.log(formatId("EMP1"));

// UNION types with objects

// type SuccessResponse = {
//   status: "success";
//   data: string;
// };
// type ErrorResponse = {
//   status: "error";
//   message: string;
// };

// type ApiResponse = SuccessResponse | ErrorResponse;

// function handleResponse(response: ApiResponse) {
//   if (response.status === "success") {
//     return response.data;
//   } else {
//     return response.message;
//   }
// }

// console.log(handleResponse({ status: "success", data: "Manoj" }));
// console.log(handleResponse({ status: "error", message: "Failed to get data" }));

// // any vs unknown

// let value: any = "Manu";
// let value1: unknown = "Manu";
// console.log();
// console.log(value.toUpperCase());
// console.log(typeof value1);
// if (typeof value1 === "string") {
//   console.log(value1.toUpperCase());
// }

// // type assertions as
// let username: unknown = "Manu";
// console.log((username as string).toUpperCase());

// Literal types

// type Direction = "left" | "right" | "up" | "down";

// function move(direction: Direction): string {
//   return direction;
// }
// console.log(move("left"));

// const product: [string, number, boolean] = ["Mouse", 999, true];
// console.log(product[0]);
// console.log(product[1]);
// console.log(product[2]);
