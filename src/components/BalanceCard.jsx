import React from 'react';

export default function BalanceCard({ title, value, colorClass }) {
  return (
    <div className={`card text-white ${colorClass} shadow-sm border-0 rounded-4 p-3`}>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 opacity-75">{title}</h6>
        <h3 className="card-title fw-bold">${value.toLocaleString()}</h3>
      </div>
    </div>
  );
}