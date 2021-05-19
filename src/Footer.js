import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer class="bg-dark text-white p-4">
        <div>
            <p>If you want to know more about our portal, please 
                <Link to="/signup" style={{ textDecoration: 'none' }}>
                    <span className="click"> Click here </span>
                </Link> 
                to sign up.
            </p>
            <p>If you're already have an account please <Link to="/login" style={{ textDecoration: 'none' }}>
            <span className="click">login</span>
            </Link>
            <span className="copyright"> © 2021 Copyright: BDE</span>
            </p>
        </div>
        </footer>
    )
}

export default Footer;
