import styles from "./notifications.module.css";

interface Props { className?: string; }

const notifs = [
  { label: "Email Notifications", desc: "Price alerts and sale summaries via email", default: true },
  { label: "SMS Notifications", desc: "Price alert SMS (requires verified phone number)", default: false },
  { label: "Push Notifications", desc: "Browser push notifications (Business plan)", default: false },
  { label: "Weekly Summary", desc: "Weekly portfolio summary email every Monday", default: true },
  { label: "Price Alert Triggered", desc: "Notify when a price alert is triggered", default: true },
];

export function Notifications({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Notification Preferences</h2>
      {notifs.map(n => (
        <div key={n.label} className={styles.item}>
          <div className={styles.itemInfo}>
            <div className={styles.label}>{n.label}</div>
            <div className={styles.desc}>{n.desc}</div>
          </div>
          <label className={styles.toggle}>
            <input type="checkbox" defaultChecked={n.default} />
            <span className={styles.slider} />
          </label>
        </div>
      ))}
    </div>
  );
}
