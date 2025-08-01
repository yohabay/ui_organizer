import type { Template } from "@/types";

export const ecommerceTemplates: Template[] = [
  {
    id: "free-ecommerce-basic",
    name: "E-commerce Basic",
    description: "Simple online store layout with product grid",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Hero banner
      { x: 0, y: 2, w: 2, h: 2 }, // Product 1
      { x: 2, y: 2, w: 2, h: 2 }, // Product 2
      { x: 4, y: 2, w: 2, h: 2 }, // Product 3
      { x: 0, y: 4, w: 2, h: 2 }, // Product 4
      { x: 2, y: 4, w: 2, h: 2 }, // Product 5
      { x: 4, y: 4, w: 2, h: 2 }, // Product 6
    ],
    preview: "/template-previews/free-ecommerce-basic.jpg",
    tags: ["ecommerce", "products", "grid", "shopping"],
  },
  {
    id: "free-ecommerce-premium",
    name: "E-commerce Premium",
    description: "Advanced store layout with featured products",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero section
      { x: 0, y: 3, w: 4, h: 2 }, // Featured product
      { x: 4, y: 3, w: 4, h: 2 }, // Category showcase
      { x: 0, y: 5, w: 2, h: 2 }, // Product 1
      { x: 2, y: 5, w: 2, h: 2 }, // Product 2
      { x: 4, y: 5, w: 2, h: 2 }, // Product 3
      { x: 6, y: 5, w: 2, h: 2 }, // Product 4
    ],
    preview: "/template-previews/free-ecommerce-premium.jpg",
    tags: ["ecommerce", "premium", "featured", "modern"],
  },
  {
    id: "free-marketplace-grid",
    name: "Marketplace Grid",
    description: "Multi-vendor marketplace layout",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Search header
      { x: 0, y: 2, w: 2, h: 2 }, // Vendor 1
      { x: 2, y: 2, w: 2, h: 2 }, // Vendor 2
      { x: 4, y: 2, w: 2, h: 2 }, // Vendor 3
      { x: 0, y: 4, w: 2, h: 2 }, // Product 1
      { x: 2, y: 4, w: 2, h: 2 }, // Product 2
      { x: 4, y: 4, w: 2, h: 2 }, // Product 3
      { x: 0, y: 6, w: 2, h: 2 }, // Product 4
      { x: 2, y: 6, w: 2, h: 2 }, // Product 5
      { x: 4, y: 6, w: 2, h: 2 }, // Product 6
    ],
    preview: "/template-previews/free-marketplace-grid.jpg",
    tags: ["marketplace", "vendors", "multi-seller", "grid"],
  },
  {
    id: "free-product-catalog",
    name: "Product Catalog",
    description: "Comprehensive product catalog layout",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Category 1
      { x: 2, y: 2, w: 2, h: 2 }, // Category 2
      { x: 4, y: 2, w: 2, h: 2 }, // Category 3
      { x: 6, y: 2, w: 2, h: 2 }, // Category 4
      { x: 0, y: 4, w: 2, h: 2 }, // Product 1
      { x: 2, y: 4, w: 2, h: 2 }, // Product 2
      { x: 4, y: 4, w: 2, h: 2 }, // Product 3
      { x: 6, y: 4, w: 2, h: 2 }, // Product 4
      { x: 0, y: 6, w: 2, h: 2 }, // Product 5
      { x: 2, y: 6, w: 2, h: 2 }, // Product 6
      { x: 4, y: 6, w: 2, h: 2 }, // Product 7
      { x: 6, y: 6, w: 2, h: 2 }, // Product 8
    ],
    preview: "/template-previews/free-product-catalog.jpg",
    tags: ["catalog", "products", "categories", "comprehensive"],
  },
  {
    id: "free-shopping-cart",
    name: "Shopping Cart",
    description: "Cart and checkout flow layout",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1 }, // Header
      { x: 0, y: 1, w: 5, h: 3 }, // Cart items
      { x: 5, y: 1, w: 3, h: 2 }, // Order summary
      { x: 5, y: 3, w: 3, h: 1 }, // Checkout button
      { x: 0, y: 4, w: 4, h: 2 }, // Related products
      { x: 4, y: 4, w: 4, h: 2 }, // Payment methods
    ],
    preview: "/template-previews/free-shopping-cart.jpg",
    tags: ["cart", "checkout", "payment", "flow"],
  },
  {
    id: "premium-ecommerce-luxury",
    name: "E-commerce Luxury",
    description: "High-end luxury store layout",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 4 }, // Hero section
      { x: 0, y: 4, w: 3, h: 3 }, // Featured product
      { x: 3, y: 4, w: 4, h: 3 }, // Product showcase
      { x: 7, y: 4, w: 3, h: 3 }, // Brand story
      { x: 0, y: 7, w: 2, h: 2 }, // Product 1
      { x: 2, y: 7, w: 2, h: 2 }, // Product 2
      { x: 4, y: 7, w: 2, h: 2 }, // Product 3
      { x: 6, y: 7, w: 2, h: 2 }, // Product 4
      { x: 8, y: 7, w: 2, h: 2 }, // Product 5
    ],
    preview: "/template-previews/premium-ecommerce-luxury.jpg",
    tags: ["luxury", "premium", "high-end", "exclusive"],
  },
  {
    id: "premium-marketplace-advanced",
    name: "Marketplace Advanced",
    description: "Advanced marketplace with analytics",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Analytics header
      { x: 0, y: 2, w: 3, h: 2 }, // Sales metrics
      { x: 3, y: 2, w: 3, h: 2 }, // Top vendors
      { x: 6, y: 2, w: 4, h: 2 }, // Revenue chart
      { x: 0, y: 4, w: 2, h: 2 }, // Vendor 1
      { x: 2, y: 4, w: 2, h: 2 }, // Vendor 2
      { x: 4, y: 4, w: 2, h: 2 }, // Vendor 3
      { x: 6, y: 4, w: 2, h: 2 }, // Vendor 4
      { x: 8, y: 4, w: 2, h: 2 }, // Vendor 5
      { x: 0, y: 6, w: 2, h: 2 }, // Product 1
      { x: 2, y: 6, w: 2, h: 2 }, // Product 2
      { x: 4, y: 6, w: 2, h: 2 }, // Product 3
      { x: 6, y: 6, w: 2, h: 2 }, // Product 4
      { x: 8, y: 6, w: 2, h: 2 }, // Product 5
    ],
    preview: "/template-previews/premium-marketplace-advanced.jpg",
    tags: ["marketplace", "analytics", "advanced", "metrics"],
  },
  {
    id: "premium-product-showcase",
    name: "Product Showcase",
    description: "Premium product presentation layout",
    category: "E-commerce & Shopping",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero product
      { x: 0, y: 3, w: 4, h: 2 }, // Product details
      { x: 4, y: 3, w: 4, h: 2 }, // Product gallery
      { x: 0, y: 5, w: 2, h: 2 }, // Related 1
      { x: 2, y: 5, w: 2, h: 2 }, // Related 2
      { x: 4, y: 5, w: 2, h: 2 }, // Related 3
      { x: 6, y: 5, w: 2, h: 2 }, // Related 4
    ],
    preview: "/template-previews/premium-product-showcase.jpg",
    tags: ["showcase", "premium", "presentation", "gallery"],
  },
  {
    id: "mobile-ecommerce-app",
    name: "Mobile E-commerce App",
    description: "Complete mobile shopping app with home, product detail, and cart screens",
    category: "E-commerce & Shopping",
    projectTypes: ["mobile"],
    rows: 8,
    cols: 12,
    slots: [
      {
        x: 0, y: 1, w: 4, h: 6,
        deviceFrame: "iphone",
        shadow: "lg",
        borderRadius: "2xl"
      }, // Home screen
      {
        x: 4, y: 1, w: 4, h: 6,
        deviceFrame: "iphone",
        shadow: "lg",
        borderRadius: "2xl"
      }, // Product detail screen
      {
        x: 8, y: 1, w: 4, h: 6,
        deviceFrame: "iphone",
        shadow: "lg",
        borderRadius: "2xl"
      }, // Shopping cart screen
    ],
    preview: "/template-previews/mobile-ecommerce-app.jpg",
    tags: ["mobile", "ecommerce", "app", "shopping", "ios", "android"],
    realProject: {
      name: "Mobile Shopping App",
      description: "A comprehensive mobile e-commerce application featuring product browsing, detailed product views, and shopping cart functionality",
      platform: "iOS/Android",
      industry: "E-commerce"
    }
  },
];
