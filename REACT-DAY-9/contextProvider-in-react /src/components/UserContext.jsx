import { createContext } from "react";

export const UserContext = createContext({
  user: { name: "Guest", role: "visitor", theme: "LIGHT" },
  setUser: () => {},
});
