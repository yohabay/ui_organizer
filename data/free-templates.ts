import type { Template } from "@/types";

export const freeTemplates: Template[] = [
  {
    id: "free-simple-grid",
    name: "Simple Grid",
    description: "Clean 2x2 grid layout for basic content",
    category: "Grid Layouts",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 },
      { x: 2, y: 0, w: 2, h: 2 },
      { x: 0, y: 2, w: 2, h: 2 },
      { x: 2, y: 2, w: 2, h: 2 },
    ],
    preview: "/template-previews/free-simple-grid.jpg",
    tags: ["grid", "simple", "clean", "basic"],
  },
  {
    id: "free-hero-grid",
    name: "Hero + Grid",
    description: "Hero section with supporting grid below",
    category: "Hero Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 3 }, // Hero
      { x: 0, y: 3, w: 2, h: 2 }, // Grid 1
      { x: 2, y: 3, w: 2, h: 2 }, // Grid 2
      { x: 0, y: 5, w: 2, h: 1 }, // Grid 3
      { x: 2, y: 5, w: 2, h: 1 }, // Grid 4
    ],
    preview: "/template-previews/free-hero-grid.jpg",
    tags: ["hero", "grid", "landing", "modern"],
  },
  {
    id: "free-masonry-basic",
    name: "Masonry Basic",
    description: "Pinterest-style masonry layout",
    category: "Masonry Layouts",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 3 },
      { x: 2, y: 0, w: 2, h: 2 },
      { x: 4, y: 0, w: 2, h: 4 },
      { x: 0, y: 3, w: 2, h: 2 },
      { x: 2, y: 2, w: 2, h: 3 },
      { x: 4, y: 4, w: 2, h: 2 },
      { x: 0, y: 5, w: 2, h: 3 },
      { x: 2, y: 5, w: 2, h: 2 },
      { x: 4, y: 6, w: 2, h: 2 },
    ],
    preview: "/template-previews/free-masonry-basic.jpg",
    tags: ["masonry", "pinterest", "varied-heights", "creative"],
  },
  {
    id: "free-mobile-storyboard",
    name: "Mobile Storyboard",
    description: "Horizontal mobile app flow layout",
    category: "Mobile Layouts",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 2, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 4, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 6, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
    ],
    preview: "/template-previews/free-mobile-storyboard.jpg",
    tags: ["mobile", "storyboard", "flow", "app"],
  },
  {
    id: "free-focus-grid",
    name: "Focus Grid",
    description: "Center-focused layout with supporting elements",
    category: "Focus Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 1, y: 1, w: 4, h: 3 }, // Center focus
      { x: 0, y: 0, w: 2, h: 2 }, // Top left
      { x: 4, y: 0, w: 2, h: 2 }, // Top right
      { x: 0, y: 4, w: 2, h: 2 }, // Bottom left
      { x: 4, y: 4, w: 2, h: 2 }, // Bottom right
    ],
    preview: "/template-previews/free-focus-grid.jpg",
    tags: ["focus", "center", "balanced", "modern"],
  },
  {
    id: "free-sidebar-layout",
    name: "Sidebar Layout",
    description: "Traditional sidebar with main content area",
    category: "Sidebar Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 6 }, // Sidebar
      { x: 2, y: 0, w: 6, h: 2 }, // Header
      { x: 2, y: 2, w: 3, h: 2 }, // Content 1
      { x: 5, y: 2, w: 3, h: 2 }, // Content 2
      { x: 2, y: 4, w: 6, h: 2 }, // Footer
    ],
    preview: "/template-previews/free-sidebar-layout.jpg",
    tags: ["sidebar", "traditional", "navigation", "content"],
  },
  {
    id: "free-card-grid",
    name: "Card Grid",
    description: "Uniform card layout for consistent presentation",
    category: "Card Layouts",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 0, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 0, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
    ],
    preview: "/template-previews/free-card-grid.jpg",
    tags: ["cards", "uniform", "consistent", "clean"],
  },
  {
    id: "free-timeline-layout",
    name: "Timeline Layout",
    description: "Vertical timeline for chronological content",
    category: "Timeline Layouts",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 1, y: 0, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 3, y: 1, w: 1, h: 1 },
      { x: 1, y: 2, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 3, w: 1, h: 1 },
      { x: 3, y: 3, w: 1, h: 1 },
      { x: 1, y: 4, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 5, w: 1, h: 1 },
      { x: 3, y: 5, w: 1, h: 1 },
      { x: 1, y: 6, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 7, w: 1, h: 1 },
      { x: 3, y: 7, w: 1, h: 1 },
    ],
    preview: "/template-previews/free-timeline-layout.jpg",
    tags: ["timeline", "chronological", "vertical", "story"],
  },
  {
    id: "free-gallery-grid",
    name: "Gallery Grid",
    description: "Photo gallery style layout",
    category: "Gallery Layouts",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 0, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 0, y: 4, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 4, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 4, w: 2, h: 2, borderRadius: "md" },
    ],
    preview: "/template-previews/free-gallery-grid.jpg",
    tags: ["gallery", "photos", "images", "visual"],
  },
  {
    id: "free-blog-layout",
    name: "Blog Layout",
    description: "Traditional blog with sidebar and content",
    category: "Blog Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 5, h: 2 }, // Header
      { x: 5, y: 0, w: 3, h: 2 }, // Sidebar
      { x: 0, y: 2, w: 5, h: 3 }, // Main content
      { x: 5, y: 2, w: 3, h: 1 }, // Sidebar content 1
      { x: 5, y: 3, w: 3, h: 1 }, // Sidebar content 2
      { x: 5, y: 4, w: 3, h: 1 }, // Sidebar content 3
      { x: 0, y: 5, w: 8, h: 2 }, // Footer
      { x: 0, y: 7, w: 8, h: 1 }, // Bottom
    ],
    preview: "/template-previews/free-blog-layout.jpg",
    tags: ["blog", "content", "sidebar", "traditional"],
  },
  {
    id: "free-pricing-table",
    name: "Pricing Table",
    description: "Three-column pricing comparison",
    category: "Pricing Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 1 }, // Plan 1 header
      { x: 2, y: 0, w: 2, h: 1 }, // Plan 2 header
      { x: 4, y: 0, w: 2, h: 1 }, // Plan 3 header
      { x: 0, y: 1, w: 2, h: 4 }, // Plan 1 content
      { x: 2, y: 1, w: 2, h: 4 }, // Plan 2 content
      { x: 4, y: 1, w: 2, h: 4 }, // Plan 3 content
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-pricing-table.jpg",
    tags: ["pricing", "comparison", "plans", "business"],
  },
  {
    id: "free-team-grid",
    name: "Team Grid",
    description: "Team member showcase layout",
    category: "Team Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 3 }, // Team member 1
      { x: 2, y: 0, w: 2, h: 3 }, // Team member 2
      { x: 4, y: 0, w: 2, h: 3 }, // Team member 3
      { x: 0, y: 3, w: 2, h: 3 }, // Team member 4
      { x: 2, y: 3, w: 2, h: 3 }, // Team member 5
      { x: 4, y: 3, w: 2, h: 3 }, // Team member 6
    ],
    preview: "/template-previews/free-team-grid.jpg",
    tags: ["team", "members", "profiles", "about"],
  },
  {
    id: "free-feature-grid",
    name: "Feature Grid",
    description: "Product features showcase",
    category: "Feature Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 3, h: 2 }, // Feature 1
      { x: 3, y: 0, w: 3, h: 2 }, // Feature 2
      { x: 0, y: 2, w: 3, h: 2 }, // Feature 3
      { x: 3, y: 2, w: 3, h: 2 }, // Feature 4
      { x: 0, y: 4, w: 3, h: 2 }, // Feature 5
      { x: 3, y: 4, w: 3, h: 2 }, // Feature 6
    ],
    preview: "/template-previews/free-feature-grid.jpg",
    tags: ["features", "product", "showcase", "benefits"],
  },
  {
    id: "free-testimonial-grid",
    name: "Testimonial Grid",
    description: "Customer testimonials layout",
    category: "Testimonial Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 3, h: 2 }, // Testimonial 1
      { x: 3, y: 0, w: 3, h: 2 }, // Testimonial 2
      { x: 0, y: 2, w: 3, h: 2 }, // Testimonial 3
      { x: 3, y: 2, w: 3, h: 2 }, // Testimonial 4
      { x: 0, y: 4, w: 3, h: 2 }, // Testimonial 5
      { x: 3, y: 4, w: 3, h: 2 }, // Testimonial 6
    ],
    preview: "/template-previews/free-testimonial-grid.jpg",
    tags: ["testimonials", "reviews", "customers", "social-proof"],
  },
  {
    id: "free-comparison-table",
    name: "Comparison Table",
    description: "Product comparison layout",
    category: "Comparison Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 1 }, // Product A header
      { x: 2, y: 0, w: 2, h: 1 }, // Product B header
      { x: 4, y: 0, w: 2, h: 1 }, // Product C header
      { x: 6, y: 0, w: 2, h: 1 }, // Product D header
      { x: 0, y: 1, w: 2, h: 4 }, // Product A details
      { x: 2, y: 1, w: 2, h: 4 }, // Product B details
      { x: 4, y: 1, w: 2, h: 4 }, // Product C details
      { x: 6, y: 1, w: 2, h: 4 }, // Product D details
      { x: 0, y: 5, w: 8, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-comparison-table.jpg",
    tags: ["comparison", "table", "products", "analysis"],
  },
  {
    id: "free-faq-layout",
    name: "FAQ Layout",
    description: "Frequently asked questions layout",
    category: "FAQ Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // FAQ 1
      { x: 0, y: 1, w: 6, h: 1 }, // FAQ 2
      { x: 0, y: 2, w: 6, h: 1 }, // FAQ 3
      { x: 0, y: 3, w: 6, h: 1 }, // FAQ 4
      { x: 0, y: 4, w: 6, h: 1 }, // FAQ 5
      { x: 0, y: 5, w: 6, h: 1 }, // FAQ 6
      { x: 0, y: 6, w: 6, h: 1 }, // FAQ 7
      { x: 0, y: 7, w: 6, h: 1 }, // FAQ 8
    ],
    preview: "/template-previews/free-faq-layout.jpg",
    tags: ["faq", "questions", "help", "support"],
  },
  {
    id: "free-contact-form",
    name: "Contact Form",
    description: "Contact page with form layout",
    category: "Contact Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 3, h: 4 }, // Contact form
      { x: 3, y: 1, w: 3, h: 2 }, // Contact info
      { x: 3, y: 3, w: 3, h: 2 }, // Map/location
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-contact-form.jpg",
    tags: ["contact", "form", "communication", "support"],
  },
  {
    id: "free-about-page",
    name: "About Page",
    description: "Company about page layout",
    category: "About Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Hero section
      { x: 0, y: 2, w: 3, h: 2 }, // Story section
      { x: 3, y: 2, w: 3, h: 2 }, // Values section
      { x: 0, y: 4, w: 2, h: 2 }, // Team preview
      { x: 2, y: 4, w: 2, h: 2 }, // Mission
      { x: 4, y: 4, w: 2, h: 2 }, // Vision
    ],
    preview: "/template-previews/free-about-page.jpg",
    tags: ["about", "company", "story", "mission"],
  },
  {
    id: "free-landing-page",
    name: "Landing Page",
    description: "Simple landing page layout",
    category: "Landing Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Hero
      { x: 0, y: 2, w: 2, h: 2 }, // Feature 1
      { x: 2, y: 2, w: 2, h: 2 }, // Feature 2
      { x: 4, y: 2, w: 2, h: 2 }, // Feature 3
      { x: 0, y: 4, w: 3, h: 1 }, // CTA 1
      { x: 3, y: 4, w: 3, h: 1 }, // CTA 2
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-landing-page.jpg",
    tags: ["landing", "conversion", "cta", "marketing"],
  },
  {
    id: "free-portfolio-grid",
    name: "Portfolio Grid",
    description: "Simple portfolio layout",
    category: "Portfolio Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Project 1
      { x: 2, y: 0, w: 2, h: 2 }, // Project 2
      { x: 4, y: 0, w: 2, h: 2 }, // Project 3
      { x: 0, y: 2, w: 2, h: 2 }, // Project 4
      { x: 2, y: 2, w: 2, h: 2 }, // Project 5
      { x: 4, y: 2, w: 2, h: 2 }, // Project 6
      { x: 0, y: 4, w: 2, h: 2 }, // Project 7
      { x: 2, y: 4, w: 2, h: 2 }, // Project 8
      { x: 4, y: 4, w: 2, h: 2 }, // Project 9
    ],
    preview: "/template-previews/free-portfolio-grid.jpg",
    tags: ["portfolio", "projects", "work", "showcase"],
  },
  {
    id: "free-dashboard-basic",
    name: "Dashboard Basic",
    description: "Simple admin dashboard layout",
    category: "Dashboard Layouts",
    projectTypes: ["desktop", "website"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 4 }, // Sidebar
      { x: 2, y: 1, w: 3, h: 2 }, // Chart 1
      { x: 5, y: 1, w: 3, h: 2 }, // Chart 2
      { x: 2, y: 3, w: 3, h: 2 }, // Table
      { x: 5, y: 3, w: 3, h: 2 }, // Activity
      { x: 0, y: 5, w: 8, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-dashboard-basic.jpg",
    tags: ["dashboard", "admin", "analytics", "management"],
  },
  {
    id: "free-ecommerce-grid",
    name: "E-commerce Grid",
    description: "Product catalog layout",
    category: "E-commerce Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 4 }, // Filters
      { x: 2, y: 1, w: 2, h: 2 }, // Product 1
      { x: 4, y: 1, w: 2, h: 2 }, // Product 2
      { x: 2, y: 3, w: 2, h: 2 }, // Product 3
      { x: 4, y: 3, w: 2, h: 2 }, // Product 4
      { x: 0, y: 5, w: 6, h: 1 }, // Pagination
    ],
    preview: "/template-previews/free-ecommerce-grid.jpg",
    tags: ["ecommerce", "products", "catalog", "shop"],
  },
  {
    id: "free-news-layout",
    name: "News Layout",
    description: "News website layout",
    category: "News Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 2 }, // Main article
      { x: 4, y: 1, w: 2, h: 1 }, // Sidebar 1
      { x: 4, y: 2, w: 2, h: 1 }, // Sidebar 2
      { x: 0, y: 3, w: 2, h: 2 }, // Article 1
      { x: 2, y: 3, w: 2, h: 2 }, // Article 2
      { x: 4, y: 3, w: 2, h: 2 }, // Article 3
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-news-layout.jpg",
    tags: ["news", "articles", "content", "media"],
  },
  {
    id: "free-restaurant-menu",
    name: "Restaurant Menu",
    description: "Food menu layout",
    category: "Restaurant Layouts",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 3, h: 2 }, // Appetizers
      { x: 3, y: 1, w: 3, h: 2 }, // Main courses
      { x: 0, y: 3, w: 3, h: 2 }, // Desserts
      { x: 3, y: 3, w: 3, h: 2 }, // Drinks
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-restaurant-menu.jpg",
    tags: ["restaurant", "menu", "food", "dining"],
  },
  {
    id: "free-real-estate",
    name: "Real Estate",
    description: "Property listings layout",
    category: "Real Estate Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 4 }, // Filters
      { x: 2, y: 1, w: 2, h: 2 }, // Property 1
      { x: 4, y: 1, w: 2, h: 2 }, // Property 2
      { x: 2, y: 3, w: 2, h: 2 }, // Property 3
      { x: 4, y: 3, w: 2, h: 2 }, // Property 4
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-real-estate.jpg",
    tags: ["real-estate", "properties", "listings", "homes"],
  },
  {
    id: "free-education-course",
    name: "Education Course",
    description: "Online course layout",
    category: "Education Layouts",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 3 }, // Course content
      { x: 4, y: 1, w: 2, h: 1 }, // Progress
      { x: 4, y: 2, w: 2, h: 1 }, // Modules
      { x: 4, y: 3, w: 2, h: 1 }, // Certificates
      { x: 0, y: 4, w: 6, h: 2 }, // Footer
    ],
    preview: "/template-previews/free-education-course.jpg",
    tags: ["education", "course", "learning", "online"],
  },
  {
    id: "free-fitness-tracker",
    name: "Fitness Tracker",
    description: "Workout tracking layout",
    category: "Fitness Layouts",
    projectTypes: ["mobile", "website"],
    rows: 6,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Workout 1
      { x: 2, y: 1, w: 2, h: 2 }, // Workout 2
      { x: 0, y: 3, w: 2, h: 2 }, // Progress
      { x: 2, y: 3, w: 2, h: 2 }, // Stats
      { x: 0, y: 5, w: 4, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-fitness-tracker.jpg",
    tags: ["fitness", "workout", "tracking", "health"],
  },
  {
    id: "free-travel-blog",
    name: "Travel Blog",
    description: "Travel stories layout",
    category: "Travel Layouts",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Hero story
      { x: 0, y: 2, w: 2, h: 2 }, // Story 1
      { x: 2, y: 2, w: 2, h: 2 }, // Story 2
      { x: 4, y: 2, w: 2, h: 2 }, // Story 3
      { x: 0, y: 4, w: 2, h: 2 }, // Story 4
      { x: 2, y: 4, w: 2, h: 2 }, // Story 5
      { x: 4, y: 4, w: 2, h: 2 }, // Story 6
    ],
    preview: "/template-previews/free-travel-blog.jpg",
    tags: ["travel", "blog", "stories", "adventures"],
  },
  {
    id: "free-photography-portfolio",
    name: "Photography Portfolio",
    description: "Photo gallery layout",
    category: "Photography Layouts",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Photo 1
      { x: 2, y: 0, w: 2, h: 2 }, // Photo 2
      { x: 4, y: 0, w: 2, h: 2 }, // Photo 3
      { x: 0, y: 2, w: 2, h: 2 }, // Photo 4
      { x: 2, y: 2, w: 2, h: 2 }, // Photo 5
      { x: 4, y: 2, w: 2, h: 2 }, // Photo 6
      { x: 0, y: 4, w: 2, h: 2 }, // Photo 7
      { x: 2, y: 4, w: 2, h: 2 }, // Photo 8
      { x: 4, y: 4, w: 2, h: 2 }, // Photo 9
    ],
    preview: "/template-previews/free-photography-portfolio.jpg",
    tags: ["photography", "gallery", "photos", "art"],
  },
  {
    id: "free-music-player",
    name: "Music Player",
    description: "Music streaming interface",
    category: "Music Layouts",
    projectTypes: ["mobile", "website"],
    rows: 6,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 2 }, // Now playing
      { x: 0, y: 2, w: 2, h: 2 }, // Playlist 1
      { x: 2, y: 2, w: 2, h: 2 }, // Playlist 2
      { x: 0, y: 4, w: 2, h: 2 }, // Controls
      { x: 2, y: 4, w: 2, h: 2 }, // Queue
    ],
    preview: "/template-previews/free-music-player.jpg",
    tags: ["music", "player", "streaming", "audio"],
  },
];
