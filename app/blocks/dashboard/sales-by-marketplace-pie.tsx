import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { mockMarketplacePie } from "~/data/mock-data";
import styles from "./sales-by-marketplace-pie.module.css";

interface Props { className?: string; }

export function SalesByMarketplacePie({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Sales by Marketplace</div>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie data={mockMarketplacePie} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value">
            {mockMarketplacePie.map((entry, i) => <Cell key={i} fill={entry.color} />)}
          </Pie>
          <Tooltip
            contentStyle={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: 8, color: "var(--color-text)", fontSize: 12 }}
            formatter={(v) => [`${Number(v)}%`, ""]}
          />
        </PieChart>
      </ResponsiveContainer>
      <div>
        {mockMarketplacePie.map(item => (
          <div key={item.name} className={styles.legendItem}>
            <div className={styles.dot} style={{ background: item.color }} />
            {item.name} &mdash; {item.value}%
          </div>
        ))}
      </div>
    </div>
  );
}
