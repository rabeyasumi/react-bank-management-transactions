import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow-sm">
      <Link className="navbar-brand fw-bold text-info" to="/">🏦 TrustBank</Link>
      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav gap-3">
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link text-info fw-bold" : "nav-link"} to="/">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link text-info fw-bold" : "nav-link"} to="/deposit">Deposit</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link text-info fw-bold" : "nav-link"} to="/withdraw">Withdraw</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link text-info fw-bold" : "nav-link"} to="/transactions">Transactions</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}