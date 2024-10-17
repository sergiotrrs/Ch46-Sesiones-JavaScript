import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";

/**
 *  1. JSX debe tener un solo elemento raíz
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <App></App>
  </StrictMode>
);
