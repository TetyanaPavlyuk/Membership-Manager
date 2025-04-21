import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import { useAppDispatch } from "../../store";
import { FormEvent, useState } from "react";
import { registrationThunk } from "../../features";
import {
  emailValidation,
  EmailValidationErrors,
  passwordValidation,
  PasswordValidationErrors,
} from "../../validations";
import { useLogin } from "../../hooks";

import "./Registration.css";

export const Registration = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { login } = useLogin();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailErrors, setEmailErrors] = useState<EmailValidationErrors>({});
  const [passwordErrors, setPasswordErrors] =
    useState<PasswordValidationErrors>({});

  const handleRegistration = async (e: FormEvent) => {
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

    setIsLoading(true);
    const result = await dispatch(
      registrationThunk({ email, password, full_name: fullName }),
    );
    if (registrationThunk.fulfilled.match(result)) {
      await login(email, password);
    }
    if (registrationThunk.rejected.match(result)) {
      toast.error(result.payload);
    }
    setIsLoading(false);
  };

  return (
    <Box className="registrationContainer">
      <Typography variant="h5">{t("registration.label")}</Typography>

      {isLoading && (
        <Box className="loadingBox">
          <CircularProgress />
        </Box>
      )}

      <form className="registrationForm" onSubmit={handleRegistration}>
        <TextField
          label={t("email")}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={!!emailErrors.email}
          helperText={emailErrors.email}
        />
        <TextField
          label={t("password")}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={!!passwordErrors.password}
          helperText={passwordErrors.password}
        />
        <TextField
          label={t("fullName")}
          type="text"
          value={fullName || ""}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Button variant="contained" type="submit">
          {t("registration.label")}
        </Button>
      </form>
    </Box>
  );
};
