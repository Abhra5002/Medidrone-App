import React, { useState } from "react";
import "./App.css";

const Login = ({ onLogin }) => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ role, email });
  };

  return (
    <div className="login-container">
      <h2>MedIDrone Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Role:
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
