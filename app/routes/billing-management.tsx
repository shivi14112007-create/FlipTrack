import styles from "./billing-management.module.css";
import { CurrentPlanCard } from "~/blocks/billing-management/current-plan-card";
import { PlanComparison } from "~/blocks/billing-management/plan-comparison";
import { BillingHistory } from "~/blocks/billing-management/billing-history";
import { PaymentMethods } from "~/blocks/billing-management/payment-methods";
import { ManageSubscription } from "~/blocks/billing-management/manage-subscription";

export default function BillingManagementPage() {
  return (
    <div className={styles.page}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "var(--space-6)", color: "var(--color-text)" }}>Billing Management</h1>
      <CurrentPlanCard />
      <ManageSubscription />
      <PlanComparison />
      <PaymentMethods />
      <BillingHistory />
    </div>
  );
}
