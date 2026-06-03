import styles from "./sales-history.module.css";

interface Props { className?: string; }

export function SalesHistory({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Sales History</div>
      <p className={styles.empty}>This item has not been sold yet.</p>
    </div>
  );
}
