import React, { useEffect, useState } from "react";
import InfoCard from "../../components/infocard/InfoCard";
import "../infoCards/InfoCards.scss";
import Axios from "../../api/Axios";
import {getCurrentMonth, getPreviousMonth} from '../../utils/utils'

const InfoCards = () => {
  const GET_MONTHLY_EXPENSES_URL = "/expense/get/monthlyexpense/";
  const GET_LARGEST_MONTHLY_CATEGORY_EXPENSE_URL = "/expense/get/monthcategory/";
  const [monthlyExpense, setMonthlyExpense] = useState("");
  const [previousMonthExpense, setPreviousMonthExpense] = useState("No expenses recorded");
  const [currentMonthName, setCurrentMonthName] = useState("loading...");
  const [previousMonthName, setPreviousMonthName] = useState("loading...");
  const [largestExpenseCategory, setLargestExpenseCategory] = useState("")
  const [lowestExpenseCategory, setLowestExpenseCategory] = useState("")
  const [budgetlimit, setbudgetlimit] = useState(0.0);


  useEffect(() => {
    //current month data
    const { year, monthNumber, monthName } = getCurrentMonth();
    setCurrentMonthName(monthName);
    getCurrentMonthExpense(monthNumber, year, monthlyExpense);

    //previous month data
    const { previousYear, previousMonthNumber, previousMonthName } = getPreviousMonth();
    setPreviousMonthName(previousMonthName);
    getPreviousMonthExpense(previousMonthNumber, year)

    //largest category by expense
    getLargestMonthlyExpenseCategory(monthNumber, year)
    getMyUser()
  }, []);

  const GET_USER_URL = "/usuario/get/";

  const getMyUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(GET_USER_URL + userId, {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: false,
      });

      setbudgetlimit(response.data.budgetlimit)
    } catch (err) {
      console.log(err);
    }
  };

  // API call for current month data
  const getCurrentMonthExpense = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_MONTHLY_EXPENSES_URL + userId + "?month=" + month + "&year=" + year,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );

      setMonthlyExpense(response.data);
    } catch (err) {
      setMonthlyExpense("An error ocurred");
    }
  };

  //API call for previous month data
  const getPreviousMonthExpense = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_MONTHLY_EXPENSES_URL + userId + "?month=" + month + "&year=" + year,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );

      setPreviousMonthExpense(response.data);
    } catch (err) {
      setPreviousMonthExpense("An error ocurred");
    }
  };

  const getLargestMonthlyExpenseCategory = async (month, year) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const response = await Axios.get(
        GET_LARGEST_MONTHLY_CATEGORY_EXPENSE_URL + userId + "?month=" + month + "&year=" + year,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );

      setLargestExpenseCategory(response.data[0])
      
      //Getting last item programatically
      let lastItem = response.data.length-1
      setLowestExpenseCategory(response.data[lastItem])
      console.log(lowestExpenseCategory);
    } catch (err) {
      setPreviousMonthExpense("An error ocurred");
    }
  };

  return (
    <div className="infoCardsContainer">
      <InfoCard
        title={currentMonthName + " expenditure: "}
        body={"$" + monthlyExpense}
        footer={previousMonthName + ": $" + previousMonthExpense}
        accentColor="green"
      />
      <InfoCard
        title="Budget Target:"
        body={"$" + budgetlimit}
        accentColor="green"
      />
      <InfoCard
        title="Your largest expense this month was:"
        body={largestExpenseCategory}
        footer={"You spent the least on: " + lowestExpenseCategory}
        accentColor="green"
      />
    </div>
  );
};

export default InfoCards;
