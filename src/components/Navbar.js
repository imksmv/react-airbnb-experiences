import React from "react";
import "../components/Navbar.css";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="nav __CONTAINER">
            <img className="nav__img" src={Logo} alt="Logo" />
        </nav>
    );
};

export default Navbar;
