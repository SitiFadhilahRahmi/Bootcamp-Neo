import React, { useState } from "react";
import "../css/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">My App</Link>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link to="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
            <Link to="/tasks" onClick={() => setMenuOpen(false)}>Tasks</Link>
            <span>Welcome, {user?.name}</span>
            <button onClick={() => { handleLogout(); setMenuOpen(false); }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
