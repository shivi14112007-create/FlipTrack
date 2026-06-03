import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "./pagination.module.css";

interface Props { className?: string; }

export function Pagination({ className }: Props) {
  const [page, setPage] = useState(1);
  const total = 4;
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <button className={styles.btn} onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}><IconChevronLeft size={14} /></button>
        {Array.from({ length: total }, (_, i) => i + 1).map(p => (
          <button key={p} className={[styles.btn, p === page ? styles.active : ""].join(" ")} onClick={() => setPage(p)}>{p}</button>
        ))}
        <button className={styles.btn} onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}><IconChevronRight size={14} /></button>
      </div>
    </div>
  );
}
