import styles from "./features-page.module.css";
import { FeaturesHeader } from "~/blocks/features-page/features-header";
import { FeatureCategoriesGrid } from "~/blocks/features-page/feature-categories-grid";
import { DetailedFeatureSections } from "~/blocks/features-page/detailed-feature-sections";
import { ComparisonTable } from "~/blocks/features-page/comparison-table";

export default function FeaturesPage() {
  return (
    <div className={styles.page}>
      <FeaturesHeader />
      <FeatureCategoriesGrid />
      <DetailedFeatureSections />
      <ComparisonTable />
    </div>
  );
}
