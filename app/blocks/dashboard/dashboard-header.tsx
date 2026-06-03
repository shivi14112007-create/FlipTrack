import { IconDownload } from "@tabler/icons-react";
import styles from "./dashboard-header.module.css";

interface Props { className?: string; }

export function DashboardHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <h1 className={styles.title}>Dashboard</h1>
      <div className={styles.controls}>
        <select className={styles.select} defaultValue="month">
          <option value="month">This Month</option>
          <option value="3months">Last 3 Months</option>
          <option value="year">Last Year</option>
          <option value="custom">Custom</option>
        </select>
        <button className={styles.exportBtn}>
          <IconDownload size={14} /> Export
        </button>
      </div>
    </div>
  );
}
