const fs = require("fs");

// Multi-screen image collections for each template
const multiScreenCollections = {
  // Mobile App Templates
  "mobile-storyboard": {
    title: "Mobile App UI/UX Design",
    description: "E-commerce mobile app with multiple screens",
    screens: [
      "Login/Signup screen",
      "Homepage with product grid",
      "Product detail page",
      "Shopping cart",
      "Checkout process",
      "User profile",
      "Settings page",
      "Search results",
    ],
    searchTerms: [
      "mobile app login screen",
      "app homepage design",
      "product detail page mobile",
      "shopping cart mobile app",
      "checkout flow mobile",
      "user profile mobile app",
      "app settings screen",
      "search results mobile",
    ],
    links: [
      "https://dribbble.com/tags/mobile_login",
      "https://dribbble.com/tags/mobile_homepage",
      "https://dribbble.com/tags/product_detail",
      "https://dribbble.com/tags/shopping_cart",
      "https://dribbble.com/tags/checkout",
      "https://dribbble.com/tags/user_profile",
      "https://dribbble.com/tags/app_settings",
      "https://dribbble.com/tags/search_results",
    ],
  },

  "free-ecommerce-showcase": {
    title: "E-commerce Website Design",
    description: "Online store with multiple pages",
    screens: [
      "Homepage with hero section",
      "Product category page",
      "Product detail page",
      "Shopping cart page",
      "Checkout process",
      "User account dashboard",
      "Search results page",
      "About/Contact page",
    ],
    searchTerms: [
      "ecommerce homepage design",
      "product category page",
      "product detail page design",
      "shopping cart website",
      "checkout page design",
      "user account dashboard",
      "search results ecommerce",
      "about page design",
    ],
    links: [
      "https://dribbble.com/tags/ecommerce_homepage",
      "https://dribbble.com/tags/product_category",
      "https://dribbble.com/tags/product_detail",
      "https://dribbble.com/tags/shopping_cart",
      "https://dribbble.com/tags/checkout",
      "https://dribbble.com/tags/user_dashboard",
      "https://dribbble.com/tags/search_results",
      "https://dribbble.com/tags/about_page",
    ],
  },

  "free-dashboard-layout": {
    title: "Admin Dashboard UI",
    description: "Analytics dashboard with multiple views",
    screens: [
      "Main dashboard overview",
      "Analytics charts page",
      "User management page",
      "Settings configuration",
      "Reports page",
      "Notifications center",
      "Data tables view",
      "Profile settings",
    ],
    searchTerms: [
      "dashboard overview design",
      "analytics charts dashboard",
      "user management interface",
      "settings configuration",
      "reports dashboard",
      "notifications center",
      "data tables design",
      "profile settings",
    ],
    links: [
      "https://dribbble.com/tags/dashboard_overview",
      "https://dribbble.com/tags/analytics_charts",
      "https://dribbble.com/tags/user_management",
      "https://dribbble.com/tags/settings_config",
      "https://dribbble.com/tags/reports_dashboard",
      "https://dribbble.com/tags/notifications",
      "https://dribbble.com/tags/data_tables",
      "https://dribbble.com/tags/profile_settings",
    ],
  },

  "free-portfolio-grid": {
    title: "Designer Portfolio",
    description: "Creative portfolio with multiple sections",
    screens: [
      "Homepage/hero section",
      "Projects gallery page",
      "Project case study page",
      "About page",
      "Services page",
      "Contact page",
      "Blog/Articles page",
      "Resume/CV page",
    ],
    searchTerms: [
      "portfolio homepage design",
      "projects gallery portfolio",
      "case study page design",
      "about page portfolio",
      "services page design",
      "contact page design",
      "blog page design",
      "resume page design",
    ],
    links: [
      "https://dribbble.com/tags/portfolio_homepage",
      "https://dribbble.com/tags/projects_gallery",
      "https://dribbble.com/tags/case_study",
      "https://dribbble.com/tags/about_page",
      "https://dribbble.com/tags/services_page",
      "https://dribbble.com/tags/contact_page",
      "https://dribbble.com/tags/blog_page",
      "https://dribbble.com/tags/resume_page",
    ],
  },

  "free-restaurant-menu": {
    title: "Restaurant Website & App",
    description: "Food delivery with multiple screens",
    screens: [
      "Homepage with menu preview",
      "Menu browsing page",
      "Food item detail page",
      "Order cart page",
      "Checkout process",
      "Order tracking page",
      "Restaurant info page",
      "User account page",
    ],
    searchTerms: [
      "restaurant homepage design",
      "menu browsing page",
      "food item detail",
      "order cart page",
      "restaurant checkout",
      "order tracking page",
      "restaurant info page",
      "user account restaurant",
    ],
    links: [
      "https://dribbble.com/tags/restaurant_homepage",
      "https://dribbble.com/tags/menu_browsing",
      "https://dribbble.com/tags/food_detail",
      "https://dribbble.com/tags/order_cart",
      "https://dribbble.com/tags/restaurant_checkout",
      "https://dribbble.com/tags/order_tracking",
      "https://dribbble.com/tags/restaurant_info",
      "https://dribbble.com/tags/user_account",
    ],
  },

  "free-travel-blog": {
    title: "Travel Booking Platform",
    description: "Travel website with multiple pages",
    screens: [
      "Homepage with destinations",
      "Destination search page",
      "Hotel listing page",
      "Hotel detail page",
      "Booking process",
      "Travel blog page",
      "User account page",
      "Contact/Support page",
    ],
    searchTerms: [
      "travel homepage design",
      "destination search page",
      "hotel listing page",
      "hotel detail page",
      "travel booking process",
      "travel blog design",
      "user account travel",
      "contact support page",
    ],
    links: [
      "https://dribbble.com/tags/travel_homepage",
      "https://dribbble.com/tags/destination_search",
      "https://dribbble.com/tags/hotel_listing",
      "https://dribbble.com/tags/hotel_detail",
      "https://dribbble.com/tags/travel_booking",
      "https://dribbble.com/tags/travel_blog",
      "https://dribbble.com/tags/user_account",
      "https://dribbble.com/tags/contact_support",
    ],
  },

  "free-photography-portfolio": {
    title: "Photography Portfolio",
    description: "Photographer website with galleries",
    screens: [
      "Homepage with featured photos",
      "Photo gallery page",
      "Photo detail page",
      "About photographer page",
      "Services page",
      "Pricing page",
      "Contact page",
      "Blog page",
    ],
    searchTerms: [
      "photography homepage",
      "photo gallery design",
      "photo detail page",
      "photographer about page",
      "photography services",
      "pricing page design",
      "contact page design",
      "photography blog",
    ],
    links: [
      "https://dribbble.com/tags/photography_homepage",
      "https://dribbble.com/tags/photo_gallery",
      "https://dribbble.com/tags/photo_detail",
      "https://dribbble.com/tags/photographer_about",
      "https://dribbble.com/tags/photography_services",
      "https://dribbble.com/tags/pricing_page",
      "https://dribbble.com/tags/contact_page",
      "https://dribbble.com/tags/photography_blog",
    ],
  },

  "free-music-player": {
    title: "Music Streaming App",
    description: "Music app with multiple screens",
    screens: [
      "Login/Signup screen",
      "Homepage with playlists",
      "Music library page",
      "Now playing screen",
      "Playlist detail page",
      "Search results page",
      "User profile page",
      "Settings page",
    ],
    searchTerms: [
      "music app login",
      "music homepage design",
      "music library page",
      "now playing screen",
      "playlist detail page",
      "music search results",
      "user profile music",
      "music app settings",
    ],
    links: [
      "https://dribbble.com/tags/music_login",
      "https://dribbble.com/tags/music_homepage",
      "https://dribbble.com/tags/music_library",
      "https://dribbble.com/tags/now_playing",
      "https://dribbble.com/tags/playlist_detail",
      "https://dribbble.com/tags/music_search",
      "https://dribbble.com/tags/user_profile",
      "https://dribbble.com/tags/music_settings",
    ],
  },

  "free-fitness-tracker": {
    title: "Fitness & Wellness App",
    description: "Fitness app with multiple screens",
    screens: [
      "Login/Onboarding screen",
      "Dashboard with stats",
      "Workout library page",
      "Workout detail page",
      "Progress tracking page",
      "Nutrition page",
      "User profile page",
      "Settings page",
    ],
    searchTerms: [
      "fitness app login",
      "fitness dashboard design",
      "workout library page",
      "workout detail page",
      "progress tracking page",
      "nutrition page design",
      "fitness user profile",
      "fitness app settings",
    ],
    links: [
      "https://dribbble.com/tags/fitness_login",
      "https://dribbble.com/tags/fitness_dashboard",
      "https://dribbble.com/tags/workout_library",
      "https://dribbble.com/tags/workout_detail",
      "https://dribbble.com/tags/progress_tracking",
      "https://dribbble.com/tags/nutrition_page",
      "https://dribbble.com/tags/fitness_profile",
      "https://dribbble.com/tags/fitness_settings",
    ],
  },
};

function generateMultiScreenGuide() {
  console.log("🎯 MULTI-SCREEN IMAGE COLLECTION GUIDE\n");
  console.log(
    "Find multiple screenshots for each template to arrange in grids!\n"
  );

  Object.entries(multiScreenCollections).forEach(([templateId, info]) => {
    console.log(`📱 ${info.title}`);
    console.log(`   Template ID: ${templateId}`);
    console.log(`   Description: ${info.description}`);
    console.log(`   File needed: public/template-previews/${templateId}.jpg`);
    console.log("");
    console.log("   📱 Screens needed:");
    info.screens.forEach((screen, index) => {
      console.log(`      ${index + 1}. ${screen}`);
    });
    console.log("");
    console.log("   🔍 Search terms for each screen:");
    info.searchTerms.forEach((term, index) => {
      console.log(`      ${index + 1}. "${term}"`);
    });
    console.log("");
    console.log("   🌐 Dribbble links for each screen:");
    info.links.forEach((link, index) => {
      console.log(`      ${index + 1}. ${link}`);
    });
    console.log("   " + "─".repeat(60));
    console.log("");
  });
}

function generateQuickMultiScreen() {
  console.log("🚀 QUICK START: Find Multi-Screen Images\n");

  const priorityTemplates = [
    "mobile-storyboard",
    "free-ecommerce-showcase",
    "free-dashboard-layout",
    "free-portfolio-grid",
  ];

  priorityTemplates.forEach((templateId, index) => {
    const info = multiScreenCollections[templateId];
    console.log(`${index + 1}. ${info.title}`);
    console.log(`   📁 Save as: public/template-previews/${templateId}.jpg`);
    console.log(`   📱 Screens needed: ${info.screens.length} screens`);
    console.log(`   🔍 Main search: ${info.searchTerms[0]}`);
    console.log(`   🌐 Start here: ${info.links[0]}`);
    console.log("");
    console.log("   📋 Screens to find:");
    info.screens.slice(0, 4).forEach((screen, i) => {
      console.log(`      • ${screen}`);
    });
    console.log("");
  });
}

function generateDownloadInstructions() {
  console.log("📥 MULTI-SCREEN DOWNLOAD INSTRUCTIONS:\n");
  console.log("1. For each template, find 4-8 different screenshots");
  console.log(
    "2. Each screenshot should show a different page/screen of the same app/website"
  );
  console.log("3. Download all screenshots for one template");
  console.log("4. Arrange them in a grid layout (2x2, 3x3, etc.)");
  console.log(
    "5. Create a single 400x300 image showing the grid of screenshots"
  );
  console.log("6. Save as JPG in public/template-previews/ folder");
  console.log("7. Name exactly like template ID (e.g., mobile-storyboard.jpg)");
  console.log("");
  console.log(
    "💡 TIP: Create a collage showing multiple screens of the same project!"
  );
  console.log(
    "💡 TIP: Use tools like Canva, Photoshop, or online collage makers"
  );
}

// Main execution
const command = process.argv[2];

switch (command) {
  case "guide":
    generateMultiScreenGuide();
    break;
  case "quick":
    generateQuickMultiScreen();
    generateDownloadInstructions();
    break;
  default:
    console.log("Usage: node find-multi-screen-images.js [guide|quick]");
    console.log("");
    console.log("Commands:");
    console.log("  guide - Full guide for multi-screen collections");
    console.log("  quick - Quick start for priority templates");
    break;
}
