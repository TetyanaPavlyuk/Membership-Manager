import { Typography, Container, Box } from "@mui/material";

import { UniversalModal } from "../components";

export const Home = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Meduzzen
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        Nice to see you!
      </Typography>
      <Box>
        <UniversalModal />
      </Box>
    </Container>
  );
};
