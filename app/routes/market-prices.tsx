import styles from "./market-prices.module.css";
import { MarketPricesHeader } from "~/blocks/market-prices/market-prices-header";
import { PriceComparisonTable } from "~/blocks/market-prices/price-comparison-table";
import { PriceUpdateStatus } from "~/blocks/market-prices/price-update-status";
import { PriceAlertsQuickAdd } from "~/blocks/market-prices/price-alerts-quick-add";

export default function MarketPricesPage() {
  return (
    <div className={styles.page}>
      <MarketPricesHeader />
      <PriceUpdateStatus />
      <PriceComparisonTable />
      <PriceAlertsQuickAdd />
    </div>
  );
}
