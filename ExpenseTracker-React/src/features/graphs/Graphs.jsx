import React from "react";
import ExpenseGraph from "../../components/expenseGraph/ExpenseGraph";
import '../graphs/Graphs.scss'
import IncomeGraph from "../../components/incomeGraph/IncomeGraph";

const Graphs = () => {
  return (
    <div className="graphsContainer">
      <div className="graphContainer">
        <ExpenseGraph />
      </div>
      <div className="graphContainer">
        <IncomeGraph />
      </div>
    </div>
  );
};

export default Graphs;
