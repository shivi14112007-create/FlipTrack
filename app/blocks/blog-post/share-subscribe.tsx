import styles from "./share-subscribe.module.css";

interface Props { className?: string; }

export function ShareSubscribe({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.row}>
        <div>
          <div className={styles.shareLabel}>Share this article</div>
          <div className={styles.shareButtons}>
            <button className={styles.shareBtn}>Twitter</button>
            <button className={styles.shareBtn}>LinkedIn</button>
            <button className={styles.shareBtn}>Facebook</button>
          </div>
        </div>
        <div>
          <div className={styles.subLabel}>Get weekly reselling tips</div>
          <div className={styles.subRow}>
            <input className={styles.subInput} type="email" placeholder="your@email.com" />
            <button className={styles.subBtn}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
