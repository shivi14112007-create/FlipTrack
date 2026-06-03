import { useState } from "react";
import { IconX } from "@tabler/icons-react";
import styles from "./add-item-modal.module.css";

interface Props { className?: string; onClose: () => void; }

const steps = ["Basic Info", "Purchase Details", "Marketplace"];

export function AddItemModal({ className, onClose }: Props) {
  const [step, setStep] = useState(0);
  return (
    <div className={styles.overlay} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={[styles.modal, className].filter(Boolean).join(" ")}>
        <div className={styles.header}>
          <span className={styles.title}>Add Inventory Item</span>
          <button className={styles.closeBtn} onClick={onClose}><IconX size={18} /></button>
        </div>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s} className={[styles.step, i === step ? styles.active : ""].join(" ")} onClick={() => setStep(i)}>Step {i+1}: {s}</div>
          ))}
        </div>
        <div className={styles.body}>
          {step === 0 && (
            <>
              <div className={styles.field}><label className={styles.label}>SKU *</label><input className={styles.input} placeholder="e.g. DD1391-100" /></div>
              <div className={styles.field}><label className={styles.label}>Product Name *</label><input className={styles.input} placeholder="e.g. Air Jordan 1 Retro High OG Chicago" /></div>
              <div className={styles.row}>
                <div className={styles.field}><label className={styles.label}>Brand *</label><input className={styles.input} placeholder="Nike" /></div>
                <div className={styles.field}><label className={styles.label}>Size *</label><input className={styles.input} placeholder="10.5" /></div>
              </div>
              <div className={styles.field}><label className={styles.label}>Colorway</label><input className={styles.input} placeholder="e.g. Varsity Red/Black/White" /></div>
            </>
          )}
          {step === 1 && (
            <>
              <div className={styles.row}>
                <div className={styles.field}><label className={styles.label}>Purchase Price *</label><input className={styles.input} type="number" placeholder="170" /></div>
                <div className={styles.field}><label className={styles.label}>Purchase Date *</label><input className={styles.input} type="date" /></div>
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Condition</label>
                <select className={styles.input}><option>Deadstock</option><option>New with Box</option><option>Used</option></select>
              </div>
              <div className={styles.field}><label className={styles.label}>Notes</label><textarea className={styles.input} rows={3} placeholder="Any additional notes..."></textarea></div>
            </>
          )}
          {step === 2 && (
            <>
              <div className={styles.field}>
                <label className={styles.label}>Listing Marketplace</label>
                <select className={styles.input}><option value="">Not listed</option><option>StockX</option><option>GOAT</option><option>eBay</option><option>Flight Club</option><option>Stadium Goods</option></select>
              </div>
              <div className={styles.field}><label className={styles.label}>Asking Price</label><input className={styles.input} type="number" placeholder="Optional" /></div>
            </>
          )}
        </div>
        <div className={styles.footer}>
          <button className={styles.backBtn} onClick={() => step > 0 ? setStep(s => s - 1) : onClose()}>{step > 0 ? "Back" : "Cancel"}</button>
          <button className={styles.nextBtn} onClick={() => step < 2 ? setStep(s => s + 1) : onClose()}>{step < 2 ? "Next" : "Add Item"}</button>
        </div>
      </div>
    </div>
  );
}
