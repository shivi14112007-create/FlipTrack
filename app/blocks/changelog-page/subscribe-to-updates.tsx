import styles from "./subscribe-to-updates.module.css";

interface Props { className?: string; }

export function SubscribeToUpdates({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Stay up to date</h2>
        <p className={styles.desc}>Get notified of new releases and product updates.</p>
        <div className={styles.form}>
          <input className={styles.input} type="email" placeholder="your@email.com" />
          <button className={styles.btn}>Subscribe</button>
        </div>
      </div>
    </section>
  );
}
