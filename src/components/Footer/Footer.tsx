import { AppBar, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { LanguageSelector } from "../";

import "./Footer.css";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar className="footerToolbar">
        <Typography className="footerText" variant="h6">
          {t("companyYear")}
        </Typography>
        <LanguageSelector />
      </Toolbar>
    </AppBar>
  );
};
