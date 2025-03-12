import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Sidebar } from "./Sidebar";

import "./Layout.css"

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
