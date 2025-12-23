/**
 * Point d'entrée legacy (si besoin).
 * Pour React 18 + Vite, utilise src/main.jsx.
 */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(<App />);
