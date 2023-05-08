import React from "react";
import "../log-in/Login.scss";
import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/Axios";

const LOGIN_URL = "/auth/login";

const LogIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [token, setToken] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSuccess(true);
      console.log(success);
      const accessToken = response?.data?.accesToken;
      setAuth({ email, password, accessToken });
      setEmail("");
      setPassword("");
    } catch (err) {
      if (!err.response) {
        setErrMsg("No server response.");
      } else if (err.response?.status === 400) {
        setErrMsg(
          "There seems to be a problem with our servers, please try later."
        );
      } else if (err.response?.status === 401) {
        setErrMsg("Incorrect email or password.");
      } else {
        setErrMsg("Login failed.");
      }
    }
  };

  return (
    <div className="pageContainer">
      <div className="greenBlock"></div>
      <div className="logInBlock">
        <form action="" className="logInForm" onSubmit={handleSubmit}>
          <h1>Access your tracker</h1>
          <p
            ref={errRef}
            className={errMsg ? "alert alert-danger" : "offscreen"}
          >
            {errMsg}
          </p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              ref={userRef}
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-shield-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Sign in <i className="bi bi-box-arrow-in-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
