import type { Template } from "@/types";

export const freeTemplates: Template[] = [
  {
    id: "free-simple-grid",
    name: "Simple Grid",
    description: "Clean 2x2 grid layout for basic content with enhanced capacity",
    category: "Grid Layouts",
    projectTypes: ["website", "desktop"], 
    rows: 40,
    cols: 30,
    slots: [
      { x: 0, y: 0, w: 10, h: 10 }, 
      { x: 10, y: 0, w: 10, h: 10 }, 
      { x: 20, y: 0, w: 10, h: 10 },
      { x: 0, y: 10, w: 10, h: 10 },
      { x: 10, y: 10, w: 10, h: 10 },
      { x: 20, y: 10, w: 10, h: 10 },
      { x: 0, y: 20, w: 10, h: 10 },
      { x: 10, y: 20, w: 10, h: 10 },
      { x: 20, y: 20, w: 10, h: 10 },
      { x: 0, y: 30, w: 10, h: 10 },
      { x: 10, y: 30, w: 10, h: 10 },
      { x: 20, y: 30, w: 10, h: 10 },
    ],
    preview: "/template-previews/free-simple-grid.jpg",
    tags: ["grid", "simple", "clean", "basic", "enhanced"],
    tier: "free",
  },
  {
    id: "free-hero-grid",
    name: "Hero + Grid",
    description: "Hero section with supporting grid below and extensive layout capacity",
    category: "Hero Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 3 }, // Hero
      { x: 0, y: 3, w: 2, h: 2 }, // Grid 1
      { x: 2, y: 3, w: 2, h: 2 }, // Grid 2
      { x: 4, y: 3, w: 2, h: 2 }, // Grid 3
      { x: 0, y: 5, w: 2, h: 1 }, // Grid 4
      { x: 2, y: 5, w: 2, h: 1 }, // Grid 5
      { x: 4, y: 5, w: 2, h: 1 }, // Grid 6
      { x: 0, y: 6, w: 2, h: 2 }, // Grid 7
      { x: 2, y: 6, w: 2, h: 2 }, // Grid 8
      { x: 4, y: 6, w: 2, h: 2 }, // Grid 9
      { x: 0, y: 8, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-hero-grid.jpg",
    tags: ["hero", "grid", "landing", "modern", "extensive"],
    tier: "free",
  },
  {
    id: "free-masonry-basic",
    name: "Masonry Basic",
    description: "Pinterest-style masonry layout with extensive creative capacity",
    category: "Masonry Layouts",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 3 },
      { x: 2, y: 0, w: 2, h: 2 },
      { x: 4, y: 0, w: 2, h: 4 },
      { x: 6, y: 0, w: 2, h: 2 },
      { x: 0, y: 3, w: 2, h: 2 },
      { x: 2, y: 2, w: 2, h: 3 },
      { x: 4, y: 4, w: 2, h: 2 },
      { x: 6, y: 2, w: 2, h: 3 },
      { x: 0, y: 5, w: 2, h: 3 },
      { x: 2, y: 5, w: 2, h: 2 },
      { x: 4, y: 6, w: 2, h: 2 },
      { x: 6, y: 5, w: 2, h: 3 },
      { x: 0, y: 8, w: 2, h: 2 },
      { x: 2, y: 7, w: 2, h: 3 },
      { x: 4, y: 8, w: 2, h: 2 },
      { x: 6, y: 8, w: 2, h: 2 },
    ],
    preview: "/template-previews/free-masonry-basic.jpg",
    tags: ["masonry", "pinterest", "varied-heights", "creative", "extensive"],
    tier: "free",
  },
  {
    id: "free-mobile-storyboard",
    name: "Mobile Storyboard",
    description: "Horizontal mobile app flow layout with extensive screen capacity",
    category: "Mobile Layouts",
    projectTypes: ["mobile"],
    rows: 6,
    cols: 10,
    slots: [
      { x: 0, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 2, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 4, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 6, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 8, y: 1, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 0, y: 3, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 2, y: 3, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 4, y: 3, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 6, y: 3, w: 2, h: 2, deviceFrame: "iphone" },
      { x: 8, y: 3, w: 2, h: 2, deviceFrame: "iphone" },
    ],
    preview: "/template-previews/free-mobile-storyboard.jpg",
    tags: ["mobile", "storyboard", "flow", "app", "extensive"],
    tier: "free",
  },
  {
    id: "free-focus-grid",
    name: "Focus Grid",
    description: "Center-focused layout with supporting elements and extensive capacity",
    category: "Focus Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 2, y: 2, w: 4, h: 3 }, // Center focus
      { x: 0, y: 0, w: 2, h: 2 }, // Top left
      { x: 3, y: 0, w: 2, h: 2 }, // Top center
      { x: 6, y: 0, w: 2, h: 2 }, // Top right
      { x: 0, y: 3, w: 2, h: 2 }, // Middle left
      { x: 6, y: 3, w: 2, h: 2 }, // Middle right
      { x: 0, y: 5, w: 2, h: 2 }, // Bottom left
      { x: 3, y: 5, w: 2, h: 2 }, // Bottom center
      { x: 6, y: 5, w: 2, h: 2 }, // Bottom right
      { x: 2, y: 6, w: 4, h: 2 }, // Bottom focus
    ],
    preview: "/template-previews/free-focus-grid.jpg",
    tags: ["focus", "center", "balanced", "modern", "extensive"],
    tier: "free",
  },
  {
    id: "free-sidebar-layout",
    name: "Sidebar Layout",
    description: "Traditional sidebar with main content area and extensive layout capacity",
    category: "Sidebar Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 3, h: 8 }, // Sidebar
      { x: 3, y: 0, w: 7, h: 2 }, // Header
      { x: 3, y: 2, w: 3, h: 2 }, // Content 1
      { x: 6, y: 2, w: 2, h: 2 }, // Content 2
      { x: 8, y: 2, w: 2, h: 2 }, // Content 3
      { x: 3, y: 4, w: 3, h: 2 }, // Content 4
      { x: 6, y: 4, w: 2, h: 2 }, // Content 5
      { x: 8, y: 4, w: 2, h: 2 }, // Content 6
      { x: 3, y: 6, w: 3, h: 2 }, // Content 7
      { x: 6, y: 6, w: 4, h: 2 }, // Content 8
    ],
    preview: "/template-previews/free-sidebar-layout.jpg",
    tags: ["sidebar", "traditional", "navigation", "content", "extensive"],
    tier: "free",
  },
  {
    id: "free-card-grid",
    name: "Card Grid",
    description: "Uniform card layout for consistent presentation with extensive card capacity",
    category: "Card Layouts",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 6, y: 0, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 0, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 6, y: 2, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 0, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 6, y: 4, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 0, y: 6, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 2, y: 6, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 4, y: 6, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
      { x: 6, y: 6, w: 2, h: 2, borderRadius: "lg", shadow: "md" },
    ],
    preview: "/template-previews/free-card-grid.jpg",
    tags: ["cards", "uniform", "consistent", "clean", "extensive"],
    tier: "free",
  },
  {
    id: "free-timeline-layout",
    name: "Timeline Layout",
    description: "Vertical timeline for chronological content with extensive timeline capacity",
    category: "Timeline Layouts",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 6,
    slots: [
      { x: 2, y: 0, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 1, w: 2, h: 1 },
      { x: 4, y: 1, w: 2, h: 1 },
      { x: 2, y: 2, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 3, w: 2, h: 1 },
      { x: 4, y: 3, w: 2, h: 1 },
      { x: 2, y: 4, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 5, w: 2, h: 1 },
      { x: 4, y: 5, w: 2, h: 1 },
      { x: 2, y: 6, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 7, w: 2, h: 1 },
      { x: 4, y: 7, w: 2, h: 1 },
      { x: 2, y: 8, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 9, w: 2, h: 1 },
      { x: 4, y: 9, w: 2, h: 1 },
      { x: 2, y: 10, w: 2, h: 1, timelineNode: true },
      { x: 0, y: 11, w: 2, h: 1 },
      { x: 4, y: 11, w: 2, h: 1 },
    ],
    preview: "/template-previews/free-timeline-layout.jpg",
    tags: ["timeline", "chronological", "vertical", "story", "extensive"],
    tier: "free",
  },
  {
    id: "free-gallery-grid",
    name: "Gallery Grid",
    description: "Photo gallery style layout with extensive image capacity",
    category: "Gallery Layouts",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 6, y: 0, w: 2, h: 2, borderRadius: "md" },
      { x: 0, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 6, y: 2, w: 2, h: 2, borderRadius: "md" },
      { x: 0, y: 4, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 4, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 4, w: 2, h: 2, borderRadius: "md" },
      { x: 6, y: 4, w: 2, h: 2, borderRadius: "md" },
      { x: 0, y: 6, w: 2, h: 2, borderRadius: "md" },
      { x: 2, y: 6, w: 2, h: 2, borderRadius: "md" },
      { x: 4, y: 6, w: 2, h: 2, borderRadius: "md" },
      { x: 6, y: 6, w: 2, h: 2, borderRadius: "md" },
    ],
    preview: "/template-previews/free-gallery-grid.jpg",
    tags: ["gallery", "photos", "images", "visual", "extensive"],
    tier: "free",
  },
  {
    id: "free-blog-layout",
    name: "Blog Layout",
    description: "Traditional blog with sidebar and content with extensive article capacity",
    category: "Blog Layouts",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 7, h: 2 }, // Header
      { x: 7, y: 0, w: 3, h: 2 }, // Sidebar
      { x: 0, y: 2, w: 4, h: 3 }, // Main content 1
      { x: 4, y: 2, w: 3, h: 3 }, // Main content 2
      { x: 7, y: 2, w: 3, h: 1 }, // Sidebar content 1
      { x: 7, y: 3, w: 3, h: 1 }, // Sidebar content 2
      { x: 7, y: 4, w: 3, h: 1 }, // Sidebar content 3
      { x: 0, y: 5, w: 4, h: 2 }, // Main content 3
      { x: 4, y: 5, w: 3, h: 2 }, // Main content 4
      { x: 7, y: 5, w: 3, h: 1 }, // Sidebar content 4
      { x: 7, y: 6, w: 3, h: 1 }, // Sidebar content 5
      { x: 0, y: 7, w: 10, h: 2 }, // Footer
      { x: 0, y: 9, w: 10, h: 1 }, // Bottom
    ],
    preview: "/template-previews/free-blog-layout.jpg",
    tags: ["blog", "content", "sidebar", "traditional", "extensive"],
    tier: "free",
  },
  {
    id: "free-pricing-table",
    name: "Pricing Table",
    description: "Three-column pricing comparison with extensive plan capacity",
    category: "Pricing Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 1 }, // Plan 1 header
      { x: 2, y: 0, w: 2, h: 1 }, // Plan 2 header
      { x: 4, y: 0, w: 2, h: 1 }, // Plan 3 header
      { x: 6, y: 0, w: 2, h: 1 }, // Plan 4 header
      { x: 0, y: 1, w: 2, h: 5 }, // Plan 1 content
      { x: 2, y: 1, w: 2, h: 5 }, // Plan 2 content
      { x: 4, y: 1, w: 2, h: 5 }, // Plan 3 content
      { x: 6, y: 1, w: 2, h: 5 }, // Plan 4 content
      { x: 0, y: 6, w: 2, h: 1 }, // Plan 1 CTA
      { x: 2, y: 6, w: 2, h: 1 }, // Plan 2 CTA
      { x: 4, y: 6, w: 2, h: 1 }, // Plan 3 CTA
      { x: 6, y: 6, w: 2, h: 1 }, // Plan 4 CTA
      { x: 0, y: 7, w: 8, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-pricing-table.jpg",
    tags: ["pricing", "comparison", "plans", "business", "extensive"],
    tier: "free",
  },
  {
    id: "free-team-grid",
    name: "Team Grid",
    description: "Team member showcase layout with extensive team capacity",
    category: "Team Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Team member 1
      { x: 2, y: 0, w: 2, h: 2 }, // Team member 2
      { x: 4, y: 0, w: 2, h: 2 }, // Team member 3
      { x: 6, y: 0, w: 2, h: 2 }, // Team member 4
      { x: 0, y: 2, w: 2, h: 2 }, // Team member 5
      { x: 2, y: 2, w: 2, h: 2 }, // Team member 6
      { x: 4, y: 2, w: 2, h: 2 }, // Team member 7
      { x: 6, y: 2, w: 2, h: 2 }, // Team member 8
      { x: 0, y: 4, w: 2, h: 2 }, // Team member 9
      { x: 2, y: 4, w: 2, h: 2 }, // Team member 10
      { x: 4, y: 4, w: 2, h: 2 }, // Team member 11
      { x: 6, y: 4, w: 2, h: 2 }, // Team member 12
      { x: 0, y: 6, w: 4, h: 2 }, // Team section 1
      { x: 4, y: 6, w: 4, h: 2 }, // Team section 2
    ],
    preview: "/template-previews/free-team-grid.jpg",
    tags: ["team", "members", "profiles", "about", "extensive"],
    tier: "free",
  },
  {
    id: "free-feature-grid",
    name: "Feature Grid",
    description: "Product features showcase with extensive feature capacity",
    category: "Feature Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Feature 1
      { x: 2, y: 0, w: 2, h: 2 }, // Feature 2
      { x: 4, y: 0, w: 2, h: 2 }, // Feature 3
      { x: 6, y: 0, w: 2, h: 2 }, // Feature 4
      { x: 0, y: 2, w: 2, h: 2 }, // Feature 5
      { x: 2, y: 2, w: 2, h: 2 }, // Feature 6
      { x: 4, y: 2, w: 2, h: 2 }, // Feature 7
      { x: 6, y: 2, w: 2, h: 2 }, // Feature 8
      { x: 0, y: 4, w: 2, h: 2 }, // Feature 9
      { x: 2, y: 4, w: 2, h: 2 }, // Feature 10
      { x: 4, y: 4, w: 2, h: 2 }, // Feature 11
      { x: 6, y: 4, w: 2, h: 2 }, // Feature 12
      { x: 0, y: 6, w: 4, h: 2 }, // Feature section 1
      { x: 4, y: 6, w: 4, h: 2 }, // Feature section 2
    ],
    preview: "/template-previews/free-feature-grid.jpg",
    tags: ["features", "product", "showcase", "benefits", "extensive"],
    tier: "free",
  },
  {
    id: "free-testimonial-grid",
    name: "Testimonial Grid",
    description: "Customer testimonials layout with extensive testimonial capacity",
    category: "Testimonial Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Testimonial 1
      { x: 2, y: 0, w: 2, h: 2 }, // Testimonial 2
      { x: 4, y: 0, w: 2, h: 2 }, // Testimonial 3
      { x: 6, y: 0, w: 2, h: 2 }, // Testimonial 4
      { x: 0, y: 2, w: 2, h: 2 }, // Testimonial 5
      { x: 2, y: 2, w: 2, h: 2 }, // Testimonial 6
      { x: 4, y: 2, w: 2, h: 2 }, // Testimonial 7
      { x: 6, y: 2, w: 2, h: 2 }, // Testimonial 8
      { x: 0, y: 4, w: 2, h: 2 }, // Testimonial 9
      { x: 2, y: 4, w: 2, h: 2 }, // Testimonial 10
      { x: 4, y: 4, w: 2, h: 2 }, // Testimonial 11
      { x: 6, y: 4, w: 2, h: 2 }, // Testimonial 12
      { x: 0, y: 6, w: 4, h: 2 }, // Testimonial section 1
      { x: 4, y: 6, w: 4, h: 2 }, // Testimonial section 2
    ],
    preview: "/template-previews/free-testimonial-grid.jpg",
    tags: ["testimonials", "reviews", "customers", "social-proof", "extensive"],
    tier: "free",
  },
  {
    id: "free-comparison-table",
    name: "Comparison Table",
    description: "Product comparison layout with extensive comparison capacity",
    category: "Comparison Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 2, h: 1 }, // Product A header
      { x: 2, y: 0, w: 2, h: 1 }, // Product B header
      { x: 4, y: 0, w: 2, h: 1 }, // Product C header
      { x: 6, y: 0, w: 2, h: 1 }, // Product D header
      { x: 8, y: 0, w: 2, h: 1 }, // Product E header
      { x: 0, y: 1, w: 2, h: 5 }, // Product A details
      { x: 2, y: 1, w: 2, h: 5 }, // Product B details
      { x: 4, y: 1, w: 2, h: 5 }, // Product C details
      { x: 6, y: 1, w: 2, h: 5 }, // Product D details
      { x: 8, y: 1, w: 2, h: 5 }, // Product E details
      { x: 0, y: 6, w: 2, h: 1 }, // Product A CTA
      { x: 2, y: 6, w: 2, h: 1 }, // Product B CTA
      { x: 4, y: 6, w: 2, h: 1 }, // Product C CTA
      { x: 6, y: 6, w: 2, h: 1 }, // Product D CTA
      { x: 8, y: 6, w: 2, h: 1 }, // Product E CTA
      { x: 0, y: 7, w: 10, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-comparison-table.jpg",
    tags: ["comparison", "table", "products", "analysis", "extensive"],
    tier: "free",
  },
  {
    id: "free-faq-layout",
    name: "FAQ Layout",
    description: "Frequently asked questions layout with extensive Q&A capacity",
    category: "FAQ Layouts",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1 }, // FAQ 1
      { x: 0, y: 1, w: 8, h: 1 }, // FAQ 2
      { x: 0, y: 2, w: 8, h: 1 }, // FAQ 3
      { x: 0, y: 3, w: 8, h: 1 }, // FAQ 4
      { x: 0, y: 4, w: 8, h: 1 }, // FAQ 5
      { x: 0, y: 5, w: 8, h: 1 }, // FAQ 6
      { x: 0, y: 6, w: 8, h: 1 }, // FAQ 7
      { x: 0, y: 7, w: 8, h: 1 }, // FAQ 8
      { x: 0, y: 8, w: 8, h: 1 }, // FAQ 9
      { x: 0, y: 9, w: 8, h: 1 }, // FAQ 10
      { x: 0, y: 10, w: 8, h: 1 }, // FAQ 11
      { x: 0, y: 11, w: 8, h: 1 }, // FAQ 12
    ],
    preview: "/template-previews/free-faq-layout.jpg",
    tags: ["faq", "questions", "help", "support", "extensive"],
    tier: "free",
  },
  {
    id: "free-contact-form",
    name: "Contact Form",
    description: "Contact page with form layout and extensive contact capacity",
    category: "Contact Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 3 }, // Contact form
      { x: 0, y: 4, w: 4, h: 2 }, // Contact form part 2
      { x: 4, y: 1, w: 4, h: 2 }, // Contact info
      { x: 4, y: 3, w: 4, h: 2 }, // Map/location
      { x: 4, y: 5, w: 2, h: 1 }, // Social links 1
      { x: 6, y: 5, w: 2, h: 1 }, // Social links 2
      { x: 0, y: 6, w: 4, h: 1 }, // Additional info
      { x: 4, y: 6, w: 4, h: 1 }, // Business hours
      { x: 0, y: 7, w: 8, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-contact-form.jpg",
    tags: ["contact", "form", "communication", "support", "extensive"],
    tier: "free",
  },
  {
    id: "free-about-page",
    name: "About Page",
    description: "Company about page layout with extensive content capacity",
    category: "About Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 4, h: 2 }, // Hero section 1
      { x: 4, y: 0, w: 4, h: 2 }, // Hero section 2
      { x: 0, y: 2, w: 4, h: 2 }, // Story section
      { x: 4, y: 2, w: 4, h: 2 }, // Values section
      { x: 0, y: 4, w: 2, h: 2 }, // Team preview
      { x: 2, y: 4, w: 2, h: 2 }, // Mission
      { x: 4, y: 4, w: 2, h: 2 }, // Vision
      { x: 6, y: 4, w: 2, h: 2 }, // History
      { x: 0, y: 6, w: 4, h: 2 }, // Achievements
      { x: 4, y: 6, w: 4, h: 2 }, // Contact CTA
    ],
    preview: "/template-previews/free-about-page.jpg",
    tags: ["about", "company", "story", "mission", "extensive"],
    tier: "free",
  },
  {
    id: "free-landing-page",
    name: "Landing Page",
    description: "Simple landing page layout with extensive conversion capacity",
    category: "Landing Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Hero
      { x: 0, y: 2, w: 2, h: 2 }, // Feature 1
      { x: 2, y: 2, w: 2, h: 2 }, // Feature 2
      { x: 4, y: 2, w: 2, h: 2 }, // Feature 3
      { x: 6, y: 2, w: 2, h: 2 }, // Feature 4
      { x: 0, y: 4, w: 2, h: 2 }, // Feature 5
      { x: 2, y: 4, w: 2, h: 2 }, // Feature 6
      { x: 4, y: 4, w: 2, h: 2 }, // Testimonials
      { x: 6, y: 4, w: 2, h: 2 }, // Social proof
      { x: 0, y: 6, w: 4, h: 1 }, // CTA 1
      { x: 4, y: 6, w: 4, h: 1 }, // CTA 2
      { x: 0, y: 7, w: 8, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-landing-page.jpg",
    tags: ["landing", "conversion", "cta", "marketing", "extensive"],
    tier: "free",
  },
  {
    id: "free-portfolio-grid",
    name: "Portfolio Grid",
    description: "Simple portfolio layout",
    category: "Portfolio Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
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
      { x: 0, y: 6, w: 2, h: 2 }, // Project 10
      { x: 2, y: 6, w: 2, h: 2 }, // Project 11
      { x: 4, y: 6, w: 2, h: 2 }, // Project 12
    ],
    preview: "/template-previews/free-portfolio-grid.jpg",
    tags: ["portfolio", "projects", "work", "showcase"],
    tier: "free",
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
      { x: 0, y: 1, w: 2, h: 2 }, // Sidebar 1
      { x: 0, y: 3, w: 2, h: 2 }, // Sidebar 2
      { x: 2, y: 1, w: 3, h: 2 }, // Chart 1
      { x: 5, y: 1, w: 3, h: 2 }, // Chart 2
      { x: 2, y: 3, w: 3, h: 1 }, // Table 1
      { x: 2, y: 4, w: 3, h: 1 }, // Table 2
      { x: 5, y: 3, w: 3, h: 1 }, // Activity 1
      { x: 5, y: 4, w: 3, h: 1 }, // Activity 2
      { x: 0, y: 5, w: 8, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-dashboard-basic.jpg",
    tags: ["dashboard", "admin", "analytics", "management"],
    tier: "free",
  },
  {
    id: "free-ecommerce-grid",
    name: "E-commerce Grid",
    description: "Product catalog layout",
    category: "E-commerce Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Filters 1
      { x: 0, y: 3, w: 2, h: 2 }, // Filters 2
      { x: 2, y: 1, w: 2, h: 2 }, // Product 1
      { x: 4, y: 1, w: 2, h: 2 }, // Product 2
      { x: 2, y: 3, w: 2, h: 2 }, // Product 3
      { x: 4, y: 3, w: 2, h: 2 }, // Product 4
      { x: 2, y: 5, w: 2, h: 2 }, // Product 5
      { x: 4, y: 5, w: 2, h: 2 }, // Product 6
      { x: 0, y: 7, w: 6, h: 1 }, // Pagination
    ],
    preview: "/template-previews/free-ecommerce-grid.jpg",
    tags: ["ecommerce", "products", "catalog", "shop"],
    tier: "free",
  },
  {
    id: "free-news-layout",
    name: "News Layout",
    description: "News website layout",
    category: "News Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 2 }, // Main article
      { x: 4, y: 1, w: 2, h: 1 }, // Sidebar 1
      { x: 4, y: 2, w: 2, h: 1 }, // Sidebar 2
      { x: 0, y: 3, w: 2, h: 2 }, // Article 1
      { x: 2, y: 3, w: 2, h: 2 }, // Article 2
      { x: 4, y: 3, w: 2, h: 2 }, // Article 3
      { x: 0, y: 5, w: 3, h: 2 }, // Article 4
      { x: 3, y: 5, w: 3, h: 2 }, // Article 5
      { x: 0, y: 7, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-news-layout.jpg",
    tags: ["news", "articles", "content", "media"],
    tier: "free",
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
      { x: 0, y: 1, w: 3, h: 1 }, // Appetizers 1
      { x: 0, y: 2, w: 3, h: 1 }, // Appetizers 2
      { x: 3, y: 1, w: 3, h: 1 }, // Main courses 1
      { x: 3, y: 2, w: 3, h: 1 }, // Main courses 2
      { x: 0, y: 3, w: 3, h: 1 }, // Desserts 1
      { x: 0, y: 4, w: 3, h: 1 }, // Desserts 2
      { x: 3, y: 3, w: 3, h: 1 }, // Drinks 1
      { x: 3, y: 4, w: 3, h: 1 }, // Drinks 2
      { x: 0, y: 5, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-restaurant-menu.jpg",
    tags: ["restaurant", "menu", "food", "dining"],
    tier: "free",
  },
  {
    id: "free-real-estate",
    name: "Real Estate",
    description: "Property listings layout",
    category: "Real Estate Layouts",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Filters 1
      { x: 0, y: 3, w: 2, h: 2 }, // Filters 2
      { x: 2, y: 1, w: 2, h: 2 }, // Property 1
      { x: 4, y: 1, w: 2, h: 2 }, // Property 2
      { x: 2, y: 3, w: 2, h: 2 }, // Property 3
      { x: 4, y: 3, w: 2, h: 2 }, // Property 4
      { x: 2, y: 5, w: 2, h: 2 }, // Property 5
      { x: 4, y: 5, w: 2, h: 2 }, // Property 6
      { x: 0, y: 7, w: 6, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-real-estate.jpg",
    tags: ["real-estate", "properties", "listings", "homes"],
    tier: "free",
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
      { x: 0, y: 1, w: 4, h: 1 }, // Course content 1
      { x: 0, y: 2, w: 2, h: 1 }, // Course content 2
      { x: 2, y: 2, w: 2, h: 1 }, // Course content 3
      { x: 0, y: 3, w: 4, h: 1 }, // Course content 4
      { x: 4, y: 1, w: 2, h: 1 }, // Progress
      { x: 4, y: 2, w: 2, h: 1 }, // Modules
      { x: 4, y: 3, w: 2, h: 1 }, // Certificates
      { x: 0, y: 4, w: 6, h: 1 }, // Footer 1
      { x: 0, y: 5, w: 6, h: 1 }, // Footer 2
    ],
    preview: "/template-previews/free-education-course.jpg",
    tags: ["education", "course", "learning", "online"],
    tier: "free",
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
      { x: 0, y: 1, w: 2, h: 1 }, // Workout 1a
      { x: 0, y: 2, w: 2, h: 1 }, // Workout 1b
      { x: 2, y: 1, w: 2, h: 1 }, // Workout 2a
      { x: 2, y: 2, w: 2, h: 1 }, // Workout 2b
      { x: 0, y: 3, w: 2, h: 1 }, // Progress a
      { x: 0, y: 4, w: 2, h: 1 }, // Progress b
      { x: 2, y: 3, w: 2, h: 1 }, // Stats a
      { x: 2, y: 4, w: 2, h: 1 }, // Stats b
      { x: 0, y: 5, w: 4, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-fitness-tracker.jpg",
    tags: ["fitness", "workout", "tracking", "health"],
    tier: "free",
  },
  {
    id: "free-travel-blog",
    name: "Travel Blog",
    description: "Travel stories layout",
    category: "Travel Layouts",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Hero story
      { x: 0, y: 2, w: 2, h: 2 }, // Story 1
      { x: 2, y: 2, w: 2, h: 2 }, // Story 2
      { x: 4, y: 2, w: 2, h: 2 }, // Story 3
      { x: 0, y: 4, w: 2, h: 2 }, // Story 4
      { x: 2, y: 4, w: 2, h: 2 }, // Story 5
      { x: 4, y: 4, w: 2, h: 2 }, // Story 6
      { x: 0, y: 6, w: 2, h: 2 }, // Story 7
      { x: 2, y: 6, w: 2, h: 2 }, // Story 8
      { x: 4, y: 6, w: 2, h: 2 }, // Story 9
    ],
    preview: "/template-previews/free-travel-blog.jpg",
    tags: ["travel", "blog", "stories", "adventures"],
    tier: "free",
  },
  {
    id: "free-photography-portfolio",
    name: "Photography Portfolio",
    description: "Photo gallery layout",
    category: "Photography Layouts",
    projectTypes: ["website", "mobile"],
    rows: 8,
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
      { x: 0, y: 6, w: 2, h: 2 }, // Photo 10
      { x: 2, y: 6, w: 2, h: 2 }, // Photo 11
      { x: 4, y: 6, w: 2, h: 2 }, // Photo 12
    ],
    preview: "/template-previews/free-photography-portfolio.jpg",
    tags: ["photography", "gallery", "photos", "art"],
    tier: "free",
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
      { x: 0, y: 0, w: 2, h: 2 }, // Now playing 1
      { x: 2, y: 0, w: 2, h: 2 }, // Now playing 2
      { x: 0, y: 2, w: 2, h: 1 }, // Playlist 1a
      { x: 0, y: 3, w: 2, h: 1 }, // Playlist 1b
      { x: 2, y: 2, w: 2, h: 1 }, // Playlist 2a
      { x: 2, y: 3, w: 2, h: 1 }, // Playlist 2b
      { x: 0, y: 4, w: 1, h: 2 }, // Controls 1
      { x: 1, y: 4, w: 1, h: 2 }, // Controls 2
      { x: 2, y: 4, w: 1, h: 2 }, // Queue 1
      { x: 3, y: 4, w: 1, h: 2 }, // Queue 2
    ],
    preview: "/template-previews/free-music-player.jpg",
    tags: ["music", "player", "streaming", "audio"],
    tier: "free",
  },
];
