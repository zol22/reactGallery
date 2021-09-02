import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => (
    <nav  className="main-nav">
        <ul>
            <li><NavLink exact to="/cats">Cats</NavLink></li>
            <li><NavLink to="/dogs">Dogs</NavLink></li>
            <li><NavLink to="/cars">Cars</NavLink></li>
        </ul>    
    </nav>
)

export default Nav;