import styles from "./sales-summary-cards.module.css";

interface Props { className?: string; }

const cards = [
  { label: "Total Sales", value: "5", sub: "This month" },
  { label: "Total Revenue", value: "$1,345", sub: "This month" },
  { label: "Net Profit", value: "$443", sub: "This month", positive: true },
  { label: "Avg Profit/Sale", value: "$88", sub: "This month", positive: true },
];

export function SalesSummaryCards({ className }: Props) {
  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      {cards.map(c => (
        <div key={c.label} className={styles.card}>
          <div className={styles.label}>{c.label}</div>
          <div className={[styles.value, c.positive ? styles.positive : ""].join(" ")}>{c.value}</div>
          <div className={styles.sub}>{c.sub}</div>
        </div>
      ))}
    </div>
  );
}
