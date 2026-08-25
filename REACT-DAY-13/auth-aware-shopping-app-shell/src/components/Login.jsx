import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
export const Login = () => {
  const { islogin, setIsLoggedIn, name, setName } = useAuth();
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
      <div className="flex justify-center items-center h-screen">
        <div className="p-16 rounded-2xl flex flex-col justify-between items-center h-84 shadow-xl bg-gray-100">
          <div>
            <h1 className="text-xl font-bold text-blue-600 ">Login</h1>
          </div>
          <div className="relative">
            <form action="" className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter your name"
                className="border border-gray-500 rounded-md px-2 w-48 mt-2"
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
    </>
  );
};
