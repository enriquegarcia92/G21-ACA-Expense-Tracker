import React, { useEffect, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import Axios from "../../api/Axios";
import {Chart as Chartjs } from 'chart.js/auto'
import '../incomeGraph/IncomeGraph.scss'

const IncomeGraph = () => {
  const GET_INCOME_URL = "/income/get/";
  const [incomes, setIncomes] = useState([]);

  const getIncomes = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_INCOME_URL + userId,
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
      setIncomes(response.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getIncomes();
  }, []);

  const chartData = {
    labels: incomes.map((item) => item.nombre),
    datasets: [
      {
        label: "Incomes",
        data: incomes.map((item) => item.monto),
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

export default IncomeGraph;
