import { useState } from "react";
import "./App.scss";
import SignUp from "./pages/sign-up/SignUp";
import LogIn from "./pages/log-in/LogIn";
import Landing from "./pages/landing/Landing";
import { Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import PwdRecovery from "./pages/pwdRecovery/PwdRecovery";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes*/}
        <Route path="login" element={<LogIn />} />
        <Route path="register" element={<SignUp />} />
        <Route path="" element={<Landing />} />
        <Route path="recoverYourPassword" element={<PwdRecovery />} />
        {/*Private Routes*/}
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
