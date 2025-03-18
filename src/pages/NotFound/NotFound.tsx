import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { RoutesEnum } from "../../routes/RoutesEnum.ts";

import "./NotFound.css";

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container className="notFoundContainer">
      <Typography variant="h3" color="error">
        {t("not_found")}
      </Typography>
      <Typography variant="body1">{t("not_found_message")}</Typography>
      <Button variant="contained" component={Link} to={RoutesEnum.HOME}>
        {t("go_home")}
      </Button>
    </Container>
  );
};
