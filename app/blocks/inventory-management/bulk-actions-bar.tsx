import { IconDownload, IconCheck, IconTrash } from "@tabler/icons-react";
import styles from "./bulk-actions-bar.module.css";

interface Props { className?: string; count: number; onClear: () => void; }

export function BulkActionsBar({ className, count, onClear }: Props) {
  return (
    <div className={[styles.bar, className].filter(Boolean).join(" ")}>
      <span className={styles.count}>{count} selected</span>
      <div className={styles.actions}>
        <button className={styles.btn}><IconDownload size={13} style={{ display: "inline", marginRight: 4 }} />Export CSV</button>
        <button className={styles.btn}><IconCheck size={13} style={{ display: "inline", marginRight: 4 }} />Mark as Sold</button>
        <button className={[styles.btn, styles.btnDanger].join(" ")}><IconTrash size={13} style={{ display: "inline", marginRight: 4 }} />Delete</button>
      </div>
      <button className={styles.clearBtn} onClick={onClear}>Clear selection</button>
    </div>
  );
}
