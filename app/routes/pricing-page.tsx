import styles from "./pricing-page.module.css";
import { PricingHeader } from "~/blocks/pricing-page/pricing-header";
import { PricingCards } from "~/blocks/pricing-page/pricing-cards";
import { FeatureComparisonMatrix } from "~/blocks/pricing-page/feature-comparison-matrix";
import { BillingFaq } from "~/blocks/pricing-page/billing-faq";
import { EnterpriseCta } from "~/blocks/pricing-page/enterprise-cta";

export default function PricingPage() {
  return (
    <div className={styles.page}>
      <PricingHeader />
      <PricingCards />
      <FeatureComparisonMatrix />
      <BillingFaq />
      <EnterpriseCta />
    </div>
  );
}
