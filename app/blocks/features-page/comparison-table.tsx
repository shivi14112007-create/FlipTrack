import styles from "./comparison-table.module.css";

interface Props { className?: string; }

const rows = [
  { feature: "Live price tracking", fliptrack: true, spreadsheet: false, pricely: true },
  { feature: "Price alerts (email/SMS/push)", fliptrack: true, spreadsheet: false, pricely: "Email only" },
  { feature: "AI buy/sell recommendations", fliptrack: true, spreadsheet: false, pricely: false },
  { feature: "Tax report export", fliptrack: true, spreadsheet: "Manual", pricely: true },
  { feature: "Bulk Excel import", fliptrack: true, spreadsheet: true, pricely: false },
  { feature: "Team collaboration", fliptrack: true, spreadsheet: false, pricely: false },
  { feature: "Multi-currency", fliptrack: true, spreadsheet: "Manual", pricely: true },
  { feature: "Open source / self-host", fliptrack: true, spreadsheet: false, pricely: false },
  { feature: "Free plan", fliptrack: true, spreadsheet: true, pricely: false },
];

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <span className={styles.yes}>✓</span>;
  if (value === false) return <span className={styles.no}>×</span>;
  return <span className={styles.partial}>{value}</span>;
}

export function ComparisonTable({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>FlipTrack vs. the alternatives</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th} style={{ textAlign: "left" }}>Feature</th>
              <th className={[styles.th, styles.highlight].join(" ")}>FlipTrack</th>
              <th className={styles.th}>Spreadsheet</th>
              <th className={styles.th}>Pricely.io</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.feature}>
                <td className={[styles.td, styles.feature].join(" ")}>{row.feature}</td>
                <td className={styles.td}><Cell value={row.fliptrack} /></td>
                <td className={styles.td}><Cell value={row.spreadsheet} /></td>
                <td className={styles.td}><Cell value={row.pricely} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
