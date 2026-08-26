import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { NavBar } from "./NavBar";
import { useTheme } from "./ThemeContext";
export const Login = () => {
  const { islogin, setIsLoggedIn, name, setName } = useAuth();
  const { theme } = useTheme();
  function handleForm(e) {
    if (!name) {
      return;
    }
    e.preventDefault();
    setIsLoggedIn(true);
  }
  if (islogin) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <NavBar></NavBar>
      <div className={theme ? "dark" : ""}>
        <div className="flex justify-center items-center h-screen dark:bg-gray-800">
          <div className="p-16 rounded-2xl flex flex-col justify-between items-center h-84 shadow-xl bg-gray-100 dark:bg-gray-500">
            <div>
              <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">Login</h1>
            </div>
            <div className="relative">
              <form action="" className="flex flex-col ">
                <label htmlFor="name" className="dark:text-white">
                  Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className="border border-gray-500 rounded-md px-2 w-48 mt-2 dark:text-white dark:border-black"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="flex justify-center">
                  <button
                    className="border mt-14 bg-blue-400 text-white w-14 rounded-md px-2 py-1 text-md"
                    onClick={handleForm}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
