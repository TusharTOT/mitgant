import React from "react";
import googleIcon from "../../assets/Images/Webapp/svg/google.svg";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
const SigninForm = (props) => {
	const responseGoogle = (response) => {
	};
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
			<div className="form-group">
				<label htmlFor="validationCustom01">Email</label>
				<input
					type="text"
					className={`form-control form-control-lg ${errors.email && touched.email ? "has-error" : ""
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
				<label htmlFor="validationCustom01">Password</label>
				<input
					type="password"
					className={`form-control form-control-lg ${errors.password && touched.password ? "has-error" : ""
						}`}
					id="Password"
					placeholder="Enter your password"
					name="password"
					value={values.password}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				{errors.password && touched.password && (
					<p className="text-danger">{errors.password}</p>
				)}
			</div>
			<div className="d-flex justify-content-end">
				<Link to="/forgot">Forgot Password ?</Link>
			</div>
			<div className="form-group mt-4">
				<button
					type="Submit sign-button"
					className="btn btn-primary w-100 btn-common"
					disabled={isSubmitting}
				>
					Sign In
        </button>
			</div>
			<div className="form-group mt-4 social-login-button">
				{/* <hr className="hr-text" data-content="OR"></hr> */}
				<p>Or</p>
				<div className="google-btn">
					<GoogleLogin
						clientId="1022011669056-v3goklbtur85q71civ7r9k4ma4v3if19.apps.googleusercontent.com"
						onSuccess={responseGoogle}
						onFailure={responseGoogle}
						cookiePolicy={"single_host_origin"}
						icon={false}
						disabled
					>
						<span>Sign In With Google</span>
						<img src={googleIcon} className="ml-3" alt="googleIcon" />
					</GoogleLogin>
				</div>
			</div>
		</form>
	);
};
export default SigninForm;
