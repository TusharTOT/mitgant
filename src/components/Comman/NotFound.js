import React, { PureComponent } from "react";
import notfound from "../../assets/Images/png/notfound.png";

export class NotFound extends PureComponent {
	render() {
		return (
			<div className="not-found d-flex justify-content-center align-items-center flex-column">
				<img src={notfound} alt="not-found"></img>
				<div className="notfound-text text-center">
					<h4>404</h4>
					<h3>Oops! Page not found.</h3>
				</div>
			</div>
		);
	}
}
export default NotFound;
