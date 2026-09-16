import VendingScreen from "./components/VendingScreen"
function App() {
  return (
    <>
   <VendingScreen
        machineStatus="offline"
        stock={5}
        selectedItem="Pacman"
        coinInserted={5}
        itemPrice={2}
      />
      <VendingScreen
        machineStatus="online"
        stock={0}
        selectedItem="Pacman"
        coinInserted={5}
        itemPrice={2}
      />
      <VendingScreen
        machineStatus="online"
        stock={5}
        selectedItem={null}
        coinInserted={0}
        itemPrice={2}
      />
      <VendingScreen
        machineStatus="online"
        stock={5}
        selectedItem="Pacman"
        coinInserted={1}
        itemPrice={3}
      />

      <VendingScreen
        machineStatus="online"
        stock={5}
        selectedItem="Pacman"
        coinInserted={3}
        itemPrice={3}/>
    </>
  )
}

export default App
