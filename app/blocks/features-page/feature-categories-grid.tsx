import { IconBox, IconTrendingUp, IconBell, IconBrain, IconReceipt, IconFileText, IconGlobe, IconUsers } from "@tabler/icons-react";
import styles from "./feature-categories-grid.module.css";

interface Props { className?: string; }

const categories = [
  { icon: IconBox, title: "Inventory Management", desc: "Full CRUD with image uploads, bulk import, and advanced filtering." },
  { icon: IconTrendingUp, title: "Live Price Tracking", desc: "Real-time prices from 5 marketplaces, refreshed every 15 minutes." },
  { icon: IconBell, title: "Smart Alerts", desc: "Email, SMS, and push alerts triggered by price conditions." },
  { icon: IconBrain, title: "AI Insights", desc: "GPT-4 powered buy/sell recommendations with confidence scores." },
  { icon: IconReceipt, title: "Sales & P&L", desc: "Sales logging with automatic P&L calculation and margin tracking." },
  { icon: IconFileText, title: "Tax Reports", desc: "Capital gains reports in one click. CSV, PDF, Form 8949." },
  { icon: IconGlobe, title: "Multi-Currency", desc: "USD, CAD, GBP, EUR, AUD, JPY with live exchange rates." },
  { icon: IconUsers, title: "Team Collaboration", desc: "Share inventory with your team. Role-based access control." },
];

export function FeatureCategoriesGrid({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Everything in one platform</h2>
        <div className={styles.grid}>
          {categories.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.iconWrap}><c.icon size={20} /></div>
              <div className={styles.cardTitle}>{c.title}</div>
              <div className={styles.cardDesc}>{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
