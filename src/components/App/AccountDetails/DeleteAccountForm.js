import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const DeleteAccountForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    onModalCloseClick,
    userData,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="validationCustom01">
          Please type {userData.accountNo ? userData.accountNo : 1234567890} to
          confirm.{" "}
        </label>
        <input
          type="password"
          className={`form-control form-control-lg ${
            errors.accountNumber && touched.accountNumber ? "has-error" : ""
          }`}
          id="AccountNumber"
          name="accountNumber"
          placeholder="Enter AWS account number"
          value={values.accountNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.accountNumber && touched.accountNumber && (
          <p className="text-danger">{errors.accountNumber}</p>
        )}
      </div>

      <Modal.Footer className="custom-modal-footer alerts-modal">
        <div className="d-flex w-100 justify-content-end align-items-center">
          <div className="my-2 mx-4">
            <Button
              variant="secondary"
              onClick={() => {
                onModalCloseClick();
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" type="Submit">
              Delete Account
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </form>
  );
};

export default DeleteAccountForm;
