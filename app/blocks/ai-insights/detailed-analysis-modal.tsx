import { IconX } from "@tabler/icons-react";
import { mockAiInsights } from "~/data/mock-data";
import styles from "./detailed-analysis-modal.module.css";

interface Props { className?: string; itemId: string; onClose: () => void; }

export function DetailedAnalysisModal({ className, itemId, onClose }: Props) {
  const item = mockAiInsights.find(i => i.id === itemId);
  if (!item) return null;

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={[styles.modal, className].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.title}>{item.name}</span>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.body}>
          <div className={styles.rec}>
            <span className={[styles.badge, styles[item.recommendation]].join(" ")}>{item.recommendation}</span>
            <span className={styles.target}>Target: ${item.targetPrice}</span>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionLabel}>AI Analysis</div>
            <p className={styles.reasoning}>{item.reasoning}</p>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Confidence Score</div>
            <div style={{ fontFamily: "var(--family-mono)", fontSize: 18, fontWeight: 700, color: "var(--color-primary)" }}>{item.confidence}%</div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionLabel}>Purchase Price</div>
            <div style={{ fontFamily: "var(--family-mono)", fontSize: 14, color: "var(--color-text-muted)" }}>${item.purchasePrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
