import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../store";
import { loginThunk } from "../../features";
import { RoutesEnum } from "../../enum";
import { LoginSocialComponent } from "../../components";
import { authValidation, AuthValidationErrors } from "../../validations";

import "./Login.css";

export const Login = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, isLoading } = useAppSelector((state) => state.auth);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<AuthValidationErrors>({});

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = authValidation(email, password, t);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    const result = await dispatch(loginThunk({ email, password }));
    if (loginThunk.fulfilled.match(result)) {
      navigate(RoutesEnum.ME);
    }
    if (loginThunk.rejected.match(result)) {
      toast.error(result.payload);
    }
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
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label={t("password")}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
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
