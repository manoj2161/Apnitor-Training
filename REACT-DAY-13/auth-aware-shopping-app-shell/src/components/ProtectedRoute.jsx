import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export const ProtectedRoute = () => {
  const { islogin } = useAuth();
  return <>{islogin ? <Outlet /> : <Navigate to="/login" />}</>;
};
