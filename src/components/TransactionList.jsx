import React from 'react';
import TransactionItem from './TransactionItem';

export default function TransactionList({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="alert alert-info text-center p-4 rounded-3 shadow-sm">
        No transactions found.
      </div>
    );
  }

  return (
    <div className="list-group shadow-sm rounded-4 overflow-hidden border-0">
      {transactions.map(tx => (
        <TransactionItem key={tx.id} transaction={tx} />
      ))}
    </div>
  );
}