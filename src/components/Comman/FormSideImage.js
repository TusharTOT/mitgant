import React from "react";
import regIimg from "../../assets/Images/Webapp/png/homepage.png";
import signinImg from "../../assets/Images/Webapp/png/signin.png";
import forgetImg from "../../assets/Images/Webapp/png/forget.png";
import logo from "../../assets/Images/png/logowhite.png";
import arrow from "../../assets/Images/svg/arrow.svg";
const FormSideImage = (props) => {
	const sideImg =
		props.page === "signup"
			? regIimg
			: props.page === "login"
				? signinImg
				: forgetImg;
	const sideImgtext = props.page;
	return (
		<div className="col-md-7 loginimg">
			<img src={sideImg} alt="register-bg" className="left-img" />
			<img src={logo} className="sideimg-logo" alt="logo" />
			{sideImgtext === "signup" && (
				<p>Reduce cyber risk, prevent breaches and protect your cloud data.</p>
			)}
			{sideImgtext === "login" && (
				<>
					<p>
						Reduce cyber risk, prevent breaches and protect your cloud data.
            <br />
						<span>
							learn more <img className="ml-2" src={arrow} alt="arrow" />
						</span>
					</p>
				</>
			)}
		</div>
	);
};
export default FormSideImage;
