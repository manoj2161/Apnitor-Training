import { useNavigate } from "react-router-dom";
export const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This is about us page</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </>
  );
};
