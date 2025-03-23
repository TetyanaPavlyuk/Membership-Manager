import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n/i18n.ts";
import { Provider } from "react-redux";

import { App } from "./App.tsx";
import { store } from "./store";

import "./index.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  );
}
