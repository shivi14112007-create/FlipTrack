import styles from "./expenses-summary.module.css";

interface Props { className?: string; }

const cards = [
  { label: "Total Expenses", value: "$239", sub: "This month" },
  { label: "Marketplace Fees", value: "$67", sub: "Largest category" },
  { label: "Avg per Sale", value: "$47.80", sub: "This month" },
  { label: "% of Revenue", value: "17.8%", sub: "This month" },
];

export function ExpensesSummary({ className }: Props) {
  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      {cards.map(c => (
        <div key={c.label} className={styles.card}>
          <div className={styles.label}>{c.label}</div>
          <div className={styles.value}>{c.value}</div>
          <div className={styles.sub}>{c.sub}</div>
        </div>
      ))}
    </div>
  );
}
