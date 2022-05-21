import React from "react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
    return (
        <nav className="nav">
            <img className="nav__img" src={Logo} alt="Logo" />
        </nav>
    );
};

export default Navbar;
