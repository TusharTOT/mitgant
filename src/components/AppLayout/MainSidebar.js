import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutModal from "../Comman/LogoutModal";
import logo from "../../assets/Images/Webapp/svg/small-logo.svg";
import userImg from "../../assets/Images/Webapp/svg/avtar.svg";
import userimgactive from "../../assets/Images/Webapp/svg/Sidebar/avatar-active.svg";
import logoutImg from "../../assets/Images/Webapp/svg/Sidebar/logout.svg";
import integration from "../../assets/Images/Webapp/svg/Sidebar/integration.svg";
import inventory from "../../assets/Images/Webapp/svg/Sidebar/inventory.svg";
import integrationactive from "../../assets/Images/Webapp/svg/Sidebar/integration-active.svg";
import inventoryactive from "../../assets/Images/Webapp/svg/Sidebar/inventory-active.svg";
import info from "../../assets/Images/Webapp/svg/Sidebar/info.svg";
import infoactive from "../../assets/Images/Webapp/svg/Sidebar/info-active.svg";
import question from "../../assets/Images/Webapp/svg/Sidebar/question.svg";
import resource from "../../assets/Images/Webapp/svg/Sidebar/network.svg";
import settings from "../../assets/Images/Webapp/svg/Sidebar/setting.svg";
import Settingsactive from "../../assets/Images/Webapp/svg/Sidebar/setting-active.svg";
import report from "../../assets/Images/Webapp/svg/Sidebar/report.svg";
import reportactive from "../../assets/Images/Webapp/svg/Sidebar/report-active.svg";
import helth from "../../assets/Images/Webapp/svg/Sidebar/helth.svg";
import arrowicon from "../../assets/Images/Webapp/svg/Sidebar/arrow-icon.svg";
import dashboardactive from "../../assets/Images/Webapp/svg/Sidebar/dashboard-active.svg";
import dashboard from "../../assets/Images/Webapp/svg/Sidebar/dashboard.svg";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/Auth";

const myFunction = () => {
  var element = document.getElementById("sidemenu");
  element.classList.toggle("smallbar");
};

const MainSidebar = (props) => {
  const path = props.location.pathname;
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();
  const onLogoutClick = () => {
    dispatch(logOut());
    props.history.push("/login");
  };
  const onLogoutCancel = () => {
    setIsModal(false);
  };
  const checkActiveLink = (path) => {
    const location = props.location.pathname.split("/")[2];

    if (location === path) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <React.Fragment>
      <div className="innerdiv" data-tut="menu-access">
        <Nav.Link
          as={Link}
          className="logopart d-flex align-items-center justify-content-center"
        >
          <img src={logo} alt="logo" /> <h5 className="mb-0">Mitigant</h5>
        </Nav.Link>
        <Nav.Link
          onClick={() => myFunction()}
          className="text-right arrowside"
          id="arrowside"
        >
          <img src={arrowicon} alt="arrow" />
        </Nav.Link>

        <nav className="sidebar">
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("dashboard") ? true : false}
              as={Link}
              to="/app/dashboard"
            >
              <img
                src={checkActiveLink("dashboard") ? dashboardactive : dashboard}
                alt="dashboard"
              />
              <span className="label">Dashboard</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("assessment") ? true : false}
              as={Link}
              to="/app/assessment"
            >
              <img
                src={checkActiveLink("assessment") ? reportactive : report}
                alt="Assessment"
              />{" "}
              <span className="label">Assessment</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("alerts") ? true : false}
              as={Link}
              to="/app/alerts"
            >
              <img
                src={checkActiveLink("alerts") ? infoactive : info}
                alt="Alert"
              />{" "}
              <span className="label">Alert</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("inventory") ? true : false}
              as={Link}
              to="/app/inventory"
            >
              <img
                src={checkActiveLink("inventory") ? inventoryactive : inventory}
                alt="Alert"
              />{" "}
              <span className="label">Inventory</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}>
              <img src={resource} alt="resource tree" />{" "}
              <span className="label light">Resource Tree</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}>
              <img src={helth} alt="Security Verification" />{" "}
              <span className="label light">Security Verification</span>
            </Nav.Link>
          </Nav.Item>
          <hr />
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("integrations") ? true : false}
              as={Link}
              to="/app/integrations"
            >
              <img
                src={
                  checkActiveLink("integrations")
                    ? integrationactive
                    : integration
                }
                alt="Alert"
              />{" "}
              <span className="label">Integrations</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("settings") ? true : false}
              as={Link}
              to="/app/settings"
            >
              <img
                src={checkActiveLink("settings") ? Settingsactive : settings}
                alt="Alert"
              />{" "}
              <span className="label">Settings</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link}>
              <img src={question} alt="faq's" />{" "}
              <span className="label">FAQ'S</span>
            </Nav.Link>
          </Nav.Item>
          <hr />
          <Nav.Item>
            <Nav.Link
              active={checkActiveLink("accountdetails") ? true : false}
              as={Link}
              to="/app/accountdetails"
            >
              <img
                src={
                  checkActiveLink("accountdetails") ? userimgactive : userImg
                }
                alt="account"
              />{" "}
              <span className="label">Account</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item onClick={() => setIsModal(true)}>
            <Nav.Link as={Link}>
              <img src={logoutImg} alt="logout" />
              <span className="label">Sign Out</span>
            </Nav.Link>
          </Nav.Item>
        </nav>
      </div>
      {isModal && (
        <LogoutModal
          onLogoutClick={onLogoutClick}
          onLogoutCancel={onLogoutCancel}
        />
      )}
    </React.Fragment>
  );
};

export default MainSidebar;
