import { useState } from "react";
import { UserContext } from "./UserContext";
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "MANU",
    role: "ADMIN",
    theme: "DARK",
  });
  return (
    <>
      <UserContext value={{ user, setUser }}>{children}</UserContext>
    </>
  );
};
