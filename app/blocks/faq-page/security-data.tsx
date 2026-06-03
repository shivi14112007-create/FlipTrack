import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import styles from "./security-data.module.css";

interface Props { className?: string; }

const faqs = [
  { q: "How is my data secured?", a: "All data is encrypted in transit (TLS 1.3) and at rest. We use Supabase with Row Level Security — only you can access your data." },
  { q: "Do you sell my data?", a: "Never. We do not sell, share, or monetize your personal or business data. See our Privacy Policy." },
  { q: "Are you GDPR compliant?", a: "Yes. FlipTrack is GDPR compliant. You can request data export or deletion at any time from Settings > Account." },
  { q: "Can I export or delete my data?", a: "Yes. Export all your data (CSV) or delete your account entirely from Settings > Account. Deletion is permanent and irreversible." },
];

export function SecurityData({ className }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.catLabel}>Security &amp; Data</div>
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
