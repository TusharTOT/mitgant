import React from "react";
import Assesmentsetting from "../../../../assets/Images/Webapp/png/assessmentsetting.png";
import AssessmentForm from "../../../../components/App/Setting/AssessmentForm";
import { Formik } from "formik";
import * as Yup from "yup";

const GeneralSetting = () => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <div className="d-flex border-bottom">
          <div className="left-image">
            <img src={Assesmentsetting} alt="assessment setting" />
          </div>
          <div>
            <b>Assessment</b>
            <p>
              Determine how often you want to do the Assessment + Discovery run?
            </p>
          </div>
        </div>
        <div className="d-flex">
          <div className="form-div">
            <Formik
              initialValues={{
                day: "Every Day",
                time: "",
                timeLine: "AM",
              }}
              validationSchema={Yup.object().shape({
                day: Yup.string().trim().required("option require"),
                time: Yup.string().trim().required("time require"),
                timeLine: Yup.string().trim().required("timeline require"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  setSubmitting(false);
                }, 500);
              }}
            >
              {(props) => <AssessmentForm {...props} />}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSetting;
