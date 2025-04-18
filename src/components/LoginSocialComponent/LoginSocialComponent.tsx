import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../store";
import { getMeThunk, setAuthLoading } from "../../features";
import { RoutesEnum } from "../../enum";
import { formatI18nError } from "../../utils";

export const LoginSocialComponent = () => {
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
      await dispatch(getMeThunk()).unwrap();
      navigate(RoutesEnum.ME);
    } catch (error) {
      const formattedError = formatI18nError("login.failed", error);
      toast.error(formattedError);
    } finally {
      dispatch(setAuthLoading(false));
    }
  };

  return (
    <Button variant="contained" onClick={loginSocial}>
      {t("login.withSocial")}
    </Button>
  );
};
