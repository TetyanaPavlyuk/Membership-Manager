import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../store";
import { RoutesEnum } from "../../enum";
import { useAuthToken } from "../../hooks";

export const PrivateRoute = () => {
  useAuthToken();
  const isAuthenticated = useAppSelector(
    (state: any) => state.auth.user !== null,
  );

  const accessToken = localStorage.getItem("access_token")
  if (!accessToken || !isAuthenticated) {
    return <Navigate to={RoutesEnum.LOGIN} replace />;
  }
  return <Outlet />;
};
