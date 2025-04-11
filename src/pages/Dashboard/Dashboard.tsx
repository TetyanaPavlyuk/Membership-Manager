import { Alert, Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useAuth } from "../../hooks";

export const Dashboard = () => {
  const { t } = useTranslation();
  const { user, isLoading, errorMessage } = useAuth();

  if (isLoading) {
    return (
      <Box className="userStatusContainer">
        <CircularProgress />
      </Box>
    );
  }

  if (errorMessage) {
    return (
      <Box className="userStatusContainer">
        <Alert severity="error">{errorMessage}</Alert>
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
        </Box>
      ) : (
        <Typography variant="h6">{t("notFound.user")}</Typography>
      )}
    </Box>
  );
};
