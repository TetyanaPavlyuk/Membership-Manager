import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

import { RoutesEnum } from "../routes";


interface HeaderButtonProps {
  to: string;
  text: string;
}


const HeaderButton: React.FC<HeaderButtonProps> = ({to, text}) => (
  <Button color="inherit" component={Link} to={to}>
    {text}
  </Button>
)


export const Header = () => (
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
        <HeaderButton to={RoutesEnum.HOME} text="Home" />
        <HeaderButton to={RoutesEnum.ABOUT} text="About" />
        <HeaderButton to={RoutesEnum.USERS} text="Users" />
        <HeaderButton to={RoutesEnum.COMPANIES} text="Companies" />
      </Box>
    </Toolbar>
  </AppBar>
);
