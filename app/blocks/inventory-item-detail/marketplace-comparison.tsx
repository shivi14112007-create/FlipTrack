import styles from "./marketplace-comparison.module.css";

interface Props { className?: string; }

const data = [
  { name: "StockX", ask: 440, lastSold: 435, bid: 415, best: true },
  { name: "GOAT", ask: 415, lastSold: 410, bid: 400, best: false },
  { name: "eBay", ask: 380, lastSold: 365, bid: null, best: false },
  { name: "Flight Club", ask: 445, lastSold: 440, bid: null, best: false },
  { name: "Stadium Goods", ask: 430, lastSold: 422, bid: null, best: false },
];

export function MarketplaceComparison({ className }: Props) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(" ")}>
      <div className={styles.title}>Marketplace Comparison</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Marketplace</th>
            <th className={styles.th}>Ask Price</th>
            <th className={styles.th}>Last Sold</th>
            <th className={styles.th}>Bid Price</th>
            <th className={styles.th}></th>
          </tr>
        </thead>
        <tbody>
          {data.map(d => (
            <tr key={d.name}>
              <td className={styles.td}>{d.name}</td>
              <td className={styles.td}><span className={styles.mono}>${d.ask}</span></td>
              <td className={styles.td}><span className={styles.mono}>${d.lastSold}</span></td>
              <td className={styles.td}>{d.bid ? <span className={styles.mono}>${d.bid}</span> : <span style={{ color: "var(--color-text-subtle)" }}>N/A</span>}</td>
              <td className={styles.td}>{d.best && <span className={styles.bestBadge}>Best to Sell</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
