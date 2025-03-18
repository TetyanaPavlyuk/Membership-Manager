import { Typography, Container, Box } from "@mui/material";
import { useTranslation } from "react-i18next";

import { UniversalModal } from "../../components";

import "./Home.css";

export const Home = () => {
  const { t } = useTranslation();
  return (
    <Container className="homeContainer">
      <Typography variant="h3">{t("company_name")}</Typography>
      <Typography variant="h5">{t("greeting")}</Typography>
      <Box>
        <UniversalModal />
      </Box>
    </Container>
  );
};
