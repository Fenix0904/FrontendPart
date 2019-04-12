import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import {openModal} from "../../actions";
import {connect} from "react-redux";

const Header = ( {openModal} ) => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Link className="navbar-brand" to="/">AniSite</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"/>
            </button>
            <div id="navbarNav" className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <span className="nav-link" onClick={openModal}>Sing In</span>
                        <span className="nav-link">Sing Up</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: () => dispatch(openModal())
    }
};

export default connect(null, mapDispatchToProps)(Header);