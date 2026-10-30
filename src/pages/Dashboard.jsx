import React, { useContext } from 'react';
import { BankContext } from '../context/BankContext';
import BalanceCard from '../components/BalanceCard';

export default function Dashboard() {
  const { balance, accountInfo, totalDeposited, totalWithdrawn } = useContext(BankContext);

  return (
    <div className="container py-5">
      <div className="p-5 mb-4 bg-light rounded-4 shadow-sm border">
        <h1 className="display-6 fw-bold text-primary">{accountInfo.bankName}</h1>
        <hr className="my-3" />
        <p className="fs-5 mb-1"><strong>Account Holder:</strong> {accountInfo.accountHolder}</p>
        <p className="fs-5 text-muted"><strong>Account Number:</strong> {accountInfo.accountNumber}</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <BalanceCard title="Current Balance" value={balance} colorClass="bg-primary" />
        </div>
        <div className="col-md-4">
          <BalanceCard title="Total Deposited" value={totalDeposited} colorClass="bg-success" />
        </div>
        <div className="col-md-4">
          <BalanceCard title="Total Withdrawn" value={totalWithdrawn} colorClass="bg-danger" />
        </div>
      </div>
    </div>
  );
}