import { useState } from "react";
import styles from "./pricing-header.module.css";

interface Props { className?: string; onBillingChange?: (annual: boolean) => void; }

export function PricingHeader({ className, onBillingChange }: Props) {
  const [annual, setAnnual] = useState(false);
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Simple, Transparent Pricing</h1>
        <p className={styles.sub}>Start free, upgrade when you grow. No hidden fees.</p>
      </div>
    </div>
  );
}
