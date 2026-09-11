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

// Object as a function parameter

type User = {
  name: string;
  age: number;
  email: string;
};

function printUser(name: string, age: number, email: string): User {
  return {
    name :name,
    age:age,
    email:email,
  };
}

const user1 = printUser("Manu",23,"manu@gmail.com" );
console.log(user1);
