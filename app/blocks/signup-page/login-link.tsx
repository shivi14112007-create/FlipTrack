import { Link } from "react-router";
import styles from "./login-link.module.css";

interface Props { className?: string; }

export function LoginLink({ className }: Props) {
  return (
    <div className={[styles.link, className].filter(Boolean).join(" ")}>
      Already have an account? <Link to="/auth/login" className={styles.signinLink}>Sign in</Link>
    </div>
  );
}
