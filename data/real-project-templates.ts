import type { Template } from "@/types"

export const realProjectTemplates: Template[] = [
  // E-COMMERCE & SHOPPING APPS
  {
    id: "shopify-mobile-store",
    name: "E-commerce Mobile Store",
    description: "Complete mobile shopping experience - product catalog, cart, checkout, and user profile",
    category: "E-commerce",
    projectTypes: ["mobile"],
    rows: 12,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg" }, // Home/Catalog
      { x: 2, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "md" }, // Product Detail
      { x: 4, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg" }, // Shopping Cart
      { x: 6, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md" }, // Checkout
      { x: 1, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // User Profile
      { x: 3, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Order History
      { x: 5, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Wishlist
    ],
    preview: "shopify-mobile",
    tags: ["ecommerce", "mobile", "shopping", "retail", "ios"],
    realProject: {
      name: "ShopEase Mobile",
      description: "Full-featured mobile shopping app with modern UI",
      platform: "React Native",
      industry: "Retail",
    },
  },

  {
    id: "saas-landing-conversion",
    name: "SaaS Landing Page Conversion",
    description: "High-converting SaaS landing page with hero, features, pricing, and testimonials",
    category: "SaaS Landing",
    projectTypes: ["website"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 3, browserFrame: true, shadow: "xl", zIndex: 2 }, // Hero Section
      { x: 0, y: 3, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Features
      { x: 4, y: 3, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: 0 }, // Pricing
      { x: 8, y: 3, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: 1 }, // Testimonials
      { x: 0, y: 5, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Demo/Product Tour
      { x: 6, y: 5, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Contact/CTA
      { x: 2, y: 7, w: 8, h: 2, browserFrame: true, shadow: "lg", zIndex: 1 }, // Footer
    ],
    preview: "saas-landing",
    tags: ["saas", "landing", "conversion", "marketing", "b2b"],
    realProject: {
      name: "DataFlow Analytics",
      description: "Business intelligence platform landing page",
      platform: "Next.js",
      industry: "SaaS",
    },
  },

  {
    id: "social-media-app",
    name: "Social Media Platform",
    description: "Complete social app - feed, stories, profile, messaging, and discovery",
    category: "Social Media",
    projectTypes: ["mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 1, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -3, shadow: "xl", zIndex: 3 }, // Main Feed
      { x: 3, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 0, shadow: "lg", zIndex: 2 }, // Stories View
      { x: 5, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Profile
      { x: 7, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Messages
      { x: 0, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: 4, shadow: "sm" }, // Camera/Create
      { x: 2, y: 7, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Explore
      { x: 4, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Notifications
      { x: 6, y: 7, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Settings
      { x: 8, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: 2, shadow: "sm" }, // Search
    ],
    preview: "social-media",
    tags: ["social", "mobile", "feed", "stories", "messaging"],
    realProject: {
      name: "ConnectHub",
      description: "Next-generation social networking platform",
      platform: "Flutter",
      industry: "Social Media",
    },
  },

  {
    id: "fintech-dashboard",
    name: "FinTech Analytics Dashboard",
    description: "Financial dashboard with charts, transactions, portfolio, and market data",
    category: "FinTech",
    projectTypes: ["desktop", "website"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Main Dashboard
      { x: 8, y: 0, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: 1 }, // Portfolio Summary
      { x: 8, y: 2, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Market Watch
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Transaction History
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Analytics Charts
      { x: 8, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Trading Interface
      { x: 0, y: 7, w: 6, h: 2, browserFrame: true, shadow: "md" }, // Reports
      { x: 6, y: 7, w: 6, h: 2, browserFrame: true, shadow: "md" }, // Settings
    ],
    preview: "fintech-dashboard",
    tags: ["fintech", "dashboard", "analytics", "trading", "finance"],
    realProject: {
      name: "WealthTracker Pro",
      description: "Professional investment portfolio management",
      platform: "React + D3.js",
      industry: "Financial Services",
    },
  },

  {
    id: "food-delivery-app",
    name: "Food Delivery Platform",
    description: "Complete food ordering experience - restaurants, menu, cart, tracking, and reviews",
    category: "Food Delivery",
    projectTypes: ["mobile"],
    rows: 12,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg", zIndex: 2 }, // Restaurant List
      { x: 2, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 3 }, // Menu/Food Items
      { x: 4, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Cart & Checkout
      { x: 6, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Order Tracking
      { x: 0, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // User Profile
      { x: 2, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Order History
      { x: 4, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Reviews
      { x: 6, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Favorites
    ],
    preview: "food-delivery",
    tags: ["food", "delivery", "mobile", "ordering", "restaurants"],
    realProject: {
      name: "QuickBite",
      description: "On-demand food delivery with real-time tracking",
      platform: "React Native",
      industry: "Food & Beverage",
    },
  },

  {
    id: "healthcare-telemedicine",
    name: "Telemedicine Platform",
    description: "Healthcare app with appointments, video calls, prescriptions, and health records",
    category: "Healthcare",
    projectTypes: ["mobile", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 3, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg" }, // Patient Dashboard
      { x: 3, y: 1, w: 3, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 2 }, // Video Consultation
      { x: 6, y: 0, w: 3, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg" }, // Doctor Profile
      { x: 9, y: 1, w: 3, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md" }, // Appointments
      { x: 1, y: 5, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Medical Records
      { x: 5, y: 6, w: 4, h: 3, browserFrame: true, shadow: "md" }, // Prescriptions
      { x: 9, y: 5, w: 3, h: 3, deviceFrame: "iphone", rotation: 2, shadow: "sm" }, // Health Tracking
    ],
    preview: "telemedicine",
    tags: ["healthcare", "telemedicine", "medical", "appointments", "video-call"],
    realProject: {
      name: "MediConnect",
      description: "Comprehensive telemedicine and health management",
      platform: "Flutter + WebRTC",
      industry: "Healthcare",
    },
  },

  {
    id: "crypto-trading-platform",
    name: "Cryptocurrency Exchange",
    description: "Crypto trading platform with charts, portfolio, news, and wallet management",
    category: "Cryptocurrency",
    projectTypes: ["desktop", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 5, browserFrame: true, shadow: "xl", zIndex: 2 }, // Trading Interface
      { x: 8, y: 0, w: 4, h: 3, browserFrame: true, shadow: "lg", rotation: 1 }, // Portfolio
      { x: 8, y: 3, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Market Data
      { x: 0, y: 5, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Order Book
      { x: 4, y: 5, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Price Charts
      { x: 8, y: 5, w: 4, h: 3, browserFrame: true, shadow: "md" }, // Wallet
      { x: 0, y: 8, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // News & Analysis
      { x: 6, y: 8, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Transaction History
    ],
    preview: "crypto-exchange",
    tags: ["crypto", "trading", "blockchain", "exchange", "charts"],
    realProject: {
      name: "CryptoVault Exchange",
      description: "Professional cryptocurrency trading platform",
      platform: "React + TradingView",
      industry: "Cryptocurrency",
    },
  },

  {
    id: "fitness-workout-app",
    name: "Fitness & Workout Tracker",
    description: "Complete fitness app with workouts, progress tracking, nutrition, and social features",
    category: "Fitness",
    projectTypes: ["mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 1, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg", zIndex: 2 }, // Home Dashboard
      { x: 3, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 3 }, // Workout Session
      { x: 5, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Progress Charts
      { x: 7, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Exercise Library
      { x: 0, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // Nutrition
      { x: 2, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Social Feed
      { x: 4, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Profile Stats
      { x: 6, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Challenges
      { x: 8, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 2, shadow: "sm" }, // Settings
    ],
    preview: "fitness-app",
    tags: ["fitness", "workout", "health", "tracking", "social"],
    realProject: {
      name: "FitTrack Pro",
      description: "AI-powered fitness and nutrition companion",
      platform: "React Native + ML",
      industry: "Health & Fitness",
    },
  },

  {
    id: "real-estate-platform",
    name: "Real Estate Marketplace",
    description: "Property listing platform with search, virtual tours, mortgage calculator, and agent profiles",
    category: "Real Estate",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 6, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Property Search
      { x: 6, y: 0, w: 6, h: 3, browserFrame: true, shadow: "lg", rotation: 1 }, // Property Details
      { x: 6, y: 3, w: 3, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Virtual Tour
      { x: 9, y: 3, w: 3, h: 2, browserFrame: true, shadow: "md", rotation: 1 }, // Mortgage Calc
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Agent Profiles
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Neighborhood Info
      { x: 8, y: 5, w: 4, h: 2, browserFrame: true, shadow: "md" }, // Saved Properties
      { x: 0, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Market Trends
      { x: 6, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Contact Forms
    ],
    preview: "real-estate",
    tags: ["real-estate", "property", "marketplace", "search", "virtual-tour"],
    realProject: {
      name: "PropertyHub",
      description: "Modern real estate marketplace with AR tours",
      platform: "Next.js + Three.js",
      industry: "Real Estate",
    },
  },

  {
    id: "education-lms",
    name: "Learning Management System",
    description: "Educational platform with courses, video lessons, quizzes, progress tracking, and certificates",
    category: "Education",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Course Dashboard
      { x: 8, y: 0, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: 1 }, // Progress Tracking
      { x: 8, y: 2, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Assignments
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Video Player
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Quiz Interface
      { x: 8, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Discussion Forum
      { x: 0, y: 7, w: 3, h: 2, browserFrame: true, shadow: "sm" }, // Calendar
      { x: 3, y: 7, w: 3, h: 2, browserFrame: true, shadow: "sm" }, // Grades
      { x: 6, y: 7, w: 3, h: 2, browserFrame: true, shadow: "sm" }, // Certificates
      { x: 9, y: 7, w: 3, h: 2, browserFrame: true, shadow: "sm" }, // Profile
    ],
    preview: "education-lms",
    tags: ["education", "lms", "courses", "learning", "certificates"],
    realProject: {
      name: "EduFlow Academy",
      description: "Interactive online learning platform",
      platform: "React + Video.js",
      industry: "Education",
    },
  },

  {
    id: "travel-booking-app",
    name: "Travel Booking Platform",
    description: "Complete travel app with flight search, hotel booking, itinerary planning, and travel guides",
    category: "Travel",
    projectTypes: ["mobile", "website"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg", zIndex: 2 }, // Search & Filters
      { x: 2, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 3 }, // Flight Results
      { x: 4, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Hotel Booking
      { x: 6, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Booking Details
      { x: 8, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "md" }, // Itinerary
      { x: 0, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // Travel Guides
      { x: 2, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Maps & Navigation
      { x: 4, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Reviews
      { x: 6, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Bookings History
      { x: 8, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 2, shadow: "sm" }, // Profile & Settings
    ],
    preview: "travel-booking",
    tags: ["travel", "booking", "flights", "hotels", "itinerary"],
    realProject: {
      name: "WanderWise",
      description: "AI-powered travel planning and booking",
      platform: "Flutter + Maps API",
      industry: "Travel & Tourism",
    },
  },

  {
    id: "music-streaming-app",
    name: "Music Streaming Platform",
    description: "Music app with playlists, discovery, podcasts, social features, and offline listening",
    category: "Music Streaming",
    projectTypes: ["mobile"],
    rows: 12,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg", zIndex: 2 }, // Home/Discover
      { x: 2, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 3 }, // Now Playing
      { x: 4, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Playlists
      { x: 6, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Search
      { x: 0, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // Library
      { x: 2, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Podcasts
      { x: 4, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Social/Friends
      { x: 6, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Profile
    ],
    preview: "music-streaming",
    tags: ["music", "streaming", "playlists", "podcasts", "social"],
    realProject: {
      name: "SoundWave",
      description: "Next-gen music streaming with AI recommendations",
      platform: "React Native + Audio API",
      industry: "Entertainment",
    },
  },

  {
    id: "project-management-tool",
    name: "Project Management Suite",
    description: "Team collaboration tool with kanban boards, gantt charts, time tracking, and team communication",
    category: "Project Management",
    projectTypes: ["desktop", "website"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Kanban Board
      { x: 8, y: 0, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: 1 }, // Team Chat
      { x: 8, y: 2, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Calendar View
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Gantt Chart
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Time Tracking
      { x: 8, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Reports
      { x: 0, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Project Dashboard
      { x: 6, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Team Management
    ],
    preview: "project-management",
    tags: ["project-management", "kanban", "gantt", "collaboration", "productivity"],
    realProject: {
      name: "TaskFlow Pro",
      description: "Advanced project management and team collaboration",
      platform: "React + Socket.io",
      industry: "Productivity",
    },
  },

  {
    id: "gaming-platform",
    name: "Gaming Community Platform",
    description: "Gaming platform with game library, achievements, social features, streaming, and tournaments",
    category: "Gaming",
    projectTypes: ["desktop", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 6, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Game Library
      { x: 6, y: 0, w: 6, h: 3, browserFrame: true, shadow: "lg", rotation: 1 }, // Game Details
      { x: 6, y: 3, w: 3, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Achievements
      { x: 9, y: 3, w: 3, h: 2, browserFrame: true, shadow: "md", rotation: 1 }, // Friends List
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Live Streaming
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Tournament Bracket
      { x: 8, y: 5, w: 4, h: 2, browserFrame: true, shadow: "md" }, // Leaderboards
      { x: 0, y: 7, w: 4, h: 2, browserFrame: true, shadow: "sm" }, // Game Stats
      { x: 4, y: 7, w: 4, h: 2, browserFrame: true, shadow: "sm" }, // Community Forum
      { x: 8, y: 7, w: 4, h: 2, browserFrame: true, shadow: "sm" }, // Profile Settings
    ],
    preview: "gaming-platform",
    tags: ["gaming", "community", "streaming", "tournaments", "social"],
    realProject: {
      name: "GameHub Central",
      description: "Ultimate gaming community and tournament platform",
      platform: "React + WebRTC",
      industry: "Gaming",
    },
  },

  {
    id: "news-media-app",
    name: "News & Media Platform",
    description: "News app with personalized feed, categories, bookmarks, offline reading, and push notifications",
    category: "News & Media",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 3, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg", zIndex: 2 }, // News Feed
      { x: 3, y: 1, w: 3, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 3 }, // Article Reader
      { x: 6, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Categories
      { x: 8, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Search
      { x: 0, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // Bookmarks
      { x: 2, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Trending
      { x: 4, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Weather
      { x: 6, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Sports
      { x: 8, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 2, shadow: "sm" }, // Settings
    ],
    preview: "news-media",
    tags: ["news", "media", "articles", "personalized", "offline"],
    realProject: {
      name: "NewsFlow",
      description: "AI-curated news with personalized recommendations",
      platform: "React Native + ML",
      industry: "Media",
    },
  },

  {
    id: "restaurant-pos-system",
    name: "Restaurant POS System",
    description: "Complete restaurant management with orders, menu, inventory, staff, and analytics",
    category: "Restaurant POS",
    projectTypes: ["desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 6, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Order Interface
      { x: 6, y: 0, w: 3, h: 3, browserFrame: true, shadow: "lg", rotation: 1 }, // Menu Management
      { x: 9, y: 0, w: 3, h: 3, browserFrame: true, shadow: "lg", rotation: -1 }, // Table Layout
      { x: 6, y: 3, w: 6, h: 2, browserFrame: true, shadow: "md" }, // Kitchen Display
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Inventory
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Staff Management
      { x: 8, y: 5, w: 4, h: 2, browserFrame: true, shadow: "md" }, // Reports
      { x: 0, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Sales Analytics
      { x: 6, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Customer Management
    ],
    preview: "restaurant-pos",
    tags: ["restaurant", "pos", "orders", "inventory", "analytics"],
    realProject: {
      name: "RestaurantFlow",
      description: "Modern POS system with integrated analytics",
      platform: "Electron + React",
      industry: "Restaurant",
    },
  },

  {
    id: "dating-app-platform",
    name: "Dating & Social App",
    description: "Modern dating app with profiles, matching, chat, video calls, and events",
    category: "Dating & Social",
    projectTypes: ["mobile"],
    rows: 12,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: -2, shadow: "lg", zIndex: 2 }, // Profile Cards
      { x: 2, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: 1, shadow: "xl", zIndex: 3 }, // Chat Interface
      { x: 4, y: 0, w: 2, h: 4, deviceFrame: "iphone", rotation: 2, shadow: "lg", zIndex: 2 }, // Matches
      { x: 6, y: 1, w: 2, h: 4, deviceFrame: "iphone", rotation: -1, shadow: "md", zIndex: 1 }, // Profile Edit
      { x: 0, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 3, shadow: "sm" }, // Video Call
      { x: 2, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -2, shadow: "sm" }, // Events
      { x: 4, y: 5, w: 2, h: 3, deviceFrame: "iphone", rotation: 1, shadow: "sm" }, // Discover
      { x: 6, y: 6, w: 2, h: 3, deviceFrame: "iphone", rotation: -3, shadow: "sm" }, // Settings
    ],
    preview: "dating-app",
    tags: ["dating", "social", "matching", "chat", "video-call"],
    realProject: {
      name: "ConnectMe",
      description: "AI-powered dating with video verification",
      platform: "React Native + WebRTC",
      industry: "Social Dating",
    },
  },

  {
    id: "logistics-tracking",
    name: "Logistics & Delivery Tracking",
    description: "Delivery management system with real-time tracking, route optimization, and fleet management",
    category: "Logistics",
    projectTypes: ["desktop", "mobile"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 6, h: 4, browserFrame: true, shadow: "xl", zIndex: 2 }, // Live Map Tracking
      { x: 6, y: 0, w: 3, h: 3, browserFrame: true, shadow: "lg", rotation: 1 }, // Delivery Queue
      { x: 9, y: 0, w: 3, h: 3, browserFrame: true, shadow: "lg", rotation: -1 }, // Driver Profiles
      { x: 6, y: 3, w: 6, h: 2, browserFrame: true, shadow: "md" }, // Route Optimization
      { x: 0, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Fleet Management
      { x: 4, y: 4, w: 4, h: 3, browserFrame: true, shadow: "lg" }, // Analytics Dashboard
      { x: 8, y: 5, w: 4, h: 2, browserFrame: true, shadow: "md" }, // Customer Notifications
      { x: 0, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Delivery Reports
      { x: 6, y: 7, w: 6, h: 2, browserFrame: true, shadow: "sm" }, // Warehouse Management
    ],
    preview: "logistics-tracking",
    tags: ["logistics", "delivery", "tracking", "fleet", "optimization"],
    realProject: {
      name: "LogiTrack Pro",
      description: "Advanced logistics and fleet management system",
      platform: "React + Google Maps",
      industry: "Logistics",
    },
  },

  {
    id: "photography-portfolio",
    name: "Photography Portfolio",
    description: "Professional photographer portfolio with galleries, client proofing, booking, and print shop",
    category: "Photography",
    projectTypes: ["website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 5, browserFrame: true, shadow: "xl", zIndex: 2, polaroidFrame: true }, // Main Gallery
      { x: 8, y: 0, w: 4, h: 3, browserFrame: true, shadow: "lg", rotation: 2, polaroidFrame: true }, // Portfolio Categories
      { x: 8, y: 3, w: 4, h: 2, browserFrame: true, shadow: "md", rotation: -1 }, // Client Login
      { x: 0, y: 5, w: 4, h: 3, browserFrame: true, shadow: "lg", polaroidFrame: true }, // Wedding Gallery
      { x: 4, y: 5, w: 4, h: 3, browserFrame: true, shadow: "lg", polaroidFrame: true }, // Portrait Gallery
      { x: 8, y: 5, w: 4, h: 3, browserFrame: true, shadow: "md" }, // Booking System
      { x: 0, y: 8, w: 4, h: 2, browserFrame: true, shadow: "sm" }, // About Page
      { x: 4, y: 8, w: 4, h: 2, browserFrame: true, shadow: "sm" }, // Contact Form
      { x: 8, y: 8, w: 4, h: 2, browserFrame: true, shadow: "sm" }, // Print Shop
    ],
    preview: "photography-portfolio",
    tags: ["photography", "portfolio", "gallery", "booking", "prints"],
    realProject: {
      name: "LensArt Studio",
      description: "Professional photography portfolio and booking",
      platform: "Next.js + Cloudinary",
      industry: "Photography",
    },
  },
]
