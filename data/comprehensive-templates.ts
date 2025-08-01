import type { Template } from "@/types";

// Free Templates (20)
export const freeTemplates: Template[] = [
  // 1. Simple Grid
  {
    id: "simple-grid",
    name: "Simple Grid",
    description: "Clean 2x2 grid layout perfect for basic portfolios",
    category: "Free Basic",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 2,
    cols: 2,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
    ],
    preview: "simple-grid",
    tags: ["free", "basic", "grid", "clean"],
    isPremium: false,
    realProject: {
      name: "Personal Portfolio",
      description:
        "Clean personal website with about, projects, contact sections",
      platform: "Website",
      industry: "Personal Branding",
      screenshots: [
        "Homepage with hero section and navigation",
        "About page with bio and skills",
        "Projects showcase with 2-3 featured works",
        "Contact page with form and social links",
      ],
    },
  },

  // 2. Hero + Grid
  {
    id: "hero-grid",
    name: "Hero + Grid",
    description: "Hero section with supporting grid layout",
    category: "Free Basic",
    projectTypes: ["website", "desktop"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 2 }, // Hero
      { x: 0, y: 2, w: 2, h: 1 }, // Grid items
      { x: 2, y: 2, w: 2, h: 1 },
    ],
    preview: "hero-grid",
    tags: ["free", "hero", "grid", "landing"],
    isPremium: false,
    realProject: {
      name: "SaaS Landing Page",
      description: "Modern SaaS landing page with hero and feature sections",
      platform: "Website",
      industry: "SaaS",
      screenshots: [
        "Hero section with CTA and value proposition",
        "Feature 1: Dashboard overview",
        "Feature 2: Analytics interface",
      ],
    },
  },

  // 3. Masonry Layout
  {
    id: "masonry-basic",
    name: "Masonry Basic",
    description: "Pinterest-style masonry layout with varying heights",
    category: "Free Creative",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 2 }, // Tall
      { x: 1, y: 0, w: 1, h: 1 }, // Short
      { x: 2, y: 0, w: 1, h: 2 }, // Tall
      { x: 0, y: 2, w: 1, h: 1 }, // Short
      { x: 1, y: 1, w: 1, h: 2 }, // Tall
      { x: 2, y: 2, w: 1, h: 1 }, // Short
    ],
    preview: "masonry-basic",
    tags: ["free", "masonry", "creative", "pinterest"],
    isPremium: false,
    realProject: {
      name: "Design Portfolio Gallery",
      description: "Creative portfolio showcasing various design projects",
      platform: "Website",
      industry: "Design Agency",
      screenshots: [
        "Logo design project (tall)",
        "Web design mockup (short)",
        "Brand identity project (tall)",
        "UI design concept (short)",
        "Print design work (tall)",
        "Mobile app design (short)",
      ],
    },
  },

  // 4. Mobile Storyboard
  {
    id: "mobile-storyboard",
    name: "Mobile Storyboard",
    description: "Horizontal mobile app flow presentation",
    category: "Free Mobile",
    projectTypes: ["mobile"],
    rows: 2,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 1, h: 2 }, // Screen 1
      { x: 1, y: 0, w: 1, h: 2 }, // Screen 2
      { x: 2, y: 0, w: 1, h: 2 }, // Screen 3
      { x: 3, y: 0, w: 1, h: 2 }, // Screen 4
      { x: 4, y: 0, w: 1, h: 2 }, // Screen 5
      { x: 5, y: 0, w: 1, h: 2 }, // Screen 6
    ],
    preview: "mobile-storyboard",
    tags: ["free", "mobile", "storyboard", "flow"],
    isPremium: false,
    realProject: {
      name: "Food Delivery App",
      description: "Complete food delivery app user flow",
      platform: "Mobile",
      industry: "Food Delivery",
      screenshots: [
        "Onboarding screen",
        "Home screen with restaurants",
        "Restaurant menu page",
        "Cart and checkout",
        "Order tracking",
        "Profile and settings",
      ],
    },
  },

  // 5. Focus Grid
  {
    id: "focus-grid",
    name: "Focus Grid",
    description: "Center-focused layout with supporting elements",
    category: "Free Minimalist",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 1, y: 0, w: 1, h: 2 }, // Center focus
      { x: 0, y: 0, w: 1, h: 1 }, // Top left
      { x: 2, y: 0, w: 1, h: 1 }, // Top right
      { x: 0, y: 1, w: 1, h: 1 }, // Middle left
      { x: 2, y: 1, w: 1, h: 1 }, // Middle right
      { x: 0, y: 2, w: 3, h: 1 }, // Bottom full width
    ],
    preview: "focus-grid",
    tags: ["free", "focus", "minimalist", "center"],
    isPremium: false,
    realProject: {
      name: "Product Showcase",
      description: "Product landing page with main feature focus",
      platform: "Website",
      industry: "E-commerce",
      screenshots: [
        "Main product hero (center)",
        "Feature 1 (top left)",
        "Feature 2 (top right)",
        "Feature 3 (middle left)",
        "Feature 4 (middle right)",
        "Call-to-action section (bottom)",
      ],
    },
  },

  // 6. Sidebar Layout
  {
    id: "sidebar-layout",
    name: "Sidebar Layout",
    description: "Traditional sidebar with main content area",
    category: "Free Traditional",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 4 }, // Sidebar
      { x: 1, y: 0, w: 3, h: 1 }, // Header
      { x: 1, y: 1, w: 3, h: 2 }, // Main content
      { x: 1, y: 3, w: 3, h: 1 }, // Footer
    ],
    preview: "sidebar-layout",
    tags: ["free", "sidebar", "traditional", "admin"],
    isPremium: false,
    realProject: {
      name: "Admin Dashboard",
      description: "Business admin dashboard with navigation sidebar",
      platform: "Website",
      industry: "Business Software",
      screenshots: [
        "Navigation sidebar with menu items",
        "Dashboard header with notifications",
        "Main dashboard with charts and data",
        "Footer with links and info",
      ],
    },
  },

  // 7. Card Grid
  {
    id: "card-grid",
    name: "Card Grid",
    description: "Uniform card layout for consistent presentation",
    category: "Free Grid",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 }, // Card 1
      { x: 1, y: 0, w: 1, h: 1 }, // Card 2
      { x: 2, y: 0, w: 1, h: 1 }, // Card 3
      { x: 0, y: 1, w: 1, h: 1 }, // Card 4
      { x: 1, y: 1, w: 1, h: 1 }, // Card 5
      { x: 2, y: 1, w: 1, h: 1 }, // Card 6
      { x: 0, y: 2, w: 1, h: 1 }, // Card 7
      { x: 1, y: 2, w: 1, h: 1 }, // Card 8
      { x: 2, y: 2, w: 1, h: 1 }, // Card 9
    ],
    preview: "card-grid",
    tags: ["free", "cards", "grid", "uniform"],
    isPremium: false,
    realProject: {
      name: "E-commerce Product Grid",
      description: "Online store product catalog with uniform cards",
      platform: "Website",
      industry: "E-commerce",
      screenshots: [
        "Product 1 with image and price",
        "Product 2 with image and price",
        "Product 3 with image and price",
        "Product 4 with image and price",
        "Product 5 with image and price",
        "Product 6 with image and price",
        "Product 7 with image and price",
        "Product 8 with image and price",
        "Product 9 with image and price",
      ],
    },
  },

  // 8. Timeline Layout
  {
    id: "timeline-layout",
    name: "Timeline Layout",
    description: "Vertical timeline for chronological presentation",
    category: "Free Timeline",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 4,
    slots: [
      { x: 1, y: 0, w: 2, h: 1 }, // Timeline item 1
      { x: 1, y: 1, w: 2, h: 1 }, // Timeline item 2
      { x: 1, y: 2, w: 2, h: 1 }, // Timeline item 3
      { x: 1, y: 3, w: 2, h: 1 }, // Timeline item 4
      { x: 1, y: 4, w: 2, h: 1 }, // Timeline item 5
      { x: 1, y: 5, w: 2, h: 1 }, // Timeline item 6
    ],
    preview: "timeline-layout",
    tags: ["free", "timeline", "chronological", "vertical"],
    isPremium: false,
    realProject: {
      name: "Company History",
      description: "Corporate timeline showing company milestones",
      platform: "Website",
      industry: "Corporate",
      screenshots: [
        "Company founded (2020)",
        "First product launch (2021)",
        "Series A funding (2022)",
        "International expansion (2023)",
        "IPO announcement (2024)",
        "Future vision (2025)",
      ],
    },
  },

  // 9. Gallery Grid
  {
    id: "gallery-grid",
    name: "Gallery Grid",
    description: "Photo gallery style layout with image focus",
    category: "Free Gallery",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Large featured
      { x: 2, y: 0, w: 1, h: 1 }, // Small 1
      { x: 3, y: 0, w: 1, h: 1 }, // Small 2
      { x: 2, y: 1, w: 1, h: 1 }, // Small 3
      { x: 3, y: 1, w: 1, h: 1 }, // Small 4
      { x: 0, y: 2, w: 1, h: 1 }, // Small 5
      { x: 1, y: 2, w: 1, h: 1 }, // Small 6
      { x: 2, y: 2, w: 2, h: 2 }, // Large 2
    ],
    preview: "gallery-grid",
    tags: ["free", "gallery", "photos", "images"],
    isPremium: false,
    realProject: {
      name: "Photography Portfolio",
      description: "Professional photography portfolio with featured images",
      platform: "Website",
      industry: "Photography",
      screenshots: [
        "Featured landscape photo (large)",
        "Portrait 1 (small)",
        "Portrait 2 (small)",
        "Street photo 1 (small)",
        "Street photo 2 (small)",
        "Architecture 1 (small)",
        "Architecture 2 (small)",
        "Featured cityscape (large)",
      ],
    },
  },

  // 10. Blog Layout
  {
    id: "blog-layout",
    name: "Blog Layout",
    description: "Traditional blog layout with featured post",
    category: "Free Blog",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 3, h: 2 }, // Featured post
      { x: 3, y: 0, w: 1, h: 1 }, // Sidebar 1
      { x: 3, y: 1, w: 1, h: 1 }, // Sidebar 2
      { x: 0, y: 2, w: 2, h: 1 }, // Post 1
      { x: 2, y: 2, w: 2, h: 1 }, // Post 2
      { x: 0, y: 3, w: 2, h: 1 }, // Post 3
      { x: 2, y: 3, w: 2, h: 1 }, // Post 4
    ],
    preview: "blog-layout",
    tags: ["free", "blog", "articles", "content"],
    isPremium: false,
    realProject: {
      name: "Tech Blog",
      description: "Technology blog with featured articles and sidebar",
      platform: "Website",
      industry: "Technology",
      screenshots: [
        "Featured article about AI trends",
        "Popular posts sidebar",
        "Newsletter signup sidebar",
        "Article about web development",
        "Article about mobile apps",
        "Article about design trends",
        "Article about productivity tools",
      ],
    },
  },

  // 11. Pricing Table
  {
    id: "pricing-table",
    name: "Pricing Table",
    description: "Three-column pricing comparison layout",
    category: "Free Business",
    projectTypes: ["website", "desktop"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 3 }, // Plan 1
      { x: 1, y: 0, w: 1, h: 3 }, // Plan 2 (featured)
      { x: 2, y: 0, w: 1, h: 3 }, // Plan 3
    ],
    preview: "pricing-table",
    tags: ["free", "pricing", "business", "comparison"],
    isPremium: false,
    realProject: {
      name: "SaaS Pricing Page",
      description: "Software pricing page with three subscription tiers",
      platform: "Website",
      industry: "SaaS",
      screenshots: [
        "Basic plan with features and price",
        "Pro plan with features and price (featured)",
        "Enterprise plan with features and price",
      ],
    },
  },

  // 12. Team Grid
  {
    id: "team-grid",
    name: "Team Grid",
    description: "Team member showcase with photos and info",
    category: "Free Team",
    projectTypes: ["website", "desktop"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 2 }, // Team member 1
      { x: 1, y: 0, w: 1, h: 2 }, // Team member 2
      { x: 2, y: 0, w: 1, h: 2 }, // Team member 3
      { x: 3, y: 0, w: 1, h: 2 }, // Team member 4
      { x: 0, y: 2, w: 1, h: 1 }, // Team member 5
      { x: 1, y: 2, w: 1, h: 1 }, // Team member 6
      { x: 2, y: 2, w: 1, h: 1 }, // Team member 7
      { x: 3, y: 2, w: 1, h: 1 }, // Team member 8
    ],
    preview: "team-grid",
    tags: ["free", "team", "people", "profiles"],
    isPremium: false,
    realProject: {
      name: "Agency Team Page",
      description: "Creative agency team showcase with member profiles",
      platform: "Website",
      industry: "Creative Agency",
      screenshots: [
        "Creative Director profile",
        "Senior Designer profile",
        "UX Lead profile",
        "Developer profile",
        "Junior Designer profile",
        "Project Manager profile",
        "Marketing Specialist profile",
        "Intern profile",
      ],
    },
  },

  // 13. Feature Grid
  {
    id: "feature-grid",
    name: "Feature Grid",
    description: "Product features showcase with icons",
    category: "Free Features",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 }, // Feature 1
      { x: 1, y: 0, w: 1, h: 1 }, // Feature 2
      { x: 2, y: 0, w: 1, h: 1 }, // Feature 3
      { x: 0, y: 1, w: 1, h: 1 }, // Feature 4
      { x: 1, y: 1, w: 1, h: 1 }, // Feature 5
      { x: 2, y: 1, w: 1, h: 1 }, // Feature 6
      { x: 0, y: 2, w: 1, h: 1 }, // Feature 7
      { x: 1, y: 2, w: 1, h: 1 }, // Feature 8
      { x: 2, y: 2, w: 1, h: 1 }, // Feature 9
    ],
    preview: "feature-grid",
    tags: ["free", "features", "product", "icons"],
    isPremium: false,
    realProject: {
      name: "Mobile App Features",
      description: "App feature showcase with icon illustrations",
      platform: "Mobile",
      industry: "Mobile Apps",
      screenshots: [
        "Feature: Easy Navigation",
        "Feature: Fast Performance",
        "Feature: Secure Data",
        "Feature: Cloud Sync",
        "Feature: Offline Mode",
        "Feature: Dark Theme",
        "Feature: Customization",
        "Feature: Analytics",
        "Feature: Support",
      ],
    },
  },

  // 14. Testimonial Grid
  {
    id: "testimonial-grid",
    name: "Testimonial Grid",
    description: "Customer testimonials with quotes and photos",
    category: "Free Social Proof",
    projectTypes: ["website", "desktop"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 }, // Testimonial 1
      { x: 1, y: 0, w: 1, h: 1 }, // Testimonial 2
      { x: 2, y: 0, w: 1, h: 1 }, // Testimonial 3
      { x: 0, y: 1, w: 1, h: 1 }, // Testimonial 4
      { x: 1, y: 1, w: 1, h: 1 }, // Testimonial 5
      { x: 2, y: 1, w: 1, h: 1 }, // Testimonial 6
      { x: 0, y: 2, w: 3, h: 1 }, // Featured testimonial
    ],
    preview: "testimonial-grid",
    tags: ["free", "testimonials", "reviews", "social-proof"],
    isPremium: false,
    realProject: {
      name: "Customer Reviews",
      description: "E-commerce customer review section",
      platform: "Website",
      industry: "E-commerce",
      screenshots: [
        "Customer review with 5 stars",
        "Customer review with 5 stars",
        "Customer review with 5 stars",
        "Customer review with 5 stars",
        "Customer review with 5 stars",
        "Customer review with 5 stars",
        "Featured customer video testimonial",
      ],
    },
  },

  // 15. Comparison Table
  {
    id: "comparison-table",
    name: "Comparison Table",
    description: "Product comparison with feature checklist",
    category: "Free Comparison",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 }, // Feature column header
      { x: 1, y: 0, w: 1, h: 1 }, // Product A header
      { x: 2, y: 0, w: 1, h: 1 }, // Product B header
      { x: 3, y: 0, w: 1, h: 1 }, // Product C header
      { x: 0, y: 1, w: 1, h: 1 }, // Feature 1
      { x: 1, y: 1, w: 1, h: 1 }, // Product A feature 1
      { x: 2, y: 1, w: 1, h: 1 }, // Product B feature 1
      { x: 3, y: 1, w: 1, h: 1 }, // Product C feature 1
      { x: 0, y: 2, w: 1, h: 1 }, // Feature 2
      { x: 1, y: 2, w: 1, h: 1 }, // Product A feature 2
      { x: 2, y: 2, w: 1, h: 1 }, // Product B feature 2
      { x: 3, y: 2, w: 1, h: 1 }, // Product C feature 2
      { x: 0, y: 3, w: 1, h: 1 }, // Feature 3
      { x: 1, y: 3, w: 1, h: 1 }, // Product A feature 3
      { x: 2, y: 3, w: 1, h: 1 }, // Product B feature 3
      { x: 3, y: 3, w: 1, h: 1 }, // Product C feature 3
      { x: 0, y: 4, w: 1, h: 1 }, // Feature 4
      { x: 1, y: 4, w: 1, h: 1 }, // Product A feature 4
      { x: 2, y: 4, w: 1, h: 1 }, // Product B feature 4
      { x: 3, y: 4, w: 1, h: 1 }, // Product C feature 4
      { x: 0, y: 5, w: 1, h: 1 }, // Feature 5
      { x: 1, y: 5, w: 1, h: 1 }, // Product A feature 5
      { x: 2, y: 5, w: 1, h: 1 }, // Product B feature 5
      { x: 3, y: 5, w: 1, h: 1 }, // Product C feature 5
    ],
    preview: "comparison-table",
    tags: ["free", "comparison", "table", "features"],
    isPremium: false,
    realProject: {
      name: "Software Comparison",
      description: "Project management software comparison",
      platform: "Website",
      industry: "Software",
      screenshots: [
        "Feature comparison header",
        "Asana product column",
        "Trello product column",
        "Monday.com product column",
        "Task management feature row",
        "Team collaboration feature row",
        "File sharing feature row",
        "Reporting feature row",
        "Pricing feature row",
      ],
    },
  },

  // 16. FAQ Layout
  {
    id: "faq-layout",
    name: "FAQ Layout",
    description: "Frequently asked questions with expandable sections",
    category: "Free Support",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 2,
    slots: [
      { x: 0, y: 0, w: 2, h: 1 }, // FAQ 1
      { x: 0, y: 1, w: 2, h: 1 }, // FAQ 2
      { x: 0, y: 2, w: 2, h: 1 }, // FAQ 3
      { x: 0, y: 3, w: 2, h: 1 }, // FAQ 4
      { x: 0, y: 4, w: 2, h: 1 }, // FAQ 5
      { x: 0, y: 5, w: 2, h: 1 }, // FAQ 6
    ],
    preview: "faq-layout",
    tags: ["free", "faq", "support", "questions"],
    isPremium: false,
    realProject: {
      name: "Help Center",
      description: "Customer support FAQ page",
      platform: "Website",
      industry: "Customer Support",
      screenshots: [
        "How do I reset my password?",
        "What payment methods do you accept?",
        "How do I cancel my subscription?",
        "Is my data secure?",
        "How do I contact support?",
        "What are your refund policies?",
      ],
    },
  },

  // 17. Contact Form
  {
    id: "contact-form",
    name: "Contact Form",
    description: "Contact page with form and company information",
    category: "Free Contact",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 2, h: 3 }, // Contact form
      { x: 2, y: 0, w: 2, h: 1 }, // Company info
      { x: 2, y: 1, w: 2, h: 1 }, // Office hours
      { x: 2, y: 2, w: 2, h: 1 }, // Social links
      { x: 0, y: 3, w: 4, h: 1 }, // Footer
    ],
    preview: "contact-form",
    tags: ["free", "contact", "form", "business"],
    isPremium: false,
    realProject: {
      name: "Business Contact Page",
      description: "Professional contact page with form and details",
      platform: "Website",
      industry: "Business Services",
      screenshots: [
        "Contact form with name, email, message",
        "Company address and phone number",
        "Business hours and location",
        "Social media links and email",
        "Footer with additional links",
      ],
    },
  },

  // 18. About Page
  {
    id: "about-page",
    name: "About Page",
    description: "Company about page with team and mission",
    category: "Free About",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Mission statement
      { x: 2, y: 1, w: 2, h: 1 }, // Team photo
      { x: 2, y: 2, w: 2, h: 1 }, // Values
      { x: 0, y: 3, w: 4, h: 1 }, // Footer
    ],
    preview: "about-page",
    tags: ["free", "about", "company", "mission"],
    isPremium: false,
    realProject: {
      name: "Company About Page",
      description: "Startup about page with mission and team",
      platform: "Website",
      industry: "Startup",
      screenshots: [
        "About us header with company name",
        "Mission statement and company story",
        "Team photo and company culture",
        "Company values and principles",
        "Footer with contact information",
      ],
    },
  },

  // 19. Landing Page
  {
    id: "landing-page",
    name: "Landing Page",
    description: "Simple landing page with hero and features",
    category: "Free Landing",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 2 }, // Hero section
      { x: 0, y: 2, w: 2, h: 1 }, // Feature 1
      { x: 2, y: 2, w: 2, h: 1 }, // Feature 2
      { x: 0, y: 3, w: 4, h: 1 }, // CTA section
    ],
    preview: "landing-page",
    tags: ["free", "landing", "hero", "conversion"],
    isPremium: false,
    realProject: {
      name: "Product Landing Page",
      description: "Simple product landing page with conversion focus",
      platform: "Website",
      industry: "Product Launch",
      screenshots: [
        "Hero section with product image and CTA",
        "Key feature 1 with icon",
        "Key feature 2 with icon",
        "Call-to-action with signup form",
      ],
    },
  },

  // 20. Portfolio Grid
  {
    id: "portfolio-grid",
    name: "Portfolio Grid",
    description: "Simple portfolio with project thumbnails",
    category: "Free Portfolio",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 }, // Project 1
      { x: 1, y: 0, w: 1, h: 1 }, // Project 2
      { x: 2, y: 0, w: 1, h: 1 }, // Project 3
      { x: 0, y: 1, w: 1, h: 1 }, // Project 4
      { x: 1, y: 1, w: 1, h: 1 }, // Project 5
      { x: 2, y: 1, w: 1, h: 1 }, // Project 6
      { x: 0, y: 2, w: 1, h: 1 }, // Project 7
      { x: 1, y: 2, w: 1, h: 1 }, // Project 8
      { x: 2, y: 2, w: 1, h: 1 }, // Project 9
      { x: 0, y: 3, w: 1, h: 1 }, // Project 10
      { x: 1, y: 3, w: 1, h: 1 }, // Project 11
      { x: 2, y: 3, w: 1, h: 1 }, // Project 12
    ],
    preview: "portfolio-grid",
    tags: ["free", "portfolio", "projects", "showcase"],
    isPremium: false,
    realProject: {
      name: "Design Portfolio",
      description: "Freelance designer portfolio with project showcase",
      platform: "Website",
      industry: "Freelance Design",
      screenshots: [
        "Logo design project",
        "Web design project",
        "Mobile app design",
        "Brand identity project",
        "UI/UX design project",
        "Print design project",
        "Illustration project",
        "Packaging design",
        "Social media design",
        "Email template design",
        "Dashboard design",
        "Landing page design",
      ],
    },
  },
];
