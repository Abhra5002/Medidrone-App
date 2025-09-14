import React from "react";

const UserDashboard = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {user.email} (User)</h1>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h2>User Dashboard</h2>
        <p>Placeholder for live drone tracking and service request.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
