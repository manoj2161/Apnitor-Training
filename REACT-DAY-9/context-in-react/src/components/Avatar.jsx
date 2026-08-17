import { useContext } from "react";
import { UserContext } from "./UserContext";
export const Avatar = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h3>Welcome , {user.name}</h3>
    </>
  );
};
