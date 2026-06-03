import { Link } from "react-router";
import styles from "./confirmation-message.module.css";

interface Props { className?: string; }

export function ConfirmationMessage({ className }: Props) {
  return (
    <div className={[styles.message, className].filter(Boolean).join(" ")}>
      <div className={styles.icon}>📧</div>
      <h2 className={styles.heading}>Check your email</h2>
      <p className={styles.desc}>
        We sent a password reset link to your email. It will expire in 1 hour.
        If you don&apos;t see it, check your spam folder.
      </p>
      <Link to="/auth/login" className={styles.backLink}>Back to Login</Link>
    </div>
  );
}
