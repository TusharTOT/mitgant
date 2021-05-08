import React, { useEffect } from "react";
import verifiedImg from "../../assets/Images/svg/verified.svg";
import whiteLogo from "../../assets/Images/png/logowhite.png";
import { useDispatch } from 'react-redux'
import { EmailVerification } from '../../actions/Auth'
const VerifiedModal = (props) => {
	const dispatch = useDispatch()
	const verifiedToken = props.match.params.id
	const onSigninClick = () => {
		props.history.push("/login");
	};
	useEffect(() => {
		dispatch(EmailVerification(verifiedToken, props.history))
	}, []);
	return (
		<div className="success-modal">
			<img className="logo" src={whiteLogo} alt="logo" />
			<div className="success-box">
				<>
					<img className="my-5" src={verifiedImg} alt="checktrue" />
					<h5>Your account has been verified.</h5>
					<p className="my-4">
						Please use the login link below to sign in to start using the
						solutions on Mitigant platform.
                          </p>
				</>
				<hr></hr>
				<button className="btn-common my-3" onClick={onSigninClick}>
					sign in
					</button>
			</div>
		</div>
	);
};
export default VerifiedModal;
