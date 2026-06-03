import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";
import styles from "./stats-cards-row.module.css";

interface Props { className?: string; }

const stats = [
  { label: "Portfolio Value", value: "$24,850", change: "+12.4%", positive: true, bars: [60,70,55,80,65,90,75] },
  { label: "Unrealized Gain/Loss", value: "+$6,280", change: "+18.2%", positive: true, bars: [40,55,45,70,60,80,75] },
  { label: "Revenue (This Month)", value: "$8,320", change: "+8.1%", positive: true, bars: [50,60,70,55,80,75,90] },
  { label: "Net Profit (This Month)", value: "$2,940", change: "+15.3%", positive: true, bars: [45,60,50,75,65,80,85] },
];

export function StatsCardsRow({ className }: Props) {
  return (
    <div className={[styles.row, className].filter(Boolean).join(" ")}>
      {stats.map(s => (
        <div key={s.label} className={styles.card}>
          <div className={styles.label}>{s.label}</div>
          <div className={styles.value}>{s.value}</div>
          <div className={[styles.change, s.positive ? styles.positive : styles.negative].join(" ")}>
            {s.positive ? <IconTrendingUp size={12} /> : <IconTrendingDown size={12} />}
            {s.change} vs last period
          </div>
          <div className={styles.sparkline}>
            {s.bars.map((h, i) => (
              <div key={i} className={styles.bar} style={{ height: `${h}%`, background: s.positive ? "var(--color-success)" : "var(--color-danger)", opacity: 0.6 }} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
