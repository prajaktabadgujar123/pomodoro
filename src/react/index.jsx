import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const root = createRoot(document.getElementById("root"));

// Wrap App component with the Provider and pass the store
root.render(<App />);
