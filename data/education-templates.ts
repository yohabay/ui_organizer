import type { Template } from "@/types";

export const educationTemplates: Template[] = [
  {
    id: "free-course-catalog",
    name: "Course Catalog",
    description: "Online course catalog layout",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Course 1
      { x: 2, y: 2, w: 2, h: 2 }, // Course 2
      { x: 4, y: 2, w: 2, h: 2 }, // Course 3
      { x: 0, y: 4, w: 2, h: 2 }, // Course 4
      { x: 2, y: 4, w: 2, h: 2 }, // Course 5
      { x: 4, y: 4, w: 2, h: 2 }, // Course 6
    ],
    preview: "/template-previews/free-course-catalog.jpg",
    tags: ["education", "courses", "catalog", "learning"],
  },
  {
    id: "free-learning-dashboard",
    name: "Learning Dashboard",
    description: "Student learning dashboard",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Progress
      { x: 2, y: 2, w: 2, h: 2 }, // Grades
      { x: 4, y: 2, w: 2, h: 2 }, // Assignments
      { x: 6, y: 2, w: 2, h: 2 }, // Calendar
      { x: 0, y: 4, w: 4, h: 3 }, // Current course
      { x: 4, y: 4, w: 4, h: 3 }, // Recent activity
    ],
    preview: "/template-previews/free-learning-dashboard.jpg",
    tags: ["dashboard", "student", "progress", "education"],
  },
  {
    id: "free-student-portal",
    name: "Student Portal",
    description: "Student portal interface",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Profile
      { x: 2, y: 1, w: 2, h: 2 }, // Courses
      { x: 4, y: 1, w: 2, h: 2 }, // Grades
      { x: 0, y: 3, w: 3, h: 3 }, // Course list
      { x: 3, y: 3, w: 3, h: 3 }, // Notifications
      { x: 0, y: 6, w: 3, h: 2 }, // Resources
      { x: 3, y: 6, w: 3, h: 2 }, // Support
    ],
    preview: "/template-previews/free-student-portal.jpg",
    tags: ["portal", "student", "interface", "education"],
  },
  {
    id: "free-quiz-platform",
    name: "Quiz Platform",
    description: "Interactive quiz and assessment",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 1 }, // Header
      { x: 0, y: 1, w: 4, h: 3 }, // Question
      { x: 4, y: 1, w: 2, h: 3 }, // Timer
      { x: 0, y: 4, w: 2, h: 2 }, // Option A
      { x: 2, y: 4, w: 2, h: 2 }, // Option B
      { x: 4, y: 4, w: 2, h: 2 }, // Option C
    ],
    preview: "/template-previews/free-quiz-platform.jpg",
    tags: ["quiz", "assessment", "interactive", "education"],
  },
  {
    id: "free-education-app",
    name: "Education App",
    description: "Mobile education application",
    category: "Education & Learning",
    projectTypes: ["mobile"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Lessons
      { x: 2, y: 1, w: 2, h: 2 }, // Practice
      { x: 0, y: 3, w: 2, h: 2 }, // Progress
      { x: 2, y: 3, w: 2, h: 2 }, // Achievements
      { x: 0, y: 5, w: 4, h: 2 }, // Current lesson
      { x: 0, y: 7, w: 4, h: 1 }, // Navigation
    ],
    preview: "/template-previews/free-education-app.jpg",
    tags: ["education", "mobile", "app", "learning"],
  },
  {
    id: "premium-learning-platform",
    name: "Learning Platform",
    description: "Advanced learning management system",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Platform header
      { x: 0, y: 2, w: 3, h: 3 }, // Course management
      { x: 3, y: 2, w: 4, h: 3 }, // Learning analytics
      { x: 7, y: 2, w: 3, h: 3 }, // Student progress
      { x: 0, y: 5, w: 2, h: 2 }, // Assignments
      { x: 2, y: 5, w: 2, h: 2 }, // Discussions
      { x: 4, y: 5, w: 2, h: 2 }, // Resources
      { x: 6, y: 5, w: 2, h: 2 }, // Assessments
      { x: 8, y: 5, w: 2, h: 2 }, // Grades
      { x: 0, y: 7, w: 5, h: 2 }, // Recent activity
      { x: 5, y: 7, w: 5, h: 2 }, // Notifications
    ],
    preview: "/template-previews/premium-learning-platform.jpg",
    tags: ["platform", "advanced", "management", "premium"],
  },
  {
    id: "premium-course-advanced",
    name: "Course Advanced",
    description: "Advanced course creation tools",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Course builder
      { x: 0, y: 2, w: 3, h: 3 }, // Content editor
      { x: 3, y: 2, w: 4, h: 3 }, // Course preview
      { x: 7, y: 2, w: 3, h: 3 }, // Settings
      { x: 0, y: 5, w: 2, h: 2 }, // Modules
      { x: 2, y: 5, w: 2, h: 2 }, // Lessons
      { x: 4, y: 5, w: 2, h: 2 }, // Quizzes
      { x: 6, y: 5, w: 2, h: 2 }, // Assignments
      { x: 8, y: 5, w: 2, h: 2 }, // Resources
      { x: 0, y: 7, w: 5, h: 3 }, // Analytics
      { x: 5, y: 7, w: 5, h: 3 }, // Student feedback
    ],
    preview: "/template-previews/premium-course-advanced.jpg",
    tags: ["advanced", "course", "creation", "premium"],
  },
  {
    id: "premium-education-analytics",
    name: "Education Analytics",
    description: "Comprehensive education analytics",
    category: "Education & Learning",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Analytics header
      { x: 0, y: 2, w: 3, h: 2 }, // Student engagement
      { x: 3, y: 2, w: 3, h: 2 }, // Course completion
      { x: 6, y: 2, w: 3, h: 2 }, // Assessment scores
      { x: 9, y: 2, w: 3, h: 2 }, // Learning outcomes
      { x: 0, y: 4, w: 6, h: 3 }, // Performance trends
      { x: 6, y: 4, w: 6, h: 3 }, // Student progress
      { x: 0, y: 7, w: 4, h: 2 }, // Course analytics
      { x: 4, y: 7, w: 4, h: 2 }, // Instructor insights
      { x: 8, y: 7, w: 4, h: 2 }, // Recommendations
    ],
    preview: "/template-previews/premium-education-analytics.jpg",
    tags: ["analytics", "education", "insights", "premium"],
  },
];
