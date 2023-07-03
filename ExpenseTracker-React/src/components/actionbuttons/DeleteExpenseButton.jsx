import React from "react";
import PropTypes from "prop-types";

const DeleteExpenseButton = () => {
  const handleClick = () => {
  };

  return (
    <button className="btn btn-danger-lg fs-3" onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteExpenseButton;