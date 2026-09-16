import { useContext } from "react";

import { createContext } from "react";
export const MyContext = createContext(null);
export function useTheme() {
  return useContext(MyContext);
}
