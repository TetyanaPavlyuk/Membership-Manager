import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export const CompaniesList = () => {
  const { t } = useTranslation();
  return <Typography variant="h3">{t("companiesList")}</Typography>;
};
