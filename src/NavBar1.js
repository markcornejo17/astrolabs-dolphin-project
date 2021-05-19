import React from 'react';
import { Link } from 'react-router-dom';

function Navbar1() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <img src="./dolphin-logo.jpeg" alt="" width="60" height="50" className="logo1"/>
            <a className="navbar-brand" href="#">Blue Dolphin Engagement</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav flex-wrap ms-md-auto">
                    <Link to="/signup" style={{ textDecoration: 'none' }}>
                        <li className="nav-link">SIGN UP</li>
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        <li className="nav-link">LOGIN </li>
                    </Link>
                    
                        <li className="nav-link">EMPLOYEE LIST </li>
                    
                </ul>

            </div>
        </div>
    </nav>
    )
}

export default Navbar1;
