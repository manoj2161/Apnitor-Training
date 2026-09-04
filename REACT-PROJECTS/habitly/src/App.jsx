import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { HabitsPage } from "./components/HabitsPage";
import { CalendarPage } from "./components/CalenderPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/myhabits" element={<HabitsPage />}></Route>
        <Route path="/calender" element={<CalendarPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
