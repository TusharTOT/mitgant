import React from "react";

const PasswordChange = (props) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="validationCustom01">Password</label>
          <input
            type="password"
            className={`form-control form-control-lg ${
              errors.password && touched.password ? "has-error" : ""
            }`}
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="text-danger">{errors.password}</p>
          )}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="validationCustom01">Confirm Password</label>
          <input
            type="password"
            className={`form-control form-control-lg ${
              errors.confirmPassword && touched.confirmPassword
                ? "has-error"
                : ""
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
      </div>
      <div className="d-flex justify-content-end">
        <div>
          <button
            type="Submit sign-button"
            className="btn btn-primary  btn-common"
            disabled={isSubmitting}
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default PasswordChange;
