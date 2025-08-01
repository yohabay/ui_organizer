import type { Template } from "@/types";

export const realProjectTemplates: Template[] = [
  // Premium Hero Layouts
  {
    id: "premium-hero-dynamic",
    name: "Premium Hero Dynamic",
    description:
      "Adaptive hero layout that scales from 1 to 20+ screenshots with professional spacing",
    category: "Premium Hero",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero slot - full width, triple height
      { x: 0, y: 3, w: 4, h: 2 }, // Supporting screenshots
      { x: 4, y: 3, w: 4, h: 2 },
      { x: 0, y: 5, w: 2, h: 1 }, // Additional slots for more screenshots
      { x: 2, y: 5, w: 2, h: 1 },
      { x: 4, y: 5, w: 2, h: 1 },
      { x: 6, y: 5, w: 2, h: 1 },
    ],
    preview: "premium-hero-dynamic",
    tags: ["premium", "hero", "dynamic", "adaptive"],
    isPremium: true,
  },
  {
    id: "premium-masonry-adaptive",
    name: "Premium Masonry Adaptive",
    description:
      "Sophisticated masonry layout that adapts to any number of screenshots",
    category: "Premium Grid",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 3 }, // Tall first column
      { x: 2, y: 0, w: 2, h: 2 },
      { x: 4, y: 0, w: 2, h: 3 },
      { x: 0, y: 3, w: 2, h: 2 },
      { x: 2, y: 2, w: 2, h: 3 },
      { x: 4, y: 3, w: 2, h: 2 },
      { x: 0, y: 5, w: 2, h: 2 },
      { x: 2, y: 5, w: 2, h: 2 },
      { x: 4, y: 5, w: 2, h: 2 },
      { x: 0, y: 7, w: 2, h: 1 },
      { x: 2, y: 7, w: 2, h: 1 },
      { x: 4, y: 7, w: 2, h: 1 },
    ],
    preview: "premium-masonry-adaptive",
    tags: ["premium", "masonry", "adaptive", "dynamic"],
    isPremium: true,
  },

  // Dynamic Grid Layouts
  {
    id: "dynamic-grid-flexible",
    name: "Dynamic Grid Flexible",
    description: "Flexible grid that automatically adjusts to screenshot count",
    category: "Dynamic Grid",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 4, h: 3 }, // Large hero
      { x: 4, y: 0, w: 4, h: 2 }, // Top right
      { x: 4, y: 2, w: 4, h: 1 }, // Bottom right
      { x: 0, y: 3, w: 2, h: 2 }, // Left column
      { x: 2, y: 3, w: 2, h: 2 }, // Center column
      { x: 4, y: 3, w: 2, h: 2 }, // Right column
      { x: 6, y: 3, w: 2, h: 2 }, // Far right
      { x: 0, y: 5, w: 2, h: 2 }, // Bottom row
      { x: 2, y: 5, w: 2, h: 2 },
      { x: 4, y: 5, w: 2, h: 2 },
      { x: 6, y: 5, w: 2, h: 2 },
      { x: 0, y: 7, w: 2, h: 2 }, // Additional rows
      { x: 2, y: 7, w: 2, h: 2 },
      { x: 4, y: 7, w: 2, h: 2 },
      { x: 6, y: 7, w: 2, h: 2 },
      { x: 0, y: 9, w: 2, h: 2 }, // Final row
      { x: 2, y: 9, w: 2, h: 1 },
      { x: 4, y: 9, w: 2, h: 1 },
      { x: 6, y: 9, w: 2, h: 1 },
    ],
    preview: "dynamic-grid-flexible",
    tags: ["dynamic", "grid", "flexible", "adaptive"],
  },

  // Premium Creative Layouts
  {
    id: "premium-creative-collage",
    name: "Premium Creative Collage",
    description:
      "Artistic collage layout with overlapping elements and dynamic scaling",
    category: "Premium Creative",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 4, h: 3 }, // Large background
      { x: 3, y: 2, w: 3, h: 3 }, // Overlapping middle
      { x: 6, y: 0, w: 4, h: 4 }, // Tall right
      { x: 0, y: 3, w: 3, h: 3 }, // Bottom left
      { x: 6, y: 4, w: 4, h: 2 }, // Bottom right
      { x: 0, y: 6, w: 2, h: 2 }, // Additional elements
      { x: 2, y: 6, w: 2, h: 2 },
      { x: 4, y: 6, w: 2, h: 2 },
      { x: 6, y: 6, w: 2, h: 2 },
      { x: 8, y: 6, w: 2, h: 2 },
      { x: 0, y: 8, w: 2, h: 1 }, // Final row
      { x: 2, y: 8, w: 2, h: 1 },
      { x: 4, y: 8, w: 2, h: 1 },
      { x: 6, y: 8, w: 2, h: 1 },
      { x: 8, y: 8, w: 2, h: 1 },
    ],
    preview: "premium-creative-collage",
    tags: ["premium", "creative", "collage", "artistic"],
    isPremium: true,
  },

  // Professional Business Layouts
  {
    id: "premium-business-presentation",
    name: "Premium Business Presentation",
    description: "Sophisticated business layout for corporate portfolios",
    category: "Premium Business",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header full width
      { x: 0, y: 2, w: 3, h: 2 }, // Left content
      { x: 3, y: 2, w: 3, h: 2 }, // Center content
      { x: 6, y: 2, w: 2, h: 2 }, // Right content
      { x: 0, y: 4, w: 2, h: 2 }, // Bottom left
      { x: 2, y: 4, w: 2, h: 2 }, // Bottom center left
      { x: 4, y: 4, w: 2, h: 2 }, // Bottom center right
      { x: 6, y: 4, w: 2, h: 2 }, // Bottom right
    ],
    preview: "premium-business-presentation",
    tags: ["premium", "business", "corporate", "professional"],
    isPremium: true,
  },

  // Mobile-First Premium Layouts
  {
    id: "premium-mobile-storyboard",
    name: "Premium Mobile Storyboard",
    description: "Advanced mobile storyboard with flow visualization",
    category: "Premium Mobile",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 2, h: 4 }, // First screen
      { x: 2, y: 0, w: 2, h: 4 }, // Second screen
      { x: 4, y: 0, w: 2, h: 4 }, // Third screen
      { x: 6, y: 0, w: 2, h: 4 }, // Fourth screen
      { x: 8, y: 0, w: 2, h: 4 }, // Fifth screen
      { x: 10, y: 0, w: 2, h: 4 }, // Sixth screen
      { x: 0, y: 4, w: 2, h: 4 }, // Additional rows
      { x: 2, y: 4, w: 2, h: 4 },
      { x: 4, y: 4, w: 2, h: 4 },
      { x: 6, y: 4, w: 2, h: 4 },
      { x: 8, y: 4, w: 2, h: 4 },
      { x: 10, y: 4, w: 2, h: 4 },
    ],
    preview: "premium-mobile-storyboard",
    tags: ["premium", "mobile", "storyboard", "flow"],
    isPremium: true,
  },

  // Advanced Dynamic Layouts
  {
    id: "advanced-mosaic-dynamic",
    name: "Advanced Mosaic Dynamic",
    description:
      "Complex mosaic layout with multiple focal points and dynamic scaling",
    category: "Advanced Dynamic",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 3, h: 4 }, // Large top left
      { x: 3, y: 0, w: 2, h: 2 }, // Medium top center
      { x: 5, y: 0, w: 5, h: 2 }, // Wide top right
      { x: 3, y: 2, w: 2, h: 2 }, // Small middle center
      { x: 5, y: 2, w: 5, h: 4 }, // Large middle right
      { x: 0, y: 4, w: 3, h: 2 }, // Medium bottom left
      { x: 0, y: 6, w: 2, h: 3 }, // Tall bottom left
      { x: 2, y: 6, w: 2, h: 3 }, // Tall bottom center
      { x: 4, y: 6, w: 6, h: 3 }, // Wide bottom right
      { x: 0, y: 9, w: 2, h: 2 }, // Additional elements
      { x: 2, y: 9, w: 2, h: 2 },
      { x: 4, y: 9, w: 2, h: 2 },
      { x: 6, y: 9, w: 2, h: 2 },
      { x: 8, y: 9, w: 2, h: 2 },
      { x: 0, y: 11, w: 2, h: 1 }, // Final row
      { x: 2, y: 11, w: 2, h: 1 },
      { x: 4, y: 11, w: 2, h: 1 },
      { x: 6, y: 11, w: 2, h: 1 },
      { x: 8, y: 11, w: 2, h: 1 },
    ],
    preview: "advanced-mosaic-dynamic",
    tags: ["advanced", "mosaic", "dynamic", "complex"],
    isPremium: true,
  },

  // Minimalist Premium Layouts
  {
    id: "premium-minimalist-focus",
    name: "Premium Minimalist Focus",
    description:
      "Clean, focused layout with maximum impact and dynamic scaling",
    category: "Premium Minimalist",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 1, y: 0, w: 4, h: 4 }, // Center focus
      { x: 0, y: 0, w: 1, h: 2 }, // Top left
      { x: 5, y: 0, w: 1, h: 2 }, // Top right
      { x: 0, y: 2, w: 1, h: 2 }, // Middle left
      { x: 5, y: 2, w: 1, h: 2 }, // Middle right
      { x: 0, y: 4, w: 6, h: 2 }, // Bottom full width
      { x: 0, y: 6, w: 2, h: 2 }, // Additional elements
      { x: 2, y: 6, w: 2, h: 2 },
      { x: 4, y: 6, w: 2, h: 2 },
    ],
    preview: "premium-minimalist-focus",
    tags: ["premium", "minimalist", "focus", "clean"],
    isPremium: true,
  },

  // Portfolio Showcase Layouts
  {
    id: "premium-portfolio-showcase",
    name: "Premium Portfolio Showcase",
    description:
      "Professional portfolio layout with hero section and project gallery",
    category: "Premium Portfolio",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero section
      { x: 0, y: 3, w: 2, h: 2 }, // Project 1
      { x: 2, y: 3, w: 2, h: 2 }, // Project 2
      { x: 4, y: 3, w: 2, h: 2 }, // Project 3
      { x: 6, y: 3, w: 2, h: 2 }, // Project 4
      { x: 0, y: 5, w: 2, h: 2 }, // Project 5
      { x: 2, y: 5, w: 2, h: 2 }, // Project 6
      { x: 4, y: 5, w: 2, h: 2 }, // Project 7
      { x: 6, y: 5, w: 2, h: 2 }, // Project 8
      { x: 0, y: 7, w: 2, h: 2 }, // Additional projects
      { x: 2, y: 7, w: 2, h: 2 },
      { x: 4, y: 7, w: 2, h: 2 },
      { x: 6, y: 7, w: 2, h: 2 },
      { x: 0, y: 9, w: 2, h: 1 }, // Final row
      { x: 2, y: 9, w: 2, h: 1 },
      { x: 4, y: 9, w: 2, h: 1 },
      { x: 6, y: 9, w: 2, h: 1 },
    ],
    preview: "premium-portfolio-showcase",
    tags: ["premium", "portfolio", "showcase", "professional"],
    isPremium: true,
  },

  // E-commerce Premium Layouts
  {
    id: "premium-ecommerce-showcase",
    name: "Premium E-commerce Showcase",
    description:
      "Complete e-commerce portfolio with product views and user flows",
    category: "Premium E-commerce",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 6, h: 4 }, // Hero product
      { x: 6, y: 0, w: 4, h: 2 }, // Product details
      { x: 6, y: 2, w: 4, h: 2 }, // Product gallery
      { x: 0, y: 4, w: 2, h: 2 }, // Category 1
      { x: 2, y: 4, w: 2, h: 2 }, // Category 2
      { x: 4, y: 4, w: 2, h: 2 }, // Category 3
      { x: 6, y: 4, w: 2, h: 2 }, // Category 4
      { x: 8, y: 4, w: 2, h: 2 }, // Category 5
      { x: 0, y: 6, w: 2, h: 2 }, // Product 1
      { x: 2, y: 6, w: 2, h: 2 }, // Product 2
      { x: 4, y: 6, w: 2, h: 2 }, // Product 3
      { x: 6, y: 6, w: 2, h: 2 }, // Product 4
      { x: 8, y: 6, w: 2, h: 2 }, // Product 5
      { x: 0, y: 8, w: 2, h: 2 }, // Cart
      { x: 2, y: 8, w: 2, h: 2 }, // Checkout
      { x: 4, y: 8, w: 2, h: 2 }, // Payment
      { x: 6, y: 8, w: 2, h: 2 }, // Confirmation
      { x: 8, y: 8, w: 2, h: 2 }, // Account
      { x: 0, y: 10, w: 2, h: 2 }, // Additional screens
      { x: 2, y: 10, w: 2, h: 2 },
      { x: 4, y: 10, w: 2, h: 2 },
      { x: 6, y: 10, w: 2, h: 2 },
      { x: 8, y: 10, w: 2, h: 2 },
    ],
    preview: "premium-ecommerce-showcase",
    tags: ["premium", "ecommerce", "products", "shopping"],
    isPremium: true,
  },

  // SaaS Premium Layouts
  {
    id: "premium-saas-dashboard",
    name: "Premium SaaS Dashboard",
    description:
      "Complete SaaS application with dashboard, analytics, and user management",
    category: "Premium SaaS",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 4 }, // Main dashboard
      { x: 8, y: 0, w: 4, h: 2 }, // Analytics
      { x: 8, y: 2, w: 4, h: 2 }, // Notifications
      { x: 0, y: 4, w: 3, h: 3 }, // User management
      { x: 3, y: 4, w: 3, h: 3 }, // Settings
      { x: 6, y: 4, w: 3, h: 3 }, // Reports
      { x: 9, y: 4, w: 3, h: 3 }, // Billing
      { x: 0, y: 7, w: 2, h: 2 }, // Feature 1
      { x: 2, y: 7, w: 2, h: 2 }, // Feature 2
      { x: 4, y: 7, w: 2, h: 2 }, // Feature 3
      { x: 6, y: 7, w: 2, h: 2 }, // Feature 4
      { x: 8, y: 7, w: 2, h: 2 }, // Feature 5
      { x: 10, y: 7, w: 2, h: 2 }, // Feature 6
      { x: 0, y: 9, w: 2, h: 2 }, // Additional screens
      { x: 2, y: 9, w: 2, h: 2 },
      { x: 4, y: 9, w: 2, h: 2 },
      { x: 6, y: 9, w: 2, h: 2 },
      { x: 8, y: 9, w: 2, h: 2 },
      { x: 10, y: 9, w: 2, h: 2 },
      { x: 0, y: 11, w: 2, h: 1 }, // Final row
      { x: 2, y: 11, w: 2, h: 1 },
      { x: 4, y: 11, w: 2, h: 1 },
      { x: 6, y: 11, w: 2, h: 1 },
      { x: 8, y: 11, w: 2, h: 1 },
      { x: 10, y: 11, w: 2, h: 1 },
    ],
    preview: "premium-saas-dashboard",
    tags: ["premium", "saas", "dashboard", "analytics"],
    isPremium: true,
  },

  // Mobile App Premium Layouts
  {
    id: "premium-mobile-app-complete",
    name: "Premium Mobile App Complete",
    description:
      "Complete mobile app with onboarding, main features, and settings",
    category: "Premium Mobile",
    projectTypes: ["mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 4 }, // Onboarding 1
      { x: 2, y: 0, w: 2, h: 4 }, // Onboarding 2
      { x: 4, y: 0, w: 2, h: 4 }, // Onboarding 3
      { x: 6, y: 0, w: 2, h: 4 }, // Login
      { x: 0, y: 4, w: 2, h: 4 }, // Home
      { x: 2, y: 4, w: 2, h: 4 }, // Profile
      { x: 4, y: 4, w: 2, h: 4 }, // Settings
      { x: 6, y: 4, w: 2, h: 4 }, // Notifications
    ],
    preview: "premium-mobile-app-complete",
    tags: ["premium", "mobile", "app", "complete"],
    isPremium: true,
  },

  // Creative Agency Premium Layouts
  {
    id: "premium-creative-agency",
    name: "Premium Creative Agency",
    description:
      "Portfolio layout for creative agencies with project showcases",
    category: "Premium Creative Agency",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 6, h: 4 }, // Hero project
      { x: 6, y: 0, w: 4, h: 2 }, // Project details
      { x: 6, y: 2, w: 4, h: 2 }, // Client info
      { x: 0, y: 4, w: 2, h: 2 }, // Project 1
      { x: 2, y: 4, w: 2, h: 2 }, // Project 2
      { x: 4, y: 4, w: 2, h: 2 }, // Project 3
      { x: 6, y: 4, w: 2, h: 2 }, // Project 4
      { x: 8, y: 4, w: 2, h: 2 }, // Project 5
      { x: 0, y: 6, w: 2, h: 2 }, // Project 6
      { x: 2, y: 6, w: 2, h: 2 }, // Project 7
      { x: 4, y: 6, w: 2, h: 2 }, // Project 8
      { x: 6, y: 6, w: 2, h: 2 }, // Project 9
      { x: 8, y: 6, w: 2, h: 2 }, // Project 10
      { x: 0, y: 8, w: 2, h: 2 }, // About
      { x: 2, y: 8, w: 2, h: 2 }, // Services
      { x: 4, y: 8, w: 2, h: 2 }, // Team
      { x: 6, y: 8, w: 2, h: 2 }, // Contact
      { x: 8, y: 8, w: 2, h: 2 }, // Blog
    ],
    preview: "premium-creative-agency",
    tags: ["premium", "creative", "agency", "portfolio"],
    isPremium: true,
  },
];
