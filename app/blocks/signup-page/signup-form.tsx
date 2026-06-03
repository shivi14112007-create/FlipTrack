import styles from "./signup-form.module.css";

interface Props { className?: string; }

export function SignupForm({ className }: Props) {
  return (
    <div className={[styles.form, className].filter(Boolean).join(" ")}>
      <div className={styles.field}><label className={styles.label}>Full Name</label><input className={styles.input} type="text" placeholder="John Doe" /></div>
      <div className={styles.field}><label className={styles.label}>Email</label><input className={styles.input} type="email" placeholder="your@email.com" /></div>
      <div className={styles.field}><label className={styles.label}>Password</label><input className={styles.input} type="password" placeholder="Min 8 chars" /></div>
      <div className={styles.field}><label className={styles.label}>Confirm Password</label><input className={styles.input} type="password" placeholder="Repeat password" /></div>
      <button className={styles.submitBtn}>Create Account</button>
    </div>
  );
}
