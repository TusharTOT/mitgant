import React, { lazy, useEffect } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { UserLogin } from "./../../actions/Auth";
const SigninForm = lazy(() => import("../../components/Signin/index"));
const FormSideImage = lazy(() => import("../../components/Comman/FormSideImage"));

const Index = () => {
    const dispatch = useDispatch();
    useEffect(() => { }, [dispatch]);
    return (
        <>
            <div className="login-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <FormSideImage page='login' />
                        <div className="register-form col-md-5 bg-white">
                            <div className="d-flex justify-content-end">
                                <p> Don’t have an account ?{" "}
                                    <a href=" ">
                                        <Link to="/signup">Sign Up</Link>
                                    </a></p>
                            </div>
                            <div className="contactform">
                                <div>
                                    <h5>Sign in to Mitigant</h5>
                                    <hr />
                                </div>
                                <div className=" form-div">
                                    <div className="innerform w-100 bg-white">
                                        <Formik
                                            initialValues={{
                                                email: "",
                                                password: "",
                                            }}
                                            validationSchema={Yup.object().shape({
                                                email: Yup.string()
                                                    .trim()
                                                    .email("Email must be a valid Email")
                                                    .required("Please add your email address*"),
                                                password: Yup.string().required(
                                                    "Please Provide Password"
                                                ),
                                            })}
                                            onSubmit={(values, { setSubmitting }) => {
                                                const signInData = {
                                                    username: values.email,
                                                    password: values.password,
                                                };
                                                setTimeout(() => {
                                                    setSubmitting(false);
                                                    dispatch(UserLogin(signInData));
                                                }, 500);
                                            }}
                                        >
                                            {(props) => <SigninForm {...props} />}
                                        </Formik>
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

export default Index;
