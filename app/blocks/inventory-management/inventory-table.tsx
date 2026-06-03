import { Link } from "react-router";
import { mockInventoryItems } from "~/data/mock-data";
import styles from "./inventory-table.module.css";

interface Props { className?: string; selected: string[]; onSelectChange: (ids: string[]) => void; }

const statusClass: Record<string, string> = { IN_STOCK: styles.inStock, LISTED: styles.listed, SOLD: styles.sold };
const statusLabel: Record<string, string> = { IN_STOCK: "In Stock", LISTED: "Listed", SOLD: "Sold" };

export function InventoryTable({ className, selected, onSelectChange }: Props) {
  const toggle = (id: string) => onSelectChange(selected.includes(id) ? selected.filter(s => s !== id) : [...selected, id]);
  const toggleAll = () => onSelectChange(selected.length === mockInventoryItems.length ? [] : mockInventoryItems.map(i => i.id));

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(" ")}>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}><input type="checkbox" className={styles.checkbox} checked={selected.length === mockInventoryItems.length} onChange={toggleAll} /></th>
              <th className={styles.th}>Item</th>
              <th className={styles.th}>SKU</th>
              <th className={styles.th}>Size</th>
              <th className={styles.th}>Buy Price</th>
              <th className={styles.th}>Market Value</th>
              <th className={styles.th}>P/L</th>
              <th className={styles.th}>Status</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockInventoryItems.map(item => {
              const pl = item.marketValue - item.purchasePrice;
              return (
                <tr key={item.id} className={styles.tr}>
                  <td className={styles.td}><input type="checkbox" className={styles.checkbox} checked={selected.includes(item.id)} onChange={() => toggle(item.id)} /></td>
                  <td className={styles.td}><Link to={`/app/inventory/${item.id}`} className={styles.nameLink}>{item.name}</Link></td>
                  <td className={styles.td}><span className={styles.sku}>{item.sku}</span></td>
                  <td className={styles.td}>{item.size}</td>
                  <td className={styles.td}>${item.purchasePrice}</td>
                  <td className={styles.td}>${item.marketValue}</td>
                  <td className={styles.td}><span className={pl >= 0 ? styles.positive : styles.negative}>{pl >= 0 ? "+" : ""}${pl}</span></td>
                  <td className={styles.td}><span className={[styles.badge, statusClass[item.status]].join(" ")}>{statusLabel[item.status]}</span></td>
                  <td className={styles.td}><button className={styles.actionBtn}>Edit</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
