import React from 'react';

export default function TransactionItem({ transaction }) {
  const isDeposit = transaction.type === 'Deposit';
  return (
    <div className="list-group-item d-flex justify-content-between align-items-center py-3 border-0 shadow-sm mb-2 rounded-3 bg-light">
      <div>
        <span className={`badge px-3 py-2 me-3 ${isDeposit ? 'bg-success' : 'bg-danger'}`}>
          {transaction.type}
        </span>
        <span className="text-muted small">{transaction.date}</span>
      </div>
      <span className={`fw-bold fs-5 ${isDeposit ? 'text-success' : 'text-danger'}`}>
        {isDeposit ? '+' : '-'}${transaction.amount.toLocaleString()}
      </span>
    </div>
  );
}