import React from 'react';
import { Button } from 'react-bootstrap';
import rightarrow from "../../../assets/Images/assessment/svg/right-arrow.svg";
import { dateFormater } from "../../../util/common";

const TableBody = (props) => {
    const { onViewAlertsClick, assessmentReports } = props;
    return (
        <tbody>
            {assessmentReports.content &&
                assessmentReports.content.map((report) => (
                    <tr>
                        <td>Assessment Report</td>
                        <td>{dateFormater(report.dateCreated, "time")}</td>
                        <td>{report.alertCount}</td>
                        <td></td>
                        <td align="right">
                            <Button
                                variant="outline-primary"
                                onClick={() => {
                                    onViewAlertsClick(report.assessmentId);
                                }}
                            >
                                View Alert <img src={rightarrow} alt="rightarrow" />
                            </Button>
                        </td>
                    </tr>
                ))}
        </tbody>
    );
};

export default TableBody;