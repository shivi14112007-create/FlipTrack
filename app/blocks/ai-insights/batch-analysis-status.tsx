import styles from "./batch-analysis-status.module.css";

interface Props { className?: string; onCancel?: () => void; }

export function BatchAnalysisStatus({ className, onCancel }: Props) {
  return (
    <div className={[styles.status, className].filter(Boolean).join(" ")}>
      <div className={styles.header}>
        <span className={styles.label}>Analyzing portfolio...</span>
        <button className={styles.cancelBtn} onClick={onCancel}>Cancel</button>
      </div>
      <div className={styles.progressBar}><div className={styles.progress} /></div>
      <div className={styles.meta}>2 of 5 items analyzed &bull; ~20 seconds remaining</div>
    </div>
  );
}
