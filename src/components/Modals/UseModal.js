import React from "react";
import { Modal } from "react-bootstrap";
const UseModal = ({ modal, toggle, component: Component, header }) => {
  return (
    <Modal className="inventory-modal" centered show={modal} onHide={toggle}>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Component />
      </Modal.Body>
    </Modal>
  );
};

export default UseModal;
