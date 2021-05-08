import React, { useState, lazy } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Close from "./../../assets/Images/Webapp/svg/Close.svg";
const StepModalContent = lazy(() =>
  import("./../../components/Comman/StepsModalContent")
);
const StepsModals = (props) => {
  const {
    handleStepsModalClose,
  } = props;


  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStepsClick = (currentStep) => {
    if (currentStep <= 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreStepsClick = (currentStep) => {
    if (currentStep >= 2) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRandomStepsClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <Modal show={true} className="custom-stp-modal">
      <Modal.Body className="custom-modal-body">
        <>
          <div className="d-flex m-4">
            <div>
              <img
                src={Close}
                className="close-btn"
                onClick={() => {
                  handleStepsModalClose();
                }}
              />
              <StepModalContent currentStep={currentStep} />
              <div className="step-dot-section">
                {currentStep !== 1 &&
                  [...Array(4)].map((key, index) => (
                    <span key={key}
                      className={`steps-dot ${index + 2 === currentStep && "active"
                        }`}
                      onClick={() => {
                        handleRandomStepsClick(index + 2);
                      }}
                    ></span>
                  ))}
              </div>
            </div>
          </div>
        </>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="ml-4">
            {currentStep !== 1 && (
              <p
                className="skip-btn mb-0"
                onClick={() => { handleStepsModalClose() }}
              >
                Skip
              </p>
            )}
          </div>
          <div className="my-2 mx-4">
            {currentStep !== 1 && (
              <Button
                variant="secondary"
                onClick={() => { handlePreStepsClick(currentStep); }}
              >
                Back
              </Button>
            )}
            <Button
              variant="primary"
              onClick={() => {
                currentStep === 5 ?
                  handleStepsModalClose() :
                  handleNextStepsClick(currentStep);
              }}
            >
              {currentStep === 5 ? "Close" : "Next"}
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default StepsModals;
