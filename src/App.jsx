import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BankProvider } from './context/BankContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import Transactions from './pages/Transactions';

export default function App() {
  return (
    <BankProvider>
      <Router>
        <div className="min-vh-100 bg-light">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </Router>
    </BankProvider>
  );
}