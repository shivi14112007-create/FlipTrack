import { Link } from "react-router";
import styles from "./success-message.module.css";

interface Props { className?: string; }

export function SuccessMessage({ className }: Props) {
  return (
    <div className={[styles.message, className].filter(Boolean).join(" ")}>
      <div className={styles.icon}>✅</div>
      <h2 className={styles.heading}>Password Reset!</h2>
      <p className={styles.desc}>Your password has been successfully reset. You can now sign in with your new password.</p>
      <Link to="/auth/login" className={styles.loginLink}>Go to Login</Link>
    </div>
  );
}
