import { Link } from "react-router";
import { mockTopItems } from "~/data/mock-data";
import styles from "./top-selling-items-table.module.css";

interface Props { className?: string; }

export function TopSellingItemsTable({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.header}><span className={styles.title}>Top Selling Items</span></div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Product</th>
            <th className={[styles.th, styles.right].join(" ")}>Times Sold</th>
            <th className={[styles.th, styles.right].join(" ")}>Avg Margin</th>
            <th className={[styles.th, styles.right].join(" ")}>Total Profit</th>
          </tr>
        </thead>
        <tbody>
          {mockTopItems.map((item, i) => (
            <tr key={i}>
              <td className={styles.td}><Link to="/app/inventory/1" className={styles.link}>{item.name}</Link></td>
              <td className={[styles.td, styles.right].join(" ")}>{item.sold}</td>
              <td className={[styles.td, styles.right].join(" ")}>{item.avgMargin}%</td>
              <td className={styles.profit}>${item.totalProfit.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
