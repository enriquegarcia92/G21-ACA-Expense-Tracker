import React from "react";
import InfoCards from "../../features/infoCards/InfoCards";
import Transactions from "../../features/transactions/Transactions";
import NavbarWithDrawer from "../../features/NavbarWithDrawer";
import Graphs from "../../features/graphs/Graphs";


const Dashboard = () => {

  return (
    <div className="dashboardContainer">
      <NavbarWithDrawer />
      <InfoCards />
      <Graphs/>
    </div>
  );
};

export default Dashboard;
