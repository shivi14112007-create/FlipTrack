import { mockSales } from "~/data/mock-data";
import styles from "./detailed-statement-table.module.css";

interface Props { className?: string; }

export function DetailedStatementTable({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Detailed Statement</div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Date</th>
              <th className={styles.th}>Item</th>
              <th className={styles.th}>Sale Price</th>
              <th className={styles.th}>COGS</th>
              <th className={styles.th}>Gross Profit</th>
              <th className={styles.th}>Expenses</th>
              <th className={styles.th}>Net Profit</th>
            </tr>
          </thead>
          <tbody>
            {mockSales.map(s => {
              const cogs = s.salePrice - s.profit - 42;
              const gross = s.salePrice - cogs;
              return (
                <tr key={s.id} className={styles.tr}>
                  <td className={styles.td}>{s.date}</td>
                  <td className={styles.td}>{s.item}</td>
                  <td className={styles.td}><span className={styles.mono}>${s.salePrice}</span></td>
                  <td className={styles.td}><span className={styles.mono}>${cogs}</span></td>
                  <td className={styles.td}><span className={[styles.mono, styles.positive].join(" ")}>${gross}</span></td>
                  <td className={styles.td}><span className={styles.mono}>$42</span></td>
                  <td className={styles.td}><span className={[styles.mono, s.profit >= 0 ? styles.positive : styles.negative].join(" ")}>${s.profit}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
