import { Outlet } from "react-router-dom";
export const Dashboard = () => {
  return (
    <>
      <h1>This is my Dashboard</h1>
      <Outlet />
    </>
  );
};
