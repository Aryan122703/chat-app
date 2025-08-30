import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css"; // css file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left side - Brand */}
      <h2 className="navbar-brand">ChatApp</h2>

      {/* Right side - Links + Circle */}
      <div className="navbar-right">
        <div className="navbar-links">
          <NavLink to="/chat" className="nav-link">
            Chat
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </div>

        {/* Circle linking to Login */}
        <Link to="/" className="navbar-circle">
          L
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


