import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ canActivate,  redirectTo = "/" }) => {
  if (!canActivate) {
    return <Navigate to={redirectTo} replace/>;
  }
  return  <Outlet/>;
};
