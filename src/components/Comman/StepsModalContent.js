import React from "react";
import Unlock from "./../../assets/Images/Webapp/svg/StepModal/unlock.svg";
import App from "./../../assets/Images/Webapp/svg/StepModal/app.svg";
import Folder from "./../../assets/Images/Webapp/svg/StepModal/folder.svg";
import Denied from "./../../assets/Images/Webapp/svg/StepModal/denied.svg";
import Check from "./../../assets/Images/Webapp/svg/StepModal/check.svg";
const StepsModal = (props) => {
  const { currentStep } = props;

  const getImgSrc = (step) => {
    switch (step) {
      case 1:
        return Unlock;
      case 2:
        return App;
      case 3:
        return Folder;
      case 4:
        return Denied;
      case 5:
        return Check;
      default:
        break;
    }
  }

  const imgSrc = getImgSrc(currentStep);

  return (
    <div className="modal-content-section d-flex align-items-center">
      <div>
        <img src={imgSrc} />
      </div>
      {currentStep === 1 && (
        <div className="ml-md-5">
          <h3>Welcome to Mitigant </h3>
          <p className="mb-0">
            Before you can do the Assessment, Before you can perform the
            Assessment, please connect your AWS master account with Mitigant.
            </p>
        </div>
      )}
      {currentStep === 2 && (
        <div className="ml-md-5">
          <h3>AWS Account Linking</h3>
          <p className="mb-0">
            Create Stack in your AWS master account to get your Role ARN and
            connect with Mitigant.
            </p>
        </div>
      )}
      {currentStep === 3 && (
        <div className="ml-md-5">
          <h3>Start Assessment</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consectetur odio massa gravida pretium et. Cursus nunc nisl sit
            consequat elit.
            </p>
        </div>
      )}
      {currentStep === 4 && (
        <div className="ml-md-5">
          <h3>Find an Alerts</h3>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consectetur odio massa gravida pretium et. Cursus nunc nisl sit
            consequat elit.
            </p>
        </div>
      )}
      {currentStep === 5 && (
        <div className="ml-md-5">
          <h3>Fix an Alerts</h3>
          <p className="mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Consectetur odio massa gravida pretium et. Cursus nunc nisl sit
            consequat elit.
            </p>
        </div>
      )}
    </div>
  );
};

export default StepsModal;
