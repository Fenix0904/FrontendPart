import React from "react";
import {connect} from "react-redux";
import {closeModal} from "../../actions/ActionsCreator";
import {Button, Input, InputGroup, InputGroupAddon, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

const LoginModal = ({isModalOpen, closeWithoutSingingUp}) => {
    return (
        <Modal isOpen={isModalOpen} toggle={closeWithoutSingingUp}>
            <ModalHeader>Login</ModalHeader>
            <ModalBody>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                                <i className="fas fa-user"/>
                            </span>
                    </InputGroupAddon>
                    <Input placeholder="Username"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <span className="input-group-text">
                                <i className="fas fa-key"/>
                            </span>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password"/>
                </InputGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={closeWithoutSingingUp}>
                    Close
                </Button>
                <Button color="primary" onClick={closeWithoutSingingUp}>
                    Login
                </Button>
            </ModalFooter>
        </Modal>
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