import React, { useState } from "react";
import '../changebudget/ChangeBudget.scss'
import Axios from "../../api/Axios";

const ChangeBudget = () => {
  const [budgetlimit, setbudgetlimit] = useState("");
  const [budgetcomment, setbudgetcomment] = useState("");

  const UPDATE_BUDGET_URL = "usuario/updatebudget/"
  const handleBudgetChange = (event) => {
    setbudgetlimit(event.target.value);
  };
  const handleCommentChange = (event) => {
    setbudgetcomment(event.target.value);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.put(
        UPDATE_BUDGET_URL + userId,
        JSON.stringify({
          budgetlimit: budgetlimit,
          budgetcoment: budgetcomment,
        }),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );

      if (response.status === 201) {
        setbudgetcomment("");
        setbudgetlimit(0);
      }
    } catch (err) {
      console.log(err);
    }
    window.location.reload()
  };


  return (
    <div className="changeBudgetContainer">
      <div className="card">
        <div className="card-body">
        <h5 className="card-title fs-3">Update your budget information</h5>
          <div className="cBInput mb-3">
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
              value={budgetlimit}
              onChange={handleBudgetChange}
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
              value={budgetcomment}
              onChange={handleCommentChange}
            />
          </div>
          <div className="btn btn-success btn-lg fs-3" onClick={handleConfirm}>Update</div>
        </div>
      </div>
    </div>
  );
};

export default ChangeBudget;
