import { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
type PropsProtectRoutes = {
  authenticate : boolean ,
  children : ReactNode , 
  redirectTo : string 
}
export const ProtectedRoutes = ({
  authenticate,
  children,
  redirectTo = "/login",
}: PropsProtectRoutes) => {
  if (authenticate === false) {
    return <Navigate to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};
