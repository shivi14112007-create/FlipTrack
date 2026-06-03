import styles from "./tax-report-header.module.css";

interface Props { className?: string; }

export function TaxReportHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <h1 className={styles.title}>Tax Reports</h1>
      <p className={styles.desc}>
        Generate professional capital gains reports for tax filing. Supports CSV, PDF, and Form 8949 templates.
      </p>
      <span className={styles.planBadge}>Pro &amp; Business Feature</span>
    </div>
  );
}
