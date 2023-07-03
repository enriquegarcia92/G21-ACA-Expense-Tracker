import React from "react";
import NavbarWithDrawer from "../../../features/NavbarWithDrawer";
import BudgetPlannerInfo from "../../../components/budgetplannerinfo/BudgetPlannerInfo";
import ChangeBudget from "../../../components/changebudget/ChangeBudget";
import '../budgetplanner/BudgetPlanner.scss'

const BudgetPlanner = () => {
  return (
    <div className="budgetContainer">
      <NavbarWithDrawer />
      <div className="budgetInfoContainer">
        <BudgetPlannerInfo />
        <ChangeBudget/>
      </div>
    </div>
  );
};

export default BudgetPlanner;
