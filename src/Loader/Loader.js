import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = (props) => {
  const { isTable } = props;
  return (
    // <div>
    //   <Spinner animation="border" variant="primary" />
    // </div>
    isTable ? (
      <tr>
        <td colSpan="8" style={{ width: "100%" }}>
          <div className="d-flex justify-content-center my-4">
            <Spinner animation="border" variant="primary" />
          </div>
        </td>
      </tr>
    ) : (
      <div className="d-flex justify-content-center my-4">
        <Spinner animation="border" variant="primary" />
      </div>
    )
  );
};

export default Loader;
