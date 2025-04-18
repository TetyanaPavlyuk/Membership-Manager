import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";

import { RoutesEnum } from "../../enum";
import { useAuth } from "../../hooks";

export const PrivateRoute = () => {
  const { user, isLoading, authInitialize } = useAuth();

  if (isLoading || !authInitialize) {
    return <CircularProgress />;
  }
  return user ? <Outlet /> : <Navigate to={RoutesEnum.LOGIN} replace />;
};
