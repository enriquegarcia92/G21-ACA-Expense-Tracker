import React, { useState } from "react";
import Axios from "../../api/Axios";
import { generateDate } from "../../utils/utils";


const ActionButtonsIncome = ({income}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [category, setCategory] = useState(income.categoria);
  const [name, setName] = useState(income.nombre);
  const [description, setDescription] = useState(income.descripcion);
  const [amount, setAmount] = useState(income.monto);
  const DELETE_EXPENSE_URL = "/income/delete/";
  const UPDATE_INCOME_URL = "/income/edit/";

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


  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleUpdateClick = () => {
    setShowUpdateModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleUpdateModalClose = () => {
    setShowUpdateModal(false);
  };
  const handleDeleteConfirm = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await Axios.delete(
        DELETE_EXPENSE_URL + income.idingreso,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: false,
        }
      );
      console.log(response.data);
      setExpenses(response.data);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
    window.location.reload()
  };

  const handleUpdateConfirm = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const currentDate = generateDate();
      const response = await Axios.put(
        UPDATE_INCOME_URL + income.idingreso,
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
    setShowUpdateModal(false);
  };


  return (
    <div>
      <button
        className="btn btn-danger"
        data-bs-toggle="modal"
        data-bs-target="#deleteModal"
      >
        Delete
      </button>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#updateModal"
      >
        Update
      </button>

      {/* Delete Modal */}
      <div
        className={`modal fade ${showDeleteModal ? "show" : ""}`}
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden={!showDeleteModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleDeleteModalClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleDeleteModalClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Update Modal */}
      <div
        className={`modal fade ${showUpdateModal ? "show" : ""}`}
        id="updateModal"
        tabIndex="-1"
        aria-labelledby="updateModalLabel"
        aria-hidden={!showUpdateModal}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="updateModalLabel">
                Update
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleUpdateModalClose}
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
              </div>
              <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={handleUpdateModalClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUpdateConfirm}
            >
              Confirm
            </button>
          </div>
              </div>
            </div>
          </div>
        
      </div>
  );
};

export default ActionButtonsIncome;
