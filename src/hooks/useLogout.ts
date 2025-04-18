import { useAuth0 } from "@auth0/auth0-react";
import { toast } from "react-toastify";

import { useAppDispatch } from "../store";
import { clearUser, setAuthLoading } from "../features";
import { RoutesEnum } from "../enum";
import { formatI18nError } from "../utils";

export const useLogout = () => {
  const dispatch = useAppDispatch();
  const { logout: auth0Logout } = useAuth0();

  const logout = () => {
    try {
      dispatch(setAuthLoading(true));
      dispatch(clearUser());
      localStorage.removeItem("access_token");
      auth0Logout({
        logoutParams: {
          returnTo: import.meta.env.VITE_BASE_URL + RoutesEnum.LOGIN,
        },
      });
    } catch (error) {
      const formattedError = formatI18nError("logout.failed", error);
      toast.error(formattedError);
    } finally {
      dispatch(setAuthLoading(false));
    }
  };
  return logout;
};
