// 1. Map method
// Exercise 1
// const nums = [1,2,3,4,5];
// const doubleNums = nums.map(num=>num*2);
// console.log(doubleNums);


// // Exercise 2 
// const users = [
//   {name:"Manoj", age:22},
//   {name:"Rahul", age:25},
//   {name:"Amit", age:21}
// ];
// const names = users.map(user=>user.name);
// console.log(names);


// 2. Filter
// Exercise 3
// const nums=[10,15,20,25,30];
// const evenNums = nums.filter(num=>num%2==0);
// console.log(evenNums);

// Exercise 4
// const users=[
// {name:"A",active:true},
// {name:"B",active:false},
// {name:"C",active:true}
// ];

// const activeUsers = users.filter(user=>user.active===true);
// console.log(activeUsers);

// // 3. Reduce method
// // Exercise 1
// const nums=[10,20,30,40];
// const sum= nums.reduce((acc,curr)=>acc+curr,0);
// console.log(sum);

// // Exercise 2
// const nums=[11,45,8,90,23];
// const largeNum = nums.reduce((acc,curr)=>{
//     if(acc>curr){
// return acc;
//     }
//     else{
//         return curr;
//     }
// });
// console.log(largeNum);


// 4. find 
// Exercise 1 
// const users=[
// {id:1,name:"A"},
// {id:2,name:"B"},
// {id:3,name:"C"}
// ];
// console.log(users.find(user=>user.id==2));


// 5. findIndex
// Exercise 2
// const fruits=["apple","banana","orange","mango"];
// console.log(fruits.findIndex(fruit=>fruit=="orange"));

// 6. some
//  Exercise 1
// const nums =[2,4,6,8,11];
// console.log(nums.some(num=>num%2!=0));

// 7. Every 
// const nums = [2,4,6,8];
// console.log(nums.every(num=>num%2==0));

// 8.sort
// const nums=[50,10,70,20];
// console.log(nums.sort((a,b)=>a-b));
// console.log(nums.sort((a,b)=>b-a));

// Exercise 3
// const users=[
// {name:"A",age:25},
// {name:"B",age:20},
// {name:"C",age:30}
// ];

// console.log(users.sort((a,b)=>a.age-b.age));


// 9. Slice
// Exercise 1
// const nums=[1,2,3,4,5,6];

// const newNums = nums.slice(2,5);
// console.log(newNums);

// Exercise 2
// const nums = [1,2,3,4,5];
// const newNums = nums.splice();
// console.log(newNums);

// // 10. flat
// const arr=[1,2,[3,4],[5,[6,7]]];
// console.log(arr.flat(1));
// console.log(arr.flat(2))

// // 11. flatmap
// const words=["hello world","good morning"];
// console.log(words.flatMap(word=>word.split(" ")));


// // 13. includes
// const fruits=["apple","banana","mango"];
// console.log(fruits.includes("banana"));

// // 14 for each
// const nums = [10,20,30]
// console.log(nums.forEach((num,index)=> {
// console.log(index,num)
//     }
// ));
