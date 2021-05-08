import React from 'react';
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import awsLogo from '../../assets/Images/Webapp/png/aws.png';
import arrowicon from "../../assets/Images/Webapp/svg/Sidebar/arrow-icon.svg";
import { useSelector } from 'react-redux';

const myFunction = () => {
  var element = document.getElementById("sidemenu");
  element.classList.toggle("smallbar");

  var element = document.getElementById("topbar");
  element.classList.toggle("active");

}

const AppHeader = () => {

  const { accountNo } = useSelector(({ auth }) => auth);
  const userInfo = JSON.parse(localStorage.getItem("userData"));
  const accountNumber = accountNo ? accountNo : (userInfo && userInfo.accountNo);
  return (
    <div className="topbar d-flex align-items-center" id="topbar">
      <Nav.Link onClick={() => myFunction()} className="text-right arrowside d-block d-md-none" id="arrowside">
        <img src={arrowicon} alt="arrow" />
      </Nav.Link>
      <div className="ml-auto">
        <span className="border-right py-3 px-3" data-tut="severity-level">Severity level: 7/10 <label className="badge badge-warning mb-0">High</label></span>
        <span className="py-3 px-3" data-tut="account-id">
          {accountNumber && (
            <>
              <img src={awsLogo} alt="aws-logo" />
              <span className="border-right mr-2 ml-2 pr-2">{accountNumber}</span>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default withRouter(AppHeader);