import { useRef, useState, useEffect } from "react";
import "../sign-up/SignUp.scss";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
  const userRef = useRef();
  const ErrRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [pwdMatch, setPwdMatch] = useState("");
  const [validPwdMatch, setValidPwdMatch] = useState(false);
  const [pwdMatchFocus, setPwdMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === pwdMatch;
    setValidPwdMatch(match);
  }, [pwd, pwdMatch]);

  useEffect(() => {
    setErrMsg("");
  }, [user, email, pwd, pwdMatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PWD_REGEX.test(pwd);

    if (!v1 || !v2 || !v3) {
      setErrMsg("Invalid Entry");
    }

    try {
      const response = import("../sign-up/Register.js").then((Register) => {
        Register.Register(user, email, pwd);
      });
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }
    }
  };

  return (
    <div className="pageContainer">
      <div className="registerBlock">
        <div className={success ? "userCreatedConfirmation" : "offscreen"}>
          <p className= "alert alert-success">
            Account created succesfully!
          </p>
          <a href="log-in/Login.jsx" className="btn btn-success">
            Log in <i className="bi bi-box-arrow-in-right"/>
          </a>
        </div>
        <form
          onSubmit={handleSubmit}
          className={!success ? "registerForm" : "offscreen"}
        >
          <h1>Register an account</h1>
          <p
            ref={ErrRef}
            className={errMsg ? "alert alert-danger" : "offscreen"}
          >
            {errMsg}
          </p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i class="bi bi-person-circle"></i>
            </span>
            <input
              ref={userRef}
              required
              type="text"
              className="form-control"
              onChange={(e) => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              placeholder="Name"
            />
          </div>
          <p
            id="uidnote"
            className={
              userFocus && user && !validName
                ? "alert alert-secondary"
                : "offscreen"
            }
          >
            4 to 24 characters. <br />
            Must begin with a letter. <br />
            Letters, numbers, underscores, hyphens allowed.
          </p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="eidnote"
            />
          </div>
          <p
            id="eidnote"
            className={
              emailFocus && email && !validEmail
                ? "alert alert-secondary"
                : "offscreen"
            }
          >
            Please use a valid email.
          </p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-shield-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              placeholder="Choose your password"
            />
          </div>
          <p
            id="pwdnote"
            className={
              pwdFocus && !validPwd ? "alert alert-secondary" : "offscreen"
            }
          >
            8-24 characters. <br />
            Must include uppercase and lowercase letters, a number and a special
            character. <br />
            Allowed characters: ! @ # $ %
          </p>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-shield-lock"></i>
            </span>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPwdMatch(e.target.value)}
              required
              aria-invalid={validPwdMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setPwdMatchFocus(true)}
              onBlur={() => setPwdMatchFocus(false)}
              placeholder="Confirm your password"
            />
          </div>
          <p
            id="confirmnote"
            className={
              pwdMatchFocus && !validPwdMatch
                ? "alert alert-secondary"
                : "offscreen"
            }
          >
            Must match the first password field.
          </p>
          <button className="btn btn-primary">
            Sign up <i className="bi bi-check-circle"></i>
          </button>
        </form>
      </div>
      <div className="greenBlock"></div>
    </div>
  );
};

export default SignUp;
