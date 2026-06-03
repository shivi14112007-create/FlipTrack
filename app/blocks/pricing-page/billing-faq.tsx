import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./billing-faq.module.css";

interface Props { className?: string; }

const faqs = [
  { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), and PayPal via Stripe. All payments are processed securely by Stripe." },
  { q: "Can I cancel at any time?", a: "Yes, you can cancel your subscription at any time. Your plan remains active until the end of the billing period, then reverts to Free." },
  { q: "Are refunds available?", a: "We offer a 7-day money-back guarantee for new Pro and Business subscribers. Contact support@fliptrack.io within 7 days of upgrading." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes. Upgrades take effect immediately with prorated billing. Downgrades take effect at the next billing cycle." },
  { q: "Is annual billing available?", a: "Yes! Annual billing saves you 20% vs monthly. You can switch between billing periods in your account settings." },
  { q: "Do you offer enterprise pricing?", a: "Yes, for teams larger than 5 or custom needs, contact us at enterprise@fliptrack.io for a custom quote." },
];

export function BillingFaq({ className }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Billing FAQ</h2>
        {faqs.map((f, i) => (
          <div key={i} className={styles.item}>
            <button className={styles.q} onClick={() => setOpen(open === i ? null : i)}>
              {f.q}
              <IconChevronDown size={16} className={[styles.chevron, open === i ? styles.open : ""].join(" ")} />
            </button>
            <div className={[styles.a, open === i ? styles.open : ""].join(" ")}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
