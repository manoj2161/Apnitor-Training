// Write a function createCounter() that returns an object with increment(), decrement(), and getCount() methods. The count should be private — not accessible directly from outside.

function createCounter() {
  let count = 0;
  const methods = {
    increment: function increment() {
      count++;
      return count;
    },
    decrement: function decrement() {
      count--;
      return count;
    },
    getCount: function counter() {
      return count;
    },
  };
  return methods;
}
const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount());
