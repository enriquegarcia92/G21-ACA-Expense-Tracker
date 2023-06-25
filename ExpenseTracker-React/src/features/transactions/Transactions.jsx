import React from "react";
import "../transactions/Transactions.scss";
import AddExpense from "../../components/addExpense/AddExpense";

const Transactions = () => {
  return (
    <div className="transactionsContainer">
      <div className="transactionsDiv">
        <AddExpense />
      </div>
    </div>
  );
};

export default Transactions;
