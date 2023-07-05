import React, { useEffect, useState } from "react";
import Axios from "../../../api/Axios";
import '../account/FormData.scss'


const AccountFormData = () => {
  const GET_USER_URL = "/usuario/get/";
  const UPDATE_USER_URL="/usuario/edit/"
  const [user, setUser] = useState([]);
  const [nombrecompleto, setnombrecompleto] = useState(user.nombrecompleto);
  const [email, setemail] = useState(user.email);
  const [password, setpassword] = useState("");
  const [confirmPassword,setconfirmPassword] = useState("");
  const [salary, setsalary] = useState(0.0);
  const [budgetlimit, setbudgetlimit] = useState(0.0);

  const handleNombrecompletoChange = (event) => {
    setnombrecompleto(event.target.value);
  };
  const handleEmailChange = (event) => {
    setemail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setpassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event) =>{
    setconfirmPassword(event.target.value);
  }

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

  const handleConfirmUpdate = async (e) =>{
    e.preventDefault();
    if(password == confirmPassword){
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const response = await Axios.put(
          UPDATE_USER_URL + userId,
          JSON.stringify({  
            nombrecompleto: nombrecompleto,
            email: email,
            password: password,
            salary: salary,
            budgetlimit: budgetlimit,
          }),
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: false,
          }
        );
      } catch (err) {
        console.log(err);
      }
    }else{
      console.log("contraseñas no coinciden");
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
              onChange = {handleNombrecompletoChange}
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
              onChange = {handleEmailChange}

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
              value = {password}
              onChange = {handlePasswordChange}
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
              value = {confirmPassword}
              onChange = {handleConfirmPasswordChange}
            />
          </div>
          <div className="btn btn-success btn-lg fs-3" onClick={handleConfirmUpdate}>Update</div>
        </div>
      </div>
  );
};

export default AccountFormData;
