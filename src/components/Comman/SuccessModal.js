import React, { useState, useEffect } from "react";
import emilSent from "../../assets/Images/svg/Email-Send.svg";
import checkImg from "../../assets/Images/svg/Check.svg";
import verifiedImg from "../../assets/Images/svg/verified.svg";
import lockImg from "../../assets/Images/svg/lock.svg";
import whiteLogo from "../../assets/Images/png/logowhite.png";
const SuccessModal = (props) => {
	const { history } = props;
	const [modalFrom, setmodalFrom] = useState(null);
	useEffect(() => {
		setmodalFrom(history.location.state.from);
	}, [history]);

	const onSigninClick = () => {
		props.history.push("/login");
	};
	return (
		<div className="success-modal">
			<img className="logo" src={whiteLogo} alt="logo" />
			<div className="success-box">
				{modalFrom === "forgotpassword" && (
					<>
						<img className="my-5" src={emilSent} alt="mail-sent" />
						<h5>Email has been sent</h5>
						<p className="my-4">
							A link to reset your password has been sent to your email.{" "}
						</p>
					</>
				)}
				{modalFrom === "resetpassword" && (
					<>
						<img className="my-5" src={lockImg} alt="reset-password" />
						<h5>New Password Saved</h5>
						<p className="my-4">Please sign in with your new password.</p>
					</>
				)}
				{modalFrom === "registration" && (
					<>
						<img className="my-5" src={checkImg} alt="checktrue" />
						<h5>You almost there!</h5>
						<p className="my-4">
							Thanks for registering to the Mitigant. We were sent a email to
							you verify. Please check the inbox/spam folder for the email you
							used during registration process.
            </p>
					</>
				)}
				{modalFrom === "accountverified" && (
					<>
						<img className="my-5" src={verifiedImg} alt="checktrue" />
						<h5>Your account has been verified.</h5>
						<p className="my-4">
							Please use the login link below to sign in to start using the
							solutions on Mitigant platform.
            </p>
					</>
				)}
				<hr></hr>
				{modalFrom === "forgotpassword" && (
					<>
						<button className="btn-common my-3" onClick={onSigninClick}>
							Back to sign in
            </button>
						<button className="link-button">
							<a href=" ">Resend Link</a>
						</button>
					</>
				)}
				{modalFrom === "resetpassword" && (
					<button className="btn-common my-3" onClick={onSigninClick}>
						sign in
					</button>
				)}
				{modalFrom === "registration" && (
					<button className="btn-common my-3" onClick={onSigninClick}>
						Login
					</button>
				)}
				{modalFrom === "accountverified" && (
					<button className="btn-common my-3" onClick={onSigninClick}>
						sign in
					</button>
				)}
			</div>
		</div>
	);
};
export default SuccessModal;
