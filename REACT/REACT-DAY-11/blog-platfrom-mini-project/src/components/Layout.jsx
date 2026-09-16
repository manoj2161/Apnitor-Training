import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";
export const Layout = () => {
  return (
    <>
      <div className="navbar">
        <NavLink className="nav" to="/">
          Home
        </NavLink>
        <NavLink className="nav" to="/blogs">
          Blogs
        </NavLink>
        <NavLink className="nav" to="/login">
          Login
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
