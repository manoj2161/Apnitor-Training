import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const User = () => {
  const { id } = useParams();
  const location = useLocation();
  return (
    <>
      <h1>This is a user page with ID : {id}</h1>
      <h2>Current Path : {location.pathname}</h2>
    </>
  );
};
