import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import { RoutesEnum } from "../../enum";
import { useAppDispatch } from "../../store";
import { FormEvent, useState } from "react";
import { registrationThunk } from "../../features";
import { authValidation, AuthValidationErrors } from "../../validations";

import "./Registration.css";

export const Registration = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [errors, setErrors] = useState<AuthValidationErrors>({});

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = authValidation(email, password, t);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    setIsLoading(true);
    const result = await dispatch(
      registrationThunk({ email, password, full_name: fullName }),
    );
    if (registrationThunk.fulfilled.match(result)) {
      setIsRegistered(true);
    }
    if (registrationThunk.rejected.match(result)) {
      setIsRegistered(false);
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

      {!isLoading && !isRegistered && (
        <form className="registrationForm" onSubmit={handleRegistration}>
          <TextField
            label={t("email")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label={t("password")}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
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
      )}

      {!isLoading && isRegistered && (
        <Box className="successBox">
          <Typography>{`
            ${t("registration.success")}
          `}</Typography>
          <Button variant="contained" component={Link} to={RoutesEnum.LOGIN}>
            {t("login.label")}
          </Button>
        </Box>
      )}
    </Box>
  );
};
