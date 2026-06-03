import { IconBrain } from "@tabler/icons-react";
import styles from "./ai-insights-header.module.css";

interface Props { className?: string; onAnalyzeAll?: () => void; isPro?: boolean; }

export function AiInsightsHeader({ className, onAnalyzeAll, isPro }: Props) {
  return (
    <div className={[styles.header, className].filter(Boolean).join(" ")}>
      <div className={styles.left}>
        <h1 className={styles.title}>AI Price Insights</h1>
        <p className={styles.desc}>AI-powered price trend analysis and buy/sell recommendations, powered by GPT-4o mini.</p>
      </div>
      {isPro && (
        <button className={styles.analyzeBtn} onClick={onAnalyzeAll}>
          <IconBrain size={16} /> Analyze All
        </button>
      )}
    </div>
  );
}
