import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Sidebar } from "./Sidebar";

export const Layout = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      Height: "100vh",
      boxSizing: "border-box",
    }}
  >
    <Header />
    <Box
      sx={{
        display: "flex",
        flex: 1,
      }}
    >
      <Sidebar />
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Outlet />
      </Box>
    </Box>
    <Footer />
  </Box>
);
