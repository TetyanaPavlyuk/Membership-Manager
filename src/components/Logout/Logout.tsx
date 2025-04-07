import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18next from "i18next";

import { useAppDispatch } from "../../store";
import { logoutAPI } from "../../api";
import { clearUser } from "../../features";

import "./Logout.css";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutComponent = () => {
  const accessToken = localStorage.getItem("access_token");
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { logout: auth0Logout } = useAuth0();

  const handleLogout = async () => {
    if (!accessToken) {
      setError(t("notFoundAccessToken"));
      return;
    }

    setLoading(true);
    try {
      await logoutAPI(accessToken!);
      dispatch(clearUser());
      localStorage.removeItem("access_token");
      await auth0Logout();
    } catch (error) {
      if (error instanceof Error) {
        setError(`${i18next.t("logoutFailed")}: ${error.message}`);
      } else {
        setError(`${i18next.t("logoutFailed")}: ${i18next.t("unknownError")}`);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box className="userStatusContainer">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="userStatusContainer">
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box className="logoutBox">
      <Button variant="contained" onClick={handleLogout}>
        {t("logout")}
      </Button>
    </Box>
  );
};
