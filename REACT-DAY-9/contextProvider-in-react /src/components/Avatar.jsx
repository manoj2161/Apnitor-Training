import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Avatar = () => {
  const { user, setUser } = useContext(UserContext);

  const toggleTheme = () => {
    setUser({
      ...user,
      theme: user.theme === "DARK" ? "LIGHT" : "DARK",
    });
  };
  return (
    <>
      <h3>Welcome , {user.name}</h3>
      <h3>Theme : {user.theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};
