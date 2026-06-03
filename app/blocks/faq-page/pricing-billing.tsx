import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./pricing-billing.module.css";

interface Props { className?: string; }

const faqs = [
  { q: "What's the difference between plans?", a: "Free: 15 items, 5 alerts. Pro ($12/mo): unlimited items, 25 alerts, AI insights, tax export. Business ($25/mo): everything + 5 team members, push notifications." },
  { q: "Is annual billing available?", a: "Yes. Annual billing saves 20% vs monthly. Switch any time in settings." },
  { q: "What is the refund policy?", a: "7-day money-back guarantee for new subscribers. Contact support@fliptrack.io within 7 days." },
  { q: "Can I change plans?", a: "Yes. Upgrades are immediate with prorated billing. Downgrades take effect at the next billing cycle." },
  { q: "What payment methods are accepted?", a: "All major credit cards via Stripe. PayPal coming soon." },
];

export function PricingBilling({ className }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.catLabel}>Pricing &amp; Billing</div>
        {faqs.map((f, i) => (
          <div key={i} className={styles.item}>
            <button className={styles.q} onClick={() => setOpen(open === i ? null : i)}>
              {f.q}<IconChevronDown size={16} className={[styles.chevron, open === i ? styles.open : ""].join(" ")} />
            </button>
            <div className={[styles.a, open === i ? styles.open : ""].join(" ")}>{f.a}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
