import styles from "./billing-history.module.css";

interface Props { className?: string; }

export function BillingHistory({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Billing History</h2>
      <div className={styles.empty}>No invoices yet. Billing history will appear here after your first payment.</div>
    </div>
  );
}
