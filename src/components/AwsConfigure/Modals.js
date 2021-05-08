import React, { useEffect, useState, useCallback } from "react";
import Modal from "react-bootstrap/Modal";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import Charkolaunch from "./../../assets/Images/Webapp/png/charkolaunch.png";
import Sucess from "./../../assets/Images/svg/Check.svg";
import CheckFalse from "./../../assets/Images/svg/CheckFalse.svg";
import Close from "./../../assets/Images/Webapp/svg/Close.svg";
import { useSelector, useDispatch } from 'react-redux';
import { linkUpdate } from './../../actions/Auth';
import { useHistory } from 'react-router-dom';

const ModalExample = (props) => {
  const {
    handleModalClose,
    isModal,
  } = props;


  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { linkStatus, linkComplete, linkProgress } = useSelector(({ notificationReducer }) => notificationReducer);
  const messageStatus = linkStatus.length > 0 ? linkStatus[linkStatus.length - 1] : [];

  const triggerLinkUpdate = useCallback(
    async (status, details) => {
      await dispatch(linkUpdate(status, details));
      history.push('/app/dashboard');
    },
    [dispatch, history],
  );

  useEffect(() => {
    const complete = linkComplete && linkComplete.type === 'EMAIL_COMPLETE';
    if (complete) {
      setTimeout(() => {
        triggerLinkUpdate(true, linkComplete);
      }, 3000);
    }
  }, [linkComplete, triggerLinkUpdate, linkProgress]);

  const checkLinkStatus =
    linkComplete && linkComplete.type === 'EMAIL_COMPLETE';

  useEffect(() => {
    if (isModal) {
      linkStatus && linkStatus.forEach((status) => {
        if (status.status === 'ERROR') setDisplay(true);
      });
    }
  }, [linkStatus, isModal]);

  return (
    <Modal show={isModal}>
      <Modal.Body className={`custom-modal-body ${display ? "error" : ""}`}>
        <>
          {
            linkStatus && display ? (
              <div className="d-flex mx-4 mb-4 justify-content-center">
                <div className="d-flex justify-content-center align-items-center flex-column">
                  {" "}
                  <img
                    src={Close}
                    className="close-btn"
                    onClick={() => {
                      handleModalClose();
                    }}
                  />{" "}
                  <img src={CheckFalse} />
                  <div className="d-flex justify-content-center align-items-center flex-column">
                    <h3 className="mt-1">1 Error Validation Detected</h3>
                    <p className="mx-5">
                      {messageStatus.message}
                    </p>
                    <Button
                      variant="danger"
                      className="mt-1"
                      onClick={() => {
                        handleModalClose();
                      }}
                    >
                      Try Again
                  </Button>
                  </div>
                </div>
              </div>
            ) :
              linkStatus ? (
                <div>
                  <div className="d-flex m-4">
                    <div>
                      {" "}
                      <img src={Charkolaunch} />
                    </div>
                    <div>
                      <h3>Linking your account </h3>
                      <p>
                        {messageStatus.message}
                      </p>
                      {/* <ul className="notification__noheight">
                        {linkStatus &&
                          linkStatus.length > 0 &&
                          linkStatus.map((notification, index) => {
                            return (
                              <li
                                className={`text-center notification__type-${notification.status.toLowerCase()}`}
                                key={index}
                              >
                                {notification.message}
                              </li>
                            );
                          })}
                      </ul> */}
                    </div>
                  </div>
                  <div className="modal-progressbar mb-4 mx-4">
                    <ProgressBar now={linkProgress} />
                    <p style={{ color: '#3d70b2' }} className="text-center m-2 font-weight-bold">{`${linkProgress}%`}</p>
                  </div>
                </div>
              ) :
                checkLinkStatus && (
                  <div className="d-flex mx-4 mb-4 justify-content-center">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                      <img
                        src={Close}
                        className="close-btn"
                        onClick={() => {
                          handleModalClose();
                        }}
                      />
                      <img src={Sucess} />
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <h3 className="mt-4">Linking succesfully! </h3>
                        <p>Now you can start using Mitigant service.</p>
                      </div>
                    </div>
                  </div>
                )
          }
        </>
      </Modal.Body>
    </Modal>
  );
};

export default ModalExample;
