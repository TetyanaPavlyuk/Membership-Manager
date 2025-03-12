import React from "react";
import { Link } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import { RoutesEnum } from "../routes";

import "./Sidebar.css";

interface SidebarItemProps {
  to: string;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ to, text }: SidebarItemProps) => (
  <Box>
    <ListItem>
      <ListItemButton component={Link} to={to}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>

    <Divider />
  </Box>
);

export const Sidebar = () => {
  const navLinks = [
    {path: RoutesEnum.HOME, label: "Home"},
    {path: RoutesEnum.ABOUT, label: "About"},
    {path: RoutesEnum.USERS, label: "Users"},
    {path: RoutesEnum.COMPANIES, label: "Companies"}
  ]
  return (
    <Box className="sidebarBox">
      <List>
        {navLinks.map((navLink) => (
          <SidebarItem key={navLink.path} to={navLink.path} text={navLink.label} />
        ))}
      </List>
    </Box>
    )
};
