export const Navbar = () => {
  return (
    <>
      <div className="h-20 bg-blue-300 flex justify-between items-center">
        <div className="ml-2 text-xl text-white font-bold">
          MyApp
        </div>
        <div>
          <nav className="flex gap-8 mr-2">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">
              Login
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};
