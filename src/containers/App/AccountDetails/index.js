import { React, lazy, useState } from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import AccountLog from "./AccountLog";
import PasswordChange from "./PasswordChange";
import UserDetails from "./UserDetails";
import DeleteAccountModal from "../../../components/App/AccountDetails/DeleteAccountModal";
import sendicon from "../../../assets/Images/Webapp/png/send-icon.png";
const AccountDetails = (props) => {
  const [isDeletemodal, setIsDeleteModal] = useState(false);

  const onDeleteAccountClick = () => {
    setIsDeleteModal(true);
  };

  const onModalCloseClick = () => {
    setIsDeleteModal(false);
  };
  return (
    <div>
      <div className="heading">
        <b>Account Details</b>
      </div>
      <Row>
        <UserDetails />
        <AccountLog />
      </Row>
      {/* <Row>
        <PasswordChange />
      </Row> */}
      <Row>
        <Col className="pr-md-0 mt-2" md={9}>
          <div className="card">
            <div className="card-body">
              <div className="send-icon">
                <img src={sendicon} alt="sendicon" />
                <span>Send feedbacks</span>
              </div>
            </div>
          </div>
        </Col>
        <Col className="pr-md-0 mt-2" md={3}>
          <button
            className="w-100 delete-button"
            onClick={onDeleteAccountClick}
          >
            Delete Account
          </button>
        </Col>
      </Row>
      {isDeletemodal && (
        <DeleteAccountModal onModalCloseClick={onModalCloseClick} {...props} />
      )}
    </div>
  );
};

export default AccountDetails;
