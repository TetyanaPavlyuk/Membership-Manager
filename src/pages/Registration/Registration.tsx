import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState, FormEvent } from "react";

import { registrationAPI } from "../../api";
import { RegistrationAPIResponse } from "../../types";

import "./Registration.css";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../enum";

export const Registration = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [userData, setUserData] = useState<RegistrationAPIResponse | null>(
    null,
  );

  const handleRegistration = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);
    try {
      const registrationData = await registrationAPI(email, password, fullName);
      setUserData(registrationData);
      setSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(t("unknownError"));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box className="registrationContainer">
      <Typography variant="h5">{t("registration")}</Typography>
      {!success && (
        <form className="registrationForm" onSubmit={handleRegistration}>
          <TextField
            label={t("email")}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label={t("password")}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label={t("fullName")}
            type="text"
            value={fullName || ""}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            {isSubmitting ? <CircularProgress /> : t("registration")}
          </Button>
        </form>
      )}

      {error && <Typography color="error">{error}</Typography>}

      {success && (
        <Box className="successBox">
          <Typography>
            {t("registrationSuccess") +
              " " +
              t("welcome") +
              ", " +
              userData?.user.email +
              "!"}
          </Typography>
          <Button variant="contained" component={Link} to={RoutesEnum.LOGIN}>
            {t("login")}
          </Button>
        </Box>
      )}
    </Box>
  );
};
