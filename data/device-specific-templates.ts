import type { Template } from "@/types";

// Mobile-specific templates optimized for mobile development
export const mobileTemplates: Template[] = [
  {
    id: "mobile-app-showcase",
    name: "Mobile App Showcase",
    description:
      "Perfect for mobile app developers - multiple screens in device frames",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 1, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 2, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 3, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" },
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "android" },
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" },
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "android" },
      { x: 0, y: 2, w: 2, h: 1, deviceFrame: "tablet" },
      { x: 2, y: 2, w: 2, h: 1, deviceFrame: "tablet" },
    ],
    preview: "mobile-app-showcase",
    tags: ["mobile", "app", "screens", "device-frames"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-ui-kit",
    name: "Mobile UI Kit",
    description: "Mobile interface components and screens",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 2, deviceFrame: "iphone" },
      { x: 1, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 2, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "android" },
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" },
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "android" },
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "android" },
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" },
    ],
    preview: "mobile-ui-kit",
    tags: ["mobile", "ui", "components", "screens"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-feature-showcase",
    name: "Mobile Feature Showcase",
    description: "Highlight key app features with device mockups",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 2,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 1, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 2, y: 0, w: 1, h: 1, deviceFrame: "android" },
      { x: 3, y: 0, w: 1, h: 1, deviceFrame: "android" },
      { x: 4, y: 0, w: 1, h: 1, deviceFrame: "iphone" },
      { x: 5, y: 0, w: 1, h: 1, deviceFrame: "android" },
      { x: 0, y: 1, w: 2, h: 1, deviceFrame: "tablet" },
      { x: 2, y: 1, w: 2, h: 1, deviceFrame: "tablet" },
      { x: 4, y: 1, w: 2, h: 1, deviceFrame: "tablet" },
    ],
    preview: "mobile-feature-showcase",
    tags: ["mobile", "features", "showcase", "mockups"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-social-app",
    name: "Mobile Social App",
    description: "Social media app with feed and stories",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Stories
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Post 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Post 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Post 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Post 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Feed
    ],
    preview: "mobile-social-app",
    tags: ["mobile", "social", "media", "feed"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-ecommerce",
    name: "Mobile E-commerce",
    description: "Shopping app with product browsing",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Product 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Product 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Product 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Product 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Cart
    ],
    preview: "mobile-ecommerce",
    tags: ["mobile", "ecommerce", "shopping", "products"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-fitness",
    name: "Mobile Fitness App",
    description: "Fitness tracking with workout plans",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "iphone" }, // Stats
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Workout 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Workout 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Workout 3
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "iphone" }, // Progress
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "android" }, // Nutrition
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "iphone" }, // Goals
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Dashboard
    ],
    preview: "mobile-fitness",
    tags: ["mobile", "fitness", "workout", "tracking"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-music",
    name: "Mobile Music Player",
    description: "Music streaming with playlist management",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Now playing
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Playlist 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Playlist 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Playlist 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Playlist 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Controls
    ],
    preview: "mobile-music",
    tags: ["mobile", "music", "streaming", "playlist"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-weather",
    name: "Mobile Weather App",
    description: "Weather forecast with detailed information",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Current
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Day 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Day 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Day 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Day 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Details
    ],
    preview: "mobile-weather",
    tags: ["mobile", "weather", "forecast", "details"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-news",
    name: "Mobile News App",
    description: "News reading with categories",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "iphone" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "android" }, // Categories
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "iphone" }, // Article
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "android" }, // Related
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "mobile-news",
    tags: ["mobile", "news", "reading", "articles"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-gaming",
    name: "Mobile Gaming App",
    description: "Gaming interface with controls",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Game area
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Button 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Button 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Button 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Button 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Score/Stats
    ],
    preview: "mobile-gaming",
    tags: ["mobile", "gaming", "controls", "interface"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-education",
    name: "Mobile Education App",
    description: "Learning app with courses",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "iphone" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Course 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Course 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Course 3
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "iphone" }, // Progress
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "android" }, // Quiz
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "iphone" }, // Certificate
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Dashboard
    ],
    preview: "mobile-education",
    tags: ["mobile", "education", "learning", "courses"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-travel",
    name: "Mobile Travel App",
    description: "Travel planning and booking",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Map
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Hotel 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Hotel 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Flight 1
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Flight 2
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Itinerary
    ],
    preview: "mobile-travel",
    tags: ["mobile", "travel", "booking", "planning"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-health",
    name: "Mobile Health App",
    description: "Health monitoring and tracking",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "iphone" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Heart rate
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Steps
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Sleep
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "iphone" }, // Weight
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "android" }, // Calories
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "iphone" }, // Water
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Progress
    ],
    preview: "mobile-health",
    tags: ["mobile", "health", "monitoring", "tracking"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-productivity",
    name: "Mobile Productivity App",
    description: "Task management and organization",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "iphone" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "android" }, // Tasks
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "iphone" }, // Calendar
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "android" }, // Notes
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Dashboard
    ],
    preview: "mobile-productivity",
    tags: ["mobile", "productivity", "tasks", "organization"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "mobile-finance",
    name: "Mobile Finance App",
    description: "Banking and financial management",
    category: "Mobile Development",
    projectTypes: ["mobile"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "iphone" }, // Balance
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Account 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Account 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "android" }, // Transfer
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "iphone" }, // Payments
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Transactions
    ],
    preview: "mobile-finance",
    tags: ["mobile", "finance", "banking", "payments"],
    tier: "premium",
    isPremium: true,
  },
];

// Desktop-specific templates optimized for desktop applications
export const desktopTemplates: Template[] = [
  {
    id: "desktop-dashboard",
    name: "Desktop Dashboard",
    description: "Professional desktop application dashboard layout",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 3, h: 2, shadow: "xl" }, // Main chart
      { x: 3, y: 0, w: 3, h: 1, shadow: "lg" }, // Stats 1
      { x: 3, y: 1, w: 3, h: 1, shadow: "lg" }, // Stats 2
      { x: 0, y: 2, w: 2, h: 1, shadow: "md" }, // Widget 1
      { x: 2, y: 2, w: 2, h: 1, shadow: "md" }, // Widget 2
      { x: 4, y: 2, w: 2, h: 1, shadow: "md" }, // Widget 3
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "desktop-dashboard",
    tags: ["desktop", "dashboard", "professional", "widgets"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-application",
    name: "Desktop Application",
    description: "Full desktop application interface layout",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 5,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 3, shadow: "md" }, // Sidebar
      { x: 2, y: 1, w: 4, h: 2, shadow: "lg" }, // Main content
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Panel
      { x: 2, y: 3, w: 4, h: 1, shadow: "md" }, // Bottom content
      { x: 6, y: 3, w: 2, h: 1, shadow: "md" }, // Bottom panel
      { x: 0, y: 4, w: 8, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-application",
    tags: ["desktop", "application", "interface", "layout"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-toolbar",
    name: "Desktop Toolbar",
    description: "Desktop software with toolbar and panels",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 3,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Toolbar
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Tool 1
      { x: 1, y: 1, w: 1, h: 1, shadow: "md" }, // Tool 2
      { x: 2, y: 1, w: 2, h: 1, shadow: "lg" }, // Main area
      { x: 4, y: 1, w: 1, h: 1, shadow: "md" }, // Tool 3
      { x: 5, y: 1, w: 1, h: 1, shadow: "md" }, // Tool 4
      { x: 0, y: 2, w: 6, h: 1, shadow: "sm" }, // Status
    ],
    preview: "desktop-toolbar",
    tags: ["desktop", "toolbar", "software", "tools"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-video-editor",
    name: "Desktop Video Editor",
    description: "Professional video editing software interface",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // Media library
      { x: 2, y: 1, w: 4, h: 2, shadow: "xl" }, // Preview window
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Effects panel
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Timeline
    ],
    preview: "desktop-video-editor",
    tags: ["desktop", "video", "editing", "professional"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-photo-editor",
    name: "Desktop Photo Editor",
    description: "Photo editing software with tools and layers",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Toolbar
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Tools panel
      { x: 1, y: 1, w: 3, h: 2, shadow: "xl" }, // Canvas
      { x: 4, y: 1, w: 1, h: 2, shadow: "md" }, // Layers
      { x: 5, y: 1, w: 1, h: 2, shadow: "md" }, // Properties
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-photo-editor",
    tags: ["desktop", "photo", "editing", "design"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-music-studio",
    name: "Desktop Music Studio",
    description: "Digital audio workstation interface",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 5,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Transport
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // Browser
      { x: 2, y: 1, w: 4, h: 2, shadow: "xl" }, // Mixer
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Effects
      { x: 0, y: 3, w: 8, h: 1, shadow: "md" }, // Piano roll
      { x: 0, y: 4, w: 8, h: 1, shadow: "sm" }, // Timeline
    ],
    preview: "desktop-music-studio",
    tags: ["desktop", "music", "studio", "audio"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-3d-modeler",
    name: "Desktop 3D Modeler",
    description: "3D modeling and animation software",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Tools
      { x: 1, y: 1, w: 4, h: 2, shadow: "xl" }, // 3D viewport
      { x: 5, y: 1, w: 2, h: 2, shadow: "md" }, // Properties
      { x: 7, y: 1, w: 1, h: 2, shadow: "md" }, // Outliner
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Timeline
    ],
    preview: "desktop-3d-modeler",
    tags: ["desktop", "3d", "modeling", "animation"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-code-editor",
    name: "Desktop Code Editor",
    description: "Integrated development environment",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // File explorer
      { x: 2, y: 1, w: 4, h: 2, shadow: "xl" }, // Editor
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Terminal
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-code-editor",
    tags: ["desktop", "code", "editor", "development"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-cad",
    name: "Desktop CAD Software",
    description: "Computer-aided design interface",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Toolbar
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Tools
      { x: 1, y: 1, w: 5, h: 2, shadow: "xl" }, // Drawing area
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Properties
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Command line
    ],
    preview: "desktop-cad",
    tags: ["desktop", "cad", "design", "engineering"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-spreadsheet",
    name: "Desktop Spreadsheet",
    description: "Data analysis and spreadsheet software",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Formula bar
      { x: 1, y: 1, w: 6, h: 2, shadow: "xl" }, // Spreadsheet
      { x: 7, y: 1, w: 1, h: 2, shadow: "md" }, // Properties
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-spreadsheet",
    tags: ["desktop", "spreadsheet", "data", "analysis"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-presentation",
    name: "Desktop Presentation",
    description: "Presentation software with slides",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Slide thumbnails
      { x: 1, y: 1, w: 3, h: 2, shadow: "xl" }, // Slide editor
      { x: 4, y: 1, w: 1, h: 2, shadow: "md" }, // Properties
      { x: 5, y: 1, w: 1, h: 2, shadow: "md" }, // Notes
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-presentation",
    tags: ["desktop", "presentation", "slides", "design"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-database",
    name: "Desktop Database",
    description: "Database management system interface",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // Database tree
      { x: 2, y: 1, w: 4, h: 2, shadow: "xl" }, // Query results
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Properties
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // SQL editor
    ],
    preview: "desktop-database",
    tags: ["desktop", "database", "sql", "management"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-project-manager",
    name: "Desktop Project Manager",
    description: "Project management and task tracking",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // Project list
      { x: 2, y: 1, w: 3, h: 2, shadow: "xl" }, // Task board
      { x: 5, y: 1, w: 3, h: 2, shadow: "md" }, // Calendar
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-project-manager",
    tags: ["desktop", "project", "management", "tasks"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-accounting",
    name: "Desktop Accounting",
    description: "Financial accounting software interface",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // Chart of accounts
      { x: 2, y: 1, w: 4, h: 2, shadow: "xl" }, // General ledger
      { x: 6, y: 1, w: 2, h: 2, shadow: "md" }, // Reports
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-accounting",
    tags: ["desktop", "accounting", "financial", "business"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "desktop-email-client",
    name: "Desktop Email Client",
    description: "Email management and organization",
    category: "Desktop Development",
    projectTypes: ["desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1, shadow: "lg" }, // Menu bar
      { x: 0, y: 1, w: 2, h: 2, shadow: "md" }, // Folder list
      { x: 2, y: 1, w: 3, h: 2, shadow: "xl" }, // Email list
      { x: 5, y: 1, w: 3, h: 2, shadow: "md" }, // Email preview
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Status bar
    ],
    preview: "desktop-email-client",
    tags: ["desktop", "email", "communication", "management"],
    tier: "premium",
    isPremium: true,
  },
];

// Website-specific templates optimized for web development
export const websiteTemplates: Template[] = [
  {
    id: "website-landing",
    name: "Website Landing Page",
    description: "Modern website landing page with hero and sections",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 2, w: 2, h: 1, shadow: "md" }, // Feature 1
      { x: 2, y: 2, w: 2, h: 1, shadow: "md" }, // Feature 2
      { x: 4, y: 2, w: 2, h: 1, shadow: "md" }, // Feature 3
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "website-landing",
    tags: ["website", "landing", "hero", "modern"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-portfolio",
    name: "Website Portfolio",
    description: "Professional portfolio website layout",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 5,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 2, shadow: "lg" }, // About
      { x: 2, y: 1, w: 2, h: 2, shadow: "lg" }, // Skills
      { x: 0, y: 3, w: 1, h: 1, shadow: "md" }, // Project 1
      { x: 1, y: 3, w: 1, h: 1, shadow: "md" }, // Project 2
      { x: 2, y: 3, w: 1, h: 1, shadow: "md" }, // Project 3
      { x: 3, y: 3, w: 1, h: 1, shadow: "md" }, // Project 4
      { x: 0, y: 4, w: 4, h: 1, shadow: "sm" }, // Contact
    ],
    preview: "website-portfolio",
    tags: ["website", "portfolio", "professional", "projects"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-ecommerce",
    name: "Website E-commerce",
    description: "E-commerce website with product showcase",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Category 1
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Category 2
      { x: 4, y: 1, w: 2, h: 1, shadow: "md" }, // Category 3
      { x: 0, y: 2, w: 1, h: 1, shadow: "md" }, // Product 1
      { x: 1, y: 2, w: 1, h: 1, shadow: "md" }, // Product 2
      { x: 2, y: 2, w: 1, h: 1, shadow: "md" }, // Product 3
      { x: 3, y: 2, w: 1, h: 1, shadow: "md" }, // Product 4
      { x: 4, y: 2, w: 1, h: 1, shadow: "md" }, // Product 5
      { x: 5, y: 2, w: 1, h: 1, shadow: "md" }, // Product 6
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "website-ecommerce",
    tags: ["website", "ecommerce", "products", "shop"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-blog",
    name: "Website Blog",
    description: "Blog website with articles and sidebar",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 4, h: 2, shadow: "xl" }, // Main content
      { x: 4, y: 1, w: 2, h: 1, shadow: "md" }, // Sidebar 1
      { x: 4, y: 2, w: 2, h: 1, shadow: "md" }, // Sidebar 2
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "website-blog",
    tags: ["website", "blog", "articles", "content"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-corporate",
    name: "Website Corporate",
    description: "Corporate business website layout",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 5,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Service 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Service 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Service 3
      { x: 0, y: 4, w: 6, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "website-corporate",
    tags: ["website", "corporate", "business", "services"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-agency",
    name: "Website Agency",
    description: "Creative agency website with portfolio",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 3, h: 2, shadow: "xl" }, // Hero
      { x: 3, y: 1, w: 3, h: 1, shadow: "md" }, // Services
      { x: 3, y: 2, w: 3, h: 1, shadow: "md" }, // Portfolio
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "website-agency",
    tags: ["website", "agency", "creative", "portfolio"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-restaurant",
    name: "Website Restaurant",
    description: "Restaurant website with menu and booking",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 2, w: 2, h: 1, shadow: "md" }, // Menu 1
      { x: 2, y: 2, w: 2, h: 1, shadow: "md" }, // Menu 2
      { x: 4, y: 2, w: 2, h: 1, shadow: "md" }, // Menu 3
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Contact
    ],
    preview: "website-restaurant",
    tags: ["website", "restaurant", "menu", "booking"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-hotel",
    name: "Website Hotel",
    description: "Hotel website with rooms and booking",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 2, w: 2, h: 1, shadow: "md" }, // Room 1
      { x: 2, y: 2, w: 2, h: 1, shadow: "md" }, // Room 2
      { x: 4, y: 2, w: 2, h: 1, shadow: "md" }, // Room 3
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Booking
    ],
    preview: "website-hotel",
    tags: ["website", "hotel", "rooms", "booking"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-education",
    name: "Website Education",
    description: "Educational institution website",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Course 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Course 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Course 3
    ],
    preview: "website-education",
    tags: ["website", "education", "courses", "learning"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-healthcare",
    name: "Website Healthcare",
    description: "Healthcare provider website",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Service 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Service 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Service 3
    ],
    preview: "website-healthcare",
    tags: ["website", "healthcare", "medical", "services"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-law",
    name: "Website Law Firm",
    description: "Legal services website",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Practice 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Practice 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Practice 3
    ],
    preview: "website-law",
    tags: ["website", "law", "legal", "services"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-real-estate",
    name: "Website Real Estate",
    description: "Real estate listing website",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Property 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Property 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Property 3
    ],
    preview: "website-real-estate",
    tags: ["website", "real-estate", "properties", "listings"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-fitness",
    name: "Website Fitness",
    description: "Fitness center website",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Class 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Class 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Class 3
    ],
    preview: "website-fitness",
    tags: ["website", "fitness", "gym", "classes"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "website-consulting",
    name: "Website Consulting",
    description: "Business consulting website",
    category: "Website Development",
    projectTypes: ["website"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 6, h: 2, shadow: "xl" }, // Hero
      { x: 0, y: 3, w: 2, h: 1, shadow: "md" }, // Service 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "md" }, // Service 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "md" }, // Service 3
    ],
    preview: "website-consulting",
    tags: ["website", "consulting", "business", "services"],
    tier: "premium",
    isPremium: true,
  },
];

// Tablet-specific templates optimized for tablet development
export const tabletTemplates: Template[] = [
  {
    id: "tablet-app",
    name: "Tablet App",
    description: "Tablet application with larger touch interface",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 2, h: 1, deviceFrame: "tablet" }, // Header
      { x: 2, y: 0, w: 2, h: 1, deviceFrame: "tablet" }, // Navigation
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Sidebar
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Main content
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Panel
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "tablet-app",
    tags: ["tablet", "app", "touch", "interface"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-dashboard",
    name: "Tablet Dashboard",
    description: "Tablet-optimized dashboard layout",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Widget 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Widget 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Widget 3
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Widget 4
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Widget 5
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Widget 6
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "tablet-dashboard",
    tags: ["tablet", "dashboard", "widgets", "touch"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-gallery",
    name: "Tablet Gallery",
    description: "Photo gallery optimized for tablet viewing",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Photo 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Photo 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Photo 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Photo 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Controls
    ],
    preview: "tablet-gallery",
    tags: ["tablet", "gallery", "photos", "touch"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-reading",
    name: "Tablet Reading App",
    description: "E-reader optimized for tablet screens",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "tablet" }, // Sidebar
      { x: 1, y: 1, w: 2, h: 2, deviceFrame: "tablet" }, // Content
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "tablet-reading",
    tags: ["tablet", "reading", "e-reader", "content"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-video",
    name: "Tablet Video Player",
    description: "Video streaming app for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "tablet" }, // Video player
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Thumbnail 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Thumbnail 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Thumbnail 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Thumbnail 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Controls
    ],
    preview: "tablet-video",
    tags: ["tablet", "video", "streaming", "player"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-music",
    name: "Tablet Music Player",
    description: "Music streaming app for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "tablet" }, // Playlist
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Album art
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "tablet" }, // Controls
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Progress
    ],
    preview: "tablet-music",
    tags: ["tablet", "music", "streaming", "player"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-gaming",
    name: "Tablet Gaming",
    description: "Gaming interface optimized for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "tablet" }, // Game area
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Button 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Button 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Button 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Button 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Score/Stats
    ],
    preview: "tablet-gaming",
    tags: ["tablet", "gaming", "touch", "controls"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-social",
    name: "Tablet Social Media",
    description: "Social media app optimized for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "tablet" }, // Sidebar
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Feed
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "tablet" }, // Post
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "tablet-social",
    tags: ["tablet", "social", "media", "feed"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-education",
    name: "Tablet Education",
    description: "Educational app for tablet learning",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Lesson
      { x: 2, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Quiz
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Module 1
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Module 2
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Module 3
      { x: 3, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Module 4
      { x: 0, y: 3, w: 4, h: 1, deviceFrame: "tablet" }, // Progress
    ],
    preview: "tablet-education",
    tags: ["tablet", "education", "learning", "modules"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-productivity",
    name: "Tablet Productivity",
    description: "Productivity app for tablet work",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "tablet" }, // Tools
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Document
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "tablet" }, // Editor
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "tablet-productivity",
    tags: ["tablet", "productivity", "work", "tools"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-shopping",
    name: "Tablet Shopping",
    description: "E-commerce app optimized for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Product 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Product 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Product 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Product 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Cart
    ],
    preview: "tablet-shopping",
    tags: ["tablet", "shopping", "ecommerce", "products"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-health",
    name: "Tablet Health App",
    description: "Health monitoring app for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Heart rate
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Steps
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Sleep
      { x: 0, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Weight
      { x: 1, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Calories
      { x: 2, y: 2, w: 1, h: 1, deviceFrame: "tablet" }, // Water
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Progress
    ],
    preview: "tablet-health",
    tags: ["tablet", "health", "monitoring", "fitness"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-news",
    name: "Tablet News App",
    description: "News reading app optimized for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "tablet" }, // Categories
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Article
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "tablet" }, // Related
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Footer
    ],
    preview: "tablet-news",
    tags: ["tablet", "news", "reading", "articles"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-weather",
    name: "Tablet Weather App",
    description: "Weather app with detailed forecasts for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, deviceFrame: "tablet" }, // Current weather
      { x: 0, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Day 1
      { x: 1, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Day 2
      { x: 2, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Day 3
      { x: 3, y: 1, w: 1, h: 1, deviceFrame: "tablet" }, // Day 4
      { x: 0, y: 2, w: 4, h: 1, deviceFrame: "tablet" }, // Details
    ],
    preview: "tablet-weather",
    tags: ["tablet", "weather", "forecast", "details"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "tablet-travel",
    name: "Tablet Travel App",
    description: "Travel planning app optimized for tablet",
    category: "Tablet Development",
    projectTypes: ["tablet"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, deviceFrame: "tablet" }, // Header
      { x: 0, y: 1, w: 1, h: 2, deviceFrame: "tablet" }, // Map
      { x: 1, y: 1, w: 2, h: 1, deviceFrame: "tablet" }, // Destination
      { x: 1, y: 2, w: 2, h: 1, deviceFrame: "tablet" }, // Booking
      { x: 0, y: 3, w: 3, h: 1, deviceFrame: "tablet" }, // Itinerary
    ],
    preview: "tablet-travel",
    tags: ["tablet", "travel", "planning", "booking"],
    tier: "premium",
    isPremium: true,
  },
];

// Chrome-specific templates for browser extensions
export const chromeTemplates: Template[] = [
  {
    id: "chrome-extension",
    name: "Chrome Extension",
    description: "Chrome extension popup and options layout",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Feature 1
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Feature 2
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "chrome-extension",
    tags: ["chrome", "extension", "popup", "browser"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-dashboard",
    name: "Chrome Dashboard",
    description: "Chrome extension dashboard interface",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg" }, // Title
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Stat 1
      { x: 1, y: 1, w: 1, h: 1, shadow: "md" }, // Stat 2
      { x: 2, y: 1, w: 1, h: 1, shadow: "md" }, // Stat 3
      { x: 0, y: 2, w: 3, h: 1, shadow: "md" }, // Content
      { x: 0, y: 3, w: 3, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-dashboard",
    tags: ["chrome", "dashboard", "extension", "interface"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-ad-blocker",
    name: "Chrome Ad Blocker",
    description: "Ad blocking extension interface",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Stats
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Settings
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "chrome-ad-blocker",
    tags: ["chrome", "ad-blocker", "privacy", "security"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-password-manager",
    name: "Chrome Password Manager",
    description: "Password management extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Sites
      { x: 1, y: 1, w: 2, h: 1, shadow: "md" }, // Password
      { x: 1, y: 2, w: 2, h: 1, shadow: "md" }, // Actions
      { x: 0, y: 3, w: 3, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "chrome-password-manager",
    tags: ["chrome", "password", "security", "management"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-translator",
    name: "Chrome Translator",
    description: "Language translation extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Input
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Output
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Controls
    ],
    preview: "chrome-translator",
    tags: ["chrome", "translation", "language", "communication"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-screenshot",
    name: "Chrome Screenshot",
    description: "Screenshot capture extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Preview
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Options
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-screenshot",
    tags: ["chrome", "screenshot", "capture", "image"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-bookmark-manager",
    name: "Chrome Bookmark Manager",
    description: "Enhanced bookmark management",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Folders
      { x: 1, y: 1, w: 2, h: 1, shadow: "md" }, // Bookmark
      { x: 1, y: 2, w: 2, h: 1, shadow: "md" }, // Actions
      { x: 0, y: 3, w: 3, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "chrome-bookmark-manager",
    tags: ["chrome", "bookmarks", "organization", "management"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-dark-mode",
    name: "Chrome Dark Mode",
    description: "Dark mode toggle extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Toggle
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Settings
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "chrome-dark-mode",
    tags: ["chrome", "dark-mode", "theme", "customization"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-productivity",
    name: "Chrome Productivity",
    description: "Productivity tools extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Timer
      { x: 1, y: 1, w: 1, h: 1, shadow: "md" }, // Notes
      { x: 2, y: 1, w: 1, h: 1, shadow: "md" }, // Tasks
      { x: 0, y: 2, w: 3, h: 1, shadow: "md" }, // Progress
      { x: 0, y: 3, w: 3, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-productivity",
    tags: ["chrome", "productivity", "tools", "organization"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-shopping-assistant",
    name: "Chrome Shopping Assistant",
    description: "Shopping comparison extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Price
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Deals
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-shopping-assistant",
    tags: ["chrome", "shopping", "comparison", "deals"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-news-aggregator",
    name: "Chrome News Aggregator",
    description: "News reading extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 1, h: 2, shadow: "md" }, // Categories
      { x: 1, y: 1, w: 2, h: 1, shadow: "md" }, // Article
      { x: 1, y: 2, w: 2, h: 1, shadow: "md" }, // Related
      { x: 0, y: 3, w: 3, h: 1, shadow: "sm" }, // Footer
    ],
    preview: "chrome-news-aggregator",
    tags: ["chrome", "news", "reading", "aggregator"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-social-media",
    name: "Chrome Social Media",
    description: "Social media management extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Feed
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Notifications
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-social-media",
    tags: ["chrome", "social", "media", "management"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-weather",
    name: "Chrome Weather",
    description: "Weather information extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 2, h: 1, shadow: "md" }, // Current
      { x: 2, y: 1, w: 2, h: 1, shadow: "md" }, // Forecast
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Details
    ],
    preview: "chrome-weather",
    tags: ["chrome", "weather", "forecast", "information"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-calculator",
    name: "Chrome Calculator",
    description: "Quick calculator extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 4,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg" }, // Display
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // 7
      { x: 1, y: 1, w: 1, h: 1, shadow: "md" }, // 8
      { x: 2, y: 1, w: 1, h: 1, shadow: "md" }, // 9
      { x: 0, y: 2, w: 1, h: 1, shadow: "md" }, // 4
      { x: 1, y: 2, w: 1, h: 1, shadow: "md" }, // 5
      { x: 2, y: 2, w: 1, h: 1, shadow: "md" }, // 6
      { x: 0, y: 3, w: 3, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-calculator",
    tags: ["chrome", "calculator", "math", "tools"],
    tier: "premium",
    isPremium: true,
  },
  {
    id: "chrome-notepad",
    name: "Chrome Notepad",
    description: "Quick note-taking extension",
    category: "Chrome Development",
    projectTypes: ["chrome"],
    rows: 3,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1, shadow: "lg" }, // Header
      { x: 0, y: 1, w: 4, h: 1, shadow: "md" }, // Editor
      { x: 0, y: 2, w: 4, h: 1, shadow: "sm" }, // Actions
    ],
    preview: "chrome-notepad",
    tags: ["chrome", "notepad", "notes", "text"],
    tier: "premium",
    isPremium: true,
  },
];
