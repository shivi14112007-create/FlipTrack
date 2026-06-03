import { useState } from "react";
import styles from "./sales-log.module.css";
import { SalesHeader } from "~/blocks/sales-log/sales-header";
import { SalesSummaryCards } from "~/blocks/sales-log/sales-summary-cards";
import { SalesTable } from "~/blocks/sales-log/sales-table";
import { LogSaleModal } from "~/blocks/sales-log/log-sale-modal";

export default function SalesLogPage() {
  const [showLogSale, setShowLogSale] = useState(false);
  return (
    <div className={styles.page}>
      <SalesHeader onLogSale={() => setShowLogSale(true)} />
      <SalesSummaryCards />
      <SalesTable />
      {showLogSale && <LogSaleModal onClose={() => setShowLogSale(false)} />}
    </div>
  );
}
