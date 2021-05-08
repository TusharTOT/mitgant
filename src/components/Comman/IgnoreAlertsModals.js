import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Close from "./../../assets/Images/Webapp/svg/Close.svg";
import Form from "react-bootstrap/Form";
const IgnoreAlertsModals = (props) => {
  const { handleStepsModalClose, ignoreAlerts, type, ignorables } = props;

  const [ignoreTime, setIgnoreTime] = useState("");
  const [ignoreReminder, setIgnoreReminder] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStepsClick = () => {
    if (currentStep === 1) {
      setCurrentStep(currentStep + 1);
    } else {
      ignoreAlerts();
    }
  };

  const handlePreStepsClick = () => {
    setCurrentStep(1);
  };

  return (
    <Modal show={true} className="custom-stp-modal">
      <Modal.Body className="custom-modal-body error">
        <div>
          <div className="d-flex m-4">
            <div>
              <img
                src={Close}
                className="close-btn"
                onClick={() => {
                  handleStepsModalClose();
                }}
              />
            </div>
            <div className="d-flex  flex-column">
              {currentStep === 1 ? (
                <>
                  <h3 className="mt-4">
                    {type === "single"
                      ? "How long do you want to ignore this alert?"
                      : `How long do you want to ignore these ${ignorables.length} alerts?`}
                  </h3>
                  <Form>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        label="One Week"
                        name="time"
                        id="oneweek"
                        checked={ignoreTime === "week"}
                        onChange={() => setIgnoreTime("week")}
                      />
                      <Form.Check
                        type="radio"
                        label="One Month"
                        name="time"
                        id="onemonth"
                        checked={ignoreTime === "month"}
                        onChange={() => setIgnoreTime("month")}
                      />
                      <Form.Check
                        type="radio"
                        label="Always"
                        name="time"
                        id="always"
                        checked={ignoreTime === "always"}
                        onChange={() => setIgnoreTime("always")}
                      />
                    </Form.Group>
                  </Form>
                </>
              ) : (
                <>
                  <h3 className="mt-4">
                    {type === "single"
                      ? "Set a reminder for this alert?"
                      : `Set a reminder for these ${ignorables.length} alerts?`}
                  </h3>
                  <Form>
                    <Form.Group>
                      <Form.Check
                        type="radio"
                        label="Remind me after one week"
                        name="reminder"
                        id="afteroneweek"
                        checked={ignoreReminder === "week"}
                        onChange={() => setIgnoreReminder("week")}
                      />
                      <Form.Check
                        type="radio"
                        label="Remind me after one month"
                        name="reminder"
                        id="afteronemonth"
                        checked={ignoreReminder === "month"}
                        onChange={() => setIgnoreReminder("month")}
                      />
                      <Form.Check
                        type="radio"
                        label="No thanks"
                        name="reminder"
                        id="nothanks"
                        checked={ignoreReminder === "never"}
                        onChange={() => setIgnoreReminder("never")}
                      />
                    </Form.Group>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="custom-modal-footer alerts-modal">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="ml-4">
            {currentStep !== 1 && (
              <p
                className="skip-btn mb-0"
                onClick={() => {
                  handlePreStepsClick();
                }}
              >
                Back
              </p>
            )}
          </div>
          <div className="my-2 mx-4">
            <Button
              variant="secondary"
              onClick={() => {
                handleStepsModalClose();
              }}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleNextStepsClick();
              }}
              disabled={
                (currentStep === 1 && !ignoreTime) ||
                (currentStep === 2 && !ignoreReminder)
              }
            >
              {currentStep === 1 ? "Next" : "Ignore Alter"}
            </Button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default IgnoreAlertsModals;
