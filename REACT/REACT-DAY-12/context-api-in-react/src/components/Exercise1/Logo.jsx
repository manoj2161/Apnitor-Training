import { useTheme } from "./ThemeContext";
import { Moon, SunMoon } from "lucide-react";
export const Logo = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <div>
        <button
          onClick={() => {
            setTheme(!theme);
          }}
        >
          {!theme ? <Moon /> : <SunMoon />}
        </button>
      </div>
    </>
  );
};
