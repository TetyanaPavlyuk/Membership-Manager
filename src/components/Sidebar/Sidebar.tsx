import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useTranslation } from "react-i18next";

import { navLinks } from "../NavLinks.ts";

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

export const Sidebar = () => {
  const { t } = useTranslation();
  return (
    <Box className="sidebarBox">
      <List>
        {navLinks.map(({ to, text }) => (
          <SidebarItem key={to} to={to} text={t(text)} />
        ))}
      </List>
    </Box>
  );
};
