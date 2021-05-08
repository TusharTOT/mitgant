import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux"
import { ForgetPassword } from '../../actions/Auth'
const ForgotForm = lazy(() => import("../../components/ForgotPassword/ForgotForm"));
const FormSideImage = lazy(() => import("./../../components/Comman/FormSideImage"));

const ForgotPassword = (props) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="login-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <FormSideImage page="forgot" />
                        <div className="forgot-form  register-form col-md-5 bg-white">
                            <div className="d-flex justify-content-end">
                                <p>
                                    Remember your password? <Link to="/login">Sign In</Link>
                                </p>
                            </div>
                            <div className="d-flex h-100">
                                <div className="contactform">
                                    <div>
                                        <h5>Forget Password ?</h5>
                                        <p>
                                            {" "}
                      Please enter your registered email to reset your password{" "}
                                        </p>
                                        <hr />
                                    </div>
                                    <div className=" form-div">
                                        <div className="innerform w-100 bg-white">
                                            <Formik
                                                initialValues={{
                                                    email: "",
                                                }}
                                                validationSchema={Yup.object().shape({
                                                    email: Yup.string()
                                                        .trim()
                                                        .email("Email must be a valid Email")
                                                        .required("Please enter your registered email."),
                                                })}
                                                onSubmit={(values, { setSubmitting }) => {
                                                    const email = values.email
                                                    setTimeout(() => {
                                                        dispatch(ForgetPassword(email, props.history))
                                                        setSubmitting(false);
                                                    }, 500);
                                                }}
                                            >
                                                {(props) => <ForgotForm {...props} />}
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
};

export default ForgotPassword;
