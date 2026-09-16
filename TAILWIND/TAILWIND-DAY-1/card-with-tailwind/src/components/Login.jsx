export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-16">
        <div className="border border-blue-200 p-10 rounded-xl w-80 shadow-xl">
          <form action="" className="flex flex-col gap-4">
            <h1 className="text-center text-3xl font-bold text-blue-500">
              Login
            </h1>
            <label htmlFor="email" className="text-xl font-bold text-gray-600 ">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded-md focus:border-blue-900  text-sm p-1"
            />
            <label
              htmlFor="password"
              className="text-xl font-bold text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="border rounded-md focus:border-blue-900  text-sm p-1"
            />
            <button
              type="submit"
              className="bg-blue-500 mx-20 h-8 shadow-xl rounded-xl text-white hover:bg-red-700 hover:text-black"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
