import React, { useEffect, useState } from "react";
import Axios from "../../../api/Axios";

const AccountFormdata = () => {
    const GET_USER_URL ="/usuario/get/"
    const [user, setUser] = useState([]);
    const [nombrecompleto, setnombrecompleto] = useState(user.nombrecompleto);
    const [email, setemail] = useState(user.email);
    const [password,setpassword] = useState("");
    const [salary,setsalary] = useState(0.0);
    const [budgetlimit,setbudgetlimit] = useState(0.0);
      


    const getMyUser = async () => {
        try {
          const token = localStorage.getItem("token");
          const userId = localStorage.getItem("userId");
          const response = await Axios.get(
            GET_USER_URL +
              userId,
            {
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: false,
            }
          );
    
          console.log(response.data);
          setUser(response.data);
        } catch (err) {
          console.log(err);
        }
      };

      useEffect(() => {
        getMyUser();
      }, []); // Empty dependency array ensures the effect runs only on mount

  return (
    <div className="changeBudgetContainer">
      <div className="card">
        <div className="card-body">
        <h5 className="card-title fs-3">Update your budget information</h5>
          <div className="cBInput mb-3">
            <label for="incomeField" className="form-label fs-4">
              Income
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="incomeField"
              placeholder="$"
            />
          </div>
          <div className="cBInput mb-3">
            <label for="targetExpenseField" className="form-label fs-4">
              Target expenditure
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="targetExpenseField"
              placeholder="What's your target amount"
            />
          </div>
          <div class="cBInput mb-3">
            <label for="budgetMotivationField" className="form-label fs-4">
              What is your purpose for budgeting?
            </label>
            <textarea
              type="text"
              className="form-control form-control-lg"
              id="budgetMotivationField"
              placeholder="why are you doing this?"
            />
          </div>
          <div className="btn btn-success btn-lg fs-3">Update</div>
        </div>
      </div>
    </div>
  );
};

export default AccountFormdata;
