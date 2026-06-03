import styles from "./o-auth-options.module.css";

interface Props { className?: string; }

export function OAuthOptions({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.divider}>
        <div className={styles.line} />
        <span className={styles.dividerText}>or continue with</span>
        <div className={styles.line} />
      </div>
      <button className={styles.googleBtn}>
        <span className={styles.googleIcon}>G</span>
        Continue with Google
      </button>
    </div>
  );
}
