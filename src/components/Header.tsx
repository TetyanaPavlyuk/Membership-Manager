import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar
      sx={{
        display: "flex",
      }}
    >
      <Typography variant="h4" margin="20px">
        Meduzzen
      </Typography>
      <Box
        flex="1"
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button color="inherit" component={Link} to={"/"}>
          Home
        </Button>
        <Button color="inherit" component={Link} to={"/about"}>
          About
        </Button>
        <Button color="inherit" component={Link} to={"/companies"}>
          Companies
        </Button>
        <Button color="inherit" component={Link} to={"/users"}>
          Users
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
