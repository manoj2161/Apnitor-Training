import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { AddHabit } from "./components/AddHabit";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/addhabit" element={<AddHabit />}></Route>
      </Routes>
    </>
  );
}

export default App;
