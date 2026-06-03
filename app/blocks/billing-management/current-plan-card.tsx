import { IconCheck } from "@tabler/icons-react";
import { Link } from "react-router";
import styles from "./current-plan-card.module.css";

interface Props { className?: string; }

export function CurrentPlanCard({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.planName}>Free Plan</div>
      <div className={styles.price}>$0<span style={{ fontSize: 16, fontWeight: 400, color: "var(--color-text-muted)" }}>/month</span></div>
      <div className={styles.renewal}>No renewal &bull; Free forever</div>
      <div className={styles.features}>
        {["Up to 15 inventory items", "5 price alerts", "Basic dashboard", "CSV export"].map(f => (
          <div key={f} className={styles.feature}><IconCheck size={14} className={styles.check} />{f}</div>
        ))}
      </div>
      <Link to="/pricing" className={styles.btn}>Upgrade Plan</Link>
    </div>
  );
}
