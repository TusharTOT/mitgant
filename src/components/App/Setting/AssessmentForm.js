import React from "react";
import { Form } from "react-bootstrap";
const AssessmentForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group first">
          <label htmlFor="validationCustom01">Select Option</label>
          <select
            className={`form-control form-control-lg ${
              errors.day && touched.day ? "has-error" : ""
            }`}
            id="Day"
            name="day"
            value={values.day}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.day}
          >
            <option value="Every Day">Every Day</option>
            <option value="1">Every Week At Monday</option>
            <option value="2">Every Week At Tuesday</option>
            <option value="3">Every Week At Wednesday</option>
            <option value="2">Every Week At Thursday</option>
            <option value="2">Every Week At Friday</option>
          </select>
          {errors.day && touched.day && (
            <p className="text-danger">{errors.day}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="validationCustom01">Select a time</label>
          <input
            type="text"
            className="form-control form-control-lg "
            id="Time"
            name="time"
            value={values.time}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="hh:mm"
          />
          {errors.time && touched.time && (
            <p className="text-danger">{errors.time}</p>
          )}
        </div>
        <div className="form-group third">
          <label htmlFor="validationCustom01"></label>
          <select
            className={`form-control form-control-lg ${
              errors.timeLine && touched.timeLine ? "has-error" : ""
            }`}
            id="Timeline"
            name="timeLine"
            value={values.timeLine}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.timeLine}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
          {errors.timeLine && touched.timeLine && (
            <p className="text-danger">{errors.timeLine}</p>
          )}
        </div>
        <div>
          <button
            type="Submit sign-button"
            className="btn btn-primary  btn-common"
            disabled={isSubmitting}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AssessmentForm;
