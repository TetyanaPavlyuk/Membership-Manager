import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";

import { useAppSelector } from "../../store";
import { LoginSocialComponent } from "../../components";
import {
  emailValidation,
  EmailValidationErrors,
  passwordValidation,
  PasswordValidationErrors,
} from "../../validations";
import { useLogin } from "../../hooks";

import "./Login.css";

export const Login = () => {
  const { t } = useTranslation();
  const { login } = useLogin();

  const { user, isLoading } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailErrors, setEmailErrors] = useState<EmailValidationErrors>({});
  const [passwordErrors, setPasswordErrors] =
    useState<PasswordValidationErrors>({});

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const emailValidationResult = emailValidation(email, t);
    const passwordValidationResult = passwordValidation(password, t);

    setEmailErrors(emailValidationResult);
    setPasswordErrors(passwordValidationResult);

    if (
      Object.keys(emailValidationResult).length > 0 ||
      Object.keys(passwordValidationResult).length > 0
    ) {
      return;
    }

    await login(email, password);
  };

  return (
    <Box className="loginContainer">
      <Typography variant="h5">{t("login.label")}</Typography>

      {isLoading && (
        <Box className="loadingBox">
          <CircularProgress />
        </Box>
      )}

      {!isLoading && !user && (
        <Box className="loginBox">
          <form className="loginForm" onSubmit={handleLogin}>
            <TextField
              label={t("email")}
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!emailErrors.email}
              helperText={emailErrors.email}
            />
            <TextField
              label={t("password")}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!passwordErrors.password}
              helperText={passwordErrors.password}
            />
            <Button variant="contained" type="submit">
              {t("login.label")}
            </Button>
          </form>
          <LoginSocialComponent />
        </Box>
      )}
    </Box>
  );
};
