import { useNavigate } from "react-router-dom";

export const NoPost = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404</h1>
      <h3>No Post Found</h3>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </>
  );
};
