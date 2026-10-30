import React, { createContext, useState, useEffect } from 'react';

export const BankContext = createContext();

export const BankProvider = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem('bank_balance');
    return saved !== null ? Number(saved) : 5000;
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('bank_transactions');
    return saved ? JSON.parse(saved) : [
      { id: 1, type: 'Deposit', amount: 2000, date: '2026-10-28 10:30 AM' },
      { id: 2, type: 'Withdrawal', amount: 1000, date: '2026-10-29 02:15 PM' }
    ];
  });

  const accountInfo = {
    bankName: "Global Trust Bank",
    accountHolder: "John Doe",
    accountNumber: "GTB-987654321"
  };

  useEffect(() => {
    localStorage.setItem('bank_balance', balance);
  }, [balance]);

  useEffect(() => {
    localStorage.setItem('bank_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const totalDeposited = transactions
    .filter(t => t.type === 'Deposit')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalWithdrawn = transactions
    .filter(t => t.type === 'Withdrawal')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const addTransaction = (type, amount) => {
    const newTx = {
      id: Date.now(),
      type,
      amount: Number(amount),
      date: new Date().toLocaleString()
    };
    setTransactions([newTx, ...transactions]);
    if (type === 'Deposit') {
      setBalance(prev => prev + Number(amount));
    } else {
      setBalance(prev => prev - Number(amount));
    }
  };

  return (
    <BankContext.Provider value={{ balance, accountInfo, transactions, totalDeposited, totalWithdrawn, addTransaction }}>
      {children}
    </BankContext.Provider>
  );
};