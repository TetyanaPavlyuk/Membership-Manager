import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";

import { RoutesEnum } from "../routes";


interface SidebarItemProps {
  to: string;
  text: string;
}


const SidebarItem: React.FC<SidebarItemProps> = ({to, text}) => (
  <>
    <ListItem>
        <ListItemButton component={Link} to={to}>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>

      <Divider />
  </>
)


export const Sidebar = () => (
  <Box
    sx={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "sticky",
    }}
  >
    <List>
      <SidebarItem to={RoutesEnum.HOME} text="Home" />
      <SidebarItem to={RoutesEnum.ABOUT} text="About" />
      <SidebarItem to={RoutesEnum.USERS} text="Users" />
      <SidebarItem to={RoutesEnum.COMPANIES} text="Companies" />
    </List>
  </Box>
);
