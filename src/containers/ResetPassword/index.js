import React, { lazy } from "react";
import { Formik } from "formik";
import { useDispatch } from 'react-redux';
import { PasswordReset } from "./../../actions/Auth";
import * as Yup from "yup";
const FormSideImage = lazy(() =>
    import("./../../components/Comman/FormSideImage")
);
const ResetForm = lazy(() =>
    import("./../../components/ResetPassword/ResetForm")
);
const ResetPassword = (props) => {
    const dispatch = useDispatch();
    const resetToken = props.match.params.id
    return (
        <>
            <div className="login-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <FormSideImage page="forgot" />
                        <div className="col-md-5 bg-white">
                            <div className="d-flex row ">
                                <div className="col-12">
                                    <div className="row form-div">
                                        <div className="w-100 bg-white p-5  reset-password">
                                            <div>
                                                <h5>Reset Password ?</h5>
                                                <p>Please enter your registered email and new password.</p>
                                                <hr />
                                            </div>
                                            <Formik
                                                initialValues={{
                                                    email: "",
                                                    password: "",
                                                    confirmPassword: "",
                                                }}
                                                validationSchema={Yup.object().shape({
                                                    email: Yup.string()
                                                        .trim()
                                                        .email("Email must be a valid Email")
                                                        .required("Please enter your registered email."),
                                                    password: Yup.string()
                                                        .required("Password required")
                                                        .matches(
                                                            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                                            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
                                                        ),
                                                    confirmPassword: Yup.string()
                                                        .oneOf(
                                                            [Yup.ref("password"), null],
                                                            "Passwords must match"
                                                        )
                                                        .required("Confirm Password is required"),
                                                })}
                                                onSubmit={(values, { setSubmitting }) => {
                                                    const resetData = {
                                                        username: values.email,
                                                        password: values.password
                                                    }
                                                    setTimeout(() => {
                                                        dispatch(PasswordReset(resetData, resetToken, props.history))
                                                        setSubmitting(false);
                                                    }, 500);
                                                }}
                                            >
                                                {(props) => <ResetForm {...props} />}
                                            </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ResetPassword;
