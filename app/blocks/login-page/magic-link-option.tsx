import { useState } from "react";
import styles from "./magic-link-option.module.css";

interface Props { className?: string; }

export function MagicLinkOption({ className }: Props) {
  const [sent, setSent] = useState(false);
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.divider}>
        <div className={styles.line} />
        <span className={styles.dividerText}>or sign in with magic link</span>
        <div className={styles.line} />
      </div>
      {sent ? (
        <div className={styles.success}>Magic link sent! Check your email.</div>
      ) : (
        <div className={styles.magicForm}>
          <input className={styles.input} type="email" placeholder="your@email.com" />
          <button className={styles.sendBtn} onClick={() => setSent(true)}>Send Link</button>
        </div>
      )}
    </div>
  );
}
