import styles from "./terms-header.module.css";

interface Props { className?: string; }

const sections = ["Acceptance of Terms", "User Responsibilities", "Intellectual Property", "Limitation of Liability", "Indemnification", "Termination", "Governing Law", "Contact Information"];

export function TermsHeader({ className }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: May 1, 2024</p>
        <div className={styles.toc}>
          <h4>Table of Contents</h4>
          <ul>{sections.map((s, i) => <li key={s}><a href={`#terms-${i}`}>{i + 1}. {s}</a></li>)}</ul>
        </div>
      </div>
    </div>
  );
}
