import styles from "./inventory-item-detail.module.css";
import { ItemHeader } from "~/blocks/inventory-item-detail/item-header";
import { ItemInfoCard } from "~/blocks/inventory-item-detail/item-info-card";
import { PriceHistoryChart } from "~/blocks/inventory-item-detail/price-history-chart";
import { MarketplaceComparison } from "~/blocks/inventory-item-detail/marketplace-comparison";
import { SalesHistory } from "~/blocks/inventory-item-detail/sales-history";
import { RelatedItems } from "~/blocks/inventory-item-detail/related-items";

export default function InventoryItemDetailPage() {
  return (
    <div className={styles.page}>
      <ItemHeader />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-6)", marginBottom: "var(--space-6)" }}>
        <ItemInfoCard />
        <PriceHistoryChart />
      </div>
      <MarketplaceComparison />
      <SalesHistory />
      <RelatedItems />
    </div>
  );
}
