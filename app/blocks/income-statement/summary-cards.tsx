import styles from "./summary-cards.module.css";

interface Props { className?: string; }

const cards = [
  { label: "Total Revenue", value: "$8,320", change: "+8.1%" },
  { label: "Total COGS", value: "$4,820", change: "+6.2%" },
  { label: "Gross Profit", value: "$3,500", change: "+10.4%", positive: true },
  { label: "Net Profit", value: "$2,940", change: "+15.3%", positive: true },
  { label: "Total Expenses", value: "$560", change: "+3.1%" },
  { label: "ROI", value: "61%", change: "+7.8%", positive: true },
  { label: "Profit Margin", value: "35.3%", change: "+6.5%", positive: true },
];

export function SummaryCards({ className }: Props) {
  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")} style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      {cards.slice(0, 4).map(c => (
        <div key={c.label} className={styles.card}>
          <div className={styles.label}>{c.label}</div>
          <div className={[styles.value, c.positive ? styles.positive : ""].join(" ")}>{c.value}</div>
          <div className={styles.change}>{c.change} vs last period</div>
        </div>
      ))}
    </div>
  );
}
