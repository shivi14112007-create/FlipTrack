import styles from "./article-header.module.css";

interface Props { className?: string; }

export function ArticleHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.image}>Featured Image</div>
      <div className={styles.content}>
        <div className={styles.catBadge}>Market Analysis</div>
        <h1 className={styles.title}>How to Identify the Best Time to Sell Your Jordans in 2024</h1>
        <div className={styles.meta}>
          <div className={styles.authorInfo}>
            <div className={styles.avatar}>AR</div>
            <span className={styles.authorName}>Alex R.</span>
          </div>
          <div className={styles.metaDetails}>
            <span>May 20, 2024</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <div className={styles.shareButtons}>
            <button className={styles.shareBtn}>Twitter</button>
            <button className={styles.shareBtn}>LinkedIn</button>
          </div>
        </div>
      </div>
    </div>
  );
}
