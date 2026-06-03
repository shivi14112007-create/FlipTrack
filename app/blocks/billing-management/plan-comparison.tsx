import { Link } from "react-router";
import styles from "./plan-comparison.module.css";

interface Props { className?: string; }

const plans = [
  { name: "Free", price: "$0", current: true },
  { name: "Pro", price: "$12", current: false },
  { name: "Business", price: "$25", current: false },
];

export function PlanComparison({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Compare Plans</h2>
      <div className={styles.grid}>
        {plans.map(p => (
          <div key={p.name} className={[styles.card, p.current ? styles.current : ""].join(" ")}>
            <div className={styles.planName}>{p.name}</div>
            <div className={styles.price}>{p.price}<span style={{ fontSize: 12, fontWeight: 400, color: "var(--color-text-muted)" }}>/mo</span></div>
            {p.current ? (
              <div className={[styles.btn, styles.currentBtn].join(" ")}>Current Plan</div>
            ) : (
              <Link to="/pricing" className={[styles.btn, styles.upgradeBtn].join(" ")}>Upgrade</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
