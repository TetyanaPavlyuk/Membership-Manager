import React from "react";
import { Typography, Container, Button, Box } from "@mui/material";

const StartPage: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" sx={{ marginBottom: 2 }}>
        Meduzzen
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        Nice to see you!
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert("Welcome to Meduzzen!")}
        >
          Ok!
        </Button>
      </Box>
    </Container>
  );
};

export default StartPage;
