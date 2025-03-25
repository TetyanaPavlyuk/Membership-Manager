import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

export const CompanyProfile = () => {
  const { t } = useTranslation();
  return <Typography variant="h3">{t("companyProfile")}</Typography>;
};
