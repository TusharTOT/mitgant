import React from "react";
import calendar from "../../../assets/Images/assessment/svg/calendar-icon.svg";
const AccountLogComponent = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <b>Log</b>{" "}
        <div className=" d-flex log-section">
          <img src={calendar} alt="calendar" className="mr-3" />
          <input
            type="date"
            className="form-control mr-3"
            type="text"
            className="form-control"
            placeholder="01 / 01 / 2021"
          />
        </div>
      </div>
      <hr />
      <div className="details">
        <table>
          <tr>
            <th></th>
            <th>Time</th>
            <th>Events</th>
          </tr>
          <tr>
            <td className="line">
              <span className="blue-dot"></span>
            </td>
            <td width="80%">13 Feb 2021, 12 AM</td>
            <td>Assessment </td>
          </tr>
          <tr>
            <td className="line">
              <span className="blue-dot"></span>
            </td>
            <td width="80%">13 Feb 2021, 12 AM</td>
            <td>Assessment </td>
          </tr>
          <tr>
            <td className="line">
              <span className="red-dot"></span>
            </td>
            <td width="80%">13 Feb 2021, 12 AM</td>
            <td>Assessment </td>
          </tr>
          <tr>
            <td className="line">
              <span className="green-dot"></span>
            </td>
            <td width="80%">13 Feb 2021, 12 AM</td>
            <td>Assessment </td>
          </tr>
          <tr>
            <td className="line">
              <span className="yellow-dot"></span>
            </td>
            <td width="80%">13 Feb 2021, 12 AM</td>
            <td>Assessment </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AccountLogComponent;
