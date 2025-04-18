import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../store";

export const Dashboard = () => {
  const { t } = useTranslation();
  const { user, isLoading } = useAppSelector((state) => state.auth);

  return (
    <Box>
      {isLoading && (
        <Box className="userStatusContainer">
          <CircularProgress />
        </Box>
      )}

      {user ? (
        <Box>
          <Typography variant="h6">{`${t("email")}: ${user.email}`}</Typography>
          <Typography variant="h6">
            {`${t("fullName")}: ${user.full_name}`}
          </Typography>
        </Box>
      ) : (
        <Typography variant="h6">{t("notFound.user")}</Typography>
      )}
    </Box>
  );
};
