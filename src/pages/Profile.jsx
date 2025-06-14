import React from "react";
import "../css/Profile.css";
import { useAuth } from "../context/AuthContext";
const Profile = () => {
  const { user } = useAuth();
  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <p>
          <strong>Name:</strong> {user?.name}
        </p>
        <p>
          <strong>Email:</strong> {user?.email}
        </p>
        <p>
          <strong>ID:</strong> {user?.id}
        </p>
        <p>
          <strong>Status:</strong> Active
        </p>
      </div>
      <div className="profile-actions">
        <button className="btn-secondary">Edit Profile</button>
        <button className="btn-secondary">Change Password</button>
      </div>
    </div>
  );
};
export default Profile;
