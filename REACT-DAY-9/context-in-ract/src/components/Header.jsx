import { UserContext } from "./UserContext";
import { NavBar } from "./NavBar";
import { useContext } from "react";
export const Header = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Navbar</h2>
      <h3>Role : {user.role}</h3>
      <NavBar></NavBar>
    </>
  );
};
