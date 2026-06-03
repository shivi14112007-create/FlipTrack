import { useState } from "react";
import styles from "./blog-header.module.css";

interface Props { className?: string; }

const categories = ["All", "Tips & Tricks", "Market Analysis", "News", "Product Updates"];

export function BlogHeader({ className }: Props) {
  const [active, setActive] = useState("All");
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>FlipTrack Blog</h1>
        <p className={styles.tagline}>Tips, insights, and updates for sneaker resellers.</p>
        <div className={styles.controls}>
          <div className={styles.categories}>
            {categories.map(c => (
              <button key={c} className={[styles.cat, active === c ? styles.active : ""].join(" ")} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
          <input className={styles.search} type="search" placeholder="Search articles..." />
        </div>
      </div>
    </div>
  );
}
