const fs = require("fs");
const path = require("path");

// Real project examples for each template category
const realProjectExamples = {
  // Mobile App Templates
  "mobile-storyboard": {
    title: "Mobile App UI/UX Design",
    description:
      "E-commerce mobile app with product listings, shopping cart, and checkout flow",
    examples: [
      "Product catalog with grid layout",
      "Product detail page with images",
      "Shopping cart interface",
      "Checkout and payment flow",
      "User profile and settings",
    ],
    imageStyle: "iPhone mockups with realistic app screens",
  },

  "free-mobile-grid": {
    title: "Mobile App Portfolio",
    description:
      "Fitness tracking app with dashboard, workout screens, and progress charts",
    examples: [
      "Dashboard with activity metrics",
      "Workout selection interface",
      "Progress tracking charts",
      "User profile and achievements",
      "Settings and preferences",
    ],
    imageStyle: "Android and iPhone mockups showing app flow",
  },

  // E-commerce Templates
  "free-ecommerce-showcase": {
    title: "E-commerce Website Design",
    description:
      "Online store with product gallery, category pages, and shopping experience",
    examples: [
      "Homepage with featured products",
      "Product category pages",
      "Product detail with images",
      "Shopping cart and checkout",
      "User account dashboard",
    ],
    imageStyle: "Desktop and mobile responsive designs",
  },

  // Dashboard Templates
  "free-dashboard-layout": {
    title: "Admin Dashboard UI",
    description:
      "Analytics dashboard with charts, metrics, and data visualization",
    examples: [
      "Main dashboard with KPIs",
      "Analytics charts and graphs",
      "User management interface",
      "Settings and configuration",
      "Reports and insights",
    ],
    imageStyle: "Desktop dashboard with modern UI elements",
  },

  // Portfolio Templates
  "free-portfolio-grid": {
    title: "Designer Portfolio",
    description:
      "Creative portfolio showcasing UI/UX projects and case studies",
    examples: [
      "Project case study pages",
      "Work showcase gallery",
      "About and contact sections",
      "Process and methodology",
      "Client testimonials",
    ],
    imageStyle: "Modern portfolio with project screenshots",
  },

  // Restaurant/Food Templates
  "free-restaurant-menu": {
    title: "Restaurant Website & App",
    description:
      "Food delivery app with menu browsing, ordering, and delivery tracking",
    examples: [
      "Menu browsing interface",
      "Food item details",
      "Order and checkout process",
      "Delivery tracking",
      "Restaurant information",
    ],
    imageStyle: "Mobile app with food photography",
  },

  // Travel Templates
  "free-travel-blog": {
    title: "Travel Booking Platform",
    description:
      "Travel website with destination guides, booking system, and reviews",
    examples: [
      "Destination showcase pages",
      "Hotel and flight booking",
      "Travel itinerary planner",
      "User reviews and ratings",
      "Travel blog and guides",
    ],
    imageStyle: "Travel photography with booking interfaces",
  },

  // Photography Templates
  "free-photography-portfolio": {
    title: "Photography Portfolio",
    description:
      "Professional photography website with galleries and client services",
    examples: [
      "Photo gallery layouts",
      "Portfolio collections",
      "Client booking system",
      "About and services",
      "Contact and pricing",
    ],
    imageStyle: "High-quality photography with elegant layouts",
  },

  // Music Templates
  "free-music-player": {
    title: "Music Streaming App",
    description: "Music player with playlists, discovery, and social features",
    examples: [
      "Music library interface",
      "Playlist management",
      "Now playing screen",
      "Discovery and recommendations",
      "User profile and social features",
    ],
    imageStyle: "Mobile app with music-themed UI",
  },

  // Fitness Templates
  "free-fitness-tracker": {
    title: "Fitness & Wellness App",
    description:
      "Comprehensive fitness app with workouts, nutrition, and progress tracking",
    examples: [
      "Workout library and plans",
      "Progress tracking dashboard",
      "Nutrition and meal planning",
      "Community and challenges",
      "Settings and preferences",
    ],
    imageStyle: "Fitness app with workout and health data",
  },

  // Premium Templates
  "premium-mobile-app": {
    title: "Premium Mobile App Suite",
    description:
      "Enterprise-level mobile application with advanced features and polish",
    examples: [
      "Sophisticated onboarding flow",
      "Advanced dashboard with analytics",
      "Premium user experience",
      "Enterprise features and security",
      "Professional UI/UX design",
    ],
    imageStyle: "High-end mobile app with premium design",
  },

  "premium-restaurant": {
    title: "Luxury Restaurant Platform",
    description:
      "High-end restaurant website with reservations, menu, and dining experience",
    examples: [
      "Elegant homepage design",
      "Interactive menu system",
      "Reservation management",
      "Wine and beverage selection",
      "Private dining options",
    ],
    imageStyle: "Luxury restaurant with sophisticated design",
  },

  "premium-fitness": {
    title: "Premium Fitness Platform",
    description:
      "Comprehensive fitness ecosystem with personal training and community",
    examples: [
      "Personalized workout plans",
      "Live training sessions",
      "Nutrition coaching",
      "Community and social features",
      "Premium analytics and insights",
    ],
    imageStyle: "Premium fitness platform with advanced features",
  },
};

// Generate preview descriptions for each template
function generatePreviewDescriptions() {
  console.log("=== REAL PROJECT PREVIEW DESCRIPTIONS ===\n");

  Object.entries(realProjectExamples).forEach(([templateId, project]) => {
    console.log(`Template: ${templateId}`);
    console.log(`Title: ${project.title}`);
    console.log(`Description: ${project.description}`);
    console.log(`Image Style: ${project.imageStyle}`);
    console.log("Examples:");
    project.examples.forEach((example, index) => {
      console.log(`  ${index + 1}. ${example}`);
    });
    console.log("");
  });
}

// Generate search suggestions for finding real images
function generateImageSearchSuggestions() {
  console.log("=== IMAGE SEARCH SUGGESTIONS ===\n");

  Object.entries(realProjectExamples).forEach(([templateId, project]) => {
    console.log(`${templateId}:`);
    console.log(
      `  Search terms: "${project.title}", "${project.description
        .split(" ")
        .slice(0, 4)
        .join(" ")}"`
    );
    console.log(`  Style: ${project.imageStyle}`);
    console.log(`  Keywords: ${project.examples.slice(0, 3).join(", ")}`);
    console.log("");
  });
}

// Generate HTML preview cards
function generatePreviewCards() {
  console.log("=== HTML PREVIEW CARDS ===\n");

  Object.entries(realProjectExamples).forEach(([templateId, project]) => {
    console.log(`<!-- ${templateId} -->`);
    console.log(`<div class="template-preview-card">`);
    console.log(`  <div class="preview-image">`);
    console.log(
      `    <img src="/template-previews/${templateId}.jpg" alt="${project.title}" />`
    );
    console.log(`  </div>`);
    console.log(`  <div class="preview-content">`);
    console.log(`    <h3>${project.title}</h3>`);
    console.log(`    <p>${project.description}</p>`);
    console.log(`    <div class="preview-examples">`);
    project.examples.slice(0, 3).forEach((example) => {
      console.log(`      <span class="example-tag">${example}</span>`);
    });
    console.log(`    </div>`);
    console.log(`  </div>`);
    console.log(`</div>`);
    console.log("");
  });
}

// Main execution
const command = process.argv[2];

switch (command) {
  case "descriptions":
    generatePreviewDescriptions();
    break;
  case "search":
    generateImageSearchSuggestions();
    break;
  case "html":
    generatePreviewCards();
    break;
  default:
    console.log(
      "Usage: node create-real-previews.js [descriptions|search|html]"
    );
    console.log("");
    console.log("Commands:");
    console.log("  descriptions - Generate detailed project descriptions");
    console.log("  search      - Generate image search suggestions");
    console.log("  html        - Generate HTML preview cards");
    break;
}
