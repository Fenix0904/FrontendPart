import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import {openModal} from "../../actions/ActionsCreator";
import {connect} from "react-redux";
import {Nav, Navbar} from "react-bootstrap";

const Header = ( {openModal} ) => {
    return (
        <Navbar bg="light" expand="sm">
            <Navbar.Brand as={Link} to="/">AniSite</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={openModal}>Sing In</Nav.Link>
                    <Nav.Link>Sing Up</Nav.Link>
                    <Nav.Link as={Link} to="/create">Create</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal())
    }
};

export default connect(null, mapDispatchToProps)(Header);