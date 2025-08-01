import type { Template } from "@/types";

export const fitnessTemplates: Template[] = [
  {
    id: "free-fitness-tracker",
    name: "Fitness Tracker",
    description: "Basic fitness tracking app layout",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 6,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Steps
      { x: 2, y: 1, w: 2, h: 2 }, // Calories
      { x: 0, y: 3, w: 2, h: 2 }, // Workouts
      { x: 2, y: 3, w: 2, h: 2 }, // Goals
    ],
    preview: "/template-previews/free-fitness-tracker.jpg",
    tags: ["fitness", "tracking", "health", "mobile"],
  },
  {
    id: "free-workout-planner",
    name: "Workout Planner",
    description: "Workout planning and scheduling",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Calendar
      { x: 0, y: 2, w: 3, h: 2 }, // Today's workout
      { x: 3, y: 2, w: 3, h: 2 }, // Progress
      { x: 0, y: 4, w: 2, h: 2 }, // Exercise 1
      { x: 2, y: 4, w: 2, h: 2 }, // Exercise 2
      { x: 4, y: 4, w: 2, h: 2 }, // Exercise 3
      { x: 0, y: 6, w: 3, h: 2 }, // Timer
      { x: 3, y: 6, w: 3, h: 2 }, // Stats
    ],
    preview: "/template-previews/free-workout-planner.jpg",
    tags: ["workout", "planning", "exercises", "scheduling"],
  },
  {
    id: "free-health-dashboard",
    name: "Health Dashboard",
    description: "Comprehensive health monitoring",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Heart rate
      { x: 2, y: 2, w: 2, h: 2 }, // Sleep
      { x: 4, y: 2, w: 2, h: 2 }, // Weight
      { x: 6, y: 2, w: 2, h: 2 }, // BMI
      { x: 0, y: 4, w: 4, h: 2 }, // Activity chart
      { x: 4, y: 4, w: 4, h: 2 }, // Nutrition
      { x: 0, y: 6, w: 4, h: 2 }, // Goals
      { x: 4, y: 6, w: 4, h: 2 }, // Reminders
    ],
    preview: "/template-previews/free-health-dashboard.jpg",
    tags: ["health", "dashboard", "monitoring", "metrics"],
  },
  {
    id: "free-nutrition-tracker",
    name: "Nutrition Tracker",
    description: "Food and nutrition tracking",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Calories
      { x: 2, y: 1, w: 2, h: 2 }, // Protein
      { x: 4, y: 1, w: 2, h: 2 }, // Carbs
      { x: 0, y: 3, w: 3, h: 3 }, // Food log
      { x: 3, y: 3, w: 3, h: 3 }, // Water intake
      { x: 0, y: 6, w: 3, h: 2 }, // Meal planning
      { x: 3, y: 6, w: 3, h: 2 }, // Recipes
    ],
    preview: "/template-previews/free-nutrition-tracker.jpg",
    tags: ["nutrition", "food", "tracking", "diet"],
  },
  {
    id: "free-wellness-app",
    name: "Wellness App",
    description: "Holistic wellness and mindfulness",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Meditation timer
      { x: 0, y: 2, w: 2, h: 2 }, // Mood tracker
      { x: 2, y: 2, w: 2, h: 2 }, // Stress level
      { x: 4, y: 2, w: 2, h: 2 }, // Energy
      { x: 0, y: 4, w: 3, h: 2 }, // Breathing exercises
      { x: 3, y: 4, w: 3, h: 2 }, // Journal
      { x: 0, y: 6, w: 3, h: 2 }, // Gratitude
      { x: 3, y: 6, w: 3, h: 2 }, // Goals
    ],
    preview: "/template-previews/free-wellness-app.jpg",
    tags: ["wellness", "mindfulness", "meditation", "holistic"],
  },
  {
    id: "premium-fitness-advanced",
    name: "Fitness Advanced",
    description: "Advanced fitness tracking with AI",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // AI insights
      { x: 0, y: 2, w: 2, h: 2 }, // VO2 max
      { x: 2, y: 2, w: 2, h: 2 }, // Recovery
      { x: 4, y: 2, w: 2, h: 2 }, // Performance
      { x: 6, y: 2, w: 2, h: 2 }, // Training load
      { x: 0, y: 4, w: 4, h: 3 }, // Advanced metrics
      { x: 4, y: 4, w: 4, h: 3 }, // Personal records
      { x: 0, y: 7, w: 4, h: 2 }, // Coach insights
      { x: 4, y: 7, w: 4, h: 2 }, // Recommendations
    ],
    preview: "/template-previews/premium-fitness-advanced.jpg",
    tags: ["advanced", "AI", "performance", "premium"],
  },
  {
    id: "premium-health-analytics",
    name: "Health Analytics",
    description: "Comprehensive health analytics platform",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Analytics header
      { x: 0, y: 2, w: 2, h: 2 }, // Blood pressure
      { x: 2, y: 2, w: 2, h: 2 }, // Blood sugar
      { x: 4, y: 2, w: 2, h: 2 }, // Cholesterol
      { x: 6, y: 2, w: 2, h: 2 }, // Body composition
      { x: 8, y: 2, w: 2, h: 2 }, // Hormones
      { x: 0, y: 4, w: 5, h: 4 }, // Health trends
      { x: 5, y: 4, w: 5, h: 4 }, // Risk assessment
      { x: 0, y: 8, w: 4, h: 2 }, // Doctor reports
      { x: 4, y: 8, w: 3, h: 2 }, // Medications
      { x: 7, y: 8, w: 3, h: 2 }, // Allergies
    ],
    preview: "/template-previews/premium-health-analytics.jpg",
    tags: ["analytics", "health", "medical", "premium"],
  },
  {
    id: "premium-wellness-platform",
    name: "Wellness Platform",
    description: "Complete wellness ecosystem",
    category: "Fitness & Health",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Platform header
      { x: 0, y: 2, w: 3, h: 3 }, // Mental health
      { x: 3, y: 2, w: 4, h: 3 }, // Physical health
      { x: 7, y: 2, w: 3, h: 3 }, // Social health
      { x: 0, y: 5, w: 2, h: 2 }, // Sleep tracking
      { x: 2, y: 5, w: 2, h: 2 }, // Stress management
      { x: 4, y: 5, w: 2, h: 2 }, // Nutrition coaching
      { x: 6, y: 5, w: 2, h: 2 }, // Exercise programs
      { x: 8, y: 5, w: 2, h: 2 }, // Community
      { x: 0, y: 7, w: 5, h: 2 }, // Progress reports
      { x: 5, y: 7, w: 5, h: 2 }, // Recommendations
    ],
    preview: "/template-previews/premium-wellness-platform.jpg",
    tags: ["wellness", "platform", "ecosystem", "premium"],
  },
];
