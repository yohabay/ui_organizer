import type { Template } from "@/types";

export const socialMediaTemplates: Template[] = [
  {
    id: "free-social-feed",
    name: "Social Feed",
    description: "Classic social media feed layout",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 2 }, // Post 1
      { x: 0, y: 3, w: 4, h: 2 }, // Post 2
      { x: 0, y: 5, w: 4, h: 2 }, // Post 3
      { x: 0, y: 7, w: 4, h: 1 }, // Footer
    ],
    preview: "/template-previews/free-social-feed.jpg",
    tags: ["social", "feed", "posts", "community"],
  },
  {
    id: "free-community-forum",
    name: "Community Forum",
    description: "Discussion forum layout",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 2 }, // Topic 1
      { x: 4, y: 1, w: 2, h: 2 }, // Topic 2
      { x: 0, y: 3, w: 4, h: 2 }, // Topic 3
      { x: 4, y: 3, w: 2, h: 2 }, // Topic 4
      { x: 0, y: 5, w: 3, h: 2 }, // Discussion 1
      { x: 3, y: 5, w: 3, h: 2 }, // Discussion 2
    ],
    preview: "/template-previews/free-community-forum.jpg",
    tags: ["forum", "community", "discussion", "topics"],
  },
  {
    id: "free-chat-platform",
    name: "Chat Platform",
    description: "Messaging and chat interface",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 6 }, // Contact list
      { x: 2, y: 0, w: 6, h: 1 }, // Chat header
      { x: 2, y: 1, w: 6, h: 4 }, // Chat messages
      { x: 2, y: 5, w: 6, h: 1 }, // Message input
    ],
    preview: "/template-previews/free-chat-platform.jpg",
    tags: ["chat", "messaging", "conversation", "real-time"],
  },
  {
    id: "free-user-profiles",
    name: "User Profiles",
    description: "User profile and bio layout",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 3 }, // Profile header
      { x: 0, y: 3, w: 2, h: 2 }, // Bio
      { x: 2, y: 3, w: 2, h: 2 }, // Stats
      { x: 4, y: 3, w: 2, h: 2 }, // Follow button
      { x: 0, y: 5, w: 2, h: 2 }, // Post 1
      { x: 2, y: 5, w: 2, h: 2 }, // Post 2
      { x: 4, y: 5, w: 2, h: 2 }, // Post 3
    ],
    preview: "/template-previews/free-user-profiles.jpg",
    tags: ["profile", "user", "bio", "personal"],
  },
  {
    id: "free-social-dashboard",
    name: "Social Dashboard",
    description: "Social media management dashboard",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Analytics
      { x: 2, y: 1, w: 2, h: 2 }, // Engagement
      { x: 4, y: 1, w: 2, h: 2 }, // Followers
      { x: 6, y: 1, w: 2, h: 2 }, // Reach
      { x: 0, y: 3, w: 4, h: 3 }, // Content calendar
      { x: 4, y: 3, w: 4, h: 3 }, // Recent posts
    ],
    preview: "/template-previews/free-social-dashboard.jpg",
    tags: ["dashboard", "analytics", "management", "social"],
  },
  {
    id: "premium-social-network",
    name: "Social Network",
    description: "Advanced social networking platform",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Navigation
      { x: 0, y: 2, w: 3, h: 6 }, // Sidebar
      { x: 3, y: 2, w: 4, h: 3 }, // Main feed
      { x: 7, y: 2, w: 3, h: 3 }, // Trending
      { x: 3, y: 5, w: 4, h: 3 }, // Stories
      { x: 7, y: 5, w: 3, h: 3 }, // Suggestions
    ],
    preview: "/template-previews/premium-social-network.jpg",
    tags: ["network", "premium", "advanced", "social"],
  },
  {
    id: "premium-community-advanced",
    name: "Community Advanced",
    description: "Advanced community features",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 3 }, // Categories
      { x: 2, y: 2, w: 5, h: 3 }, // Main content
      { x: 7, y: 2, w: 3, h: 3 }, // Sidebar
      { x: 0, y: 5, w: 3, h: 3 }, // Events
      { x: 3, y: 5, w: 4, h: 3 }, // Discussions
      { x: 7, y: 5, w: 3, h: 3 }, // Members
      { x: 0, y: 8, w: 5, h: 3 }, // Groups
      { x: 5, y: 8, w: 5, h: 3 }, // Resources
    ],
    preview: "/template-previews/premium-community-advanced.jpg",
    tags: ["community", "advanced", "features", "groups"],
  },
  {
    id: "premium-social-analytics",
    name: "Social Analytics",
    description: "Comprehensive social media analytics",
    category: "Social Media & Community",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Header
      { x: 0, y: 2, w: 3, h: 2 }, // Followers
      { x: 3, y: 2, w: 3, h: 2 }, // Engagement
      { x: 6, y: 2, w: 3, h: 2 }, // Reach
      { x: 9, y: 2, w: 3, h: 2 }, // Impressions
      { x: 0, y: 4, w: 6, h: 3 }, // Growth chart
      { x: 6, y: 4, w: 6, h: 3 }, // Engagement chart
      { x: 0, y: 7, w: 4, h: 2 }, // Top posts
      { x: 4, y: 7, w: 4, h: 2 }, // Audience insights
      { x: 8, y: 7, w: 4, h: 2 }, // Performance
    ],
    preview: "/template-previews/premium-social-analytics.jpg",
    tags: ["analytics", "premium", "insights", "performance"],
  },
];
