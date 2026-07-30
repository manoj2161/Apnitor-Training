// 

// function sayHello(name){
// return new Promise((resolve,reject)=>{
//     if(name){
//         resolve("Hello!")
//     }else{
//         reject("error"
//         )
//     }
// })
// }
// sayHello("manu").then((result)=>{
//     console.log(result);
    
// }).catch((error)=>{
//     console.log(error);
// });

const message = async ()=>{
    const result = await console.log("Hello!");
    return result;
};
message();