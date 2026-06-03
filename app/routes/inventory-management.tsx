import { useState } from "react";
import styles from "./inventory-management.module.css";
import { InventoryHeader } from "~/blocks/inventory-management/inventory-header";
import { InventoryTable } from "~/blocks/inventory-management/inventory-table";
import { BulkActionsBar } from "~/blocks/inventory-management/bulk-actions-bar";
import { AddItemModal } from "~/blocks/inventory-management/add-item-modal";
import { ImportExcelModal } from "~/blocks/inventory-management/import-excel-modal";

export default function InventoryManagementPage() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <div className={styles.page}>
      <InventoryHeader
        onAddItem={() => setShowAddItem(true)}
        onImport={() => setShowImport(true)}
      />
      {selected.length > 0 && (
        <BulkActionsBar count={selected.length} onClear={() => setSelected([])} />
      )}
      <InventoryTable selected={selected} onSelectChange={setSelected} />
      {showAddItem && <AddItemModal onClose={() => setShowAddItem(false)} />}
      {showImport && <ImportExcelModal onClose={() => setShowImport(false)} />}
    </div>
  );
}
