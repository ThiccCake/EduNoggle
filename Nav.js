import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    //active style css
    const activeStyle = {
        fontWeight: "bold",
        borderBottom: "2px solid red"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-light"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/home">Home</NavLink>
                            </li>
           
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/facilities">Facilities</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/student">Students</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/teacher">Teachers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/ebooks">eBooks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={activeStyle} className="nav-link text-light active" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    );
};

export default Nav;