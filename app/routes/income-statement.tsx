import styles from "./income-statement.module.css";
import { StatementHeader } from "~/blocks/income-statement/statement-header";
import { SummaryCards } from "~/blocks/income-statement/summary-cards";
import { MonthlyBreakdownChart } from "~/blocks/income-statement/monthly-breakdown-chart";
import { ExpenseCategoryBreakdown } from "~/blocks/income-statement/expense-category-breakdown";
import { DetailedStatementTable } from "~/blocks/income-statement/detailed-statement-table";
import { ExportOptions } from "~/blocks/income-statement/export-options";

export default function IncomeStatementPage() {
  return (
    <div className={styles.page}>
      <StatementHeader />
      <SummaryCards />
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--space-6)", marginBottom: "var(--space-6)" }}>
        <MonthlyBreakdownChart />
        <ExpenseCategoryBreakdown />
      </div>
      <DetailedStatementTable />
      <ExportOptions />
    </div>
  );
}
