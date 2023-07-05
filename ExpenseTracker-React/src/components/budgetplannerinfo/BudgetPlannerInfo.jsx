import React, { useEffect, useState } from 'react'
import '../budgetplannerinfo/BudgetPlannerInfo.scss'
import Axios from '../../api/Axios';

const BudgetPlannerInfo = () => {

  const GET_USER_URL = "/usuario/get/";
  const UPDATE_USER_URL="/usuario/edit/"
  const [user, setUser] = useState([]);
  const [nombrecompleto, setnombrecompleto] = useState(user.nombrecompleto);
  const [email, setemail] = useState(user.email);
  const [password, setpassword] = useState("");
  const [confirmPassword,setconfirmPassword] = useState("");
  const [comment,setComment] = useState("");
  const [salary, setsalary] = useState(0.0);
  const [budgetlimit, setbudgetlimit] = useState(0.0);


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

      setemail(response.data.email);
      setnombrecompleto(response.data.nombrecompleto)
      setsalary(response.data.salary)
      setbudgetlimit(response.data.budgetlimit)
      setComment(response.data.budgetcoment)
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyUser();
  }, []); 

  return (
    <div className="budgetPlannerInfoContainer">
        <div className="card">
      <div className="card-body">
        <h5 className="card-title fs-3"> budget information</h5>
        <p className="card-text">{nombrecompleto}</p>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">Current Income</h6>
        <p className="card-text">{salary}</p>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">Budget limit</h6>
        <p className="card-text">{budgetlimit}</p>
        <h6 className="card-subtitle mb-2 text-muted fs-4 mt-3">I want to budget because</h6>
        <p className="card-text">{comment}</p>
      </div>
    </div>
    </div>
  )
}

export default BudgetPlannerInfo