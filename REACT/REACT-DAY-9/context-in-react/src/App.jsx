import { Header } from "./components/Header";
import { UserContext } from "./components/UserContext";
function App() {
  const user = {
    name: "MANU",
    role: "ADMIN",
  };
  return (
    <>
      <h1>Header</h1>
      <UserContext value={user}>
        <Header></Header>
      </UserContext>
    </>
  );
}

export default App;
