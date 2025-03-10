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

const Sidebar: React.FC = () => {
  return (
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
        <ListItem>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemButton component={Link} to="/about">
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemButton component={Link} to="/companies">
            <ListItemText primary="Companies" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemButton component={Link} to="/users">
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
