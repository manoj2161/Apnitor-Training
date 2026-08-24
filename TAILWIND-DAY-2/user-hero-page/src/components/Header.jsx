import { useState } from "react";
import { Hero } from "./Hero";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center px-2 h-12 bg-purple-700">
        <div className="flex gap-2 items-center text-white font-semibold">
          <p className="w-8">
            <img src="../src/assets/woman.png" alt="profile" />
          </p>
          <span>Sophia Johnson</span>
        </div>
        <div>
          <button
            onClick={() => {
              setMenu(true);
            }}
          >
            <Menu className="text-white mr-2 sm:block md:hidden" />
          </button>
          {menu && (
            <nav className="md:gap-6 text-white font-semibold flex flex-col relative top-34 -right-4 bg-purple-700 p-8 gap-8">
              <button
                onClick={() => {
                  setMenu(false);
                }}
              >
                <X className="absolute top-6 right-6" />
              </button>
              <a href="#">About Me</a>
              <a href="#">Projects</a>
              <a href="#">Resume</a>
              <a href="#">Contact</a>
            </nav>
          )}
          <nav className="md:gap-6 text-white font-semibold hidden md:flex md:items-center mb-6">
            <a href="#">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Resume</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>
      <Hero />
    </>
  );
};
