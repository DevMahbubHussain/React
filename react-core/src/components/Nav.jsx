import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/add-blog" className="nav-link">
          Add Blog
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/cards" className="nav-link">
          Cards
        </NavLink>
        <NavLink to="/signup" className="nav-link">
          Signup
        </NavLink>
        <NavLink to="/post" className="nav-link">
          Posts
        </NavLink>
      </nav>
    </div>
  );
}
