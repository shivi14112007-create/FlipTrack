import styles from "./o-auth-signup.module.css";

interface Props { className?: string; }

export function OAuthSignup({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <button className={styles.googleBtn}>
        <span style={{ fontWeight: 700 }}>G</span>
        Sign up with Google
      </button>
      <div className={styles.divider}>
        <div className={styles.line} />
        <span className={styles.dividerText}>or sign up with email</span>
        <div className={styles.line} />
      </div>
    </div>
  );
}
