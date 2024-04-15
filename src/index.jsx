import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);