// Synchronous
console.log("a");
console.log("b");
console.log("c");

// Asynchronous
console.log("d");
setTimeout(() => {
  console.log("e");
}, 2000);
console.log("f");
