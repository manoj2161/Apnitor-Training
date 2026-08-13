// // 1
// const car = {
//   brand: "BMW",
//   showBrand: function show() {
//     console.log(this.brand);
//   },
// };
// // car.showBrand();
// const detail = car.showBrand;
// detail()

// 2
// const user = {
//   name: "Manoj",
//   greet:function (){
//     console.log(this.name);
//   },
// };
// user.greet()

// // 3
// const user = {
//   name: "Manoj",
//   greet: function () {
//     const inner = ()=>{
//         console.log(this.name);
//     };
//     inner()
//   },
// };
// user.greet();

// 4

// const user2 = {
//   name: "Mnaoj",
//   greet: function () {
//     const inner = () => {
//       console.log(this.name);
//     };
//     inner();
//   },
// };
// user2.greet();

// // 5
// const counter = {
//   count: 0,
//   start: function(){
//     const intervalId = setInterval(() =>{
//     console.log(this.count++);
//   }, 1000);
//   setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Stopped!");
//   }, 5000);
// },
// };
// counter.start();

// 6

// const button = {
//     label : "Active",
//     handleClickNormal : function(){
//         console.log(this.label);
//     },
//     handleClickArrow :()=>{
//             console.log(this.label);
//     },
// };
// button.handleClickNormal();
// button.handleClickArrow();


// 7

// const obj = {
//     outer : function (){
//         const inner = ()=>{
//             console.log(this);
//         }
//         return inner;
//     }
// };
// obj.outer()();

// 8

const wallet = {
  balance: 100,
  addMoney: function(ammount) {
    setTimeout(() => {
      this.balance += ammount;
      console.log(this.balance);
    }, 1000);
  },
};
wallet.addMoney(50);