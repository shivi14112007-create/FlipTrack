import { Link } from "react-router";
import styles from "./forgot-password-form.module.css";

interface Props { className?: string; onSent?: () => void; }

export function ForgotPasswordForm({ className, onSent }: Props) {
  return (
    <div className={[styles.form, className].filter(Boolean).join(" ")}>
      <h1 className={styles.heading}>Reset Password</h1>
      <p className={styles.desc}>Enter your email address and we&apos;ll send you a link to reset your password.</p>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" placeholder="your@email.com" />
      </div>
      <button className={styles.submitBtn} onClick={onSent}>Send Reset Link</button>
      <Link to="/auth/login" className={styles.backLink}>Back to Login</Link>
    </div>
  );
}
