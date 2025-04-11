import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { useLogin, useLoginSocial } from "../../hooks";
import { useAppSelector } from "../../store";

import "./Login.css";

export const Login = () => {
  const { t } = useTranslation();
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();
  const loginSocial = useLoginSocial();

  const { user, isLoading, errorMessage } = useAppSelector(
    (state) => state.auth,
  );

  return (
    <Box className="loginContainer">
      <Typography variant="h5">{t("login.label")}</Typography>

      {errorMessage && (
        <Box className="errorBox">
          <Alert severity="error">{errorMessage}</Alert>
        </Box>
      )}

      {isLoading && (
        <Box className="loadingBox">
          <CircularProgress />
        </Box>
      )}

      {!errorMessage && !isLoading && !user && (
        <Box className="loginBox">
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
            <Button variant="contained" type="submit">
              {t("login.label")}
            </Button>
          </form>
          <Button variant="contained" onClick={loginSocial}>
            {t("login.withSocial")}
          </Button>
        </Box>
      )}
    </Box>
  );
};
