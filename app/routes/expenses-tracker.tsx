import { useState } from "react";
import styles from "./expenses-tracker.module.css";
import { ExpensesHeader } from "~/blocks/expenses-tracker/expenses-header";
import { RecurringExpensesSection } from "~/blocks/expenses-tracker/recurring-expenses-section";
import { OneTimeExpensesTable } from "~/blocks/expenses-tracker/one-time-expenses-table";
import { ExpensesSummary } from "~/blocks/expenses-tracker/expenses-summary";
import { AddExpenseModal } from "~/blocks/expenses-tracker/add-expense-modal";

export default function ExpensesTrackerPage() {
  const [showAddExpense, setShowAddExpense] = useState(false);
  return (
    <div className={styles.page}>
      <ExpensesHeader onAddExpense={() => setShowAddExpense(true)} />
      <ExpensesSummary />
      <RecurringExpensesSection />
      <OneTimeExpensesTable />
      {showAddExpense && <AddExpenseModal onClose={() => setShowAddExpense(false)} />}
    </div>
  );
}
