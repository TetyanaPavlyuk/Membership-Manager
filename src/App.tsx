import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";

import { CssBaseline } from "@mui/material";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <AppRoutes />
    </BrowserRouter>
  );
};
