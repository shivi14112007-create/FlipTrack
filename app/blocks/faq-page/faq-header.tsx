import styles from "./faq-header.module.css";

interface Props { className?: string; }

export function FaqHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Frequently Asked Questions</h1>
        <input className={styles.search} type="search" placeholder="Search questions..." />
      </div>
    </div>
  );
}
