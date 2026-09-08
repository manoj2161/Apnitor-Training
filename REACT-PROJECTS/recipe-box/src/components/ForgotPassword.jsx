import { ChefHat, Mail, Lock, Eye, EyeClosed } from "lucide-react";
import dish from "../assets/dish.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const ForgotPassword = () => {
  const [pass, setpass] = useState(false);
  const [cpass, setcpass] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
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
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!existingUser) {
      newErrors.email = "User does not exists";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password length should be greater than 6";
    }
    if (!formData.cpassword.trim()) {
      newErrors.cpassword = "Confirm Password is required";
    } else if (formData.cpassword !== formData.password) {
      newErrors.cpassword = "Password does not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const updatedUsers = usersData.map((user) =>
      user.email === formData.email.trim().toLowerCase()
        ? {
            ...user,
            password: formData.password,
            cpassword: formData.cpassword,
          }
        : user,
    );
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
    setTimeout(() => {
      setSuccess((prev) => !prev);
    }, 2000);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    localStorage.setItem("recipeBoxUsers", JSON.stringify(updatedUsers));
    // navigate("/dashboard");
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
                <span>Forgot Password ! </span>
                <br />
                <span>
                  No worries <br />
                  Change your old password.
                </span>
              </p>
            </div>
            <div>
              <img src={dish} alt="" className="size-58" />
            </div>
          </div>
        </div>
        <div className="h-screen w-[60%] relative">
          {success && (
            <div className="animate-slide  w-60 rounded-lg bg-gray-800 absolute right-2 top-2 text-white  py-2 px-1 border text-sm text-center">
              <p>Password Changed Successfully</p>
            </div>
          )}
          <h1 className="text-center text-[48px] text-green-950 font-bold mt-16 ">
            Set New Password
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
                New Password
              </label>
              <input
                type={pass ? "text" : "password"}
                value={formData.password}
                name="password"
                className=" rounded h-8 border border-green-950 pl-8"
                onChange={handleChange}
                placeholder="Enter New Password"
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

              <span className="text-red-500 absolute left-30">*</span>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className=" h-22 relative flex flex-col">
              <Lock className="absolute top-8 left-1 text-green-950" />
              <label htmlFor="cpassword" className="text-lg font-semibold">
                Confirm New Password
              </label>
              <input
                type={cpass ? "text" : "password"}
                value={formData.cpassword}
                name="cpassword"
                className=" rounded h-8 border border-green-950 pl-8"
                onChange={handleChange}
                placeholder="Confirm New Password"
              />
              {cpass ? (
                <EyeClosed
                  className="absolute right-2 top-8"
                  onClick={() => setcpass((prev) => !prev)}
                />
              ) : (
                <Eye
                  className="absolute right-2 top-8"
                  onClick={() => setcpass((prev) => !prev)}
                />
              )}

              <span className="text-red-500 absolute left-48">*</span>
              {errors.cpassword && (
                <p className="text-red-500 text-sm">{errors.cpassword}</p>
              )}
            </div>
            <div className=" h-22 relative flex flex-col">
              {!loader ? (
                <button
                  type="submit"
                  className="bg-green-950 rounded-lg my-4 py-2 text-white font-semibold text-lg text-center"
                >
                  Update Password
                </button>
              ) : (
                <div className="border border-green-900 absolute size-6 rounded-full border-4 animate-spin border-t-gray-200 top-6 left-[50%]"></div>
              )}
            </div>
            <p className="text-center">
              Go back to login ?
              <button
                onClick={() => navigate("/login")}
                className="text-green-950 font-bold ml-1"
              >
                Login
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
