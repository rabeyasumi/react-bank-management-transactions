import { formatMoney } from "./BalanceCard";

export default function StatCard({ label, value, type, note }) {
  return (
    <article className="stat-card">
      <div className="stat-top">
        <span>{label}</span>
        <span className={`stat-icon ${type}`}>{type === "deposit" ? "↓" : "↑"}</span>
      </div>
      <strong>{formatMoney(value)}</strong>
      <small>{note}</small>
    </article>
  );
}