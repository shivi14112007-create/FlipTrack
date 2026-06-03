import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

const isDev = import.meta.env.MODE === "development";

export default [
  index("routes/home.tsx"),
  route("/features", "routes/features-page.tsx"),
  route("/pricing", "routes/pricing-page.tsx"),
  route("/faq", "routes/faq-page.tsx"),
  route("/blog", "routes/blog-index.tsx"),
  route("/blog/:slug", "routes/blog-post.tsx"),
  route("/changelog", "routes/changelog-page.tsx"),
  route("/privacy", "routes/privacy-policy.tsx"),
  route("/terms", "routes/terms-of-service.tsx"),
  route("/app/dashboard", "routes/dashboard.tsx"),
  route("/app/inventory", "routes/inventory-management.tsx"),
  route("/app/inventory/:id", "routes/inventory-item-detail.tsx"),
  route("/app/market-prices", "routes/market-prices.tsx"),
  route("/app/sales", "routes/sales-log.tsx"),
  route("/app/expenses", "routes/expenses-tracker.tsx"),
  route("/app/income-statement", "routes/income-statement.tsx"),
  route("/app/alerts", "routes/price-alerts.tsx"),
  route("/app/ai-insights", "routes/ai-insights.tsx"),
  route("/app/settings", "routes/settings.tsx"),
  route("/app/settings/billing", "routes/billing-management.tsx"),
  route("/app/tax-report", "routes/tax-report-export.tsx"),
  route("/auth/login", "routes/login-page.tsx"),
  route("/auth/signup", "routes/signup-page.tsx"),
  route("/auth/forgot-password", "routes/forgot-password-page.tsx"),
  route("/auth/reset-password", "routes/reset-password-page.tsx"),
] satisfies RouteConfig;
