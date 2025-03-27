import { Typography, Container, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { HealthCheckComponent } from "../../components";

import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Container className="homeContainer">
      <Typography variant="h3">{t("companyName")}</Typography>
      <Typography variant="h5">{t("greeting")}</Typography>
      <Box>
        <HealthCheckComponent />
      </Box>
    </Container>
  );
};
