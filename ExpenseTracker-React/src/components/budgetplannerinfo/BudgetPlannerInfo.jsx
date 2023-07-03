import React from 'react'
import '../budgetplannerinfo/BudgetPlannerInfo.scss'

const BudgetPlannerInfo = () => {
  return (
    <div className="budgetPlannerInfoContainer">
        <div className="card">
      <div className="card-body">
        <h5 className="card-title fs-3">Current budget information</h5>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">Current Income</h6>
        <p className="card-text">Display current income value here</p>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">Target Expense</h6>
        <p className="card-text">Display target expense value here</p>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">Largest Expense Category</h6>
        <p className="card-text">Display largest expense category here</p>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">I want to budget because</h6>
        <p className="card-text">Display your desire or goal here</p>
      </div>
    </div>
    </div>
  )
}

export default BudgetPlannerInfo