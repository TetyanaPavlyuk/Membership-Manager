import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { getNavLinks } from "../";

import "./Sidebar.css";

interface SidebarItemProps {
  to: string;
  text: string;
}

const SidebarItem = ({ to, text }: SidebarItemProps) => (
  <Box>
    <ListItem>
      <ListItemButton component={Link} to={to}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>

    <Divider />
  </Box>
);

export const Sidebar = () => (
  <Box className="sidebarBox">
    <List>
      {getNavLinks().map(({ to, text }) => (
        <SidebarItem key={to} to={to} text={text} />
      ))}
    </List>
  </Box>
);
