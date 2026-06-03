import styles from "./item-info-card.module.css";

interface Props { className?: string; }

export function ItemInfoCard({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Item Details</div>
      <div className={styles.field}><div className={styles.label}>Purchase Price</div><div className={[styles.value, styles.money].join(" ")}>$170.00</div></div>
      <div className={styles.field}><div className={styles.label}>Purchase Date</div><div className={styles.value}>Jan 18, 2024</div></div>
      <div className={styles.field}><div className={styles.label}>Condition</div><div className={styles.value}>Deadstock</div></div>
      <div className={styles.field}><div className={styles.label}>Status</div><div className={styles.value}><span className={styles.badge}>In Stock</span></div></div>
      <div className={styles.field}><div className={styles.label}>Asking Price</div><div className={[styles.value, styles.money].join(" ")}>$450.00</div></div>
      <div className={styles.field}><div className={styles.label}>Notes</div><div className={styles.value}>Purchased during Nike SNKRS drop</div></div>
    </div>
  );
}
