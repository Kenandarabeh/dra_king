import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthProvider";
import FirstPage from "./Home/FirstPage";
import TeacherCompte from "./Teacher/TeacherCompte";
import "./tailwind.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
