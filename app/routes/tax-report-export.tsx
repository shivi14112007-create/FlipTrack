import styles from "./tax-report-export.module.css";
import { TaxReportHeader } from "~/blocks/tax-report-export/tax-report-header";
import { ReportGenerator } from "~/blocks/tax-report-export/report-generator";
import { ReportPreview } from "~/blocks/tax-report-export/report-preview";
import { ExportOptions } from "~/blocks/tax-report-export/export-options";
import { ReportHistory } from "~/blocks/tax-report-export/report-history";

import { type LoaderFunctionArgs, redirect } from "react-router";
import { useLoaderData } from "react-router";
import { getSupabaseServerClient } from "~/utils/supabase.server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function loader({ request }: LoaderFunctionArgs) {
  const { supabase } = getSupabaseServerClient(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw redirect("/auth/login");
  }
  
  const userId = user.id;
  const url = new URL(request.url);
  const yearStr = url.searchParams.get("year");
  const year = yearStr ? parseInt(yearStr, 10) : new Date().getFullYear() - 1;

  const startDate = new Date(`${year}-01-01T00:00:00Z`);
  const endDate = new Date(`${year}-12-31T23:59:59Z`);

  const sales = await prisma.sale.findMany({
    where: {
      userId,
      saleDate: {
        gte: startDate,
        lte: endDate,
      },
    },
    include: {
      inventoryItem: true,
      expenses: true,
    },
    orderBy: { saleDate: "desc" },
  });

  // Calculate profit and format data for the preview
  const formattedSales = sales.map((sale: any) => {
    const costBasis = Number(sale.inventoryItem.purchasePrice);
    const itemExpenses = sale.expenses.reduce((sum: any, exp: any) => sum + Number(exp.amount), 0);
    const salePrice = Number(sale.salePrice);
    const profit = salePrice - costBasis - itemExpenses;

    return {
      id: sale.id,
      date: new Date(sale.saleDate).toLocaleDateString(),
      item: sale.inventoryItem.name,
      salePrice,
      profit,
    };
  });

  return { sales: formattedSales, year };
}

export default function TaxReportExportPage() {
  const { sales, year } = useLoaderData<typeof loader>();

  return (
    <div className={styles.page}>
      <TaxReportHeader />
      <ReportGenerator selectedYear={year} />
      <ReportPreview sales={sales} year={year} />
      <ExportOptions />
      <ReportHistory />
    </div>
  );
}
