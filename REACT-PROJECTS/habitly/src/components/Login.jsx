import girlImage from "../assets/girlImage.png";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeClosed} from "lucide-react";
import { useState } from "react";
export const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleSignin(e) {
    e.preventDefault();
    navigate("/dashboard");
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
              Say hi to your <br></br> self-love journal
            </h1>
            <p className="text-center font-semibold lg:text-lg text-xs mt-2">
              Hope you have a good day
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 w-full px-8 lg:px-38">
          <div className="hidden md:block lg:block ml-8">
            <h2 className="text-2xl font-bold">Welcome back</h2>
            <p className="text-[#c64d26] mt-2">Glad to see you again</p>
          </div>
          <div className="">
            <form action="" className="flex flex-col p-8 gap-4 relative">
              <label
                htmlFor="email"
                className="hidden md:block lg:block text-xl -mb-4 font-semibold"
              >
                Email
              </label>
              <Mail className="absolute md:top-17 lg:top-17 top-10 left-10 lg:left-10 text-[#FDC8A0]" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id=""
                className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10"
              />
              <label
                htmlFor="password"
                className="hidden md:block lg:block text-xl -mb-4 font-semibold"
              >
                Password
              </label>
              <Lock className="absolute lg:top-38 md:top-38 lg:top-17 top-24 left-10 lg:left-10 text-[#FDC8A0]" />
              {show ? (
                <EyeClosed
                  onClick={() => setShow(false)}
                  className="absolute lg:top-38 md:top-38 lg:top-17 top-24 right-12 text-[#FDC8A0]"
                />
              ) : (
                <Eye
                  onClick={() => setShow(true)}
                  className="absolute lg:top-38 md:top-38 lg:top-17 top-24 right-12 text-[#FDC8A0]"
                />
              )}
              {show ? (
                <input
                  type="text"
                  name="password"
                  placeholder="Enter your password"
                  id=""
                  className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 "
                />
              ) : (
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  id=""
                  className="rounded-sm focus:bg-transparent border-2 border-[#FDC8A0] focus:outline-none bg-transparent h-10 pl-10 "
                />
              )}

              <div className="flex justify-between md:justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="remember"
                    id=""
                    className="mr-2 accent-orange-300"
                  />
                  <span className="font-semibold">Remember me</span>
                </div>
                <div className="text-[#c64d26] font-semibold">
                  Forget password?
                </div>
              </div>
              <button
                onClick={handleSignin}
                type="button"
                className="bg-[#c64d26] rounded-md h-10 text-white text-lg"
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="text-center flex justify-center gap-2">
            <span>Dont have an account?</span>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-green-800 font-semibold"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
