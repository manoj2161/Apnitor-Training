// Exercise 1
// const products=[
// {id:1,name:"Laptop",price:50000},
// {id:2,name:"Phone",price:20000},
// {id:3,name:"Mouse",price:1000},
// {id:4,name:"Keyboard",price:1500}
// ];
// const productNames = products.map(product=>product.name);
// console.log(productNames);

// const highPrice = products.filter(product=>product.price>10000);
// console.log(highPrice);

// const totalPrice = products.map(product=>product.price).reduce((acc,curr)=>acc+curr,0);
// console.log(totalPrice);

// const findMouse = products.find(product=>product.name=="Mouse");
// console.log(findMouse);


// const sortByPrice = products.sort((a,b)=>a.price-b.price);
// console.log(sortByPrice);

// const greaterThan60k = products.some(product=>
//    product.price>60000
// );
// console.log(greaterThan60k);

// const greaterThan0 = products.every(product=>product.price>0);
// console.log(greaterThan0);






// Exercise 2

const students=[
{name:"Manoj",marks:85},
{name:"Rahul",marks:42},
{name:"Amit",marks:65},
{name:"Karan",marks:38}
];


const names = students.map(student=>student.name);
const passedStudents = students.filter(student=>student.marks>=50);
const totalMarks = students.map(student=>student.marks).reduce((acc,curr)=>acc+curr,0);
const highestMarks = students.map(student=>student.marks).reduce((acc,curr)=>{
    if(acc>curr){
        return acc
    }
    else{
        return curr
    }
});
const findRahul = students.find(student=>student.name==="Rahul");
const sort = students.sort((a,b)=>b.marks-a.marks);
console.log("Names:", names);
console.log("Passed Students:", passedStudents);
console.log("Total Marks:", totalMarks);
console.log("Highest Marks:", highestMarks);
console.log("Rahul:", findRahul);
console.log("Sorted:", sort);