import React, { useContext } from 'react';
import { BankContext } from '../context/BankContext';
import TransactionItem from '../components/TransactionItem';

export default function Transactions() {
  const { transactions } = useContext(BankContext);

  return (
    <div className="container py-5" style={{ maxWidth: '800px' }}>
      <h3 className="fw-bold mb-4">Transaction History</h3>
      {transactions.length === 0 ? (
        <div className="alert alert-info text-center p-4 rounded-3">No transactions found.</div>
      ) : (
        <div className="list-group">
          {transactions.map(tx => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))}
        </div>
      )}
    </div>
  );
}