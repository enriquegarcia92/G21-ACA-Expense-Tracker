import React, { useState } from "react";

const ADD_EXPENSE_URL = "/expense/add/";

const AddExpense = () => {
  const ADD_EXPENSE_URL = "/expense/add/";
  const [showModal, setShowModal] = useState(false);
  const [number, setNumber] = useState(1);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }  

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }  

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
  }  
  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }  

  const handleConfirm = () => {
    handleCloseModal();
  };

  return (
    <>
      <button className="btn btn-primary btn-lg fs-3" onClick={handleOpenModal}>
        New Expense
        <i className="bi bi-plus fs-4"></i>
      </button>

      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
        aria-hidden={!showModal}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fs-4">Register Expense</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleCloseModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label for="categoryField" className="form-label">
                Category
              </label>
              <select
                id="categoryField"
                className="form-select form-select-lg mb-3"
                onChange={handleCategoryChange}
                value={category}
              >
                <option value="0">Choose a category</option>
                <option value="Food">Food</option>
                <option value="Clothing">Clothing</option>
                <option value="Housing">Housing</option>
                <option value="Debt Repayment">Debt Repayment</option>
              </select>
              <div class="mb-3">
                <label for="nameField" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="nameField"
                  placeholder="McDonald's double cheeseburger"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div class="mb-3">
                <label for="descriptionField" className="form-label">
                  Description
                </label>
                <textarea
                  type="text"
                  className="form-control form-control-lg"
                  id="descriptionField"
                  placeholder="Description"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <label for="amountField" className="form-label">
                Amount
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <input
                  type="text"
                  id="amountField"
                  className="form-control form-control-lg"
                  aria-label="Amount (to the nearest dollar)"
                  value={amount}
                  onChange={handleAmountChange}
                />
              </div>
              <label for="quantityField" className="form-label">
                Quantity
              </label>
              <div className="input-group input-group-lg">
                <button className="btn btn-secondary" onClick={handleDecrease}>
                  -
                </button>
                <input
                  type="text"
                  className="form-control"
                  value={number}
                  onChange={handleQuantityChange}
                  readOnly
                />
                <button className="btn btn-secondary" onClick={handleIncrease}>
                  +
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <p className="fs-4">Total: </p>
              <button className="btn btn-success fs-4" onClick={handleConfirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
