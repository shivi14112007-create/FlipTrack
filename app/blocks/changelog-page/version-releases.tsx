import styles from "./version-releases.module.css";

interface Props { className?: string; }

const releases = [
  {
    version: "v1.3.0",
    date: "May 20, 2024",
    features: ["AI Price Insights with GPT-4o mini integration", "Batch portfolio analysis with progress tracking", "Confidence scores and target price recommendations"],
    fixes: ["Fixed StockX price fetch timeout on large SKU lists", "Resolved CSV export encoding issue on Windows"],
    improvements: ["Improved dashboard load time by 40%", "Better mobile table scrolling on market prices page"],
  },
  {
    version: "v1.2.0",
    date: "Apr 15, 2024",
    features: ["Tax report export (CSV, PDF, Form 8949 template)", "Team collaboration for Business plan users", "Web push notifications for price alerts"],
    fixes: ["Fixed alert not triggering when price matches exactly", "Resolved eBay API pagination bug"],
    improvements: ["Redesigned inventory table with better filtering", "Faster price history chart rendering"],
  },
  {
    version: "v1.1.0",
    date: "Mar 1, 2024",
    features: ["Bulk Excel/CSV inventory import", "Recurring expenses tracker", "Income Statement P&L page"],
    fixes: ["Fixed GOAT price display showing wrong currency", "Resolved login redirect loop on mobile"],
    improvements: ["Added dark theme support", "Improved first-time onboarding flow"],
  },
  {
    version: "v1.0.0",
    date: "Jan 15, 2024",
    features: ["Initial launch", "Inventory management with full CRUD", "Live price tracking (StockX, GOAT, eBay, Flight Club, Stadium Goods)", "Price alerts with email notifications", "Sales log with P&L calculations", "Basic dashboard with charts"],
    fixes: [],
    improvements: [],
  },
];

export function VersionReleases({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        {releases.map(r => (
          <div key={r.version} className={styles.release}>
            <div className={styles.versionInfo}>
              <div className={styles.version}>{r.version}</div>
              <div className={styles.date}>{r.date}</div>
            </div>
            <div className={styles.changes}>
              {r.features.length > 0 && (
                <><h4 className={styles.featureLabel}>New Features</h4>
                <div className={styles.items}>{r.features.map(f => <div key={f} className={styles.item}>{f}</div>)}</div></>
              )}
              {r.fixes.length > 0 && (
                <><h4 className={styles.fixLabel}>Bug Fixes</h4>
                <div className={styles.items}>{r.fixes.map(f => <div key={f} className={styles.item}>{f}</div>)}</div></>
              )}
              {r.improvements.length > 0 && (
                <><h4 className={styles.improveLabel}>Improvements</h4>
                <div className={styles.items}>{r.improvements.map(i => <div key={i} className={styles.item}>{i}</div>)}</div></>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
