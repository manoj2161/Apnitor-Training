export const Card = () => {
  return (
    <>
      <div className="w-96 h-60 m-10 bg-gray-500 rounded-3xl shadow-lg">
        <h1 className="text-5xl text-center font-bold">My Profile</h1>
        <div className="p-5">
          <p className="text-3xl text-green-200">Name : Manoj</p>
          <p className="text-3xl text-yellow-400">Role : MERN Developer</p>
        </div>
        <button className="ml-36 bg-black text-white p-2 rounded-2xl text-sm shadow-xl">
          View Profile
        </button>
      </div>
    </>
  );
};
