import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import global CSS styles
import App from "./App"; // Import main App component
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import { Toaster } from "react-hot-toast"; // Import Toaster for toast notifications

// Create React root and render the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App /> {/* Render main App component */}
    <Toaster /> {/* Render Toaster for toast notifications */}
  </BrowserRouter>
);
