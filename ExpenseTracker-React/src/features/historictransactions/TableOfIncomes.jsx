import React, { useEffect, useState } from "react";
import NavbarWithDrawer from "../NavbarWithDrawer";
import Axios from "../../api/Axios";
import ActionButtons from "../../components/actionbuttons/ActionButtons";
import { getCurrentMonth } from "../../utils/utils";
import ActionButtonsIncome from "../../components/actionbuttons/ActionButtonsIncome";

const TableOfIncomes = () => {
  const { year, monthNumber, monthName } = getCurrentMonth();

  const GET_INCOMES_BY_DATE_URL = "/income/get/searchincomesbydate/";
  const [incomesByDate, setIncomesByDate] = useState([]);
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

  const getIncomesByDate = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_INCOMES_BY_DATE_URL +
          userId +
          "?month=" +
          month +
          "&year=" +
          year +
          "&query=",
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );
      setIncomesByDate(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIncomesByDate(selectedMonth, selectedYear);
  }, [selectedMonth, selectedYear]); 


  return (
    <div className="dashboardContainer">
      <NavbarWithDrawer />
      <div className="tableContainer">
        <div class="card">
          <div class="card-header fs-2 d-flex flex-row justify-content-between">
            Incomes
            <a className="btn btn-primary fs-3" href="history">
              Expenses
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
                {incomesByDate.map((item) => (
                  <tr key={item.id}>
                    <td className="fs-5">{item.nombre}</td>
                    <td className="fs-5">{item.categoria}</td>
                    <td className="fs-5">{item.monto}</td>
                    <td className="fs-5">{item.fecha}</td>
                    <td className="fs-5">
                      <ActionButtonsIncome income = {item}/>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="card-footer text-body-secondary d-flex flex-row justify-content-end">
            <select className="form-select form-select-lg"  value={selectedYear}
            onChange={handleYearSelect}>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select className="form-select form-select-lg" value={selectedMonth}
            onChange={handleMonthSelect}>
              {months.map((month, index) => (
              <option key={index} value={String(index + 1).padStart(2, "0")}>
              {month}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableOfIncomes;
