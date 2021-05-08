import React from "react";
import noalerts from "../../../assets/Images/alertlist/noalerts.png";

const NoAlerts = () => {
  return (
    <tr>
      <td colSpan="8" style={{width:"100%"}}>
        <div className="no-alert">
          <img src={noalerts} alt="noalerts" style={{marginLeft:"auto" , marginRight:"auto"}} />
          <p>Good Job! <b>No alerts found</b>. Your cloud looks secure 🎉</p>
        </div>
      </td>
    </tr>
  );
};

export default NoAlerts;
