
import { AsideDashboard } from "./AsideDashboard";
import { MainDashboard } from "./MainDashboard";
export const Dashboard = () => {

  return (
    <>
      <div className="w-full h-screen flex relative">
        <div className="w-[20%] h-screen">
          <AsideDashboard />
        </div>
        <div className="w-[80%] p-4 h-screen">
          <MainDashboard />
        </div>
      </div>
    </>
  );
};
