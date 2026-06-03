import styles from "./preferences.module.css";

interface Props { className?: string; }

export function Preferences({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Preferences</h2>
      <div className={styles.field}><label className={styles.label}>Currency</label><select className={styles.select}><option>USD ($)</option><option>CAD (CA$)</option><option>GBP (£)</option><option>EUR (€)</option><option>AUD (A$)</option><option>JPY (¥)</option></select></div>
      <div className={styles.field}><label className={styles.label}>Theme</label><select className={styles.select}><option>Light</option><option>Dark (Pro)</option><option>Unicorn (Business)</option></select></div>
      <div className={styles.field}><label className={styles.label}>Language</label><select className={styles.select}><option>English</option><option>Spanish</option><option>French</option></select></div>
      <div className={styles.field}><label className={styles.label}>Timezone</label><select className={styles.select}><option>US/Eastern</option><option>US/Pacific</option><option>UTC</option><option>Europe/London</option></select></div>
      <button className={styles.saveBtn}>Save Preferences</button>
    </div>
  );
}
