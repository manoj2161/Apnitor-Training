import { useAuth } from "./AuthContext";
import { useTheme } from "./ThemeContext";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
export const NavBar = () => {
  const { name, islogin, setIsLoggedIn } = useAuth();
  const { theme, setTheme } = useTheme();
  console.log(theme);
  return (
    <>
      <header className={theme ? "dark" : ""} c>
        <div className="flex justify-between p-2 items-center h-16 text-black bg-white text-black dark:bg-gray-900 dark:text-white">
          {islogin && (
            <div className="text-xl font-semibold">
              Hi,{" "}
              <span className="text-blue-600 dark:text-blue-400">{name}</span>
            </div>
          )}
          <div>
            <button
              onClick={() => {
                theme ? setTheme(false) : setTheme(true);
              }}
            >
              {theme ? <Sun /> : <Moon />}
            </button>
          </div>
          <div>
            {islogin && (
              <button
                className="shadow-lg shadow-gray-700 rounded-lg p-1 text-gray-600 dark:bg-gray-400 dark:text-black "
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                {islogin ? "Log Out" : "Log In"}
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
