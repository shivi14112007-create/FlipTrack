import { mockSales } from "~/data/mock-data";
import styles from "./sales-table.module.css";

interface Props { className?: string; }

export function SalesTable({ className }: Props) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Item</th>
              <th className={styles.th}>Marketplace</th>
              <th className={styles.th}>Sale Price</th>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Margin</th>
              <th className={styles.th}>Profit</th>
            </tr>
          </thead>
          <tbody>
            {mockSales.map(s => (
              <tr key={s.id} className={styles.tr}>
                <td className={styles.td}>{s.item}</td>
                <td className={styles.td}>{s.marketplace}</td>
                <td className={styles.td}>${s.salePrice}</td>
                <td className={styles.td}>{s.date}</td>
                <td className={styles.td}>{s.margin}%</td>
                <td className={styles.td}>
                  <span className={[styles.profitBadge, s.profit >= 0 ? styles.positive : styles.negative].join(" ")}>
                    {s.profit >= 0 ? "+" : ""}${s.profit}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
