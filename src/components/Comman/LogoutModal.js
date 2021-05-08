import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Close from "./../../assets/Images/Webapp/svg/Close.svg";

const LogoutModal = (props) => {
  const { onLogoutClick, onLogoutCancel } = props;
  return (
    <Modal show={true} className="custom-stp-modal-error">
      <Modal.Body className="custom-modal-body error">
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <div className="d-flex m-4">
            {" "}
            <div>
              <img
                src={Close}
                className="close-btn"
                onClick={() => {
                  onLogoutCancel();
                }}
              />
            </div>
          </div>
          <p>Are you sure want to sign out?</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer alerts-modal">
        <div className="d-flex w-100 justify-content-end align-items-center">
          <div className="my-2 mx-4">
            <Button
              variant="secondary"
              onClick={() => {
                onLogoutCancel();
              }}
            >
              No
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                onLogoutClick();
              }}
            >
              Yes
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default LogoutModal;
