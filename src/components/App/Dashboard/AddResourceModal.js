import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Close from "./../../../assets/Images/Webapp/svg/Close.svg";
const AddResourceModal = (props) => {
  const { handleResourceModalClose } = props;
  return (
    <Modal show={true}>
      <Modal.Body className="custom-modal-body">
        <div className="m-4">
          <div className="d-flex justify-content-end">
            <img
              src={Close}
              className="close-btn"
              onClick={() => {
                handleResourceModalClose();
              }}
            />
          </div>
          <div className="d-flex  flex-column">
            <h3 className="mt-4">Add Resource </h3>
          </div>
          <div>
            <Form.Control
              className="d-inline-block  border-0 shadow-none"
              as="select"
            >
              <option value="10">option-1</option>
              <option value="20">option-1</option>
              <option value="30">option-1</option>
            </Form.Control>{" "}
          </div>
          <div className="d-flex justify-content-end ">
            <Button variant="primary" className="mt-3 ">
              Add
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddResourceModal;
