import { useState } from "react";
import styles from "./price-alerts.module.css";
import { AlertsHeader } from "~/blocks/price-alerts/alerts-header";
import { PlanLimitWarning } from "~/blocks/price-alerts/plan-limit-warning";
import { CreateAlertForm } from "~/blocks/price-alerts/create-alert-form";
import { ActiveAlertsTable } from "~/blocks/price-alerts/active-alerts-table";
import { AlertHistory } from "~/blocks/price-alerts/alert-history";

export default function PriceAlertsPage() {
  const [showCreate, setShowCreate] = useState(false);
  return (
    <div className={styles.page}>
      <AlertsHeader onCreateAlert={() => setShowCreate(true)} />
      <PlanLimitWarning />
      {showCreate && <CreateAlertForm onClose={() => setShowCreate(false)} />}
      <ActiveAlertsTable />
      <AlertHistory />
    </div>
  );
}
