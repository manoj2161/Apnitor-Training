function VendingScreen({machineStatus,stock,selectedItem,coinInserted,itemPrice}){
    if(machineStatus==="offline"){
        return <p>STATUS : 🔌 Machine Offline</p>
    }
    if(stock===0){
        return <p>STOCK : ❌ Out of stock</p>
    }
    if(!selectedItem){
        return <p>ITEM NAME : Please select an Item</p>
    }
    if(coinInserted<itemPrice){
        return <p>INSUFFICIENT BALANCE : Insert rs{itemPrice-coinInserted} more</p>
    }
    return <p>✅ Dispensing : {selectedItem}</p>
}
export default VendingScreen
