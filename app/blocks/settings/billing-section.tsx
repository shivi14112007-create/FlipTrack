import { Link } from "react-router";
import styles from "./billing-section.module.css";

interface Props { className?: string; }

export function BillingSection({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Billing</h2>
      <div className={styles.planCard}>
        <div className={styles.planName}>Free Plan</div>
        <div className={styles.planPrice}>$0<span style={{ fontSize: 16, fontWeight: 400, color: "var(--color-text-muted)" }}>/mo</span></div>
        <div className={styles.renewal}>Up to 15 inventory items &bull; 5 price alerts</div>
        <div className={styles.actions}>
          <Link to="/app/settings/billing" className={styles.upgradeBtn}>Upgrade to Pro</Link>
          <button className={styles.manageBtn}>Manage Subscription</button>
        </div>
      </div>
    </div>
  );
}
