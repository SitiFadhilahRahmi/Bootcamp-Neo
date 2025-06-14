import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Home = () => {
  const { isAuthenticated, user } = useAuth();
  return (
    <div className="home-container">
      <h1>Welcome to My App</h1>
      {isAuthenticated ? (
        <div>
          <p>Hello, {user?.name}!</p>
          <Link to="/dashboard">Go to Dashboard</Link>
        </div>
      ) : (
        <div>
          <p>Please login to access your dashboard</p>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </div>
      )}
    </div>
  );
};
export default Home;
