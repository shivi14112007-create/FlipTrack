import styles from "./export-options.module.css";

interface Props { className?: string; }

const options = [
  { icon: "📄", label: "CSV Export", desc: "For spreadsheets" },
  { icon: "📊", label: "PDF Report", desc: "For accountants" },
  { icon: "📝", label: "Form 8949", desc: "US tax template" },
];

export function ExportOptions({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      {options.map(o => (
        <button key={o.label} className={styles.btn}>
          <span className={styles.btnIcon}>{o.icon}</span>
          {o.label}
          <span style={{ fontSize: 11, color: "var(--color-text-subtle)" }}>{o.desc}</span>
        </button>
      ))}
    </div>
  );
}
