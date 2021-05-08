import React, { useState, useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PasswordChangeForm from "./PasswordChangeForm";
import { PasswordChange } from "./../../../../actions/Auth";
import CodeForm from "./CodeForm";
import { Formik } from "formik";
import * as Yup from "yup";
import Close from "./../../../../assets/Images/Webapp/svg/Close.svg";

const PasswordChangeModal = (props) => {
  const dispatch = useDispatch();
  const [call, setCall] = useState(false);
  const {
    handlePasswordModalClose,
    handleNextStepsClick,
    handleBackStepsClick,
    isFirstStep,
  } = props;
  return (
    <Modal show={true} className="custom-stp-modal  change-password">
      <Modal.Body className="custom-modal-body">
        <>
          <div>
            <div className="d-flex ">
              <div>
                <img
                  src={Close}
                  className="close-btn"
                  onClick={() => {
                    handlePasswordModalClose();
                  }}
                />
              </div>

              <div className="w-100">
                <div className="popup-content">
                  <b>Change Password</b>
                  {isFirstStep ? (
                    <p>Please enter your new password.</p>
                  ) : (
                    <p>
                      We have sent you a 4 digit confirmation code to proceed
                      this action. Please check your email.
                    </p>
                  )}
                  <hr></hr>
                </div>
                <div className="form-div">
                  <div className="innerform w-100 bg-white">
                    {isFirstStep ? (
                      <Formik
                        initialValues={{
                          password: "",
                          confirmPassword: "",
                        }}
                        // validationSchema={Yup.object().shape({
                        //   password: Yup.string()
                        //     .trim()
                        //     .required("Please add New Password*")
                        //     .matches(
                        //       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                        //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                        //     ),
                        //   confirmPassword: Yup.string()
                        //     .oneOf(
                        //       [Yup.ref("password"), null],
                        //       "Passwords does not  match"
                        //     )
                        //     .required("Please Provide  Confirm Password"),
                        // })}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                          const resetData = {
                            password: values.password,
                          };

                          setTimeout(() => {
                            handleNextStepsClick();
                            dispatch(PasswordChange(resetData));
                            setSubmitting(false);
                          }, 500);
                        }}
                      >
                        {(props) => (
                          <PasswordChangeForm
                            {...props}
                            call={call}
                            handlePasswordModalClose={handlePasswordModalClose}
                            handleNextStepsClick={handleNextStepsClick}
                            handleBackStepsClick={handleBackStepsClick}
                            isFirstStep={isFirstStep}
                          />
                        )}
                      </Formik>
                    ) : (
                      <Formik
                        initialValues={{
                          code: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                          setTimeout(() => {
                            setSubmitting(false);
                          }, 500);
                        }}
                      >
                        {(props) => (
                          <CodeForm
                            {...props}
                            call={call}
                            handlePasswordModalClose={handlePasswordModalClose}
                            handleNextStepsClick={handleNextStepsClick}
                            handleBackStepsClick={handleBackStepsClick}
                            isFirstStep={isFirstStep}
                          />
                        )}
                      </Formik>
                    )}
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

export default PasswordChangeModal;
