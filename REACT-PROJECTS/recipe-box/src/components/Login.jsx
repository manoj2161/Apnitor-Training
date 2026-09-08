import { ChefHat, Mail, Lock, Eye, EyeClosed } from "lucide-react";
import dish from "../assets/dish.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Login = () => {
  const [pass, setpass] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }
  function handleLogin(e) {
    e.preventDefault();
    const newErrors = {};
    const usersData = JSON.parse(localStorage.getItem("recipeBoxUsers")) || [];
    const existingUser = usersData.find(
      (user) => user.email === formData.email,
    );
    if (!existingUser) {
      newErrors.email = "User does not exits";
    } else if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (
      existingUser &&
      formData.password.trim() !== existingUser.password
    ) {
      newErrors.password = "Incorrect Password";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log(existingUser);
    localStorage.setItem(
      "recipeBoxCurrentUser",
      JSON.stringify(existingUser.id),
    );
    savePendingRecipe();
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/search");
    }, 1000);
  }

  function savePendingRecipe() {
    const pendingRecipe = sessionStorage.getItem("pendingRecipe");

    if (!pendingRecipe) {
      return;
    }

    const recipe = JSON.parse(pendingRecipe);

    const currentUser = JSON.parse(
      localStorage.getItem("recipeBoxCurrentUser"),
    );

    const usersData = JSON.parse(localStorage.getItem("recipeBoxUsers")) || [];

    const loggedUser = usersData.find((user) => user.id === currentUser);

    if (!loggedUser) {
      return;
    }

    loggedUser.recipies = loggedUser.recipies || [];

    const existingRecipe = loggedUser.recipies.find(
      (item) => item.idMeal === recipe.idMeal,
    );

    if (!existingRecipe) {
      loggedUser.recipies.push(recipe);
    }

    localStorage.setItem("recipeBoxUsers", JSON.stringify(usersData));

    sessionStorage.removeItem("pendingRecipe");

    console.log("Pending recipe saved:", recipe);
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div className=" h-screen w-[40%] bg-green-950">
          <div className="flex flex-col justify-center mt-28 gap-28  items-center text-white font-bold ">
            <div className="flex flex-col justify-center items-center gap-4">
              <ChefHat className="size-38" />
              <p className="text-3xl">RecipeBox</p>
              <p className="text-center text-xl">
                <span>Welcome Back ! </span>
                <br />
                <span>
                  Good food is always <br />
                  Good Idea.
                </span>
              </p>
            </div>
            <div>
              <img src={dish} alt="" className="size-58" />
            </div>
          </div>
        </div>
        <div className="h-screen w-[60%]">
          <h1 className="text-center text-[48px] text-green-950 font-bold mt-16 ">
            Login
          </h1>
          <form
            action="
            "
            onSubmit={handleLogin}
            className="flex flex-col p-28 lg:px-88 "
          >
            <div className=" h-22 relative flex flex-col">
              <Mail className="absolute top-8 left-1 text-green-950" />
              <label htmlFor="email" className="text-lg font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                className="border rounded h-8 border-green-950 pl-8"
                onChange={handleChange}
                placeholder="Email Address"
              />
              <span className="text-red-500 absolute left-11">*</span>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className=" h-22 relative flex flex-col">
              <Lock className="absolute top-8 left-1 text-green-950" />
              <label htmlFor="password" className="text-lg font-semibold">
                Password
              </label>
              <input
                type={pass ? "text" : "password"}
                value={formData.password}
                name="password"
                className=" rounded h-8 border border-green-950 pl-8"
                onChange={handleChange}
                placeholder="Password"
              />
              {pass ? (
                <EyeClosed
                  className="absolute right-2 top-8"
                  onClick={() => setpass((prev) => !prev)}
                />
              ) : (
                <Eye
                  className="absolute right-2 top-8"
                  onClick={() => setpass((prev) => !prev)}
                />
              )}

              <span className="text-red-500 absolute left-19">*</span>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="relative h-6">
              <button
                onClick={() => navigate("/forgot")}
                className="absolute right-2 font-semibold"
              >
                Forgot Password ?
              </button>
            </div>
            <div className=" h-22 relative flex flex-col">
              {!loader ? (
                <button
                  type="submit"
                  className="bg-green-950 rounded-lg my-4 py-2 text-white font-semibold text-lg"
                >
                  Login
                </button>
              ) : (
                <div className="border border-green-900 absolute size-6 rounded-full border-4 animate-spin border-t-gray-200 top-6 left-[50%]"></div>
              )}
            </div>
            <p className="text-center">
              Don't have an account?
              <button
                onClick={() => navigate("/signup")}
                className="text-green-950 font-bold ml-1"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
