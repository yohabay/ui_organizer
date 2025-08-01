import type { Template } from "@/types";

// Real Estate & Property
export const realEstateTemplates: Template[] = [
  {
    id: "free-property-listing",
    name: "Property Listing",
    description: "Real estate property listing platform",
    category: "Real Estate & Property",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Property 1
      { x: 2, y: 2, w: 2, h: 2 }, // Property 2
      { x: 4, y: 2, w: 2, h: 2 }, // Property 3
      { x: 0, y: 4, w: 3, h: 3 }, // Property details
      { x: 3, y: 4, w: 3, h: 3 }, // Contact form
    ],
    preview: "/template-previews/free-property-listing.jpg",
    tags: ["real-estate", "property", "listing", "housing"],
  },
  {
    id: "premium-real-estate-luxury",
    name: "Real Estate Luxury",
    description: "Luxury real estate platform",
    category: "Real Estate & Property",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 4 }, // Hero property
      { x: 0, y: 4, w: 3, h: 3 }, // Property gallery
      { x: 3, y: 4, w: 4, h: 3 }, // Property details
      { x: 7, y: 4, w: 3, h: 3 }, // Agent info
      { x: 0, y: 7, w: 2, h: 2 }, // Price
      { x: 2, y: 7, w: 2, h: 2 }, // Location
      { x: 4, y: 7, w: 2, h: 2 }, // Features
      { x: 6, y: 7, w: 2, h: 2 }, // Virtual tour
      { x: 8, y: 7, w: 2, h: 2 }, // Contact
    ],
    preview: "/template-previews/premium-real-estate-luxury.jpg",
    tags: ["luxury", "real-estate", "premium", "property"],
  },
];

// Healthcare & Medical
export const healthcareTemplates: Template[] = [
  {
    id: "free-medical-appointment",
    name: "Medical Appointment",
    description: "Healthcare appointment booking system",
    category: "Healthcare & Medical",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Doctor 1
      { x: 2, y: 2, w: 2, h: 2 }, // Doctor 2
      { x: 4, y: 2, w: 2, h: 2 }, // Doctor 3
      { x: 0, y: 4, w: 3, h: 3 }, // Appointment form
      { x: 3, y: 4, w: 3, h: 3 }, // Schedule
    ],
    preview: "/template-previews/free-medical-appointment.jpg",
    tags: ["healthcare", "medical", "appointment", "doctor"],
  },
  {
    id: "premium-telemedicine-platform",
    name: "Telemedicine Platform",
    description: "Advanced telemedicine platform",
    category: "Healthcare & Medical",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Platform header
      { x: 0, y: 2, w: 3, h: 3 }, // Video call
      { x: 3, y: 2, w: 4, h: 3 }, // Patient info
      { x: 7, y: 2, w: 3, h: 3 }, // Doctor info
      { x: 0, y: 5, w: 2, h: 2 }, // Symptoms
      { x: 2, y: 5, w: 2, h: 2 }, // Prescriptions
      { x: 4, y: 5, w: 2, h: 2 }, // Lab results
      { x: 6, y: 5, w: 2, h: 2 }, // Medical history
      { x: 8, y: 5, w: 2, h: 2 }, // Insurance
      { x: 0, y: 7, w: 5, h: 2 }, // Notes
      { x: 5, y: 7, w: 5, h: 2 }, // Follow-up
    ],
    preview: "/template-previews/premium-telemedicine-platform.jpg",
    tags: ["telemedicine", "healthcare", "premium", "medical"],
  },
];

// Entertainment & Media
export const entertainmentTemplates: Template[] = [
  {
    id: "free-streaming-platform",
    name: "Streaming Platform",
    description: "Video streaming platform",
    category: "Entertainment & Media",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Video player
      { x: 0, y: 3, w: 2, h: 2 }, // Movie 1
      { x: 2, y: 3, w: 2, h: 2 }, // Movie 2
      { x: 4, y: 3, w: 2, h: 2 }, // Movie 3
      { x: 6, y: 3, w: 2, h: 2 }, // Movie 4
      { x: 0, y: 5, w: 4, h: 2 }, // Categories
      { x: 4, y: 5, w: 4, h: 2 }, // My list
    ],
    preview: "/template-previews/free-streaming-platform.jpg",
    tags: ["streaming", "entertainment", "video", "media"],
  },
  {
    id: "premium-media-production",
    name: "Media Production",
    description: "Professional media production platform",
    category: "Entertainment & Media",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Production header
      { x: 0, y: 2, w: 3, h: 3 }, // Video editor
      { x: 3, y: 2, w: 6, h: 3 }, // Timeline
      { x: 9, y: 2, w: 3, h: 3 }, // Effects
      { x: 0, y: 5, w: 2, h: 2 }, // Audio
      { x: 2, y: 5, w: 2, h: 2 }, // Graphics
      { x: 4, y: 5, w: 2, h: 2 }, // Transitions
      { x: 6, y: 5, w: 2, h: 2 }, // Color grading
      { x: 8, y: 5, w: 2, h: 2 }, // Export
      { x: 10, y: 5, w: 2, h: 2 }, // Share
      { x: 0, y: 7, w: 4, h: 3 }, // Project files
      { x: 4, y: 7, w: 4, h: 3 }, // Collaboration
      { x: 8, y: 7, w: 4, h: 3 }, // Analytics
    ],
    preview: "/template-previews/premium-media-production.jpg",
    tags: ["production", "media", "professional", "premium"],
  },
];

// Automotive & Transportation
export const automotiveTemplates: Template[] = [
  {
    id: "free-car-dealership",
    name: "Car Dealership",
    description: "Automotive dealership website",
    category: "Automotive & Transportation",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero car
      { x: 0, y: 3, w: 2, h: 2 }, // Car 1
      { x: 2, y: 3, w: 2, h: 2 }, // Car 2
      { x: 4, y: 3, w: 2, h: 2 }, // Car 3
      { x: 6, y: 3, w: 2, h: 2 }, // Car 4
      { x: 0, y: 5, w: 4, h: 2 }, // Financing
      { x: 4, y: 5, w: 4, h: 2 }, // Service
    ],
    preview: "/template-previews/free-car-dealership.jpg",
    tags: ["automotive", "dealership", "cars", "transportation"],
  },
  {
    id: "premium-fleet-management",
    name: "Fleet Management",
    description: "Advanced fleet management system",
    category: "Automotive & Transportation",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Fleet header
      { x: 0, y: 2, w: 3, h: 2 }, // Active vehicles
      { x: 3, y: 2, w: 3, h: 2 }, // Maintenance
      { x: 6, y: 2, w: 3, h: 2 }, // Fuel usage
      { x: 9, y: 2, w: 3, h: 2 }, // Driver status
      { x: 0, y: 4, w: 6, h: 3 }, // GPS tracking
      { x: 6, y: 4, w: 6, h: 3 }, // Route optimization
      { x: 0, y: 7, w: 3, h: 2 }, // Vehicle details
      { x: 3, y: 7, w: 3, h: 2 }, // Driver profiles
      { x: 6, y: 7, w: 3, h: 2 }, // Maintenance schedule
      { x: 9, y: 7, w: 3, h: 2 }, // Reports
    ],
    preview: "/template-previews/premium-fleet-management.jpg",
    tags: ["fleet", "management", "transportation", "premium"],
  },
];

// Fashion & Beauty
export const fashionTemplates: Template[] = [
  {
    id: "free-fashion-store",
    name: "Fashion Store",
    description: "Fashion retail platform",
    category: "Fashion & Beauty",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 3 }, // Hero fashion
      { x: 0, y: 3, w: 2, h: 2 }, // Product 1
      { x: 2, y: 3, w: 2, h: 2 }, // Product 2
      { x: 4, y: 3, w: 2, h: 2 }, // Product 3
      { x: 0, y: 5, w: 3, h: 2 }, // Categories
      { x: 3, y: 5, w: 3, h: 2 }, // Sale
    ],
    preview: "/template-previews/free-fashion-store.jpg",
    tags: ["fashion", "retail", "clothing", "beauty"],
  },
  {
    id: "premium-beauty-salon",
    name: "Beauty Salon",
    description: "Luxury beauty salon platform",
    category: "Fashion & Beauty",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 3 }, // Salon hero
      { x: 0, y: 3, w: 3, h: 3 }, // Services
      { x: 3, y: 3, w: 4, h: 3 }, // Stylist profiles
      { x: 7, y: 3, w: 3, h: 3 }, // Gallery
      { x: 0, y: 6, w: 2, h: 2 }, // Hair styling
      { x: 2, y: 6, w: 2, h: 2 }, // Makeup
      { x: 4, y: 6, w: 2, h: 2 }, // Nail art
      { x: 6, y: 6, w: 2, h: 2 }, // Spa treatments
      { x: 8, y: 6, w: 2, h: 2 }, // Products
      { x: 0, y: 8, w: 5, h: 2 }, // Booking
      { x: 5, y: 8, w: 5, h: 2 }, // Reviews
    ],
    preview: "/template-previews/premium-beauty-salon.jpg",
    tags: ["beauty", "salon", "luxury", "premium"],
  },
];

// Gaming & Esports
export const gamingTemplates: Template[] = [
  {
    id: "free-gaming-platform",
    name: "Gaming Platform",
    description: "Online gaming platform",
    category: "Gaming & Esports",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Game showcase
      { x: 0, y: 3, w: 2, h: 2 }, // Game 1
      { x: 2, y: 3, w: 2, h: 2 }, // Game 2
      { x: 4, y: 3, w: 2, h: 2 }, // Game 3
      { x: 6, y: 3, w: 2, h: 2 }, // Game 4
      { x: 0, y: 5, w: 4, h: 2 }, // Leaderboard
      { x: 4, y: 5, w: 4, h: 2 }, // Community
    ],
    preview: "/template-previews/free-gaming-platform.jpg",
    tags: ["gaming", "platform", "esports", "games"],
  },
  {
    id: "premium-esports-tournament",
    name: "Esports Tournament",
    description: "Professional esports tournament platform",
    category: "Gaming & Esports",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 3 }, // Tournament hero
      { x: 0, y: 3, w: 3, h: 2 }, // Live matches
      { x: 3, y: 3, w: 3, h: 2 }, // Brackets
      { x: 6, y: 3, w: 3, h: 2 }, // Teams
      { x: 9, y: 3, w: 3, h: 2 }, // Schedule
      { x: 0, y: 5, w: 6, h: 4 }, // Live stream
      { x: 6, y: 5, w: 6, h: 4 }, // Chat
      { x: 0, y: 9, w: 3, h: 2 }, // Statistics
      { x: 3, y: 9, w: 3, h: 2 }, // Betting
      { x: 6, y: 9, w: 3, h: 2 }, // Rewards
      { x: 9, y: 9, w: 3, h: 2 }, // Sponsors
    ],
    preview: "/template-previews/premium-esports-tournament.jpg",
    tags: ["esports", "tournament", "professional", "premium"],
  },
];

// Sports & Fitness
export const sportsTemplates: Template[] = [
  {
    id: "free-sports-league",
    name: "Sports League",
    description: "Sports league management platform",
    category: "Sports & Fitness",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // League header
      { x: 0, y: 2, w: 2, h: 2 }, // Team 1
      { x: 2, y: 2, w: 2, h: 2 }, // Team 2
      { x: 4, y: 2, w: 2, h: 2 }, // Team 3
      { x: 6, y: 2, w: 2, h: 2 }, // Team 4
      { x: 0, y: 4, w: 4, h: 3 }, // Schedule
      { x: 4, y: 4, w: 4, h: 3 }, // Standings
    ],
    preview: "/template-previews/free-sports-league.jpg",
    tags: ["sports", "league", "teams", "fitness"],
  },
  {
    id: "premium-sports-analytics",
    name: "Sports Analytics",
    description: "Advanced sports analytics platform",
    category: "Sports & Fitness",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Analytics header
      { x: 0, y: 2, w: 3, h: 2 }, // Performance
      { x: 3, y: 2, w: 3, h: 2 }, // Statistics
      { x: 6, y: 2, w: 3, h: 2 }, // Injuries
      { x: 9, y: 2, w: 3, h: 2 }, // Recovery
      { x: 0, y: 4, w: 6, h: 3 }, // Performance trends
      { x: 6, y: 4, w: 6, h: 3 }, // Player comparison
      { x: 0, y: 7, w: 4, h: 2 }, // Training data
      { x: 4, y: 7, w: 4, h: 2 }, // Match analysis
      { x: 8, y: 7, w: 4, h: 2 }, // Predictions
    ],
    preview: "/template-previews/premium-sports-analytics.jpg",
    tags: ["sports", "analytics", "performance", "premium"],
  },
];

// Business & Professional Services
export const businessTemplates: Template[] = [
  {
    id: "free-consulting-firm",
    name: "Consulting Firm",
    description: "Professional consulting services",
    category: "Business & Professional Services",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero section
      { x: 0, y: 3, w: 2, h: 2 }, // Service 1
      { x: 2, y: 3, w: 2, h: 2 }, // Service 2
      { x: 4, y: 3, w: 2, h: 2 }, // Service 3
      { x: 6, y: 3, w: 2, h: 2 }, // Service 4
      { x: 0, y: 5, w: 4, h: 2 }, // Team
      { x: 4, y: 5, w: 4, h: 2 }, // Contact
    ],
    preview: "/template-previews/free-consulting-firm.jpg",
    tags: ["consulting", "business", "professional", "services"],
  },
  {
    id: "premium-enterprise-solutions",
    name: "Enterprise Solutions",
    description: "Enterprise business solutions platform",
    category: "Business & Professional Services",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Enterprise header
      { x: 0, y: 2, w: 3, h: 2 }, // CRM
      { x: 3, y: 2, w: 3, h: 2 }, // ERP
      { x: 6, y: 2, w: 3, h: 2 }, // HR
      { x: 9, y: 2, w: 3, h: 2 }, // Finance
      { x: 0, y: 4, w: 6, h: 4 }, // Dashboard
      { x: 6, y: 4, w: 6, h: 4 }, // Analytics
      { x: 0, y: 8, w: 3, h: 2 }, // Projects
      { x: 3, y: 8, w: 3, h: 2 }, // Clients
      { x: 6, y: 8, w: 3, h: 2 }, // Reports
      { x: 9, y: 8, w: 3, h: 2 }, // Settings
    ],
    preview: "/template-previews/premium-enterprise-solutions.jpg",
    tags: ["enterprise", "solutions", "business", "premium"],
  },
];

// Non-Profit & Charity
export const nonprofitTemplates: Template[] = [
  {
    id: "free-charity-platform",
    name: "Charity Platform",
    description: "Non-profit donation platform",
    category: "Non-Profit & Charity",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 3 }, // Hero cause
      { x: 0, y: 3, w: 2, h: 2 }, // Cause 1
      { x: 2, y: 3, w: 2, h: 2 }, // Cause 2
      { x: 4, y: 3, w: 2, h: 2 }, // Cause 3
      { x: 0, y: 5, w: 3, h: 2 }, // Donate
      { x: 3, y: 5, w: 3, h: 2 }, // Volunteer
    ],
    preview: "/template-previews/free-charity-platform.jpg",
    tags: ["charity", "non-profit", "donation", "cause"],
  },
  {
    id: "premium-foundation-platform",
    name: "Foundation Platform",
    description: "Advanced foundation management system",
    category: "Non-Profit & Charity",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Foundation header
      { x: 0, y: 2, w: 3, h: 3 }, // Grant programs
      { x: 3, y: 2, w: 4, h: 3 }, // Impact tracking
      { x: 7, y: 2, w: 3, h: 3 }, // Donor relations
      { x: 0, y: 5, w: 2, h: 2 }, // Applications
      { x: 2, y: 5, w: 2, h: 2 }, // Reviews
      { x: 4, y: 5, w: 2, h: 2 }, // Awards
      { x: 6, y: 5, w: 2, h: 2 }, // Reporting
      { x: 8, y: 5, w: 2, h: 2 }, // Compliance
      { x: 0, y: 7, w: 5, h: 2 }, // Financial reports
      { x: 5, y: 7, w: 5, h: 2 }, // Impact metrics
    ],
    preview: "/template-previews/premium-foundation-platform.jpg",
    tags: ["foundation", "non-profit", "grants", "premium"],
  },
];

// Government & Public Sector
export const governmentTemplates: Template[] = [
  {
    id: "free-government-portal",
    name: "Government Portal",
    description: "Government services portal",
    category: "Government & Public Sector",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Government header
      { x: 0, y: 2, w: 2, h: 2 }, // Service 1
      { x: 2, y: 2, w: 2, h: 2 }, // Service 2
      { x: 4, y: 2, w: 2, h: 2 }, // Service 3
      { x: 6, y: 2, w: 2, h: 2 }, // Service 4
      { x: 0, y: 4, w: 4, h: 3 }, // Forms
      { x: 4, y: 4, w: 4, h: 3 }, // Information
    ],
    preview: "/template-previews/free-government-portal.jpg",
    tags: ["government", "portal", "services", "public"],
  },
  {
    id: "premium-civic-engagement",
    name: "Civic Engagement",
    description: "Advanced civic engagement platform",
    category: "Government & Public Sector",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Civic header
      { x: 0, y: 2, w: 3, h: 3 }, // Public forums
      { x: 3, y: 2, w: 4, h: 3 }, // Voting system
      { x: 7, y: 2, w: 3, h: 3 }, // Petitions
      { x: 0, y: 5, w: 2, h: 2 }, // Legislation
      { x: 2, y: 5, w: 2, h: 2 }, // Committees
      { x: 4, y: 5, w: 2, h: 2 }, // Meetings
      { x: 6, y: 5, w: 2, h: 2 }, // Transparency
      { x: 8, y: 5, w: 2, h: 2 }, // Reports
      { x: 0, y: 7, w: 5, h: 2 }, // Public records
      { x: 5, y: 7, w: 5, h: 2 }, // Feedback
    ],
    preview: "/template-previews/premium-civic-engagement.jpg",
    tags: ["civic", "engagement", "government", "premium"],
  },
];

// Export all templates
export const allCategoryTemplates = [
  ...realEstateTemplates,
  ...healthcareTemplates,
  ...entertainmentTemplates,
  ...automotiveTemplates,
  ...fashionTemplates,
  ...gamingTemplates,
  ...sportsTemplates,
  ...businessTemplates,
  ...nonprofitTemplates,
  ...governmentTemplates,
];
