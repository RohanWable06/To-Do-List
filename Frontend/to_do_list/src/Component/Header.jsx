import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="navbar navbar-expand-md bg-dark navbar-dark fixed-top justify-content-between">
      <div>
        <NavLink to="/" className="navbar-brand">Task Management</NavLink>
        

      </div>
      <div className="navbar-nav">
        <NavLink to="/aboutus" className="nav-item nav-link">New Task</NavLink>
        <NavLink to="/contactus" className="nav-item nav-link">Contact Us</NavLink>
      </div>
    </div>
  );
};

export default Header;
