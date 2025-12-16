import React, { useState } from "react";
import "./AdminLogin.css";
import Footer from "./Footer";

import { Link } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Admin login:", { email, password });
  };

  return (
    <div className="admin-page-container">
      {/* Top Branding (Simple Text/Logo) */}
      <header className="login-header">
        <div className="header-content">
          <h2 className="brand-logo">sohaam mindpower</h2>
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="login-main">
        <div className="admin-card">
          <div className="card-header">
            <h3 className="card-brand">sohaam mindpower</h3>
            <h2 className="admin-title">Admin Login</h2>
            <p className="admin-subtitle">Sign in your account</p>
          </div>

          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <div className="label-row">
                <label htmlFor="password">PASSWORD</label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="forgot-password-link">
                <a href="#">Forgot Password?</a>
              </div>
            </div>

            <button type="submit" className="login-button">Login to admin panel</button>
          </form>
        </div>
      </main>

      {/* Footer Reuse */}
      <Footer />
    </div>
  );
}

export default AdminLogin;
