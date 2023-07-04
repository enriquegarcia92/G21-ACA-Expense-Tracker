import React, { useEffect, useState } from "react";
import "../historictransactions/TableOfTransactions.scss";
import {
  getCurrentMonth,
  processObject,
  generateColors,
} from "../../utils/utils";
import axios from "../../api/Axios";
import ActionButtonsIncome from "../../components/actionbuttons/ActionButtonsIncome";

const TableOfTransactions = () => {
  const { year, monthNumber, monthName } = getCurrentMonth();

  const GET_EXPENSES_BY_DATE_URL = "/expense/get/expensesbydate/";
  const [expenses, setExpenses] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(monthNumber);
  const [selectedYear, setSelectedYear] = useState(year);
  const years = Array.from(
    { length: 10 },
    (_, index) => new Date().getFullYear() - index
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleMonthSelect = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearSelect = (event) => {
    setSelectedYear(event.target.value);
  };

  const getExpenses = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        GET_EXPENSES_BY_DATE_URL +
          userId +
          "?month=" +
          month +
          "&year=" +
          year +
          "&query=",
        JSON.stringify({
          id: userId,
        }),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );

      console.log(response.data);
      setExpenses(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExpenses(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]); // Empty dependency array ensures the effect runs only on mount

  return (
    <div className="tableContainer">
      <div class="card">
        <div class="card-header fs-2 d-flex flex-row justify-content-between">
          Transactions
          <a className="btn btn-primary fs-3" href="incomeHistory">
            Incomes
          </a>
        </div>
        <div class="card-body">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="fs-4">
                  Name
                </th>
                <th scope="col" className="fs-4">
                  Category
                </th>
                <th scope="col" className="fs-4">
                  Amount
                </th>
                <th scope="col" className="fs-4">
                  Date
                </th>
                <th scope="col" className="fs-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item) => (
                <tr key={item.id}>
                  <td className="fs-5">{item.nombre}</td>
                  <td className="fs-5">{item.categoria}</td>
                  <td className="fs-5">{item.monto}</td>
                  <td className="fs-5">{item.fecha}</td>
                  <td className="fs-5">
                  <ActionButtonsIncome income = {income}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="card-footer text-body-secondary d-flex flex-row justify-content-end">
          <select
            className="form-select form-select-lg"
            value={selectedYear}
            onChange={handleYearSelect}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            className="form-select form-select-lg"
            value={selectedMonth}
            onChange={handleMonthSelect}
          >
            {months.map((month, index) => (
              <option key={index} value={String(index + 1).padStart(2, "0")}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default TableOfTransactions;
