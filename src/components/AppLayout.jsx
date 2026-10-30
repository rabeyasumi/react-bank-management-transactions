import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import React from "react";

export default function AppLayout() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="main-content">
        <Outlet />
        <footer className="footer">© 2026 Northstar Bank <span>•</span> Your money, made simple.</footer>
      </main>
    </div>
  );
}