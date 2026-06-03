import { mockAlerts } from "~/data/mock-data";
import styles from "./active-alerts-table.module.css";

interface Props { className?: string; }

export function ActiveAlertsTable({ className }: Props) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Product</th>
              <th className={styles.th}>Marketplace</th>
              <th className={styles.th}>Target Price</th>
              <th className={styles.th}>Direction</th>
              <th className={styles.th}>Notify via</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Last Triggered</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockAlerts.map(a => (
              <tr key={a.id} className={styles.tr}>
                <td className={styles.td}>{a.product}</td>
                <td className={styles.td}>{a.marketplace}</td>
                <td className={styles.td}><span className={styles.mono}>${a.targetPrice}</span></td>
                <td className={styles.td}><span className={a.direction === "ABOVE" ? styles.aboveBadge : styles.belowBadge}>{a.direction === "ABOVE" ? "↑ Above" : "↓ Below"}</span></td>
                <td className={styles.td}>{a.channel}</td>
                <td className={styles.td}><span className={a.isActive ? styles.active : styles.inactive}>{a.isActive ? "Active" : "Inactive"}</span></td>
                <td className={styles.td}>{a.lastTriggered ?? "Never"}</td>
                <td className={styles.td}><button className={styles.editBtn}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
