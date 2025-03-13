import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header, Footer, Sidebar } from "./";

import "./Layout.css";

export const Layout = () => (
  <Box className="layoutBox">
    <Header />
    <Box className="innerBox">
      <Sidebar />
      <Box className="outletBox">
        <Outlet />
      </Box>
    </Box>
    <Footer />
  </Box>
);
