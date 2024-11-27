import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import littlelemon_logo from "../assets/images/littlelemon_logo.png";

const Nav = () => {
    return (
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>         {/* Home page route */}
                <li><Link to="/Booking">Reservations</Link></li>  {/* Reservations page route */}
                <li><Link to="/">Order Online</Link></li>  {/* Order Online page route */}
                <li><Link to="/">Login</Link></li>    {/* Login page route */}
            </ul>
        </nav>
    );
};

export default Nav;
