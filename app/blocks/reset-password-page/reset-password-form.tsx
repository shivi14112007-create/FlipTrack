import styles from "./reset-password-form.module.css";

interface Props { className?: string; onSuccess?: () => void; }

export function ResetPasswordForm({ className, onSuccess }: Props) {
  return (
    <div className={[styles.form, className].filter(Boolean).join(" ")}>
      <h1 className={styles.heading}>Set New Password</h1>
      <p className={styles.desc}>Choose a strong password for your FlipTrack account.</p>
      <div className={styles.field}>
        <label className={styles.label}>New Password</label>
        <input className={styles.input} type="password" placeholder="Min 8 chars, uppercase, number" />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Confirm Password</label>
        <input className={styles.input} type="password" placeholder="Repeat new password" />
      </div>
      <button className={styles.submitBtn} onClick={onSuccess}>Reset Password</button>
    </div>
  );
}
