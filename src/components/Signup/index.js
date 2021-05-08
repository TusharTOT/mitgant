import googleIcon from "../../assets/Images/Webapp/svg/google.svg";
import errorIcon from "../../assets/Images/svg/input-error.svg";
import { GoogleLogin } from "react-google-login";
import { Field } from "formik";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PasswordStrengthIndicator from "../../containers/Signup/PasswordStrengthIndicator";
const RegistrionForm = (props) => {
  const responseGoogle = (response) => {};
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    onChangePassword,
    passwordValidity,
    userPassword,
    confirmPassword,
    onChangeConfirmPassword,
    passwordMatch,
    passwordError,
    passwordFocused,
  } = props;

  return (
    <section className="form-div">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="validationCustom01">First Name </label>
          <input
            type="text"
            className={`form-control form-control-lg ${
              errors.firstName && touched.firstName ? "has-error" : ""
            }`}
            id="firstName"
            placeholder="Enter your first name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <p className="text-danger">{errors.firstName}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="validationCustom01">Last Name </label>
          <input
            type="text"
            className={`form-control form-control-lg ${
              errors.lastName && touched.lastName ? "has-error" : ""
            }`}
            id="lastName"
            placeholder="Enter your last name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <p className="text-danger">{errors.lastName}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="validationCustom01">Email </label>
          <input
            type="text"
            className={`form-control form-control-lg ${
              errors.email && touched.email ? "has-error" : ""
            }`}
            id="Email"
            placeholder="Enter your email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="text-danger">{errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="validationCustom01">Password </label>
          <input
            type="password"
            className={`form-control form-control-lg ${
              passwordError || passwordFocused ? "has-error" : ""
            }`}
            id="Password"
            placeholder="Enter Password"
            name="password"
            value={userPassword}
            onChange={onChangePassword}
          />
          {passwordError && <p className="text-danger">Password required</p>}
          {passwordError || passwordFocused ? (
            <OverlayTrigger
              placement="left"
              trigger="manual" show={passwordFocused}
              overlay={
                <Tooltip className="signup-popover">
                  <PasswordStrengthIndicator validity={passwordValidity} />
                </Tooltip>
              }
            >
              <img className="error-icon" src={errorIcon} alt="error-icon" />
            </OverlayTrigger>
          ) : (
            ""
          )}
        </div>
        <div className="form-group">
          <label htmlFor="validationCustom01">Confirm Password</label>
          <input
            type="password"
            className={`form-control form-control-lg ${
              passwordMatch ? "has-error" : ""
            }`}
            id="ConfirmPassword"
            placeholder="Re-Enter Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            onBlur={handleBlur}
          />
          {passwordMatch && (
            <p className="text-danger">Password does't match</p>
          )}
        </div>
        <label>
          <Field
            type="checkbox"
            name="acceptTerms"
            className="form-check-input"
            id="tandc"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          By checking this, you agreed to{" "}
          <span>
            <a href=" ">terms</a>
          </span>{" "}
          and <a href=" ">conditions</a> of registration on Mitigant.
        </label>
        {errors.acceptTerms && touched.acceptTerms && (
          <p className="text-danger">{errors.acceptTerms}</p>
        )}
        <div className="form-group mt-4">
          <button
            type="Submit"
            className="btn btn-primary w-100 btn-common"
            disabled={isSubmitting}
          >
            Sign Up
          </button>
          <div className="google-btn">
            <GoogleLogin
              clientId="1022011669056-v3goklbtur85q71civ7r9k4ma4v3if19.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
              icon={false}
              disabled
            >
              <span>Sign Up with Google</span>
              <img src={googleIcon} className="ml-3" alt="googleIcon" />
            </GoogleLogin>
          </div>
        </div>
      </form>
    </section>
  );
};

export default RegistrionForm;
