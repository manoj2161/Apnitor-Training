import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is a home page</h1>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Go to About
      </button>
    </>
  );
};
