import React from "react";
import "../log-in/Login.scss";

function LogIn() {
  return (
    <div className="pageContainer">
      <div className="greenBlock"></div>
      <div className="logInBlock">
        <form action="" className="logInForm">
          <h1>Access your tracker</h1>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-envelope"></i>
            </span>
            <input type="email" className="form-control" placeholder="Email"/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
            <i className="bi bi-shield-lock"></i>
            </span>
            <input type="password" className="form-control" placeholder="Password"/>
          </div>
          <button className="btn btn-primary">
            Sign in <i className="bi bi-box-arrow-in-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
