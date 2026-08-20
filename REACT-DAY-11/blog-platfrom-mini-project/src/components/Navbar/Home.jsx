import { useNavigate } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <h1>Welcome , Guest!</h1>
        <button
          onClick={() => {
            navigate("/blog/1");
          }}
        >
          Blog 1
        </button>
        <button
          onClick={() => {
            navigate("/blog/2");
          }}
        >
          Blog 2
        </button>
        <button
          onClick={() => {
            navigate("/blog/3");
          }}
        >
          Blog 3
        </button>
      </div>
    </>
  );
};
