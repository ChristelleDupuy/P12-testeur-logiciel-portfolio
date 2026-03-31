import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./components/Portfolio";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/light-mode.css";

const container = document.getElementById("react-portfolio");

if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Portfolio />
    </React.StrictMode>
  );
}