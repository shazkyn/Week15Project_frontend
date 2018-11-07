import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <header>

            <ul>
                <li className="navLink">
                    <Link to="/journalists">Journalists</Link>
                </li>
                <li className="navLink">
                    <Link to="/categories">Categories</Link>
                </li>
                <li className="navLink">
                    <Link to="/articles" >Articles</Link>
                </li>

            </ul>
        </header>
    )
}

export default NavBar;
