import { Navigate, Outlet } from "react-router-dom";
import { RoutesEnum } from "../../enum";
import { useAuth } from "../../hooks";
import { Alert, CircularProgress } from "@mui/material";

export const PrivateRoute = () => {
  const { user, isLoading, errorMessage } = useAuth();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (errorMessage) {
    return <Alert severity="error">{errorMessage}</Alert>;
  }

  if (!user) {
    return <Navigate to={RoutesEnum.LOGIN} replace />;
  }

  return <Outlet />;
};
