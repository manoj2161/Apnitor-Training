// Write a function makeGreeter(name) that returns 
// a new function. When that returned function is 
// called, it should print "Hello, <name>!".
// function makeGreeter(name){
//     function welcome(){
//         console.log(`Hello, ${name}`)
//     };
//     return welcome;
// }
// const greetUser = makeGreeter("Manu");
// greetUser();

// Write a function makeAdder(x) that returns a function which 
// takes y and returns x + y.

// function makeAdder(x){
//     function sum(y){
//         return x+y;
//     }
//     return sum;
// };
// const addNums = makeAdder(10);
// console.log(addNums(5));

// Write a function createCounter() that returns a function. Every time 
// you call it, it should return the next number starting
//  from 1 (1, 2, 3, ...).
// function createCounter(){
//     let count = 0;
//     function number(){
//         count=count+1;
//         return count
//     }
//     return number
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());