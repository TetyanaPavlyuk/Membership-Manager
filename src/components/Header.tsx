import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import { RoutesEnum } from "../routes";

import "./Header.css"

interface HeaderButtonProps {
  to: string;
  text: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ to, text }: HeaderButtonProps) => (
  <Button color="inherit" component={Link} to={to}>
    {text}
  </Button>
);

export const Header = () => {
  const navLinks = [
    {path: RoutesEnum.HOME, label: "Home"},
    {path: RoutesEnum.ABOUT, label: "About"},
    {path: RoutesEnum.USERS, label: "Users"},
    {path:RoutesEnum.COMPANIES, label: "Companies"}
  ]

  return (
    <AppBar position="static">
      <Toolbar className="appToolbar">
        <Typography variant="h4" padding="20px">
          Meduzzen
        </Typography>
        <Box className="navBox">
          {navLinks.map((navLink) => (
            <HeaderButton key={navLink.path} to={navLink.path} text={navLink.label} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
