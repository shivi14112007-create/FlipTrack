import { mockExpenses } from "~/data/mock-data";
import styles from "./one-time-expenses-table.module.css";

interface Props { className?: string; }

export function OneTimeExpensesTable({ className }: Props) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Date</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>Category</th>
            <th className={styles.th}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {mockExpenses.map(e => (
            <tr key={e.id} className={styles.tr}>
              <td className={styles.td}>{e.date}</td>
              <td className={styles.td}>{e.description}</td>
              <td className={styles.td}><span className={styles.catBadge}>{e.category.replace(/_/g, " ")}</span></td>
              <td className={styles.td}><span className={styles.amount}>${e.amount}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
