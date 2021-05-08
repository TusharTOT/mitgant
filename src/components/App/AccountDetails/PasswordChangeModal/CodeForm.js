import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const CodeForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    call,
    handlePasswordModalClose,
    handleBackStepsClick,
    isFirstStep,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="validationCustom01">Enter code confirmation</label>
        <input
          type="text"
          className={`form-control form-control-lg ${
            errors.code && touched.code ? "has-error" : ""
          }`}
          id="Code"
          name="Code"
          value={values.code}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.code && touched.code && (
          <p className="text-danger">{errors.code}</p>
        )}
      </div>
      <Modal.Footer className="custom-modal-footer">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="ml-4">
            {!isFirstStep && (
              <p
                className="skip-btn mb-0"
                onClick={() => {
                  handleBackStepsClick();
                }}
              >
                Back
              </p>
            )}
          </div>
          <div className="my-2 mx-4">
            <Button
              variant="secondary"
              onClick={() => {
                handlePasswordModalClose();
              }}
            >
              Cancel
            </Button>
            {isFirstStep ? (
              <Button variant="primary" type="Submit">
                Next
              </Button>
            ) : (
              <Button variant="primary" type="Submit">
                Change Password
              </Button>
            )}
          </div>
        </div>
      </Modal.Footer>
      {/* <div className="form-group mt-4">
    <button
      type="Submit sign-button"
      className="btn btn-primary w-100 btn-common"
      disabled={isSubmitting}
    >
      Send
    </button>
  </div> */}
    </form>
  );
};

export default CodeForm;
