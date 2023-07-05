import React, { useState } from "react";
import "./PwdRecovery.scss";
import Axios from "../../api/Axios";
const PwdRecovery = () => {
  const [email, setEmail] = useState("");
  const PWD_RECOVERY_URL ="/auth/recoverpassword"

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post(
        PWD_RECOVERY_URL,
        JSON.stringify({ email }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (err) {
     console.log(err)
    }
    window.location.reload()
  };

  return (
    <div className="pageVContainer">
      <form className="pwdRecoveryForm" onSubmit={handleSubmit}>
        <h1>Recover your password</h1>
        <p className="alert alert-light">
          You will receive an email with a confirmation code
        </p>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-envelope"></i>
          </span>
          <input
            type="email"
            className="form-control"
            onChange={handleEmailChange}
            value={email}
            required
            placeholder="Email"
          />
        </div>
        <button className="btn btn-primary mb-3">Send Code</button>
        <a href="/login">Back to login!</a>
      </form>
    </div>
  );
};

export default PwdRecovery;
