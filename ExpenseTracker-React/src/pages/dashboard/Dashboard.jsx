import React from "react";
import InfoCards from "../../features/infoCards/InfoCards";
import Transactions from "../../features/transactions/Transactions";
import NavbarWithDrawer from "../../features/NavbarWithDrawer";


const Dashboard = () => {

  return (
    <div className="dashboardContainer">
      <NavbarWithDrawer />
      <InfoCards />
      <Transactions />
    </div>
  );
};

export default Dashboard;
