import React from 'react';
import calendar from "../../assets/Images/assessment/svg/calendar-icon.svg";

const MianHeader = (props) => {
    const { totalListing, invenType } = props;
    return (
        <div className="align-items-center d-flex flex-wrap justify-content-between topheading mb-3">
            {
                invenType ?
                    <h4>{invenType}  | Total: {totalListing}</h4>
                    :
                    <h4>Total Assessment: {totalListing}</h4>
            }
            <div className="calendardiv d-flex align-items-center">
                <img src={calendar} alt="calendar" className="mr-3" />
                <input
                    type="date"
                    className="form-control mr-3"
                    placeholder="01 / 01 / 2021"
                />
                <input
                    type="date"
                    className="form-control"
                    placeholder="06 / 01/ 2021"
                />
            </div>
        </div>
    );
};

export default MianHeader;