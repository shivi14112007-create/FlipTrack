import { Link } from "react-router";
import styles from "./login-form.module.css";

interface Props { className?: string; }

export function LoginForm({ className }: Props) {
  return (
    <div className={[styles.form, className].filter(Boolean).join(" ")}>
      <div className={styles.field}>
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="email" placeholder="your@email.com" />
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Password</label>
        <input className={styles.input} type="password" placeholder="••••••••" />
      </div>
      <div className={styles.row}>
        <label className={styles.rememberLabel}>
          <input type="checkbox" style={{ accentColor: "var(--color-primary)" }} />
          Remember me
        </label>
        <Link to="/auth/forgot-password" className={styles.forgotLink}>Forgot password?</Link>
      </div>
      <button className={styles.submitBtn}>Sign In</button>
    </div>
  );
}
