import React from "react";
import "../historictransactions/TableOfTransactions.scss";

const TableOfTransactions = () => {
  return (
    <div className="tableContainer">
      <div class="card text-center">
        <div class="card-header fs-2">Transactions</div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer text-body-secondary">2 days ago</div>
      </div>
    </div>
  );
};

export default TableOfTransactions;
