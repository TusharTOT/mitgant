import React from "react";

const LoaderEllipsis = () => {
  return (
    <div className="loaders-container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderEllipsis;
