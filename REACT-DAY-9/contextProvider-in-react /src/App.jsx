import { Header } from "./components/Header";
import { ContextProvider } from "./components/ContextProvider";

const App = () => {
  return (
    <>
      <ContextProvider>
        <h1>Header</h1>
        <Header></Header>
      </ContextProvider>
    </>
  );
};

export default App;
