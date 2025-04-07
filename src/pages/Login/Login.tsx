import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import { loginThunk, loginSocialThunk } from "../../features";
import { RoutesEnum } from "../../enum";

import "./Login.css";
import { formatI18nError } from "../../utils";

export const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    loginWithPopup,
    getAccessTokenSilently,
    logout: auth0Logout,
  } = useAuth0();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      await dispatch(loginThunk({ email, password })).unwrap();
      navigate(RoutesEnum.DASHBOARD);
    } catch (error) {
      const formattedError = formatI18nError("loginFailed", error);
      setError(formattedError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialLogin = async () => {
    try {
      await loginWithPopup();
      const auth0Token = await getAccessTokenSilently();
      await dispatch(loginSocialThunk({ auth0Token })).unwrap();
      await auth0Logout({
        async onRedirect() {
          window.location.replace(RoutesEnum.DASHBOARD);
        },
      });
    } catch (error) {
      const formattedError = formatI18nError("loginFailed", error);
      setError(formattedError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className="loginContainer">
      <Typography variant="h5">{t("login")}</Typography>
      <Box>
        <form className="loginForm" onSubmit={handleLogin}>
          <TextField
            label={t("email")}
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label={t("password")}
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress /> : t("login")}
          </Button>
        </form>

        <Box>
          <Button variant="contained" onClick={() => handleSocialLogin()}>
            {t("loginWithSocial")}
          </Button>
        </Box>
      </Box>

      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};
