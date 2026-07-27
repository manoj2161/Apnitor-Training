// // The secure Bank Account
// function createdBankAccount(ammount){
// let options = 
//     {
//         deposit : function deposit(credit){
//             let depositAmmount = credit;
//             if(!depositAmmount<=0)
//              {let NewBalance = ammount+=credit;
//              console.log(`Deposit ammount = ${credit} Available balance = ${NewBalance}`);}
//             else{
//                 console.log(`Deposit ammount should be greater than zero`)
//             }
//             },
//             withdraw : function deposit(debit){
//              let withdrawAmmount = debit
//              if(withdrawAmmount<ammount){
//                  let NewBalance = ammount-=debit; 
//                 console.log(`Withdrwa ammount = ${debit} Available balance = ${NewBalance}`);
//             }else{
//                 console.log(`Insufficient Balance`);
//             }},
//             getbalance : function getbalance(){
//                 console.log(`Available balance ${ammount}`);
//             }
// }
// return options;
// }
// const myAccount = createdBankAccount(100);
// myAccount.deposit(100);
// myAccount.withdraw(20);
// myAccount.getbalance();

// The multi user greeting
const greetGroup = (message = "Welcome",...users)=>{
users.forEach(user => {
console.log(`${message},${user}`);
});
};
let users = ['alice','bob','rocky'];
greetGroup("hello",...users);