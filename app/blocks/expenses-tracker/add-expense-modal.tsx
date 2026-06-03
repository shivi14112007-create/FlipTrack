import { IconX } from "@tabler/icons-react";
import styles from "./add-expense-modal.module.css";

interface Props { className?: string; onClose: () => void; }

export function AddExpenseModal({ className, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={[styles.modal, className].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.title}>Add Expense</span>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <div className={styles.field}><label className={styles.label}>Date *</label><input className={styles.input} type="date" /></div>
            <div className={styles.field}><label className={styles.label}>Amount *</label><input className={styles.input} type="number" placeholder="0.00" /></div>
          </div>
          <div className={styles.field}><label className={styles.label}>Description *</label><input className={styles.input} placeholder="e.g. StockX seller fee" /></div>
          <div className={styles.field}>
            <label className={styles.label}>Category</label>
            <select className={styles.input}><option>MARKETPLACE_FEE</option><option>SHIPPING</option><option>BOT_FEE</option><option>ADVERTISING</option><option>STORAGE</option><option>SUPPLIES</option><option>CUSTOM</option></select>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.saveBtn}>Save Expense</button>
        </div>
      </div>
    </div>
  );
}
