import { Outlet, NavLink } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Contact
      </NavLink>
      <NavLink
        to="/products?category=mobile"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Mobiles
      </NavLink>
      <NavLink
        to="/products?category=laptop"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Laptops
      </NavLink>
      <NavLink
        to="/products?category=watches"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Watch
      </NavLink>
      <NavLink
        to="/users/1"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Users1
      </NavLink>
      <NavLink
        to="/users/2"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Users2
      </NavLink>
      <NavLink
        to="/users/3"
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
      >
        Users3
      </NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <Outlet />
    </>
  );
};
