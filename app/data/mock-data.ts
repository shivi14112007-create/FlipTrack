export const mockInventoryItems = [
  { id: "1", sku: "DD1391-100", name: "Air Jordan 1 Retro High OG Chicago", brand: "Nike", size: "10", purchasePrice: 170, marketValue: 420, status: "IN_STOCK", condition: "DEADSTOCK" },
  { id: "2", sku: "GY3438", name: "Adidas Yeezy Boost 350 V2 Zebra", brand: "Adidas", size: "11", purchasePrice: 220, marketValue: 280, status: "LISTED", condition: "DEADSTOCK" },
  { id: "3", sku: "DH7138-006", name: "Nike Dunk Low Black White Panda", brand: "Nike", size: "9.5", purchasePrice: 110, marketValue: 160, status: "IN_STOCK", condition: "DEADSTOCK" },
  { id: "4", sku: "CU8232-002", name: "Air Jordan 4 Retro Black Cat", brand: "Nike", size: "10.5", purchasePrice: 210, marketValue: 390, status: "IN_STOCK", condition: "DEADSTOCK" },
  { id: "5", sku: "DQ8750-001", name: "Nike SB Dunk Low Street Hawker", brand: "Nike", size: "10", purchasePrice: 110, marketValue: 95, status: "SOLD", condition: "DEADSTOCK" },
];

export const mockSales = [
  { id: "1", item: "Air Jordan 1 Chicago", salePrice: 420, marketplace: "StockX", date: "2024-05-15", profit: 220, margin: 52 },
  { id: "2", item: "Yeezy 350 Zebra", salePrice: 280, marketplace: "GOAT", date: "2024-05-10", profit: 45, margin: 16 },
  { id: "3", item: "Dunk Low Panda", salePrice: 160, marketplace: "eBay", date: "2024-05-08", profit: 38, margin: 24 },
  { id: "4", item: "Jordan 4 Black Cat", salePrice: 390, marketplace: "StockX", date: "2024-05-02", profit: 160, margin: 41 },
  { id: "5", item: "Nike SB Street Hawker", salePrice: 95, marketplace: "eBay", date: "2024-04-28", profit: -20, margin: -21 },
];

export const mockCashFlow = [
  { month: "Jun", revenue: 3200, expenses: 2100 },
  { month: "Jul", revenue: 4500, expenses: 2800 },
  { month: "Aug", revenue: 3800, expenses: 2400 },
  { month: "Sep", revenue: 5200, expenses: 3100 },
  { month: "Oct", revenue: 4100, expenses: 2600 },
  { month: "Nov", revenue: 6800, expenses: 3900 },
  { month: "Dec", revenue: 8200, expenses: 4500 },
  { month: "Jan", revenue: 5500, expenses: 3200 },
  { month: "Feb", revenue: 6100, expenses: 3600 },
  { month: "Mar", revenue: 7200, expenses: 4100 },
  { month: "Apr", revenue: 6900, expenses: 3800 },
  { month: "May", revenue: 8320, expenses: 4200 },
];

export const mockBrands = [
  { brand: "Nike", profit: 4200 },
  { brand: "Adidas", profit: 2800 },
  { brand: "New Balance", profit: 1900 },
  { brand: "Jordan", profit: 3600 },
  { brand: "ASICS", profit: 980 },
];

export const mockMarketplacePie = [
  { name: "StockX", value: 42, color: "#00FF88" },
  { name: "GOAT", value: 28, color: "#7C3AED" },
  { name: "eBay", value: 18, color: "#3B82F6" },
  { name: "Flight Club", value: 8, color: "#FFB347" },
  { name: "Stadium Goods", value: 4, color: "#FF4D6A" },
];

export const mockTopItems = [
  { name: "Air Jordan 1 Chicago", sold: 8, avgMargin: 52, totalProfit: 1760 },
  { name: "Yeezy 350 Zebra", sold: 12, avgMargin: 28, totalProfit: 1440 },
  { name: "Jordan 4 Black Cat", sold: 5, avgMargin: 41, totalProfit: 820 },
  { name: "Dunk Low Panda", sold: 15, avgMargin: 22, totalProfit: 780 },
  { name: "NB 2002R Protection Pack", sold: 6, avgMargin: 35, totalProfit: 630 },
];

export const mockPriceHistory = [
  { date: "05/01", stockx: 400, goat: 380, ebay: 350, flightclub: 410, stadiumgoods: 395 },
  { date: "05/05", stockx: 415, goat: 390, ebay: 360, flightclub: 420, stadiumgoods: 405 },
  { date: "05/10", stockx: 410, goat: 385, ebay: 345, flightclub: 415, stadiumgoods: 400 },
  { date: "05/15", stockx: 425, goat: 400, ebay: 370, flightclub: 430, stadiumgoods: 415 },
  { date: "05/20", stockx: 420, goat: 395, ebay: 355, flightclub: 425, stadiumgoods: 410 },
  { date: "05/25", stockx: 440, goat: 415, ebay: 380, flightclub: 445, stadiumgoods: 428 },
  { date: "05/30", stockx: 435, goat: 410, ebay: 375, flightclub: 440, stadiumgoods: 422 },
];

export const mockExpenses = [
  { id: "1", date: "2024-05-15", description: "StockX Seller Fee", category: "MARKETPLACE_FEE", amount: 42 },
  { id: "2", date: "2024-05-12", description: "Shipping supplies", category: "SUPPLIES", amount: 28 },
  { id: "3", date: "2024-05-10", description: "GOAT Seller Fee", category: "MARKETPLACE_FEE", amount: 25 },
  { id: "4", date: "2024-05-08", description: "Storage unit rental", category: "STORAGE", amount: 120 },
  { id: "5", date: "2024-05-05", description: "Nike SNKRS bot subscription", category: "BOT_FEE", amount: 14 },
];

export const mockRecurringExpenses = [
  { id: "1", description: "Storage Unit", amount: 120, dayOfMonth: 1, isActive: true },
  { id: "2", description: "Bot Subscription", amount: 14, dayOfMonth: 5, isActive: true },
  { id: "3", description: "FlipTrack Pro", amount: 12, dayOfMonth: 15, isActive: true },
];

export const mockAlerts = [
  { id: "1", product: "Air Jordan 1 Chicago", sku: "DD1391-100", size: "10", marketplace: "StockX", targetPrice: 500, direction: "ABOVE", channel: "EMAIL", isActive: true, lastTriggered: null },
  { id: "2", product: "Yeezy 350 Zebra", sku: "GY3438", size: "11", marketplace: "GOAT", targetPrice: 200, direction: "BELOW", channel: "EMAIL", isActive: true, lastTriggered: "2024-05-10" },
  { id: "3", product: "Dunk Low Panda", sku: "DH7138-006", size: "9.5", marketplace: "eBay", targetPrice: 180, direction: "ABOVE", channel: "EMAIL", isActive: false, lastTriggered: null },
];

export const mockAiInsights = [
  { id: "1", name: "Air Jordan 1 Chicago", sku: "DD1391-100", recommendation: "SELL", confidence: 94, reasoning: "Price trend shows 12% increase over 30 days. Current ask ($440) significantly exceeds your purchase price ($170). Market momentum is strong. Recommended target: $450-460.", targetPrice: 455, purchasePrice: 170 },
  { id: "2", name: "Yeezy 350 Zebra", sku: "GY3438", recommendation: "HOLD", confidence: 71, reasoning: "Prices have stabilized after a brief dip. Holding for 2-3 more weeks may yield a 5-8% increase as supply tightens around drop anniversary.", targetPrice: 295, purchasePrice: 220 },
  { id: "3", name: "Dunk Low Panda", sku: "DH7138-006", recommendation: "SELL", confidence: 88, reasoning: "Dunk market cooling. Current ask ($160) still profitable vs your cost ($110). Prices may dip further as more pairs enter market.", targetPrice: 155, purchasePrice: 110 },
  { id: "4", name: "Jordan 4 Black Cat", sku: "CU8232-002", recommendation: "HOLD", confidence: 65, reasoning: "Upcoming retro rumored. If confirmed, expect 15-20% price surge. Monitor announcements closely.", targetPrice: 420, purchasePrice: 210 },
];
