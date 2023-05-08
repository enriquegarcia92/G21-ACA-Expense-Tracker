import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import SignUp from "./pages/sign-up/SignUp.jsx";
import LogIn from "./pages/log-in/LogIn.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <LogIn />
    </AuthProvider>
  </React.StrictMode>
);
