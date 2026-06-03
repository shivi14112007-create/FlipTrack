import { IconPlus } from "@tabler/icons-react";
import styles from "./alerts-header.module.css";

interface Props { className?: string; onCreateAlert?: () => void; }

export function AlertsHeader({ className, onCreateAlert }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.left}>
        <h1 className={styles.title}>Price Alerts</h1>
        <div className={styles.meta}>3 active &bull; 1 triggered this month</div>
      </div>
      <button className={styles.btn} onClick={onCreateAlert}><IconPlus size={14} /> Create Alert</button>
    </div>
  );
}
