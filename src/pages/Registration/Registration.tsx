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
import { emailValidation, passwordValidation } from "../../validations";
import { useLogin } from "../../hooks";

import "./Registration.css";

export const Registration = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { login } = useLogin();

  const [registrationData, setRegistrationData] = useState<{
    email: string;
    password: string;
    fullName: string | null;
  }>({
    email: "",
    password: "",
    fullName: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();

    const error: { email?: string; password?: string } = {};

    if (!registrationData.email) {
      error.email = t("validation.emailRequired");
    } else {
      const emailValidationResult = emailValidation(registrationData.email, t);
      if (emailValidationResult) {
        error.email = emailValidationResult;
      }
    }

    if (!registrationData.password) {
      error.password = t("validation.passwordRequired");
    } else {
      const passwordValidationResult = passwordValidation(
        registrationData.password,
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
    const result = await dispatch(
      registrationThunk({
        email: registrationData.email,
        password: registrationData.password,
        full_name: registrationData.fullName,
      }),
    );
    if (registrationThunk.fulfilled.match(result)) {
      await login(registrationData.email, registrationData.password);
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
          name="email"
          value={registrationData.email}
          onChange={(e) =>
            setRegistrationData((prev) => ({
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
          name={"password"}
          value={registrationData.password}
          onChange={(e) =>
            setRegistrationData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          error={!!errors.password}
          helperText={errors.password}
        />
        <TextField
          label={t("fullName")}
          type="text"
          name="fullName"
          value={registrationData.fullName || ""}
          onChange={(e) =>
            setRegistrationData((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <Button variant="contained" type="submit">
          {t("registration.label")}
        </Button>
      </form>
    </Box>
  );
};
