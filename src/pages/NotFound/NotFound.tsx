import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { RoutesEnum } from "../../enum";

import "./NotFound.css";

export const NotFound = () => {
  const { t } = useTranslation();
  return (
    <Container className="notFoundContainer">
      <Typography variant="h3" color="error">
        {t("notFound.page")}
      </Typography>
      <Typography variant="body1">{t("notFound.page")}</Typography>
      <Button variant="contained" component={Link} to={RoutesEnum.HOME}>
        {t("goHome")}
      </Button>
    </Container>
  );
};
