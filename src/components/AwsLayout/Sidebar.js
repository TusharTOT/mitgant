import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import logo from "../../assets/Images/Webapp/svg/small-logo.svg";
import userImg from "../../assets/Images/Webapp/svg/avtar.svg";
import logoutImg from "../../assets/Images/Webapp/svg/Sidebar/logout.svg";
import awsImg from "../../assets/Images/Webapp/png/aws.png";
import { Link } from "react-router-dom";
import LogoutModal from './../Comman/LogoutModal';
import { logOut } from './../../actions/Auth';
import { useDispatch } from 'react-redux';
import UseIdle from './../UseIdle';

const Sidebar = (props) => {
  const [isModal, setIsModal] = useState(false);
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logOut());
  };

  const onLogoutCancel = () => {
    setIsModal(false);
  };

  return (
    <React.Fragment>
      <UseIdle />
      <Nav className=" bg-light sidebar mr-auto" activeKey="/home">
        <div className="topbar">
          <Nav.Item>
            <Nav.Link as={Link} to="/dashboard">
              <img src={logo} alt="logo" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="aws-tab">
            <Nav.Link eventKey="link-1">
              <img src={awsImg} alt="aws-logo" />
            </Nav.Link>
          </Nav.Item>
        </div>
        <div className="bottom-bar">
          <Nav.Link className="user-btn d-block" eventKey="link-2">
            <img src={userImg} alt="avtar" />
          </Nav.Link>

          <Nav.Link onClick={() => setIsModal(true)} className="logout-btn d-block" eventKey="link-2">
            <img src={logoutImg} alt="logout" />
          </Nav.Link>
        </div>
        {/* <Nav.Link className="toggle-arrow" eventKey="link-2">
          <img src={arrow} alt="arrow" />
        </Nav.Link> */}

      </Nav>
      {isModal && (
        <LogoutModal
          onLogoutClick={onLogoutClick}
          onLogoutCancel={onLogoutCancel}
        />
      )}
    </React.Fragment>
  );
};

export default Sidebar;
