import React from "react";
import Assesmentsetting from "../../../../assets/Images/Webapp/png/assessmentsetting.png";
import NotificationForm from "../../../../components/App/Setting/NotificationForm";
import { Formik } from "formik";
import * as Yup from "yup";

const NotificationSetting = () => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex border-bottom">
          <div className="left-image">
            <img src={Assesmentsetting} alt="notification setting" />
          </div>
          <div>
            <b>Notification</b>
            <p>
              Specify how you want to receive the scan report email for your
              account.
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div></div>
          <div className="form-div">
            <Formik
              initialValues={{
                assessment: "Every Assessment",
                channel: "",
              }}
              validationSchema={Yup.object().shape({
                assessment: Yup.string().trim().required("Assessment require"),
                channel: Yup.string().trim().required("time require"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);

                  //   dispatch(UserLogin(signInData));
                }, 500);
              }}
            >
              {(props) => <NotificationForm {...props} />}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSetting;
