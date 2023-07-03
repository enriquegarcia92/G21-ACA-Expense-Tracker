import React from "react";
import LogoutButton from "../components/Logoutbutton";
import Transactions from "./transactions/Transactions";

const NavbarWithDrawer = () => {
  return (
    <div className="navContainer">
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand fs-1 me-5" href="#">
            Expense Tracker
          </a>
          <div
            className="collapse navbar-collapse d-flex flex-row justify-content-between"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a
                className="nav-link fs-3 me-3"
                aria-current="page"
                href="/dashboard"
              >
                Home
              </a>
              <a className="nav-link fs-3 me-3" href="history">
                Financial History
              </a>
              <a className="nav-link fs-3 me-3" href="budget">
                Budget Planner
              </a>
              <a className="nav-link fs-3 me-3" href="account">
                Account
              </a>
            </div>
            <div className="userFunctions d-flex flex-row">
              <Transactions />
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarWithDrawer;
