import { Login } from "./components/Login";
import { ThemeContext } from "./components/ThemeContext";
import { AuthContext } from "./components/AuthContext";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [islogin, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <AuthContext.Provider value={{ name, setName, islogin, setIsLoggedIn }}>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
