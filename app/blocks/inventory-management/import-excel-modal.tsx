import { IconX, IconUpload } from "@tabler/icons-react";
import styles from "./import-excel-modal.module.css";

interface Props { className?: string; onClose: () => void; }

export function ImportExcelModal({ className, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={[styles.modal, className].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.title}>Import from Excel / CSV</span>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.body}>
          <div className={styles.dropzone}>
            <IconUpload size={36} className={styles.dropIcon} />
            <div className={styles.dropText}>Drop your Excel or CSV file here</div>
            <div className={styles.dropSub}>Supports .xlsx, .xls, .csv &mdash; max 10MB</div>
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.importBtn}>Import Items</button>
        </div>
      </div>
    </div>
  );
}
