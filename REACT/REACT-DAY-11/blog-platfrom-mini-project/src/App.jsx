import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Navbar/Home";
import { Blog } from "./components/Navbar/Blog";
import { Login } from "./components/Navbar/Login";
import { NoPost } from "./components/Navbar/NoPost";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Admin } from "./components/Admin";
import { Blogs } from "./components/Navbar/Blogs";
import { useState } from "react";
import './App.css'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/blogs" element={<Blogs />}>
          </Route>
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          ></Route>
          <Route
            element={
              <ProtectedRoute
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          >
            <Route path="/admin" element={<Admin />}></Route>
          </Route>
          <Route path="*" element={<NoPost />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
