import { NavBar } from "./NavBar";
import { useTheme } from "./ThemeContext";

export const Dashboard = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={theme ? "dark" : ""}>
        <NavBar></NavBar>
        <p className="dark:bg-gray-800 h-screen dark:text-white text-center pt-8">
          This is Dashboard
        </p>
      </div>
    </>
  );
};
