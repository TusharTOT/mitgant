import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const PasswordChangeForm = (props) => {
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
    handleNextStepsClick,
    handleBackStepsClick,
    isFirstStep,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="validationCustom01">Password</label>
        <input
          type="password"
          className={`form-control form-control-lg ${
            errors.password && touched.password ? "has-error" : ""
          }`}
          id="Password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <p className="text-danger">{errors.password}</p>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="validationCustom01">Confirm Password</label>
        <input
          type="password"
          className={`form-control form-control-lg ${
            errors.confirmPassword && touched.confirmPassword ? "has-error" : ""
          }`}
          id="ConfirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="text-danger">{errors.confirmPassword}</p>
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
              <Button
                variant="primary"
                onClick={() => {
                  handleNextStepsClick();
                }}
              >
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

export default PasswordChangeForm;
