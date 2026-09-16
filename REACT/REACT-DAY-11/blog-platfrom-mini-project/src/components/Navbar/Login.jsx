import { useNavigate } from "react-router-dom";
export const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login Here !</h1>
      <button
        onClick={() => {
          (setIsLoggedIn(true), navigate("/admin"));
        }}
      >
        Login
      </button>
    </>
  );
};
