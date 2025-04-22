import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";

import { LoginSocialComponent } from "../../components";
import { emailValidation, passwordValidation } from "../../validations";
import { useLogin } from "../../hooks";

import "./Login.css";

export const Login = () => {
  const { t } = useTranslation();
  const { login } = useLogin();

  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const error: { email?: string; password?: string } = {};

    if (!loginData.email) {
      error.email = t("validation.emailRequired");
    } else {
      const emailValidationResult = emailValidation(loginData.email, t);
      if (emailValidationResult) {
        error.email = emailValidationResult;
      }
    }

    if (!loginData.password) {
      error.password = t("validation.passwordRequired");
    } else {
      const passwordValidationResult = passwordValidation(
        loginData.password,
        t,
      );
      if (passwordValidationResult) {
        error.password = passwordValidationResult;
      }
    }

    if (Object.keys(error).length > 0) {
      setErrors(error);
      return;
    }

    setIsLoading(true);
    await login(loginData.email, loginData.password);
    setIsLoading(false);
  };

  return (
    <Box className="loginContainer">
      <Typography variant="h5">{t("login.label")}</Typography>

      {isLoading && (
        <Box className="loadingBox">
          <CircularProgress />
        </Box>
      )}

      <Box className="loginBox">
        <form className="loginForm" onSubmit={handleLogin}>
          <TextField
            label={t("email")}
            type="email"
            name="email"
            autoComplete="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label={t("password")}
            type="password"
            name="password"
            autoComplete="current-password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button variant="contained" type="submit">
            {t("login.label")}
          </Button>
        </form>
        <LoginSocialComponent />
      </Box>
    </Box>
  );
};
