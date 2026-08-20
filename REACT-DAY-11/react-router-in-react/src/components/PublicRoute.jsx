import { Navigate, Outlet } from "react-router-dom";
export const PublicRoute = () => {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <Navigate to="/dashboard" /> : <Outlet />}</>;
};
