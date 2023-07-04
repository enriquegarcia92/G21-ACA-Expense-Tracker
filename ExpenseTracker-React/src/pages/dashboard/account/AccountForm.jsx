import React from "react";
import NavbarWithDrawer from "../../../features/NavbarWithDrawer";
import BudgetPlannerInfo from "../../../components/budgetplannerinfo/BudgetPlannerInfo";
import ChangeBudget from "../../../components/changebudget/ChangeBudget";
import '../budgetplanner/BudgetPlanner.scss'
import AccountFormdata from "./AccountFormData";

const AccountForm = () => {
    return (
      <div className="budgetContainer">
        <div className="budgetInfoContainer">
          <AccountFormdata/>
        </div>
      </div>
    );
  };
  
  export default AccountForm;