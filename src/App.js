import React, { useState } from "react";
import Login from "./Login";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container dark-mode">
      {user.role === "user" ? (
        <UserDashboard user={user} onLogout={handleLogout} />
      ) : (
        <AdminDashboard user={user} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
