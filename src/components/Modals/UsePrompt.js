import React from 'react';
import { Modal } from 'react-bootstrap';

export const UsePrompt = ({ modal, toggle, stayLoggedIn, logout }) => {
    const close = () => {
        toggle(false);
    };
    return (
        <Modal className="prompt" show={modal} onHide={close} backdrop="static">
            <Modal.Body>
                <div className="px-4 pt-3 text-center">
                    <h5>You have been idle/inactive for a 30mins</h5>
                    <p>You will be logged out soon</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <button
                    type="button"
                    className="btn-common w-50"
                    onClick={stayLoggedIn}
                >
                    Stay Logged In
                </button>

                <button
                    type="button"
                    className="btn-common w-25 bg-danger"
                    onClick={logout}
                >
                    Logout
                </button>
            </Modal.Footer>
        </Modal>
    );
};