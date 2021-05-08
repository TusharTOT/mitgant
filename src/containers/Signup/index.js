import React, { lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { UserRegister } from "./../../actions/Auth";
import * as Yup from "yup";
const FormSideImage = lazy(() =>
    import("./../../components/Comman/FormSideImage")
);
const RegistrionForm = lazy(() => import("./../../components/Signup/index"));
const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
const capitalCharacterRegx = /[A-Z]/;
const smallCharacterRegx = /[a-z]/;

const Index = (props) => {
    const dispatch = useDispatch();
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [userPassword, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState({
        minChar: null,
        number: null,
        specialChar: null,
        capitalChat: null,
        smallChar: null,
    });

    useEffect(() => {
        if (
            passwordValidity.minChar &&
            passwordValidity.number &&
            passwordValidity.specialChar &&
            passwordValidity.capitalChat &&
            passwordValidity.smallChar
        ) {
            setPasswordFocused(false);
        }
    }, [passwordValidity]);

    const onChangePassword = (password) => {
        const passValue = password.target.value;
        setPassword(passValue);
        if (passValue !== "") {
            setPasswordError(false);
            setPasswordFocused(true);
            setPasswordValidity({
                minChar: passValue.length >= 8 ? true : false,
                number: isNumberRegx.test(passValue) ? true : false,
                specialChar: specialCharacterRegx.test(passValue) ? true : false,
                capitalChat: capitalCharacterRegx.test(passValue) ? true : false,
                smallChar: smallCharacterRegx.test(passValue) ? true : false,
            });
        } else {
            setPasswordError(true);
            setPasswordFocused(false);
            setPasswordValidity({
                minChar: passValue.length >= 8 ? true : false,
                number: isNumberRegx.test(passValue) ? true : false,
                specialChar: specialCharacterRegx.test(passValue) ? true : false,
                capitalChat: capitalCharacterRegx.test(passValue) ? true : false,
                smallChar: smallCharacterRegx.test(passValue) ? true : false,
            });
        }
    };

    const onPasswordFocus = () => {
        setPasswordFocused(true);
    };
    const onChangeConfirmPassword = (password) => {
        const confirmPassValue = password.target.value;
        setConfirmPassword(confirmPassValue);
        if (userPassword !== confirmPassValue) {
            setPasswordMatch(true);
        } else {
            setPasswordMatch(false);
        }
    };

    return (
        <>
            <div className="login-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <FormSideImage page="signup" />
                        <div className="reg-page register-form col-md-5 bg-white">
                            {/* <p className="text-right ml-2">Already have an account?<Link to="/login">Sign In </Link></p> */}
                            <div className="d-flex justify-content-end p-4">
                                <p>Already have an account ?<Link to="/login">Sign In </Link></p>
                            </div>
                            <div className="reg-form ">
                                <h4>Sign up to Mitigant</h4>
                                <hr></hr>
                                <Formik
                                    initialValues={{
                                        firstName: "",
                                        lastName: "",
                                        email: "",
                                        password: userPassword ? userPassword : "",
                                        confirmPassword: "",
                                        acceptTerms: false,
                                    }}
                                    validationSchema={Yup.object().shape({
                                        firstName: Yup.string()
                                            .trim()
                                            .required("Please add your First Name*"),
                                        lastName: Yup.string()
                                            .trim()
                                            .required("Please add your last Name*"),
                                        email: Yup.string()
                                            .trim()
                                            .email("Email must be a valid Email")
                                            .required("Please add your email address*"),
                                        acceptTerms: Yup.bool().oneOf(
                                            [true],
                                            "Accept Terms & Conditions is required"
                                        ),
                                        // password: Yup.string().required("Password is required"),

                                        // confirmPassword: Yup.string()
                                        //   .oneOf([Yup.ref("password"), null], "Passwords must match")
                                        //   .required("Confirm Password is required"),
                                    })}
                                    onSubmit={(values, { setSubmitting, setErrors }) => {
                                        if (userPassword.length > 0) {
                                            if (userPassword === confirmPassword) {
                                                if (
                                                    passwordValidity.minChar &&
                                                    passwordValidity.number &&
                                                    passwordValidity.specialChar &&
                                                    passwordValidity.capitalChat &&
                                                    passwordValidity.smallChar
                                                ) {
                                                    setPasswordStrength(true);
                                                    setTimeout(() => {
                                                        const registerData = {
                                                            companyName: "",
                                                            email: values.email,
                                                            firstName: values.firstName,
                                                            lastName: values.lastName,
                                                            password: userPassword,
                                                        };
                                                        setSubmitting(false);
                                                        dispatch(UserRegister(registerData, props.history));
                                                    }, 500);
                                                } else {
                                                    setSubmitting(false);
                                                    setPasswordError(true);
                                                }
                                            } else {
                                                setPasswordMatch(true);
                                                setSubmitting(false);
                                            }
                                        } else {
                                            setSubmitting(false);
                                            setPasswordError(true);
                                        }
                                    }}
                                >
                                    {(props) => (
                                        <RegistrionForm
                                            {...props}
                                            userPassword={userPassword}
                                            confirmPassword={confirmPassword}
                                            passwordMatch={passwordMatch}
                                            onChangePassword={onChangePassword}
                                            passwordValidity={passwordValidity}
                                            onChangeConfirmPassword={onChangeConfirmPassword}
                                            passwordError={passwordError}
                                            onPasswordFocus={onPasswordFocus}
                                            passwordFocused={passwordFocused}
                                            passwordStrength={passwordStrength}
                                        />
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
