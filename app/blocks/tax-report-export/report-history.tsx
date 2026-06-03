import styles from "./report-history.module.css";

interface Props { className?: string; }

export function ReportHistory({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Previously Generated Reports</div>
      <div className={styles.empty}>No reports generated yet. Generate your first tax report above.</div>
    </div>
  );
}
