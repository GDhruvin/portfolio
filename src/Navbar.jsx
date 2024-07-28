import React from 'react';

import { NavLink } from 'react-router-dom';




const Navbar = () => {

    return (
        <>
            <nav className='nav1_bar'>
                <div className="nav1">
                    <input type="checkbox" id="nav1-check" />
                    <div className="nav1-header">
                        <NavLink className="nav1-title" to="/">Dhruvin gabani</NavLink>
                    </div>
                    <div className="nav1-btn">
                        <label for="nav1-check">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>

                    <div className="nav1-links">
                        <NavLink className="navbar-brand" to="/">Home</NavLink>
                        <NavLink className="navbar-brand" to="/about">About</NavLink>
                        <NavLink className="navbar-brand" to="/skill">Skill</NavLink>
                        <NavLink className="navbar-brand" to="/qualification">Qualification</NavLink>
                    </div>
                </div>
            </nav >
        </>
    );
};

export default Navbar;

