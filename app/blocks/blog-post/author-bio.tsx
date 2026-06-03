import styles from "./author-bio.module.css";

interface Props { className?: string; }

export function AuthorBio({ className }: Props) {
  return (
    <div className={[styles.bio, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.avatar}>AR</div>
        <div>
          <div className={styles.name}>Alex R.</div>
          <div className={styles.role}>Sneaker Market Analyst</div>
          <div className={styles.desc}>Alex has been reselling sneakers for 6 years and analyzing market data for 3. He writes about market trends, reselling strategy, and the intersection of data and streetwear culture.</div>
        </div>
      </div>
    </div>
  );
}
