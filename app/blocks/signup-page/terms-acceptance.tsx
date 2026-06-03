import { Link } from "react-router";
import styles from "./terms-acceptance.module.css";

interface Props { className?: string; }

export function TermsAcceptance({ className }: Props) {
  return (
    <div className={[styles.terms, className].filter(Boolean).join(" ")}>
      <label className={styles.label}>
        <input type="checkbox" style={{ accentColor: "var(--color-primary)", marginTop: 2, flexShrink: 0 }} />
        I agree to the <Link to="/terms" className={styles.link}>Terms of Service</Link> and <Link to="/privacy" className={styles.link}>Privacy Policy</Link>
      </label>
    </div>
  );
}
