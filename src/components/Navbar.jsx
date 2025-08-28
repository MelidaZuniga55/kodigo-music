import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎵 Kodigo Music</div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={({isActive}) => isActive ? 'active-link' : ''}>Home</NavLink></li>
        <li><NavLink to="/library" className={({isActive}) => isActive ? 'active-link' : ''}>Library</NavLink></li>
      </ul>
      <div className="navbar-user">Hello, {user.name}</div>
    </nav>
  );
};

export default Navbar;
