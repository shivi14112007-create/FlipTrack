import styles from "./statement-header.module.css";

interface Props { className?: string; }

export function StatementHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <h1 className={styles.title}>Income Statement</h1>
      <div className={styles.controls}>
        <select className={styles.select}><option>This Month</option><option>This Quarter</option><option>This Year</option><option>Custom</option></select>
      </div>
    </div>
  );
}
