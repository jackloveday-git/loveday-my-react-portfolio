// Navbar by Jack Loveday

// Import dependencies
import React, { useState } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

// Navbar functionality
function NavBar() {

    // Click functionality
    const [
        click,
        setClick
    ] = useState(false);

    // Handle click actions
    const handleClick = () => {
        setClick(!click);
    };

    // Setup Navbar and use font awesome
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Jack Loveday
                        <i className="fas fa-code"></i>
                    </NavLink>

                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/portfolio"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/resume"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Resume
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/contact"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;