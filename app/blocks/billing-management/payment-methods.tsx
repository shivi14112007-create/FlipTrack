import { IconCreditCard } from "@tabler/icons-react";
import styles from "./payment-methods.module.css";

interface Props { className?: string; }

export function PaymentMethods({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Payment Methods</h2>
      <div className={styles.empty}>
        No payment method on file. Add a payment method to upgrade your plan.
        <br />
        <button className={styles.addBtn}><IconCreditCard size={14} /> Add Payment Method</button>
      </div>
    </div>
  );
}
