import { useState } from "react";
import styles from "./changelog-header.module.css";

interface Props { className?: string; }

const filters = ["All", "Features", "Fixes", "Improvements"];

export function ChangelogHeader({ className }: Props) {
  const [active, setActive] = useState("All");
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Changelog</h1>
        <p className={styles.desc}>See what&apos;s new in FlipTrack &mdash; released continuously.</p>
        <div className={styles.filters}>
          {filters.map(f => (
            <button key={f} className={[styles.filter, active === f ? styles.active : ""].join(" ")} onClick={() => setActive(f)}>{f}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
