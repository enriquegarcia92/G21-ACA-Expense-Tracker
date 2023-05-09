import React, { useState } from "react";
import "./PwdRecovery.scss";

const PwdRecovery = () => {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

  }

  return (
    <div className="pageContainer">
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="Email"
          />
        </div>
        <button className="btn btn-primary">Send Code</button>
      </form>
    </div>
  );
};

export default PwdRecovery;
