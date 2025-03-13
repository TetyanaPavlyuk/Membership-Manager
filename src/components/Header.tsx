import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { navLinks } from "./";

import "./Header.css";

export const Header = () => (
  <AppBar position="static">
    <Toolbar className="appToolbar">
      <Typography variant="h4">Meduzzen</Typography>
      <Box className="navBox">
        {navLinks.map(({ to, text }) => (
          <Button color="inherit" component={Link} to={to}>
            {text}
          </Button>
        ))}
      </Box>
    </Toolbar>
  </AppBar>
);
