import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
