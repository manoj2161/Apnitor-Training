import girlImage from "../assets/girlImage.png";
import {
  LayoutDashboard,
  ChartNetwork,
  CalendarDays,
  ChartColumn,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
export const AsideDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <aside className="flex flex-col justify-between h-screen bg-[#fef9f3] shadow">
        <div>
          <img src={girlImage} alt="" className="w-68" />
          <h1 className="text-center font-bold ">SelfLove</h1>
        </div>
        <div>
          <nav className="flex flex-col gap-4 mb-88 ml-8 font-semibold items-left">
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-[#fbede3] w-36 p-2 rounded-lg hover:text-[#c64d26]"
            >
              <LayoutDashboard className="size-4" />
              Dashboard
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-[#fbede3] w-36 p-2 rounded-lg hover:text-[#c64d26]"
            >
              <ChartNetwork className="size-4" />
              Habbits
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-[#fbede3] w-36 p-2 rounded-lg hover:text-[#c64d26]"
            >
              <CalendarDays className="size-4" />
              Calander
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-[#fbede3] w-36 p-2 rounded-lg hover:text-[#c64d26]"
            >
              <ChartColumn className="size-4" />
              Statistics
            </a>
            <a
              href="#"
              className="flex gap-2 items-center hover:bg-[#fbede3] w-36 p-2 rounded-lg hover:text-[#c64d26]"
            >
              <Settings className="size-4" />
              Settings
            </a>
          </nav>
        </div>
        <div className="ml-8 mb-2 font-semibold  hover:text-[#c64d26]">
          <button
            onClick={() => navigate("/")}
            className="flex gap-2 items-center"
          >
            <LogOut className="size-4" />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
};
