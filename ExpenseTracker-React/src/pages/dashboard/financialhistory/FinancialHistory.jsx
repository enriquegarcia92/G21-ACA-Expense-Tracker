import React from "react";
import NavbarWithDrawer from "../../../features/NavbarWithDrawer";
import Transactions from "../../../features/transactions/Transactions";
import TableOfTransactions from "../../../features/historictransactions/TableOfTransactions";


const FinancialHistory = () => {
  return (
    <div className="dashboardContainer">
      <NavbarWithDrawer />
      <TableOfTransactions/>
    </div>
  );
};

export default FinancialHistory;
