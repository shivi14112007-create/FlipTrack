import { IconPlus } from "@tabler/icons-react";
import styles from "./expenses-header.module.css";

interface Props { className?: string; onAddExpense?: () => void; }

export function ExpensesHeader({ className, onAddExpense }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.left}>
        <h1 className={styles.title}>Expenses</h1>
        <div className={styles.meta}>$239 total &bull; $47.80 avg per sale this month</div>
      </div>
      <div className={styles.controls}>
        <select className={styles.select}><option>This Month</option><option>Last 3 Months</option><option>This Year</option></select>
        <button className={styles.btn} onClick={onAddExpense}><IconPlus size={14} /> Add Expense</button>
      </div>
    </div>
  );
}
