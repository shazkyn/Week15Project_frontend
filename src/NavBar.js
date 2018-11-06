import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <header>
            {/* <img src="/images/pirtate-flag.jpg" alt="Logo" /> */}

            <ul>
                <li className="navLink">
                    <Link to="/Journalists">Journalists</Link>
                </li>
                <li className="navLink">
                    <Link to="/journalists/new">Create Journalist</Link>
                </li>
                <li className="navLink">
                    <Link to="/categories">Categories</Link>
                </li>
                <li className="navLink">
                    <Link to="/articless" >Articles</Link>
                </li>

            </ul>
        </header>
    )
}

export default NavBar;
