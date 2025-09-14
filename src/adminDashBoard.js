import React from "react";

const AdminDashboard = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Welcome, {user.email} (Admin)</h1>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h2>Admin Dashboard</h2>
        <p>Placeholder for drone details and user request management.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
