import React from "react";
import '../changebudget/ChangeBudget.scss'

const ChangeBudget = () => {
  return (
    <div className="changeBudgetContainer">
      <div className="card">
        <div className="card-body">
        <h5 className="card-title fs-3">Update your budget information</h5>
          <div className="cBInput mb-3">
            <label for="incomeField" className="form-label fs-4">
              Income
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="incomeField"
              placeholder="$"
            />
          </div>
          <div className="cBInput mb-3">
            <label for="targetExpenseField" className="form-label fs-4">
              Target expenditure
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="targetExpenseField"
              placeholder="What's your target amount"
            />
          </div>
          <div class="cBInput mb-3">
            <label for="budgetMotivationField" className="form-label fs-4">
              What is your purpose for budgeting?
            </label>
            <textarea
              type="text"
              className="form-control form-control-lg"
              id="budgetMotivationField"
              placeholder="why are you doing this?"
            />
          </div>
          <div className="btn btn-success btn-lg fs-3">Update</div>
        </div>
      </div>
    </div>
  );
};

export default ChangeBudget;
