import type { Template } from "@/types";

export const technologyTemplates: Template[] = [
  {
    id: "free-saas-dashboard",
    name: "SaaS Dashboard",
    description: "Software as a Service dashboard",
    category: "Technology & Software",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Users
      { x: 2, y: 2, w: 2, h: 2 }, // Revenue
      { x: 4, y: 2, w: 2, h: 2 }, // Usage
      { x: 6, y: 2, w: 2, h: 2 }, // Performance
      { x: 0, y: 4, w: 4, h: 3 }, // Analytics
      { x: 4, y: 4, w: 4, h: 3 }, // Recent activity
    ],
    preview: "/template-previews/free-saas-dashboard.jpg",
    tags: ["saas", "dashboard", "software", "technology"],
  },
  {
    id: "free-mobile-app",
    name: "Mobile App",
    description: "Mobile application interface",
    category: "Technology & Software",
    projectTypes: ["mobile"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Feature 1
      { x: 2, y: 1, w: 2, h: 2 }, // Feature 2
      { x: 0, y: 3, w: 4, h: 3 }, // Main content
      { x: 0, y: 6, w: 4, h: 2 }, // Navigation
    ],
    preview: "/template-previews/free-mobile-app.jpg",
    tags: ["mobile", "app", "interface", "technology"],
  },
  {
    id: "free-web-app",
    name: "Web Application",
    description: "Web application interface",
    category: "Technology & Software",
    projectTypes: ["website"],
    rows: 8,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Navigation
      { x: 0, y: 2, w: 3, h: 4 }, // Sidebar
      { x: 3, y: 2, w: 7, h: 4 }, // Main content
      { x: 0, y: 6, w: 10, h: 2 }, // Footer
    ],
    preview: "/template-previews/free-web-app.jpg",
    tags: ["web", "application", "interface", "technology"],
  },
  {
    id: "free-api-docs",
    name: "API Documentation",
    description: "API documentation interface",
    category: "Technology & Software",
    projectTypes: ["website"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 6 }, // Navigation
      { x: 2, y: 2, w: 6, h: 3 }, // Code example
      { x: 2, y: 5, w: 6, h: 3 }, // Parameters
    ],
    preview: "/template-previews/free-api-docs.jpg",
    tags: ["api", "documentation", "developer", "technology"],
  },
  {
    id: "free-developer-portal",
    name: "Developer Portal",
    description: "Developer portal and resources",
    category: "Technology & Software",
    projectTypes: ["website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Header
      { x: 0, y: 2, w: 3, h: 3 }, // Documentation
      { x: 3, y: 2, w: 4, h: 3 }, // Code samples
      { x: 7, y: 2, w: 3, h: 3 }, // SDK downloads
      { x: 0, y: 5, w: 2, h: 2 }, // Getting started
      { x: 2, y: 5, w: 2, h: 2 }, // Tutorials
      { x: 4, y: 5, w: 2, h: 2 }, // Examples
      { x: 6, y: 5, w: 2, h: 2 }, // Support
      { x: 8, y: 5, w: 2, h: 2 }, // Community
      { x: 0, y: 7, w: 5, h: 2 }, // Blog
      { x: 5, y: 7, w: 5, h: 2 }, // Events
    ],
    preview: "/template-previews/free-developer-portal.jpg",
    tags: ["developer", "portal", "resources", "technology"],
  },
  {
    id: "premium-enterprise-software",
    name: "Enterprise Software",
    description: "Enterprise software platform",
    category: "Technology & Software",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Enterprise header
      { x: 0, y: 2, w: 3, h: 2 }, // User management
      { x: 3, y: 2, w: 3, h: 2 }, // Security
      { x: 6, y: 2, w: 3, h: 2 }, // Analytics
      { x: 9, y: 2, w: 3, h: 2 }, // Integration
      { x: 0, y: 4, w: 4, h: 3 }, // Dashboard
      { x: 4, y: 4, w: 4, h: 3 }, // Reports
      { x: 8, y: 4, w: 4, h: 3 }, // Settings
      { x: 0, y: 7, w: 3, h: 2 }, // Users
      { x: 3, y: 7, w: 3, h: 2 }, // Roles
      { x: 6, y: 7, w: 3, h: 2 }, // Permissions
      { x: 9, y: 7, w: 3, h: 2 }, // Audit
      { x: 0, y: 9, w: 6, h: 2 }, // System health
      { x: 6, y: 9, w: 6, h: 2 }, // Performance
    ],
    preview: "/template-previews/premium-enterprise-software.jpg",
    tags: ["enterprise", "software", "platform", "premium"],
  },
  {
    id: "premium-ai-platform",
    name: "AI Platform",
    description: "Artificial Intelligence platform",
    category: "Technology & Software",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // AI platform header
      { x: 0, y: 2, w: 3, h: 3 }, // Model training
      { x: 3, y: 2, w: 4, h: 3 }, // AI predictions
      { x: 7, y: 2, w: 3, h: 3 }, // Model performance
      { x: 0, y: 5, w: 2, h: 2 }, // Data input
      { x: 2, y: 5, w: 2, h: 2 }, // Model selection
      { x: 4, y: 5, w: 2, h: 2 }, // Training status
      { x: 6, y: 5, w: 2, h: 2 }, // Results
      { x: 8, y: 5, w: 2, h: 2 }, // Export
      { x: 0, y: 7, w: 5, h: 2 }, // Model analytics
      { x: 5, y: 7, w: 5, h: 2 }, // Performance metrics
    ],
    preview: "/template-previews/premium-ai-platform.jpg",
    tags: ["ai", "platform", "machine-learning", "premium"],
  },
  {
    id: "premium-cloud-platform",
    name: "Cloud Platform",
    description: "Cloud computing platform",
    category: "Technology & Software",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Cloud platform header
      { x: 0, y: 2, w: 3, h: 2 }, // Compute
      { x: 3, y: 2, w: 3, h: 2 }, // Storage
      { x: 6, y: 2, w: 3, h: 2 }, // Networking
      { x: 9, y: 2, w: 3, h: 2 }, // Security
      { x: 0, y: 4, w: 4, h: 3 }, // Resource management
      { x: 4, y: 4, w: 4, h: 3 }, // Monitoring
      { x: 8, y: 4, w: 4, h: 3 }, // Billing
      { x: 0, y: 7, w: 2, h: 2 }, // Instances
      { x: 2, y: 7, w: 2, h: 2 }, // Databases
      { x: 4, y: 7, w: 2, h: 2 }, // Load balancers
      { x: 6, y: 7, w: 2, h: 2 }, // Auto scaling
      { x: 8, y: 7, w: 2, h: 2 }, // CDN
      { x: 10, y: 7, w: 2, h: 2 }, // DNS
      { x: 0, y: 9, w: 6, h: 2 }, // Cost analysis
      { x: 6, y: 9, w: 6, h: 2 }, // Performance metrics
    ],
    preview: "/template-previews/premium-cloud-platform.jpg",
    tags: ["cloud", "platform", "computing", "premium"],
  },
];
