import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { navLinks } from "../";
import { RoutesEnum } from "../../enum";
import { useLogout } from "../../hooks";
import { useAppSelector } from "../../store";

import "./Header.css";

export const Header = () => {
  const { t } = useTranslation();
  const logout = useLogout();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <AppBar position="static">
      <Toolbar className="appToolbar">
        <Typography variant="h4">{t("owner.name")}</Typography>
        <Box className="navBox">
          {navLinks.map(({ to, text }) => (
            <Button key={to} color="inherit" component={Link} to={to}>
              {t(text)}
            </Button>
          ))}
          <Box>
            {user ? (
              <Button variant="contained" onClick={logout}>
                {t("logout.label")}
              </Button>
            ) : (
              <Box className="authBox">
                <Button
                  variant="contained"
                  component={Link}
                  to={RoutesEnum.REGISTRATION}
                >
                  {t("registration.label")}
                </Button>
                <Button
                  variant="contained"
                  component={Link}
                  to={RoutesEnum.LOGIN}
                >
                  {t("login.label")}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
