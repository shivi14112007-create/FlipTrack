import styles from "./item-header.module.css";

interface Props { className?: string; }

export function ItemHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.image}>Product Image</div>
      <div className={styles.info}>
        <div className={styles.sku}>DD1391-100</div>
        <h1 className={styles.name}>Air Jordan 1 Retro High OG Chicago</h1>
        <div className={styles.meta}>
          <span>Nike</span>
          <span>·</span>
          <span>Size 10</span>
          <span>·</span>
          <span>Deadstock</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button className={styles.editBtn}>Edit</button>
        <button className={styles.deleteBtn}>Delete</button>
      </div>
    </div>
  );
}
