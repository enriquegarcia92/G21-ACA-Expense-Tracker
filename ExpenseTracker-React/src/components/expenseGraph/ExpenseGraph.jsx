import React, { useEffect, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import Axios from "../../api/Axios";
import {Chart as Chartjs } from 'chart.js/auto'

const ExpenseGraph = () => {
  const GET_EXPENSES_URL = "/expense/get/";
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_EXPENSES_URL + userId,
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
      setExpenses(response.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  const chartData = {
    labels: expenses.map((item) => item.nombre),
    datasets: [
      {
        label: "Expenses by name",
        data: expenses.map((item) => item.monto),
        backgroundColor: "rgba(75,192,192,0.4)", // Set the desired background color
        borderColor: "rgba(75,192,192,1)", // Set the desired border color
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="incomeGraphContainer">
      <Bar data={chartData} />
    </div>
  );
};

export default ExpenseGraph;
