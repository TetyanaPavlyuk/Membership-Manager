import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../store";
import { clearUser, setAuthError, setAuthLoading } from "../../features";
import { RoutesEnum } from "../../enum";
import { formatI18nError } from "../../utils";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { logout: auth0Logout } = useAuth0();

  const logout = () => {
    try {
      dispatch(setAuthLoading(true));
      dispatch(clearUser());
      localStorage.removeItem("access_token");
      auth0Logout({
        logoutParams: {
          returnTo: window.location.origin + RoutesEnum.LOGIN,
        },
      });
      navigate(RoutesEnum.LOGIN);
    } catch (error) {
      const formattedError = formatI18nError("logout.failed", error);
      dispatch(setAuthError(formattedError.message));
    } finally {
      dispatch(setAuthLoading(false));
    }
  };
  return logout;
};
