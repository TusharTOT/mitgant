import React from "react";
import { Col } from "react-bootstrap";
import UserDetailsComponent from "../../../components/App/AccountDetails/UserDetails";
import PasswordChange from "./PasswordChange";
const UserDetails = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <Col className="pr-md-0" md={9}>
      <div className="card">
        <div className="card-body">
          <UserDetailsComponent userData={userData} />
        </div>
      </div>
      <div>
        <PasswordChange />
      </div>
    </Col>
  );
};

export default UserDetails;
