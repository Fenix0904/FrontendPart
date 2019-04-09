import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="#">AniSite</Link>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbarNav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Header;