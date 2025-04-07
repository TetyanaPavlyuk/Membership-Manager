import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { LogoutComponent } from "../../components";
import { useEffect, useState } from "react";
import { User } from "../../types";
import { formatI18nError } from "../../utils";
import { useAppDispatch } from "../../store";
import { dashboardThunk } from "../../features";

export const Dashboard = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem("access_token");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!accessToken) {
        setError(t("notFoundAccessToken"));
        setLoading(false);
      } else {
        try {
          const user_data = await dispatch(
            dashboardThunk(accessToken),
          ).unwrap();
          setUser(user_data);
        } catch (error) {
          formatI18nError("failedFetchUser", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUser();
  }, [accessToken]);

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
    <Box>
      {user ? (
        <Box>
          <Typography variant="h6">
            {`${t("welcome")}, ${user?.email}`}
          </Typography>
          <LogoutComponent />
        </Box>
      ) : (
        <Typography variant="h6">{t("notFoundUser")}</Typography>
      )}
    </Box>
  );
};
