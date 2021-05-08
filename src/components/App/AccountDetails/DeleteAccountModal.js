import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import Close from "./../../../assets/Images/Webapp/svg/Close.svg";
import DeleteAccountForm from "./DeleteAccountForm";
import { DeleteAccount, logOut } from "./../../../actions/Auth";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
const DeleteAccountModal = (props) => {
  const { onModalCloseClick } = props;
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <Modal show={true} className="custom-stp-modal delete-model">
      <Modal.Body className="custom-modal-body error ">
        <>
          <div>
            <div className="d-flex">
              <div>
                <img
                  src={Close}
                  className="close-btn"
                  onClick={() => {
                    onModalCloseClick();
                  }}
                />
              </div>

              <div className="w-100">
              <div className="popup-content">
                  <b>Delete account confirmation</b>
                  <p>
                    This action cannot be undone. This will permanently delete
                    this account, alerts, assessments and remove all customer
                    associations/links. You will be logged out afterwards.
                  </p>
                  <hr></hr>
                </div>
                <div className="form-div">
                  <div className="innerform w-100 bg-white">
                    <Formik
                      initialValues={{ accountNumber: "" }}
                      validationSchema={Yup.object().shape({
                        accountNumber: Yup.string()
                          .trim()
                          .required("Please add Account number*"),
                      })}
                      onSubmit={(values, { setSubmitting, resetForm }) => {
                        const accountNo = values.accountNumber;

                        setTimeout(() => {
                          // dispatch(DeleteAccount(logOut, props.history));
                          props.history.push("/login");
                          setSubmitting(false);
                        }, 500);
                      }}
                    >
                      {(props) => (
                        <DeleteAccountForm
                          {...props}
                          onModalCloseClick={onModalCloseClick}
                          userData={userData}
                        />
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Modal.Body>
      {/* <Modal.Footer className="custom-modal-footer">
    <div className="d-flex w-100 justify-content-between align-items-center">
      <div className="ml-4">
        {!isFirstStep && (
          <p
            className="skip-btn mb-0"
            onClick={() => {
              handleBackStepsClick();
            }}
          >
            Back
          </p>
        )}
      </div>
      <div className="my-2 mx-4">
        <Button
          variant="secondary"
          onClick={() => {
            handlePasswordModalClose();
          }}
        >
          Cancel
        </Button>
        {isFirstStep ? (
          <Button
            variant="primary"
            onClick={() => {
              // handleNextStepsClick();
              bindSubmitFormTwo();
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => {
              handleNextStepsClick();
            }}
          >
            Change Password
          </Button>
        )}
      </div>
    </div>
  </Modal.Footer> */}
    </Modal>
  );
};

export default DeleteAccountModal;
