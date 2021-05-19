import React from 'react';
import { Link } from 'react-router-dom';

function Navbar2() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
            <img src="./dolphin-logo.jpeg" alt="logo" className="logo2"/>
            <Link to="/" style={{ textDecoration: 'none' }}>
            <p className="navbar-brand2">Blue Dolphin Engagement</p>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            </div>
    </nav>
    )
}

export default Navbar2;
