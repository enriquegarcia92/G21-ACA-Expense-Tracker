import React from "react";
import NavbarWithDrawer from "../../../features/NavbarWithDrawer";
import AccountForm from "./AccountForm";
import AccountFormData from "./AccountFormData";
import "../account/Account.scss";

const Account = () => {
  return (
    <div className="accountContainer">
      <NavbarWithDrawer />
      <div className="accountInfoSection">
        <AccountFormData />
      </div>
    </div>
  );
};

export default Account;
