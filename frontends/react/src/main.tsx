import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { bootPrefs } from "@shared/boot.js";
import App from "./App";
import "./styles.css";

bootPrefs();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
