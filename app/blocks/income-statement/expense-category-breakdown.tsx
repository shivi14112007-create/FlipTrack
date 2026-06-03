import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./expense-category-breakdown.module.css";

interface Props { className?: string; }

const data = [
  { name: "Marketplace Fees", value: 67, color: "#00FF88" },
  { name: "Shipping", value: 38, color: "#7C3AED" },
  { name: "Bot Subscriptions", value: 14, color: "#3B82F6" },
  { name: "Supplies", value: 28, color: "#FFB347" },
  { name: "Storage", value: 120, color: "#FF4D6A" },
];

export function ExpenseCategoryBreakdown({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Expenses by Category</div>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={40} outerRadius={65} paddingAngle={3} dataKey="value">
            {data.map((e, i) => <Cell key={i} fill={e.color} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} formatter={(v) => [`${Number(v)}`, ""]} />
        </PieChart>
      </ResponsiveContainer>
      {data.map(d => (
        <div key={d.name} className={styles.legendItem}>
          <div className={styles.dot} style={{ background: d.color }} />
          {d.name}
          <span className={styles.amount}>${d.value}</span>
        </div>
      ))}
    </div>
  );
}
