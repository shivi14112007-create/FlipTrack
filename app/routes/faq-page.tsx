import styles from "./faq-page.module.css";
import { FaqHeader } from "~/blocks/faq-page/faq-header";
import { GeneralQuestions } from "~/blocks/faq-page/general-questions";
import { FeaturesFunctionality } from "~/blocks/faq-page/features-functionality";
import { PricingBilling } from "~/blocks/faq-page/pricing-billing";
import { SecurityData } from "~/blocks/faq-page/security-data";
import { TechnicalIntegration } from "~/blocks/faq-page/technical-integration";

export default function FaqPage() {
  return (
    <div className={styles.page}>
      <FaqHeader />
      <GeneralQuestions />
      <FeaturesFunctionality />
      <PricingBilling />
      <SecurityData />
      <TechnicalIntegration />
    </div>
  );
}
