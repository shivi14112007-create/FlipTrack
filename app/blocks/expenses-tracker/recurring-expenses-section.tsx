import { mockRecurringExpenses } from "~/data/mock-data";
import styles from "./recurring-expenses-section.module.css";

interface Props { className?: string; }

export function RecurringExpensesSection({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Recurring Monthly Expenses</div>
      <div className={styles.items}>
        {mockRecurringExpenses.map(e => (
          <div key={e.id} className={styles.item}>
            <div className={styles.left}>
              <div className={styles.desc}>{e.description}</div>
              <div className={styles.day}>Bills on day {e.dayOfMonth} of each month</div>
            </div>
            <div className={styles.right}>
              <span className={styles.amount}>${e.amount}/mo</span>
              <input type="checkbox" className={styles.toggle} defaultChecked={e.isActive} />
              <button className={styles.editBtn}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
