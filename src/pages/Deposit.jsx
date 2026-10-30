import React, { useState, useContext, useRef, useEffect } from 'react';
import { BankContext } from '../context/BankContext';

export default function Deposit() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState(null);
  const { addTransaction } = useContext(BankContext);
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

    addTransaction('Deposit', val);
    setMessage({ type: 'success', text: `Successfully deposited $${val}!` });
    setAmount('');
  };

  return (
    <div className="container py-5" style={{ maxWidth: '600px' }}>
      <div className="card shadow-sm border-0 rounded-4 p-4 bg-white">
        <h3 className="fw-bold mb-4 text-success">Deposit Money</h3>
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
              placeholder="Enter amount to deposit"
            />
          </div>
          <button type="submit" className="btn btn-success btn-lg w-100 rounded-3 fw-bold">Deposit</button>
        </form>
      </div>
    </div>
  );
}