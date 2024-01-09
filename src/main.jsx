import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "flowbite-react/lib/esm/components/Flowbite/ThemeContext.js";
import Home from "./pages/Home.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
        <div className="bg-blue-900 h-[100%]">
            <Home />
        </div>
        </ThemeProvider>
    </React.StrictMode>
);
