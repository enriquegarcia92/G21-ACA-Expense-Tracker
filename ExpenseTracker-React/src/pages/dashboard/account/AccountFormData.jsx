import React, { useEffect, useState } from "react";
import Axios from "../../../api/Axios";
import '../account/FormData.scss'


const AccountFormData = () => {
  const GET_USER_URL = "/usuario/get/";
  const [user, setUser] = useState([]);
  const [nombrecompleto, setnombrecompleto] = useState(user.nombrecompleto);
  const [email, setemail] = useState(user.email);
  const [password, setpassword] = useState("");
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
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyUser();
  }, []); // Empty dependency array ensures the effect runs only on mount

  return (
      <div className="card">
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title fs-3 text-center">Update your information</h5>
          <div className="cBInput mb-3">
            <label for="targetExpenseField" className="form-label fs-4">
              Name
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="targetExpenseField"
              placeholder="Nombre completo"
              value={nombrecompleto}
            />
          </div>
          <div className="cBInput mb-3">
            <label for="targetExpenseField" className="form-label fs-4">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="targetExpenseField"
              placeholder="What's your target amount"
              value={email}
            />
          </div>
          <div className="cBInput mb-3">
            <label for="targetExpenseField" className="form-label fs-4">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="targetExpenseField"
              placeholder="New password"
            />
          </div>
          <div className="cBInput mb-5">
            <label for="targetExpenseField" className="form-label fs-4">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-lg"
              id="targetExpenseField"
              placeholder="Confirm password"
            />
          </div>
          <div className="btn btn-success btn-lg fs-3">Update</div>
        </div>
      </div>
  );
};

export default AccountFormData;
