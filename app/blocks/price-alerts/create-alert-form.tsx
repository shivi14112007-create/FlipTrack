import { IconX } from "@tabler/icons-react";
import styles from "./create-alert-form.module.css";

interface Props { className?: string; onClose: () => void; }

export function CreateAlertForm({ className, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={[styles.modal, className].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.title}>Create Price Alert</span>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.body}>
          <div className={styles.field}><label className={styles.label}>Product / SKU *</label><input className={styles.input} placeholder="e.g. DD1391-100 or Air Jordan 1 Chicago" /></div>
          <div className={styles.row}>
            <div className={styles.field}><label className={styles.label}>Size</label><input className={styles.input} placeholder="e.g. 10" /></div>
            <div className={styles.field}><label className={styles.label}>Marketplace</label><select className={styles.input}><option>StockX</option><option>GOAT</option><option>eBay</option><option>Flight Club</option><option>Stadium Goods</option></select></div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}><label className={styles.label}>Target Price *</label><input className={styles.input} type="number" placeholder="500" /></div>
            <div className={styles.field}>
              <label className={styles.label}>Direction</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}><input type="radio" name="direction" defaultChecked style={{ accentColor: "var(--color-primary)" }} /> Above</label>
                <label className={styles.radioLabel}><input type="radio" name="direction" style={{ accentColor: "var(--color-primary)" }} /> Below</label>
              </div>
            </div>
          </div>
          <div className={styles.field}>
            <label className={styles.label}>Notify via</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}><input type="checkbox" defaultChecked style={{ accentColor: "var(--color-primary)" }} /> Email</label>
              <label className={styles.radioLabel}><input type="checkbox" style={{ accentColor: "var(--color-primary)" }} /> SMS</label>
              <label className={styles.radioLabel}><input type="checkbox" style={{ accentColor: "var(--color-primary)" }} /> Push</label>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.createBtn}>Create Alert</button>
        </div>
      </div>
    </div>
  );
}
