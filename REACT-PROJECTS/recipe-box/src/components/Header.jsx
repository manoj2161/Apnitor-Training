import { ChefHat } from "lucide-react";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full h-18 flex justify-between px-4 shadow bg-white/30 backdrop-blur-md border border-white/25 rounded p-8 shadow-lg">
        <div className="flex justify-center items-center gap-4 ">
          <ChefHat className="size-18 text-green-950" />
          <span className="text-[38px] text-green-950 font-bold">
            RecipeBox
          </span>
        </div>
        <div className="flex">
          <nav className="flex justify-center items-center gap-8">
            <button
              onClick={() => navigate("/login")}
              className="rounded-xl py-1 font-bold shadow-xl bg-lime-200 px-2"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="rounded-xl py-1 font-bold shadow-lg text-white bg-lime-800 px-2"
            >
              Sign Up
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
