import { Link } from "react-router";
import styles from "./team-section.module.css";

interface Props { className?: string; }

export function TeamSection({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h2 className={styles.title}>Team</h2>
      <div className={styles.gate}>
        Team collaboration is a Business plan feature. Upgrade to invite up to 5 team members and share your inventory.
        <br />
        <Link to="/app/settings/billing" className={styles.gateBtn}>Upgrade to Business</Link>
      </div>
    </div>
  );
}
