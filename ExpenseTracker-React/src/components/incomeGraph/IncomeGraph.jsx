import React, { useEffect, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import Axios from "../../api/Axios";
import {getCurrentMonth, processObject, generateColors} from '../../utils/utils'
import {Chart as Chartjs } from 'chart.js/auto'
import '../incomeGraph/IncomeGraph.scss'

const IncomeGraph = () => {
  const GET_INCOMES_BY_CATEGORY_URL = "/income/get/incomebycategory/";
  const [incomesByCategory, setIncomesByCategory] = useState([]);

  useEffect(() => {
    //current month data
    const { year, monthNumber, monthName } = getCurrentMonth();
    getIncomesByCategory(monthNumber, year)
    
  }, []);

  const getIncomesByCategory = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_INCOMES_BY_CATEGORY_URL + userId + "?month=" + month + "&year=" + year,
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
      const processedIncomeEntries = processObject(response.data);
      console.log(response.data);
      console.log(processedIncomeEntries);
      setIncomesByCategory(processedIncomeEntries)
      
    } catch (err) {
      console.log(err);
    }
  };

  const chartData = {
    labels: incomesByCategory.map((item) => item.category),
    datasets: [
      {
        label: "Incomes",
        data: incomesByCategory.map((item) => item.amount),
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
