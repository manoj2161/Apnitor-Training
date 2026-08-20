import { Outlet, Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isLoggedIn }) => {
  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
};
