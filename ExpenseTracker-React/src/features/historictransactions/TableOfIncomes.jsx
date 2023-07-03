import React, { useEffect, useState } from "react";
import NavbarWithDrawer from "../NavbarWithDrawer";
import Axios from "../../api/Axios";

const TableOfIncomes = () => {
  const GET_INCOMES_URL = "/income/get/";
  const [incomes, setIncomes] = useState([]);
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

  const getIncomes = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_INCOMES_URL + userId,
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
      setIncomes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIncomes();
  }, []); // Empty dependency array ensures the effect runs only on mount

  return (
    <div className="dashboardContainer">
      <NavbarWithDrawer />
      <div className="tableContainer">
        <div class="card">
          <div class="card-header fs-2 d-flex flex-row justify-content-between">
            Incomes
            <a className="btn btn-primary fs-3" href="history">Expenses</a>
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
                </tr>
              </thead>
              <tbody>
                {incomes.map((item) => (
                  <tr key={item.id}>
                    <td className="fs-5">{item.nombre}</td>
                    <td className="fs-5">{item.categoria}</td>
                    <td className="fs-5">{item.monto}</td>
                    <td className="fs-5">{item.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div class="card-footer text-body-secondary d-flex flex-row justify-content-end">
            <select className="form-select form-select-lg">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select className="form-select form-select-lg">
              {months.map((month, index) => (
                <option key={index} value={index + 1}>
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
