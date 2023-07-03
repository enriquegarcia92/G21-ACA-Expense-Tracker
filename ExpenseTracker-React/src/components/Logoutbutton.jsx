import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.reload();
  };

  return (
    <button className="btn btn-secondary btn-lg shadow fs-3" onClick={handleLogout}>
      Log out <i className="bi bi-box-arrow-right"></i>
    </button>
  );
};

export default LogoutButton;
