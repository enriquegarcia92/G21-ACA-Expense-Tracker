import React from 'react'
import Navbar from '../../features/NavbarWithDrawer';
import InfoCards from '../../features/infoCards/InfoCards';
import Transactions from '../../features/transactions/Transactions';

const Dashboard = () => {

  const email = localStorage.getItem("email");
  return (
    <div className="dashboardContainer">
      <Navbar/>
      <InfoCards/>
      <Transactions/>
    </div>
  )
}

export default Dashboard