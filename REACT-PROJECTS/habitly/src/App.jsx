import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Dashboard } from "./components/Dashboard";
import { HabitsPage } from "./components/HabitsPage";
import { CalendarPage } from "./components/CalenderPage";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { PageNotFound } from "./components/PageNotFound";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        ></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/myhabits" element={<HabitsPage />}></Route>
        <Route path="/calender" element={<CalendarPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
