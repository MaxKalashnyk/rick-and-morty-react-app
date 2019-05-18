import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">Rick and Morty React application</h1>
            <Link to="/rick-and-morty-react-app/" style={linkStyle}>
                Home
            </Link>{" "}
            |{" "}
            <Link to="/rick-and-morty-react-app/about" style={linkStyle}>
                About
            </Link>
        </header>
    );
};

const linkStyle = {
    color: "#000"
};

export default Header;
