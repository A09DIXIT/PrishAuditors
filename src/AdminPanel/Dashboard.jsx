// src/AdminPanel/Dashboard.jsx

import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="logo">🏠 PRISH AUDITORS</div>
        <ul className="sidebar-menu">
          <li>Dashboards</li>
          <li>Home Page</li>
          <li>Service Page</li>
          <li>Footer</li>
          <li>About Us</li>
          <li>Enquiry</li>
       
        </ul>
      </aside>

      <div className="main-content">
        <header className="topbar">
          <div className="right">
            <span>🌐</span>
            <span>admin@gmail.com</span>
          </div>
        </header>

        <main className="dashboard-main">
          <h2>Welcome Back!</h2>
          <div className="stats">
            <div className="stat-card">🏘️ Enquiry<br/>7</div>
            <div className="stat-card">🏢 Subscribers<br/>6</div>
          </div>
        </main>

        <footer className="footer">2025 © PRISHAUDITORS</footer>
      </div>
    </div>
  );
}
