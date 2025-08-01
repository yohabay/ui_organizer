import type { Template } from "@/types";

export const financeTemplates: Template[] = [
  {
    id: "free-banking-app",
    name: "Banking App",
    description: "Mobile banking application",
    category: "Finance & Banking",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Balance
      { x: 2, y: 1, w: 2, h: 2 }, // Quick actions
      { x: 0, y: 3, w: 4, h: 3 }, // Transactions
      { x: 0, y: 6, w: 4, h: 2 }, // Navigation
    ],
    preview: "/template-previews/free-banking-app.jpg",
    tags: ["banking", "finance", "mobile", "app"],
  },
  {
    id: "free-investment-platform",
    name: "Investment Platform",
    description: "Investment and trading platform",
    category: "Finance & Banking",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Portfolio
      { x: 2, y: 2, w: 2, h: 2 }, // Watchlist
      { x: 4, y: 2, w: 2, h: 2 }, // Market data
      { x: 6, y: 2, w: 2, h: 2 }, // Orders
      { x: 0, y: 4, w: 4, h: 3 }, // Chart
      { x: 4, y: 4, w: 4, h: 3 }, // News
    ],
    preview: "/template-previews/free-investment-platform.jpg",
    tags: ["investment", "trading", "finance", "platform"],
  },
  {
    id: "free-payment-gateway",
    name: "Payment Gateway",
    description: "Payment processing interface",
    category: "Finance & Banking",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 3, h: 3 }, // Payment form
      { x: 3, y: 1, w: 3, h: 3 }, // Security info
      { x: 0, y: 4, w: 6, h: 2 }, // Payment button
    ],
    preview: "/template-previews/free-payment-gateway.jpg",
    tags: ["payment", "gateway", "finance", "processing"],
  },
  {
    id: "free-insurance-platform",
    name: "Insurance Platform",
    description: "Insurance quote and management",
    category: "Finance & Banking",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Auto
      { x: 2, y: 2, w: 2, h: 2 }, // Home
      { x: 4, y: 2, w: 2, h: 2 }, // Life
      { x: 6, y: 2, w: 2, h: 2 }, // Health
      { x: 0, y: 4, w: 4, h: 3 }, // Quote form
      { x: 4, y: 4, w: 4, h: 3 }, // Policy details
    ],
    preview: "/template-previews/free-insurance-platform.jpg",
    tags: ["insurance", "quotes", "finance", "platform"],
  },
  {
    id: "free-cryptocurrency",
    name: "Cryptocurrency",
    description: "Cryptocurrency trading platform",
    category: "Finance & Banking",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Bitcoin
      { x: 2, y: 2, w: 2, h: 2 }, // Ethereum
      { x: 4, y: 2, w: 2, h: 2 }, // Cardano
      { x: 6, y: 2, w: 2, h: 2 }, // Solana
      { x: 0, y: 4, w: 4, h: 3 }, // Price chart
      { x: 4, y: 4, w: 4, h: 3 }, // Wallet
    ],
    preview: "/template-previews/free-cryptocurrency.jpg",
    tags: ["cryptocurrency", "trading", "finance", "crypto"],
  },
  {
    id: "premium-wealth-management",
    name: "Wealth Management",
    description: "High-end wealth management platform",
    category: "Finance & Banking",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Platform header
      { x: 0, y: 2, w: 3, h: 3 }, // Portfolio overview
      { x: 3, y: 2, w: 4, h: 3 }, // Asset allocation
      { x: 7, y: 2, w: 3, h: 3 }, // Performance
      { x: 0, y: 5, w: 2, h: 2 }, // Stocks
      { x: 2, y: 5, w: 2, h: 2 }, // Bonds
      { x: 4, y: 5, w: 2, h: 2 }, // Real estate
      { x: 6, y: 5, w: 2, h: 2 }, // Alternative investments
      { x: 8, y: 5, w: 2, h: 2 }, // Cash
      { x: 0, y: 7, w: 5, h: 2 }, // Financial planning
      { x: 5, y: 7, w: 5, h: 2 }, // Tax optimization
    ],
    preview: "/template-previews/premium-wealth-management.jpg",
    tags: ["wealth", "management", "premium", "finance"],
  },
  {
    id: "premium-trading-advanced",
    name: "Trading Advanced",
    description: "Advanced trading platform with analytics",
    category: "Finance & Banking",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Trading header
      { x: 0, y: 2, w: 3, h: 2 }, // Account balance
      { x: 3, y: 2, w: 3, h: 2 }, // P&L
      { x: 6, y: 2, w: 3, h: 2 }, // Margin
      { x: 9, y: 2, w: 3, h: 2 }, // Risk metrics
      { x: 0, y: 4, w: 8, h: 4 }, // Advanced chart
      { x: 8, y: 4, w: 4, h: 4 }, // Order book
      { x: 0, y: 8, w: 3, h: 2 }, // Buy orders
      { x: 3, y: 8, w: 3, h: 2 }, // Sell orders
      { x: 6, y: 8, w: 3, h: 2 }, // Position size
      { x: 9, y: 8, w: 3, h: 2 }, // Stop loss
      { x: 0, y: 10, w: 6, h: 2 }, // Market news
      { x: 6, y: 10, w: 6, h: 2 }, // Economic calendar
    ],
    preview: "/template-previews/premium-trading-advanced.jpg",
    tags: ["trading", "advanced", "analytics", "premium"],
  },
  {
    id: "premium-financial-analytics",
    name: "Financial Analytics",
    description: "Comprehensive financial analytics platform",
    category: "Finance & Banking",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Analytics header
      { x: 0, y: 2, w: 3, h: 2 }, // Revenue
      { x: 3, y: 2, w: 3, h: 2 }, // Expenses
      { x: 6, y: 2, w: 3, h: 2 }, // Profit margin
      { x: 9, y: 2, w: 3, h: 2 }, // Cash flow
      { x: 0, y: 4, w: 6, h: 3 }, // Financial trends
      { x: 6, y: 4, w: 6, h: 3 }, // Performance metrics
      { x: 0, y: 7, w: 4, h: 2 }, // Budget analysis
      { x: 4, y: 7, w: 4, h: 2 }, // Risk assessment
      { x: 8, y: 7, w: 4, h: 2 }, // Forecasting
    ],
    preview: "/template-previews/premium-financial-analytics.jpg",
    tags: ["analytics", "financial", "insights", "premium"],
  },
];
