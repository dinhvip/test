import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "./App";
import LoadingSpinner from "./components/LoadingSpinner";
import "./index.css";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root element not found");
}

const rootElement = ReactDOM.createRoot(root);

rootElement.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
