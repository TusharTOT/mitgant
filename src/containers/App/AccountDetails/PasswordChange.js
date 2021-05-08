import React, { useState } from "react";
import ChangePassword from "../../../components/App/AccountDetails/PasswordChange";
import PasswordChangeModal from "../../../components/App/AccountDetails/PasswordChangeModal/PasswordChangeModal";
import { Col } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
const PasswordChange = () => {
  const [isPasswordModal, setIsPasswordModal] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const handlePasswordModalClose = () => {
    setIsPasswordModal(false);
    setIsFirstStep(true);
  };

  const handleNextStepsClick = () => {
    setIsFirstStep(false);
  };

  const handleBackStepsClick = () => {
    setIsFirstStep(true);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="pass-info">
            <h4>password</h4>
            <p>Change your password regularly to prevent hacking.</p>
            <hr />
          </div>
          <div className="form-div">
            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              // validationSchema={Yup.object().shape({
              //   password: Yup.string()
              //     .trim()
              //     .required("Please add your Current Password*"),
              //   confirmPassword: Yup.string()
              //     .required("Please Provide  Confirm Password")
              //     .matches(
              //       /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              //       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
              //     ),
              // })}
              onSubmit={(values, { setSubmitting }) => {
                // const signInData = {
                //   username: values.email,
                //   password: values.password,
                // };
                setTimeout(() => {
                  setSubmitting(false);
                  setIsPasswordModal(true);
                  //   dispatch(UserLogin(signInData));
                }, 500);
              }}
            >
              {(props) => <ChangePassword {...props} />}
            </Formik>
          </div>
        </div>
      </div>
      {isPasswordModal && (
        <PasswordChangeModal
          handlePasswordModalClose={handlePasswordModalClose}
          handleNextStepsClick={handleNextStepsClick}
          handleBackStepsClick={handleBackStepsClick}
          isFirstStep={isFirstStep}
        />
      )}
    </>
  );
};

export default PasswordChange;
