import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { navLinks } from "../NavLinks.ts";

import "./Header.css";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar className="appToolbar">
        <Typography variant="h4">{t("companyName")}</Typography>
        <Box className="navBox">
          {navLinks.map(({ to, text }) => (
            <Button key={to} color="inherit" component={Link} to={to}>
              {t(text)}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
