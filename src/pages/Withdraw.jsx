import React, { useState, useContext, useRef, useEffect } from 'react';
import { BankContext } from '../context/BankContext';

export default function Withdraw() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const { balance, addTransaction } = useContext(BankContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const val = Number(amount);

    if (!amount || val <= 0) {
      setMessage({ type: 'danger', text: 'Please enter a valid amount greater than zero.' });
      return;
    }

    if (val > balance) {
      setMessage({ type: 'danger', text: 'Insufficient balance for this withdrawal!' });
      return;
    }

    if (window.confirm(`Are you sure you want to withdraw $${val}?`)) {
      addTransaction('Withdrawal', val);
      setMessage({ type: 'success', text: `Successfully withdrew $${val}!` });
      setAmount('');
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
        <h3 className="fw-bold mb-4 text-danger">Withdraw Money</h3>
        <p className="text-muted">Available Balance: <strong className="text-dark">${balance.toLocaleString()}</strong></p>
        {message && <div className={`alert alert-${message.type}`}>{message.text}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Amount ($)</label>
            <input 
              ref={inputRef}
              type="number" 
              className="form-control form-control-lg rounded-3" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              placeholder="Enter amount to withdraw"
            />
          </div>
          <button type="submit" className="btn btn-danger btn-lg w-100 rounded-3 fw-bold">Withdraw</button>
        </form>
      </div>
    </div>
  );
}