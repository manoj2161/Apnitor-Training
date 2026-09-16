import { Navigate, Outlet } from "react-router-dom";
export const RoleProtectedRoute = () => {
  const userRole = "user";
  return (
    <>{userRole === "admin" ? <Outlet /> : <Navigate to="/unauthorized" />}</>
  );
};
