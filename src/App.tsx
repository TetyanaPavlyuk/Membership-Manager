import { Auth0Provider } from "@auth0/auth0-react";

import { AppRoutes } from "./routes";

import { CssBaseline } from "@mui/material";
import "./App.css";

export const App = () => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
    >
      <CssBaseline />
      <AppRoutes />
    </Auth0Provider>
  );
};
