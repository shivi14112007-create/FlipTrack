import styles from "./policy-header.module.css";

interface Props { className?: string; }

const sections = ["Introduction", "Information We Collect", "How We Use Information", "Data Sharing", "Your Rights", "Security", "Cookies", "Third-Party Services", "Changes to Policy", "Contact Us"];

export function PolicyHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: May 1, 2024</p>
        <div className={styles.toc}>
          <h4>Table of Contents</h4>
          <ul>{sections.map((s, i) => <li key={s}><a href={`#section-${i}`}>{i + 1}. {s}</a></li>)}</ul>
        </div>
      </div>
    </div>
  );
}
