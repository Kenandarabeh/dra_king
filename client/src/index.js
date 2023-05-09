import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import FirstPage from "./Home/FirstPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <FirstPage />
    </AuthProvider>
  </React.StrictMode>
);
