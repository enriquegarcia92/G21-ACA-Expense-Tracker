import React, { useEffect, useState } from "react";
import { Bar, Chart } from "react-chartjs-2";
import Axios from "../../api/Axios";
import {getCurrentMonth, processObject, generateColors} from '../../utils/utils'
import {Chart as Chartjs } from 'chart.js/auto'

const ExpenseGraph = () => {
  const GET_EXPENSES_BY_CATEGORY_URL = "/expense/get/expensebycategory/";
  const [expensesByCategory, setExpensesByCategory] = useState([]);

  useEffect(() => {
    //current month data
    const { year, monthNumber, monthName } = getCurrentMonth();
    getExpensesByCategory(monthNumber, year)
    
  }, []);

  const getExpensesByCategory = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_EXPENSES_BY_CATEGORY_URL + userId + "?month=" + month + "&year=" + year,
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
      const processedEntries = processObject(response.data);
      console.log(response.data);
      setExpensesByCategory(processedEntries)
    } catch (err) {
      console.log(err);
    }
  };

  const chartData = {
    labels: expensesByCategory.map((item) => item.category),
    datasets: [
      {
        label: "Expenses by category",
        data: expensesByCategory.map((item) => item.amount),
        backgroundColor: generateColors(5), // Set the desired background color
        borderColor: generateColors(5), // Set the desired border color
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
