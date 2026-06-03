import styles from "./feature-comparison-matrix.module.css";

interface Props { className?: string; }

const matrix = [
  { category: "Inventory", rows: [
    { label: "Inventory items", free: "15", pro: "Unlimited", business: "Unlimited" },
    { label: "Bulk Excel import", free: true, pro: true, business: true },
    { label: "Image uploads", free: true, pro: true, business: true },
  ]},
  { category: "Pricing", rows: [
    { label: "Live price sync", free: "Manual", pro: "Auto (15min)", business: "Auto (15min)" },
    { label: "Price history", free: "7 days", pro: "90 days", business: "1 year" },
    { label: "AI insights", free: false, pro: true, business: true },
  ]},
  { category: "Alerts", rows: [
    { label: "Price alerts", free: "5", pro: "25", business: "Unlimited" },
    { label: "Email alerts", free: true, pro: true, business: true },
    { label: "SMS alerts", free: false, pro: true, business: true },
    { label: "Push notifications", free: false, pro: false, business: true },
  ]},
  { category: "Analytics & Export", rows: [
    { label: "P&L dashboard", free: true, pro: true, business: true },
    { label: "Tax report export", free: false, pro: true, business: true },
    { label: "CSV export", free: true, pro: true, business: true },
  ]},
  { category: "Team", rows: [
    { label: "Team members", free: "1", pro: "1", business: "5" },
    { label: "Activity log", free: false, pro: false, business: true },
  ]},
];

function Val({ v }: { v: boolean | string }) {
  if (v === true) return <span className={styles.yes}>✓</span>;
  if (v === false) return <span className={styles.no}>×</span>;
  return <span>{v}</span>;
}

export function FeatureComparisonMatrix({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Full Feature Comparison</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th} style={{ textAlign: "left" }}>Feature</th>
              <th className={styles.th}>Free</th>
              <th className={[styles.th, styles.active].join(" ")}>Pro</th>
              <th className={styles.th}>Business</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map(cat => (
              <>
                <tr key={cat.category} className={styles.category}>
                  <td colSpan={4} className={styles.categoryLabel}>{cat.category}</td>
                </tr>
                {cat.rows.map(row => (
                  <tr key={row.label}>
                    <td className={[styles.td, styles.label].join(" ")}>{row.label}</td>
                    <td className={styles.td}><Val v={row.free} /></td>
                    <td className={styles.td}><Val v={row.pro} /></td>
                    <td className={styles.td}><Val v={row.business} /></td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
