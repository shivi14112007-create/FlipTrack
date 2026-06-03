import { Link } from "react-router";
import styles from "./signup-link.module.css";

interface Props { className?: string; }

export function SignupLink({ className }: Props) {
  return (
    <div className={[styles.link, className].filter(Boolean).join(" ")}>
      Don&apos;t have an account? <Link to="/auth/signup" className={styles.signupLink}>Sign up</Link>
    </div>
  );
}
