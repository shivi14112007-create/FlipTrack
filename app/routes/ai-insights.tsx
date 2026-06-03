import { useState } from "react";
import styles from "./ai-insights.module.css";
import { AiInsightsHeader } from "~/blocks/ai-insights/ai-insights-header";
import { PlanGateMessage } from "~/blocks/ai-insights/plan-gate-message";
import { BatchAnalysisStatus } from "~/blocks/ai-insights/batch-analysis-status";
import { ItemAnalysisCards } from "~/blocks/ai-insights/item-analysis-cards";
import { DetailedAnalysisModal } from "~/blocks/ai-insights/detailed-analysis-modal";

export default function AiInsightsPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const isPro = true; // mock: treat as pro user

  return (
    <div className={styles.page}>
      <AiInsightsHeader onAnalyzeAll={() => setAnalyzing(true)} isPro={isPro} />
      {!isPro && <PlanGateMessage />}
      {isPro && analyzing && <BatchAnalysisStatus onCancel={() => setAnalyzing(false)} />}
      {isPro && <ItemAnalysisCards onSelectItem={setSelectedItem} />}
      {selectedItem && <DetailedAnalysisModal itemId={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
}
