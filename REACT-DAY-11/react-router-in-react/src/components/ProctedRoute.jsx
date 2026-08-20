import { Navigate, Outlet } from "react-router-dom";
export const ProctedRoute = () => {
  const isLoggedIn = true;
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};
