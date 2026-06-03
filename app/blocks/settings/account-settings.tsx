import styles from "./account-settings.module.css";

interface Props { className?: string; }

export function AccountSettings({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Account Settings</h2>
      <div className={styles.avatarRow}>
        <div className={styles.avatar}>JD</div>
        <button className={styles.uploadBtn}>Upload Photo</button>
      </div>
      <div className={styles.field}><label className={styles.label}>Full Name</label><input className={styles.input} defaultValue="John Doe" /></div>
      <div className={styles.field}><label className={styles.label}>Email</label><input className={styles.input} defaultValue="john@example.com" type="email" /></div>
      <div className={styles.field}><label className={styles.label}>Phone</label><input className={styles.input} defaultValue="+1 555-0100" type="tel" /></div>
      <button className={styles.saveBtn}>Save Changes</button>
      <div className={styles.divider} />
      <div className={styles.dangerZone}>
        <div className={styles.dangerTitle}>Danger Zone</div>
        <div className={styles.dangerDesc}>Permanently delete your account and all associated data. This action cannot be undone.</div>
        <button className={styles.deleteBtn}>Delete Account</button>
      </div>
    </div>
  );
}
