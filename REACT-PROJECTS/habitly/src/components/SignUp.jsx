import girlImage from "../assets/girlImage.png";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, EyeClosed, UserRound, Eye } from "lucide-react";
import { useState } from "react";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const [cshow, setcShow] = useState(false);
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
  function handleSignin(e) {
    e.preventDefault();
    const newErrors = {};
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = userData.find(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase(),
    );
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    } else if (existingUser) {
      newErrors.email = "User already Exists";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }
    if (!formData.cpassword.trim()) {
      newErrors.cpassword = "Confirm Password is required";
    } else if (formData.cpassword.length < 6) {
      newErrors.cpassword = "Password must contain at least 6 characters";
    } else if (formData.password !== formData.cpassword) {
      newErrors.cpassword = "Password does not matched";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    const newUser = {
      id: crypto.randomUUID(),
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      cpassword: formData.cpassword,
      habits: [],
    };
    userData.push(newUser);
    localStorage.setItem("users", JSON.stringify(userData));

    navigate("/");
  }

  return (
    <>
      <div className="w-atuo h-screen bg-[#fef9f3] lg:flex md:flex md:justify-center md:items-center py-16">
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
          <div>
            <img
              src={girlImage}
              alt="girlImage"
              className="lg:w-208 md:w-188 sm:w-128 "
            />
          </div>
          <div>
            <h1 className="lg:text-[2.5rem] md:text-[1.5rem] text-center font-bold">
              Begin your journey <br></br>of self-love
            </h1>
            <p className="text-center font-semibold lg:text-lg text-xs mt-2">
              You deserve the best version of you
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:px-38">
          <div className="hidden md:block lg:block ml-8">
            <h2 className="text-2xl font-bold">Create your account</h2>
            <p className="text-[#c64d26] mt-2">Let's gets you started!</p>
          </div>
          <div className="">
            <form action="" className="flex flex-col p-8 gap-4 relative">
              <div className="relative lg:h-16 md:h-16 h-12 py-2 mb-2">
                <label
                  htmlFor="name"
                  className="hidden md:block lg:block text-xl -mb-4 font-semibold absolute -top-1"
                >
                  Full Name
                </label>
                <span className="absolute left-23 -top-1 text-red-500 h-2 hidden lg:block md:block">
                  *
                </span>
                <UserRound className="absolute lg:top-8 md:top-8 top-8 left-2 text-[#FDC8A0]" />
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                  id=""
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 -mb-4 w-full absolute top-6"
                />
                <span className="text-sm text-red-500 absolute top-16 left-1">
                  {errors && <p>{errors.name}</p>}
                </span>
              </div>
              <div className="relative lg:h-16 md:h-16 h-12 py-2 mb-2">
                <label
                  htmlFor="email"
                  className="hidden md:block lg:block text-xl -mb-4 font-semibold absolute -top-1"
                >
                  Email
                </label>

                <span className="absolute left-13 -top-1 text-red-500 hidden lg:block md:block">
                  *
                </span>

                <Mail className="absolute md:top-8 lg:top-8 top-8 left-2 text-[#FDC8A0]" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                  value={formData.email}
                  onChange={handleChange}
                  className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none w-full bg-transparent h-10 pl-10 absolute top-6"
                />
                <span className="text-sm text-red-500 absolute top-16 left-1">
                  {errors && <p>{errors.email}</p>}
                </span>
              </div>
              <div className="relative lg:h-16 md:h-16 h-12 py-2 mb-2">
                <label
                  htmlFor="password"
                  className="hidden md:block lg:block text-xl -mb-4 font-semibold absolute -top-1"
                >
                  Password
                </label>
                <span className="absolute left-22 -top-1 text-red-500 h-2 hidden lg:block md:block">
                  *
                </span>
                <Lock className="absolute lg:top-8 md:top-8 top-8 left-2 text-[#FDC8A0]" />
                {show ? (
                  <EyeClosed
                    onClick={() => setShow(false)}
                    className="absolute lg:top-8 md:top-8 right-2 top-8 text-[#FDC8A0] z-10"
                  />
                ) : (
                  <Eye
                    onClick={() => setShow(true)}
                    className="absolute lg:top-8 md:top-8 right-2 top-8 text-[#FDC8A0] z-10"
                  />
                )}
                {show ? (
                  <div>
                    <input
                      type="text"
                      name="password"
                      placeholder="Create your password"
                      id=""
                      value={formData.password}
                      onChange={handleChange}
                      className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 absolute top-6 w-full"
                    />
                    <span className="text-sm text-red-500 absolute top-16 left-1">
                      {errors && <p>{errors.password}</p>}
                    </span>
                  </div>
                ) : (
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Create your password"
                      id=""
                      value={formData.password}
                      onChange={handleChange}
                      className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 absolute top-6 w-full"
                    />
                    <span className="text-sm text-red-500 absolute top-16 left-1">
                      {errors && <p>{errors.password}</p>}
                    </span>
                  </div>
                )}
              </div>
              <div className="relative lg:h-16 md:h-16 h-12 py-2 mb-6">
                <label
                  htmlFor="cpassword"
                  className="hidden md:block lg:block text-xl -mb-4 font-semibold absolute -top-1"
                >
                  Confirm Password
                </label>
                <span className="absolute left-42 -top-1 text-red-500 h-2 hidden lg:block md:block">
                  *
                </span>
                <Lock className="absolute lg:top-8 md:top-8 top-8 left-2 text-[#FDC8A0]" />
                {cshow ? (
                  <EyeClosed
                    onClick={() => setcShow(false)}
                    className="absolute lg:top-8 md:top-8 right-2 top-8 text-[#FDC8A0] z-10"
                  />
                ) : (
                  <Eye
                    onClick={() => setcShow(true)}
                    className="absolute lg:top-8 md:top-8 right-2 top-8 text-[#FDC8A0] z-10"
                  />
                )}
                {cshow ? (
                  <div>
                    <input
                      type="text"
                      name="cpassword"
                      placeholder="Confirm your password"
                      id=""
                      value={formData.cpassword}
                      onChange={handleChange}
                      className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 absolute top-6 w-full"
                    />
                    <span className="text-sm text-red-500 absolute top-16 left-1">
                      {errors && <p>{errors.cpassword}</p>}
                    </span>
                  </div>
                ) : (
                  <div>
                    <input
                      type="password"
                      name="cpassword"
                      placeholder="Confirm your password"
                      id=""
                      value={formData.cpassword}
                      onChange={handleChange}
                      className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 absolute top-6 w-full"
                    />
                    <span className="text-sm text-red-500 absolute top-16 left-1">
                      {errors && <p>{errors.cpassword}</p>}
                    </span>
                  </div>
                )}
              </div>
              <button
                onClick={handleSignin}
                type="button"
                className="bg-[#c64d26] rounded-md h-10 text-white text-lg"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className="text-center flex justify-center gap-2">
            <span>Already have an account?</span>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-green-800 font-semibold"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
