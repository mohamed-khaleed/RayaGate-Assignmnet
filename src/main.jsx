import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SearchProvider } from "../src/context/SearchContext.jsx";
import { PaginationProvider } from "./context/PaginationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </SearchProvider>
  </React.StrictMode>,
);
