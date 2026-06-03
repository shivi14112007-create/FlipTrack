import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./technical-integration.module.css";

interface Props { className?: string; }

const faqs = [
  { q: "Is there API documentation?", a: "Yes. API docs are available at fliptrack.io/docs/api. API access requires a Business plan." },
  { q: "Do you support webhooks?", a: "Yes. Business plan users can configure webhooks for price alerts and inventory changes." },
  { q: "How do marketplace integrations work?", a: "FlipTrack connects to marketplace APIs and public product pages. No marketplace account linking is required — just enter your SKU." },
  { q: "Can I self-host FlipTrack?", a: "Yes! FlipTrack is MIT-licensed and open source on GitHub. See the README for Docker Compose self-hosting instructions." },
];

export function TechnicalIntegration({ className }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.catLabel}>Technical &amp; Integration</div>
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
