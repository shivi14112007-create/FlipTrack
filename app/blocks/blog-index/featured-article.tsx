import { Link } from "react-router";
import { IconArrowRight } from "@tabler/icons-react";
import styles from "./featured-article.module.css";

interface Props { className?: string; }

export function FeaturedArticle({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.image}>Featured Image</div>
          <div className={styles.content}>
            <div className={styles.catBadge}>Market Analysis</div>
            <h2 className={styles.title}>How to Identify the Best Time to Sell Your Jordans in 2024</h2>
            <p className={styles.excerpt}>
              Timing your sales correctly can mean the difference between a $50 and $200 profit on the same pair.
              We analyzed 12 months of StockX data to find the optimal sell windows.
            </p>
            <div className={styles.meta}>
              <span>By Alex R.</span>
              <span>·</span>
              <span>May 20, 2024</span>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <Link to="/blog/when-to-sell-jordans" className={styles.readMore}>
              Read More <IconArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
