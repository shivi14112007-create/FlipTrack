import styles from "./security-section.module.css";

interface Props { className?: string; }

const sessions = [
  { device: "Chrome on macOS", location: "New York, US", lastActive: "Active now" },
  { device: "Safari on iPhone", location: "New York, US", lastActive: "2 hours ago" },
];

export function SecuritySection({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Security</h2>
      <h3 className={styles.subTitle}>Change Password</h3>
      <div className={styles.field}><label className={styles.label}>Current Password</label><input className={styles.input} type="password" placeholder="••••••••" /></div>
      <div className={styles.field}><label className={styles.label}>New Password</label><input className={styles.input} type="password" placeholder="Min 8 chars, uppercase, number" /></div>
      <div className={styles.field}><label className={styles.label}>Confirm Password</label><input className={styles.input} type="password" placeholder="Repeat new password" /></div>
      <button className={styles.saveBtn}>Update Password</button>
      <div className={styles.divider} />
      <h3 className={styles.subTitle}>Active Sessions</h3>
      {sessions.map((s, i) => (
        <div key={i} className={styles.sessionItem}>
          <div className={styles.sessionInfo}>
            <div className={styles.device}>{s.device}</div>
            <div className={styles.location}>{s.location} &bull; {s.lastActive}</div>
          </div>
          <button className={styles.logoutBtn}>Logout</button>
        </div>
      ))}
    </div>
  );
}
