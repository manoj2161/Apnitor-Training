import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { ForgotPassword } from "./components/ForgotPassword";
import { Dashboard } from "./components/Dashboard";
import { SearchResult } from "./components/SearchResult";
import { SavedRecipies } from "./components/SavedRecipies";
import { ProtectedRoute } from "../../habitly/src/components/ProtectedRoute";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("recipiBoxCurrentUser"));
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/signup"
          element={<Signup />}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Route
          path="/login"
          element={<Login />}
          setIsLoggedIn={setIsLoggedIn}
        />
        <Route
          path="/forgot"
          element={<ForgotPassword setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search"
          element={<SearchResult setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/myrecipies"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SavedRecipies />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
