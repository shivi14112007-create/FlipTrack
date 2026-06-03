import { Link } from "react-router";
import { mockInventoryItems } from "~/data/mock-data";
import styles from "./price-comparison-table.module.css";

interface Props { className?: string; }

const mpPrices: Record<string, number[]> = {
  "1": [440, 415, 380, 445, 430],
  "2": [285, 270, 245, 290, 280],
  "3": [162, 155, 148, 165, 158],
  "4": [395, 380, 355, 400, 388],
  "5": [95, 90, 88, 98, 92],
};

const mpNames = ["StockX", "GOAT", "eBay", "Flight Club", "Stadium Goods"];

export function PriceComparisonTable({ className }: Props) {
  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Item</th>
              <th className={styles.th}>Buy Price</th>
              {mpNames.map(m => <th key={m} className={styles.th}>{m}</th>)}
            </tr>
          </thead>
          <tbody>
            {mockInventoryItems.map(item => {
              const prices = mpPrices[item.id] || [];
              const best = Math.max(...prices);
              return (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}>
                    <Link to={`/app/inventory/${item.id}`} className={styles.nameLink}>{item.name}</Link>
                    <div className={styles.sku}>{item.sku}</div>
                  </td>
                  <td className={styles.td}>${item.purchasePrice}</td>
                  {prices.map((price, i) => {
                    const pl = price - item.purchasePrice;
                    return (
                      <td key={i} className={styles.td}>
                        <span className={[styles.priceCell, pl >= 0 ? styles.profit : styles.loss].join(" ")}>${price}</span>
                        {price === best && <span className={styles.bestBadge}>Best</span>}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
