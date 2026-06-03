import styles from "./price-update-status.module.css";

interface Props { className?: string; }

export function PriceUpdateStatus({ className }: Props) {
  return (
    <div className={[styles.bar, className].filter(Boolean).join(" ")}>
      <div className={styles.item}><div className={[styles.dot, styles.green].join(" ")} />Last refresh: 3 min ago</div>
      <div className={styles.item}><div className={[styles.dot, styles.green].join(" ")} />5 items current</div>
      <div className={styles.item}><div className={[styles.dot, styles.yellow].join(" ")} />0 stale prices</div>
      <label className={styles.toggle}>
        <input type="checkbox" defaultChecked style={{ accentColor: "var(--color-primary)" }} />
        Auto-refresh
      </label>
    </div>
  );
}
