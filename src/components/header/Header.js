import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import {openModal} from "../../actions/ActionsCreator";
import {connect} from "react-redux";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";

class Header extends React.Component {

    state = {
        collapsed: true
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        return (
            <Navbar color="light" light expand="sm">
                <NavbarBrand tag={Link} to="/">AniSite</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar}/>
                <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink onClick={this.props.openModal}>Sing In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Sing Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/create">Create</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal())
    }
};

export default connect(null, mapDispatchToProps)(Header);