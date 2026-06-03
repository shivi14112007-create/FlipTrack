import styles from "./enterprise-cta.module.css";

interface Props { className?: string; }

export function EnterpriseCta({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Need more? Talk to our team.</h2>
        <p className={styles.desc}>
          For large teams, custom integrations, or white-label options, contact our sales team for a tailored enterprise plan with dedicated support.
        </p>
        <a href="mailto:enterprise@fliptrack.io" className={styles.btn}>Contact Sales</a>
      </div>
    </section>
  );
}
