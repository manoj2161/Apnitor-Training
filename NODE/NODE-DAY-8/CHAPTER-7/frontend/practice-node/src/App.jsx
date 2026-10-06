import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./components/signup";
import { Products } from "./components/Products";

function App() {
  return (
    <>
      <nav>
        <Link to="/signup">Signup</Link>{" | "}
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  ); 
}

export default App;
