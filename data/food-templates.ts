import type { Template } from "@/types";

export const foodTemplates: Template[] = [
  {
    id: "free-restaurant-menu",
    name: "Restaurant Menu",
    description: "Digital restaurant menu layout",
    category: "Food & Restaurant",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Header
      { x: 0, y: 2, w: 3, h: 2 }, // Appetizers
      { x: 3, y: 2, w: 3, h: 2 }, // Main courses
      { x: 0, y: 4, w: 3, h: 2 }, // Desserts
      { x: 3, y: 4, w: 3, h: 2 }, // Beverages
      { x: 0, y: 6, w: 6, h: 2 }, // Specials
    ],
    preview: "/template-previews/free-restaurant-menu.jpg",
    tags: ["restaurant", "menu", "food", "dining"],
  },
  {
    id: "free-food-delivery",
    name: "Food Delivery",
    description: "Food delivery app interface",
    category: "Food & Restaurant",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Restaurants
      { x: 2, y: 1, w: 2, h: 2 }, // Search
      { x: 0, y: 3, w: 4, h: 3 }, // Restaurant list
      { x: 0, y: 6, w: 4, h: 2 }, // Cart
    ],
    preview: "/template-previews/free-food-delivery.jpg",
    tags: ["delivery", "food", "mobile", "app"],
  },
  {
    id: "free-recipe-app",
    name: "Recipe App",
    description: "Recipe sharing and cooking app",
    category: "Food & Restaurant",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Recipe 1
      { x: 2, y: 2, w: 2, h: 2 }, // Recipe 2
      { x: 4, y: 2, w: 2, h: 2 }, // Recipe 3
      { x: 0, y: 4, w: 3, h: 3 }, // Recipe details
      { x: 3, y: 4, w: 3, h: 3 }, // Ingredients
      { x: 0, y: 7, w: 6, h: 1 }, // Instructions
    ],
    preview: "/template-previews/free-recipe-app.jpg",
    tags: ["recipe", "cooking", "food", "app"],
  },
  {
    id: "free-restaurant-booking",
    name: "Restaurant Booking",
    description: "Restaurant reservation system",
    category: "Food & Restaurant",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 3, h: 2 }, // Date picker
      { x: 3, y: 2, w: 3, h: 2 }, // Time picker
      { x: 6, y: 2, w: 2, h: 2 }, // Guests
      { x: 0, y: 4, w: 4, h: 3 }, // Restaurant info
      { x: 4, y: 4, w: 4, h: 3 }, // Available times
      { x: 0, y: 7, w: 8, h: 1 }, // Book button
    ],
    preview: "/template-previews/free-restaurant-booking.jpg",
    tags: ["booking", "reservation", "restaurant", "dining"],
  },
  {
    id: "free-food-blog",
    name: "Food Blog",
    description: "Food blog and recipe sharing",
    category: "Food & Restaurant",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero post
      { x: 0, y: 3, w: 2, h: 2 }, // Post 1
      { x: 2, y: 3, w: 2, h: 2 }, // Post 2
      { x: 4, y: 3, w: 2, h: 2 }, // Post 3
      { x: 6, y: 3, w: 2, h: 2 }, // Post 4
      { x: 0, y: 5, w: 4, h: 3 }, // Featured recipe
      { x: 4, y: 5, w: 4, h: 3 }, // Categories
      { x: 0, y: 8, w: 4, h: 2 }, // Newsletter
      { x: 4, y: 8, w: 4, h: 2 }, // Social links
    ],
    preview: "/template-previews/free-food-blog.jpg",
    tags: ["blog", "food", "recipes", "sharing"],
  },
  {
    id: "premium-restaurant-luxury",
    name: "Restaurant Luxury",
    description: "High-end restaurant experience",
    category: "Food & Restaurant",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 4 }, // Hero section
      { x: 0, y: 4, w: 3, h: 3 }, // Menu preview
      { x: 3, y: 4, w: 4, h: 3 }, // Chef's story
      { x: 7, y: 4, w: 3, h: 3 }, // Wine list
      { x: 0, y: 7, w: 2, h: 2 }, // Appetizers
      { x: 2, y: 7, w: 2, h: 2 }, // Main courses
      { x: 4, y: 7, w: 2, h: 2 }, // Desserts
      { x: 6, y: 7, w: 2, h: 2 }, // Beverages
      { x: 8, y: 7, w: 2, h: 2 }, // Specials
    ],
    preview: "/template-previews/premium-restaurant-luxury.jpg",
    tags: ["luxury", "restaurant", "fine-dining", "premium"],
  },
  {
    id: "premium-food-delivery-advanced",
    name: "Food Delivery Advanced",
    description: "Advanced food delivery platform",
    category: "Food & Restaurant",
    projectTypes: ["mobile", "website"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Platform header
      { x: 0, y: 2, w: 3, h: 2 }, // Order tracking
      { x: 3, y: 2, w: 3, h: 2 }, // Driver location
      { x: 6, y: 2, w: 4, h: 2 }, // Estimated delivery
      { x: 0, y: 4, w: 2, h: 2 }, // Restaurant 1
      { x: 2, y: 4, w: 2, h: 2 }, // Restaurant 2
      { x: 4, y: 4, w: 2, h: 2 }, // Restaurant 3
      { x: 6, y: 4, w: 2, h: 2 }, // Restaurant 4
      { x: 8, y: 4, w: 2, h: 2 }, // Restaurant 5
      { x: 0, y: 6, w: 5, h: 3 }, // Menu items
      { x: 5, y: 6, w: 5, h: 3 }, // Order summary
      { x: 0, y: 9, w: 5, h: 2 }, // Payment
      { x: 5, y: 9, w: 5, h: 2 }, // Delivery options
    ],
    preview: "/template-previews/premium-food-delivery-advanced.jpg",
    tags: ["delivery", "advanced", "platform", "premium"],
  },
  {
    id: "premium-culinary-platform",
    name: "Culinary Platform",
    description: "Complete culinary experience platform",
    category: "Food & Restaurant",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Platform header
      { x: 0, y: 2, w: 3, h: 3 }, // Recipe library
      { x: 3, y: 2, w: 4, h: 3 }, // Cooking classes
      { x: 7, y: 2, w: 3, h: 3 }, // Chef profiles
      { x: 0, y: 5, w: 2, h: 2 }, // Ingredients
      { x: 2, y: 5, w: 2, h: 2 }, // Techniques
      { x: 4, y: 5, w: 2, h: 2 }, // Equipment
      { x: 6, y: 5, w: 2, h: 2 }, // Wine pairing
      { x: 8, y: 5, w: 2, h: 2 }, // Events
      { x: 0, y: 7, w: 5, h: 2 }, // Community
      { x: 5, y: 7, w: 5, h: 2 }, // Premium content
    ],
    preview: "/template-previews/premium-culinary-platform.jpg",
    tags: ["culinary", "platform", "experience", "premium"],
  },
];
