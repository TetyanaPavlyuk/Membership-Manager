import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { getNavLinks } from "../";

import "./Header.css";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <AppBar position="static">
      <Toolbar className="appToolbar">
        <Typography variant="h4">{t("company_name")}</Typography>
        <Box className="navBox">
          {getNavLinks().map(({ to, text }) => (
            <Button key={to} color="inherit" component={Link} to={to}>
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
