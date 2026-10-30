# Trust Bank — Bank Management System

A frontend-only bank management practice project built with React, Vite, React Router DOM, Context API, and CSS.

<img width="1081" height="701" alt="Untitled 4" src="https://github.com/user-attachments/assets/67fe8e71-9a73-49ba-aabd-68a94ccd58d6" />



## Features

- Dashboard with account holder, account number, current balance, deposits, and withdrawals
- Deposit and withdrawal forms with validation
- Transaction history with type, amount, and date/time
- Shared account state through Context API
- Persistent balance and transactions using `localStorage`
- Amount input auto-focus with `useRef`
- Withdrawal confirmation
- Responsive layout and reusable components

> This is a simulated banking application. It does not connect to a bank, database, or payment service and does not transfer real money.

## Run locally

Make sure Node.js and npm are installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Project structure

```text
src/
├── components/
│   ├── AppLayout.jsx
│   ├── BalanceCard.jsx
│   ├── Navbar.jsx
│   ├── StatCard.jsx
│   ├── TransactionItem.jsx
│   └── TransactionList.jsx
├── context/
│   └── BankContext.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Deposit.jsx
│   ├── Transactions.jsx
│   └── Withdraw.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Demo account

- Account holder: Alex Morgan
- Account number: 4582 9012 6734
- Initial balance: $12,450.00

The demo data is stored in your browser's local storage. Use the **Reset demo data** button in the dashboard to restore the initial values.
