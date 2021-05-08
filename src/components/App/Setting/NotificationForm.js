import React from "react";
import { Form } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
const NotificationForm = (props) => {
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
        <div className="form-group col-md-4">
          <label htmlFor="validationCustom01">Select Option</label>
          <select
            className={`form-control form-control-lg ${
              errors.assessment && touched.assessment ? "has-error" : ""
            }`}
            id="Assessment"
            name="assessment"
            value={values.assessment}
            onChange={handleChange}
            onBlur={handleBlur}
            defaultValue={values.assessment}
          >
            <option value="Every Assessment">Every Assessment</option>
            <option value="1">Only notify if there are critical errors</option>
            <option value="2">Only send a summary per day </option>
            <option value="3"> Only send a summary per week </option>
            <option value="2">Only send a summary per month</option>
          </select>
          {errors.assessment && touched.assessment && (
            <p className="text-danger">{errors.assessment}</p>
          )}
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="validationCustom01">Notification Channel</label>
          {/* <select
            className={`form-control form-control-lg ${
              errors.channel && touched.channel ? "has-error" : ""
            }`}
            id="Channel"
            name="channel"
            value={values.channel}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="0">Slack</option>
            <option value="1">option</option>
            <option value="2">option 3</option>
            <option value="3">option 4</option>
            {errors.channel && touched.channel && (
              <p className="text-danger">{errors.channel}</p>
            )}
          </select> */}
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">Email</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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

export default NotificationForm;
