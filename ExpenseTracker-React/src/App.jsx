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
import FinancialHistory from "./pages/dashboard/financialhistory/FinancialHistory";
import BudgetPlanner from "./pages/dashboard/budgetplanner/BudgetPlanner";
import Account from "./pages/dashboard/account/Account";
import TableOfIncomes from "./features/historictransactions/TableOfIncomes";

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
          <Route path="history" element={<FinancialHistory />} />
          <Route path="budget" element={<BudgetPlanner />} />
          <Route path="account" element={<Account />} />
          <Route path="incomeHistory" element={<TableOfIncomes />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
