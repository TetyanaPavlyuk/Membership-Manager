import { Typography, Container, Box } from "@mui/material";

import { UniversalModal } from "../components";

import "./Home.css";

export const Home = () => {
  return (
    <Container className="homeContainer">
      <Typography variant="h3">Meduzzen</Typography>
      <Typography variant="h5">Nice to see you!</Typography>
      <Box>
        <UniversalModal />
      </Box>
    </Container>
  );
};
