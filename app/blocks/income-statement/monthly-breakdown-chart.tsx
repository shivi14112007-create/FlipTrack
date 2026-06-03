import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { mockCashFlow } from "~/data/mock-data";
import styles from "./monthly-breakdown-chart.module.css";

interface Props { className?: string; }

const data = mockCashFlow.map(d => ({ ...d, profit: d.revenue - d.expenses }));

export function MonthlyBreakdownChart({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Monthly Breakdown</div>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: "var(--color-text-subtle)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "var(--color-text-subtle)", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `$${(v/1000).toFixed(0)}k`} />
          <Tooltip contentStyle={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} formatter={(v) => [`${Number(v).toLocaleString()}`, ""]} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="revenue" fill="var(--color-success)" radius={[2,2,0,0]} fillOpacity={0.8} />
          <Bar dataKey="expenses" fill="var(--color-danger)" radius={[2,2,0,0]} fillOpacity={0.8} />
          <Bar dataKey="profit" fill="var(--color-info)" radius={[2,2,0,0]} fillOpacity={0.8} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
