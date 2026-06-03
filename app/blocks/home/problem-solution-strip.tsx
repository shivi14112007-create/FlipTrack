import { IconX, IconCheck, IconArrowRight } from "@tabler/icons-react";
import styles from "./problem-solution-strip.module.css";

interface Props {
  className?: string;
}

const problems = [
  "Manually checking 5 tabs every day",
  "Losing track of purchase prices",
  "Missing sell windows",
  "No idea what your actual profit is",
  "Tax season is a nightmare",
  "Spreadsheet breaks with too many items",
];

const solutions = [
  "Live prices from all marketplaces, one view",
  "Full inventory with cost basis tracking",
  "Smart alerts before prices move",
  "Real-time P&L dashboard",
  "One-click tax report export",
  "Scales to 10,000+ items with ease",
];

export function ProblemSolutionStrip({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>Why resellers switch from spreadsheets</h2>
        <p className={styles.subheading}>Stop doing this manually. Let FlipTrack handle it.</p>
        <div className={styles.grid}>
          <div className={`${styles.column} ${styles.problems}`}>
            <h3>The Old Way</h3>
            <div className={styles.items}>
              {problems.map((p) => (
                <div key={p} className={`${styles.item} ${styles.problemItem}`}>
                  <IconX size={14} color="var(--color-danger)" className={styles.icon} />
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.arrow}>
            <IconArrowRight size={28} />
          </div>

          <div className={`${styles.column} ${styles.solutions}`}>
            <h3>With FlipTrack</h3>
            <div className={styles.items}>
              {solutions.map((s) => (
                <div key={s} className={`${styles.item} ${styles.solutionItem}`}>
                  <IconCheck size={14} color="var(--color-success)" className={styles.icon} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
