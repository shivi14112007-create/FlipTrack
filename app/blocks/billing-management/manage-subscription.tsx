import styles from "./manage-subscription.module.css";

interface Props { className?: string; }

export function ManageSubscription({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.info}>
        <h3>Manage Subscription</h3>
        <p>Update payment methods, cancel, or modify your subscription via the Stripe customer portal.</p>
      </div>
      <button className={styles.btn}>Open Stripe Portal</button>
    </div>
  );
}
