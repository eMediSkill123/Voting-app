import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaUsers, FaRegNewspaper } from "react-icons/fa";

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/feed" className="nav-link">
        <FaRegNewspaper />
        <span>Feed</span>
      </NavLink>
      <NavLink to="/members" className="nav-link">
        <FaUsers />
        <span>Members</span>
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        <FaUser />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}
