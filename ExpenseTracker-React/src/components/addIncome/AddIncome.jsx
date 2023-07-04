import React, { useEffect, useState } from 'react'
import { generateDate } from '../../utils/utils';
import Axios from '../../api/Axios';

const AddIncome = () => {
    const ADD_INCOME_URL = "/income/add/";
    const [showIncomeModal, setIncomeShowModal] = useState(false);
    const [number, setNumber] = useState(1);
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(0);
    const [success, setSuccess] = useState(false);
  
    const handleIncrease = () => {
      setNumber(number + 1);
    };
  
    const handleDecrease = () => {
      if (number > 1) {
        setNumber(number - 1);
      }
    };
  
    useEffect(() => {
      const newTotal = amount * number;
      setTotal(newTotal);
    }, [amount, number]);
  
    const handleCloseModal = () => {
      setIncomeShowModal(false);
      setCategory('');
      setName('');
      setDescription('');
      setAmount(0);
      setNumber(1);
      setTotal(0);
    };
  
    const handleOpenModal = () => {
      setIncomeShowModal(true);
    };
  
    const handleCategoryChange = (event) => {
      setCategory(event.target.value);
    };
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleDescriptionChange = (event) => {
      setDescription(event.target.value);
    };
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
  
  
    const handleConfirmIncome = async (e) => {
      e.preventDefault();
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const currentDate = generateDate();
        console.log(ADD_INCOME_URL+userId)

        const response = await Axios.post(
          ADD_INCOME_URL+userId,
          JSON.stringify({
            nombre: name,
            monto: amount,
            fecha: currentDate,
            categoria: category,
            descripcion: description,
          }),
          {
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: false,
          }
        );
  
        if (response.status === 201) {
          setSuccess(true);
          setCategory('');
          setName('');
          setDescription('');
          setAmount(0);
          setNumber(1);
          setTotal(0);
        }
      } catch (err) {
        console.log(err);
      }
      window.location.reload()
    };
  
    return (
      <>
        <button className="btn btn-primary btn-lg fs-3 ms-3 shadow" onClick={handleOpenModal}>
          New Income
          <i className="bi bi-plus fs-4"></i>
        </button>
  
        <div
          className={`modal fade ${showIncomeModal ? "show" : ""}`}
          style={{ display: showIncomeModal ? "block" : "none" }}
          tabIndex="-1"
          role="dialog"
          aria-hidden={!showIncomeModal}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content shadow">
              <div className="modal-header">
                <h5 className="modal-title fs-4">Register income</h5>
                <div className={success ? "container" : "offscreen"}>
                  <p className="alert alert-success ">Income registered!</p>
                </div>
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
                  <option value="Salary">Salary</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Passive Income">Passive Income</option>
                  <option value="Other">Other</option>
                </select>
                <div class="mb-3">
                  <label for="nameField" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="nameField"
                    placeholder="Source of income"
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
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <p className="fs-4">Total: ${total}</p>
                <button className="btn btn-success fs-4" onClick={handleConfirmIncome}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default AddIncome;
  