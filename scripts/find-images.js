const fs = require("fs");

// Direct image search links and suggestions
const imageSources = {
  // Mobile App Templates
  "mobile-storyboard": {
    title: "Mobile App UI/UX Design",
    description:
      "E-commerce mobile app with product listings, shopping cart, and checkout flow",
    searchLinks: [
      "https://unsplash.com/s/photos/mobile-app-design",
      "https://unsplash.com/s/photos/iphone-mockup",
      "https://dribbble.com/tags/mobile_app",
      "https://www.behance.net/search/projects?search=mobile%20app%20ui",
    ],
    keywords: [
      "mobile app design",
      "iPhone mockup",
      "shopping app",
      "e-commerce app",
    ],
    examples: [
      "iPhone mockup with shopping app screens",
      "Mobile app interface with product catalog",
      "App screens showing checkout flow",
      "Mobile dashboard with user interface",
    ],
  },

  "free-ecommerce-showcase": {
    title: "E-commerce Website Design",
    description:
      "Online store with product gallery, category pages, and shopping experience",
    searchLinks: [
      "https://unsplash.com/s/photos/ecommerce-website",
      "https://unsplash.com/s/photos/online-store",
      "https://dribbble.com/tags/ecommerce",
      "https://www.behance.net/search/projects?search=ecommerce%20website",
    ],
    keywords: [
      "e-commerce website",
      "online store design",
      "shopping website",
      "product catalog",
    ],
    examples: [
      "Desktop e-commerce website with products",
      "Mobile responsive shopping site",
      "Product detail pages with images",
      "Shopping cart and checkout interface",
    ],
  },

  "free-dashboard-layout": {
    title: "Admin Dashboard UI",
    description:
      "Analytics dashboard with charts, metrics, and data visualization",
    searchLinks: [
      "https://unsplash.com/s/photos/dashboard-design",
      "https://unsplash.com/s/photos/admin-interface",
      "https://dribbble.com/tags/dashboard",
      "https://www.behance.net/search/projects?search=dashboard%20ui",
    ],
    keywords: [
      "dashboard design",
      "admin interface",
      "analytics dashboard",
      "data visualization",
    ],
    examples: [
      "Desktop dashboard with charts and graphs",
      "Analytics interface with metrics",
      "Admin panel with data tables",
      "Business dashboard with KPIs",
    ],
  },

  "free-portfolio-grid": {
    title: "Designer Portfolio",
    description:
      "Creative portfolio showcasing UI/UX projects and case studies",
    searchLinks: [
      "https://unsplash.com/s/photos/portfolio-website",
      "https://unsplash.com/s/photos/designer-portfolio",
      "https://dribbble.com/tags/portfolio",
      "https://www.behance.net/search/projects?search=portfolio%20website",
    ],
    keywords: [
      "portfolio website",
      "designer portfolio",
      "creative portfolio",
      "project showcase",
    ],
    examples: [
      "Designer portfolio with project gallery",
      "Creative portfolio with case studies",
      "Portfolio website with work examples",
      "Professional portfolio layout",
    ],
  },

  "free-restaurant-menu": {
    title: "Restaurant Website & App",
    description:
      "Food delivery app with menu browsing, ordering, and delivery tracking",
    searchLinks: [
      "https://unsplash.com/s/photos/food-delivery-app",
      "https://unsplash.com/s/photos/restaurant-app",
      "https://dribbble.com/tags/food_delivery",
      "https://www.behance.net/search/projects?search=restaurant%20app",
    ],
    keywords: [
      "food delivery app",
      "restaurant app",
      "menu design",
      "food ordering",
    ],
    examples: [
      "Mobile app with food menu",
      "Restaurant ordering interface",
      "Food delivery app screens",
      "Menu browsing with food photos",
    ],
  },

  "free-travel-blog": {
    title: "Travel Booking Platform",
    description:
      "Travel website with destination guides, booking system, and reviews",
    searchLinks: [
      "https://unsplash.com/s/photos/travel-website",
      "https://unsplash.com/s/photos/booking-platform",
      "https://dribbble.com/tags/travel",
      "https://www.behance.net/search/projects?search=travel%20website",
    ],
    keywords: [
      "travel website",
      "booking platform",
      "destination guide",
      "travel booking",
    ],
    examples: [
      "Travel website with destination photos",
      "Hotel booking interface",
      "Travel blog with beautiful imagery",
      "Destination showcase with booking",
    ],
  },

  "free-photography-portfolio": {
    title: "Photography Portfolio",
    description:
      "Professional photography website with galleries and client services",
    searchLinks: [
      "https://unsplash.com/s/photos/photography-portfolio",
      "https://unsplash.com/s/photos/photo-gallery",
      "https://dribbble.com/tags/photography",
      "https://www.behance.net/search/projects?search=photography%20portfolio",
    ],
    keywords: [
      "photography portfolio",
      "photo gallery",
      "photographer website",
      "photo showcase",
    ],
    examples: [
      "Photography portfolio with galleries",
      "Photo gallery with elegant layout",
      "Photographer website with services",
      "Professional photo showcase",
    ],
  },

  "free-music-player": {
    title: "Music Streaming App",
    description: "Music player with playlists, discovery, and social features",
    searchLinks: [
      "https://unsplash.com/s/photos/music-app",
      "https://unsplash.com/s/photos/streaming-app",
      "https://dribbble.com/tags/music_app",
      "https://www.behance.net/search/projects?search=music%20app",
    ],
    keywords: [
      "music app",
      "streaming app",
      "music player",
      "playlist interface",
    ],
    examples: [
      "Mobile music app interface",
      "Music streaming app screens",
      "Playlist management interface",
      "Music discovery app design",
    ],
  },

  "free-fitness-tracker": {
    title: "Fitness & Wellness App",
    description:
      "Comprehensive fitness app with workouts, nutrition, and progress tracking",
    searchLinks: [
      "https://unsplash.com/s/photos/fitness-app",
      "https://unsplash.com/s/photos/health-app",
      "https://dribbble.com/tags/fitness_app",
      "https://www.behance.net/search/projects?search=fitness%20app",
    ],
    keywords: ["fitness app", "health app", "workout tracker", "wellness app"],
    examples: [
      "Fitness app with workout screens",
      "Health tracking dashboard",
      "Workout planning interface",
      "Fitness progress tracking",
    ],
  },
};

function generateSearchGuide() {
  console.log("🎯 IMAGE SEARCH GUIDE FOR REAL PROJECT PREVIEWS\n");
  console.log(
    "Find these images to replace generic placeholders with real project screenshots!\n"
  );

  Object.entries(imageSources).forEach(([templateId, info]) => {
    console.log(`📱 ${info.title}`);
    console.log(`   Template ID: ${templateId}`);
    console.log(`   Description: ${info.description}`);
    console.log(`   File needed: public/template-previews/${templateId}.jpg`);
    console.log("");
    console.log("   🔍 Search Links:");
    info.searchLinks.forEach((link) => {
      console.log(`      ${link}`);
    });
    console.log("");
    console.log("   🏷️  Keywords to search:");
    info.keywords.forEach((keyword) => {
      console.log(`      • "${keyword}"`);
    });
    console.log("");
    console.log("   ✅ What to look for:");
    info.examples.forEach((example) => {
      console.log(`      • ${example}`);
    });
    console.log("   " + "─".repeat(60));
    console.log("");
  });
}

function generateQuickStart() {
  console.log("🚀 QUICK START: Find Images for Priority Templates\n");

  const priorityTemplates = [
    "mobile-storyboard",
    "free-ecommerce-showcase",
    "free-dashboard-layout",
    "free-portfolio-grid",
  ];

  priorityTemplates.forEach((templateId, index) => {
    const info = imageSources[templateId];
    console.log(`${index + 1}. ${info.title}`);
    console.log(`   📁 Save as: public/template-previews/${templateId}.jpg`);
    console.log(`   🔍 Search: ${info.keywords[0]}`);
    console.log(`   🌐 Go to: ${info.searchLinks[0]}`);
    console.log(`   📏 Size: 400x300 pixels`);
    console.log("");
  });
}

function generateDownloadSteps() {
  console.log("📥 DOWNLOAD STEPS:\n");
  console.log("1. Go to the search links above");
  console.log(
    "2. Find images that show REAL project screenshots (not generic boxes)"
  );
  console.log("3. Download the images");
  console.log("4. Resize to 400x300 pixels using any image editor");
  console.log("5. Save as JPG format");
  console.log("6. Place in public/template-previews/ folder");
  console.log("7. Name exactly like template ID (e.g., mobile-storyboard.jpg)");
  console.log("");
  console.log(
    "💡 TIP: Look for images that show actual UI designs, not abstract graphics!"
  );
}

// Main execution
const command = process.argv[2];

switch (command) {
  case "guide":
    generateSearchGuide();
    break;
  case "quick":
    generateQuickStart();
    generateDownloadSteps();
    break;
  default:
    console.log("Usage: node find-images.js [guide|quick]");
    console.log("");
    console.log("Commands:");
    console.log("  guide - Full search guide for all templates");
    console.log("  quick - Quick start for priority templates");
    break;
}
