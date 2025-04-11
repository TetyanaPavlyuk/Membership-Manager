import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../store";
import { getMeThunk, setAuthError, setAuthLoading } from "../../features";
import { RoutesEnum } from "../../enum";
import { formatI18nError } from "../../utils";

export const useLoginSocial = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loginWithPopup, getAccessTokenSilently } = useAuth0();

  const loginSocial = async () => {
    try {
      dispatch(setAuthLoading(true));
      await loginWithPopup();
      const auth0Token = await getAccessTokenSilently();
      if (!auth0Token) {
        throw new Error(t("notFound.auth0Token"));
      }
      localStorage.setItem("access_token", auth0Token);
      await dispatch(getMeThunk());
      navigate(RoutesEnum.ME);
    } catch (error) {
      const formattedError = formatI18nError("login.failed", error);
      dispatch(setAuthError(formattedError.message));
    } finally {
      dispatch(setAuthLoading(false));
    }
  };
  return loginSocial;
};
