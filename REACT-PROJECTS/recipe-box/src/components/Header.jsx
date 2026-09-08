import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
export const Header = () => {
  const [recipeSearch, setRecipeSearch] = useState("");
  const navigate = useNavigate();
  function handleSearch() {
    if (!recipeSearch.trim()) {
      return;
    }
    navigate("/search", {
      state: {
        query: recipeSearch.trim(),
      },
    });
  }
  return (
    <>
      <div className="flex flex-col h-screen">
        <header className="w-full h-8 flex justify-between items-center px-4 rounded p-8">
          <div className="flex justify-center items-center">
            <img
              src={logo}
              className="size-18 lg:size-18 md:size-28 md:mt-6 text-green-950"
            />
            <span className="text-[26px] font-['Kaushan_Script'] lg:text-[38px] md:text-[38px] text-green-950 font-bold">
              RecipeBox
            </span>
          </div>
          <div>
            <nav className="flex justify-center items-center gap-4">
              <button
                onClick={() => navigate("/login")}
                className="rounded-3xl py-1 md:py-2 md:px-2 md:text-lg font-bold shadow-xl border border-green-950 px-2"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="rounded-3xl py-1 shadow-lg text-white bg-green-950 px-2 md:py-2 md:px-2 md:text-md font-semibold"
              >
                Sign Up
              </button>
            </nav>
          </div>
        </header>
        <div className="flex h-screen justify-center items-center flex-col">
          <div className="relative h-21 w-88 md:w-148">
            <Search className="absolute lg:bottom-67 left-2 -bottom-5 md:bottom-3 md:size-7 text-green-950 z-20 size-5" />
            <input
              type="text"
              name="search"
              value={recipeSearch}
              onChange={(e) => setRecipeSearch(e.target.value)}
              placeholder="Search for recipes... (eg. chicken, pasta etc.)"
              className="border border-green-950 w-88 lg:w-121 placeholder:text-xs md:placeholder:text-lg rounded-full h-11.5 absolute -bottom-8 left-0 md:bottom-0 md:w-148 md:h-14 lg:bottom-64 bg-white pl-10 absolute"
            />
            <button
              onClick={handleSearch}
              className="absolute lg:bottom-65 -bottom-6.5 md:bottom-2 md:px-6 md:py-5 right-1 bg-green-950 rounded-2xl  lg:left-125 border px-5 py-4"
            >
              <Search className="absolute bottom-1.5 md:bottom-2 md:size-6 md:right-3 right-2.5 text-white z-30 size-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
