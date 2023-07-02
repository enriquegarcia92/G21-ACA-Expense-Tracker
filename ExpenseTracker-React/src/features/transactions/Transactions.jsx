import React from "react";
import "../transactions/Transactions.scss";
import AddExpense from "../../components/addExpense/AddExpense";
import AddIncome from "../../components/addIncome/AddIncome";

const Transactions = () => {
  return (   
    <div className="transactionsContainer d-flex flex-row me-3">
      <AddExpense />
      <AddIncome/>  
    </div>
         
  );
};

export default Transactions;
