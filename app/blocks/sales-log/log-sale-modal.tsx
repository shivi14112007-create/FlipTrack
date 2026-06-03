import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./log-sale-modal.module.css";

interface Props { className?: string; onClose: () => void; }

export function LogSaleModal({ className, onClose }: Props) {
  const [salePrice, setSalePrice] = useState("");
  const purchasePrice = 170;
  const profit = salePrice ? parseFloat(salePrice) - purchasePrice : null;

  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={[styles.modal, className].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.title}>Log Sale</span>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.body}>
          <div className={styles.field}>
            <label className={styles.label}>Inventory Item *</label>
            <select className={styles.input}><option>Air Jordan 1 Chicago (sz10) - In Stock</option><option>Yeezy 350 Zebra (sz11) - In Stock</option><option>Dunk Low Panda (sz9.5) - In Stock</option></select>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Sale Price *</label>
              <input className={styles.input} type="number" placeholder="450" value={salePrice} onChange={e => setSalePrice(e.target.value)} />
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Sale Date *</label>
              <input className={styles.input} type="date" />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.field}>
              <label className={styles.label}>Marketplace *</label>
              <select className={styles.input}><option>StockX</option><option>GOAT</option><option>eBay</option><option>Flight Club</option><option>Stadium Goods</option></select>
            </div>
            <div className={styles.field}>
              <label className={styles.label}>Tracking Number</label>
              <input className={styles.input} placeholder="Optional" />
            </div>
          </div>
          {profit !== null && (
            <div className={styles.profitPreview}>
              <div className={styles.profitLabel}>Estimated Net Profit</div>
              <div className={styles.profitValue}>{profit >= 0 ? "+" : ""}${profit.toFixed(2)}</div>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.saveBtn}>Log Sale</button>
        </div>
      </div>
    </div>
  );
}
