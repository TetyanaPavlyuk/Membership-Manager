import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export const UsersList = () => {
  const { t } = useTranslation();
  return <Typography variant="h3">{t("users_list")}</Typography>;
};
