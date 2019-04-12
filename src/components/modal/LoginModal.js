import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {connect} from "react-redux";
import {closeModal} from "../../actions";

const LoginModal = ( {isModalOpen, closeWithoutSingingUp} ) => {
    return (
        <>
            <Modal show={isModalOpen} onHide={closeWithoutSingingUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group input-group-md mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-user"/>
                            </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Username"/>
                    </div>
                    <div className="input-group input-group-md mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <i className="fas fa-key"/>
                            </span>
                        </div>
                        <input type="password" className="form-control" placeholder="Password"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeWithoutSingingUp}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={closeWithoutSingingUp}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.isModalOpen
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeWithoutSingingUp: () => dispatch(closeModal())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);