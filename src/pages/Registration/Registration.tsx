import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import "./Registration.css";
import { Link } from "react-router-dom";
import { RoutesEnum } from "../../enum";
import { useRegistration } from "../../hooks";

export const Registration = () => {
  const { t } = useTranslation();
  const {
    email,
    setEmail,
    password,
    setPassword,
    fullName,
    setFullName,
    user,
    isLoading,
    errorMessage,
    handleRegistration,
  } = useRegistration();

  return (
    <Box className="registrationContainer">
      <Typography variant="h5">{t("registration.label")}</Typography>

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
          <Button variant="contained" type="submit">
            {t("registration.label")}
          </Button>
        </form>
      )}

      {!errorMessage && !isLoading && user && (
        <Box className="successBox">
          <Typography>{`
            ${t("registration.success")} ${t("welcome")}, ${user?.email}!
          `}</Typography>
          <Button variant="contained" component={Link} to={RoutesEnum.LOGIN}>
            {t("login.label")}
          </Button>
        </Box>
      )}
    </Box>
  );
};
