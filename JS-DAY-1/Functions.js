// The secure Bank Account
function createdBankAccount(ammount,credit,debit){
let options = 
    {
        deposit : ammount+=credit,
        withdraw :debit,
        getBalance : ammount-=debit,
}
console.log("Deposit:",options.deposit)
console.log("Withdraw:",options.withdraw)
console.log("Balance:",options.getBalance)
}
console.log(createdBankAccount(100,50,20));

