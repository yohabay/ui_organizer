const fs = require("fs");
const path = require("path");

// Priority templates with their status
const templateStatus = {
  "mobile-storyboard": {
    name: "Mobile App UI/UX Design",
    priority: 1,
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
    searchLinks: [
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
    name: "E-commerce Website Design",
    priority: 2,
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
    searchLinks: [
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
    name: "Admin Dashboard UI",
    priority: 3,
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
    searchLinks: [
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
    name: "Designer Portfolio",
    priority: 4,
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
    searchLinks: [
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
};

function checkExistingImages() {
  const previewDir = path.join(__dirname, "../public/template-previews");

  console.log("📊 TEMPLATE PREVIEW PROGRESS\n");

  Object.entries(templateStatus).forEach(([templateId, info]) => {
    const imagePath = path.join(previewDir, `${templateId}.jpg`);
    const exists = fs.existsSync(imagePath);
    const status = exists ? "✅ DONE" : "❌ MISSING";

    console.log(`${info.priority}. ${info.name}`);
    console.log(`   📁 File: ${templateId}.jpg`);
    console.log(`   Status: ${status}`);
    console.log(`   📱 Screens needed: ${info.screens.length}`);
    console.log(`   🔍 Start here: ${info.searchLinks[0]}`);
    console.log("");
  });
}

function showNextSteps() {
  console.log("🎯 NEXT STEPS:\n");

  Object.entries(templateStatus).forEach(([templateId, info]) => {
    const imagePath = path.join(
      __dirname,
      "../public/template-previews",
      `${templateId}.jpg`
    );
    const exists = fs.existsSync(imagePath);

    if (!exists) {
      console.log(`📱 ${info.name} (${templateId})`);
      console.log(`   🔍 Search for: ${info.screens.slice(0, 3).join(", ")}`);
      console.log(`   🌐 Go to: ${info.searchLinks[0]}`);
      console.log(`   📏 Create: 400x300 grid with 8 screenshots`);
      console.log(`   💾 Save as: public/template-previews/${templateId}.jpg`);
      console.log("");
      return; // Only show the first missing template
    }
  });
}

function showDetailedGuide(templateId) {
  const info = templateStatus[templateId];
  if (!info) {
    console.log(`❌ Template "${templateId}" not found in priority list`);
    return;
  }

  console.log(`📱 DETAILED GUIDE: ${info.name}\n`);
  console.log(`📁 Save as: public/template-previews/${templateId}.jpg`);
  console.log(`📏 Size: 400x300 pixels`);
  console.log(`🎨 Layout: 2x4 grid (8 screenshots)`);
  console.log("");

  console.log("📋 Screenshots needed:");
  info.screens.forEach((screen, index) => {
    console.log(`   ${index + 1}. ${screen}`);
  });
  console.log("");

  console.log("🔍 Search links:");
  info.searchLinks.forEach((link, index) => {
    console.log(`   ${index + 1}. ${link}`);
  });
  console.log("");

  console.log("🎨 Grid Layout:");
  console.log("┌─────────────┬─────────────┬─────────────┬─────────────┐");
  console.log(
    `│ ${info.screens[0].substring(0, 10).padEnd(11)} │ ${info.screens[1]
      .substring(0, 10)
      .padEnd(11)} │ ${info.screens[2]
      .substring(0, 10)
      .padEnd(11)} │ ${info.screens[3].substring(0, 10).padEnd(11)} │`
  );
  console.log("├─────────────┼─────────────┼─────────────┼─────────────┤");
  console.log(
    `│ ${info.screens[4].substring(0, 10).padEnd(11)} │ ${info.screens[5]
      .substring(0, 10)
      .padEnd(11)} │ ${info.screens[6]
      .substring(0, 10)
      .padEnd(11)} │ ${info.screens[7].substring(0, 10).padEnd(11)} │`
  );
  console.log("└─────────────┴─────────────┴─────────────┴─────────────┘");
}

// Main execution
const command = process.argv[2];
const templateId = process.argv[3];

switch (command) {
  case "status":
    checkExistingImages();
    break;
  case "next":
    showNextSteps();
    break;
  case "guide":
    if (templateId) {
      showDetailedGuide(templateId);
    } else {
      console.log("Usage: node track-progress.js guide <template-id>");
      console.log("Example: node track-progress.js guide mobile-storyboard");
    }
    break;
  default:
    console.log(
      "Usage: node track-progress.js [status|next|guide <template-id>]"
    );
    console.log("");
    console.log("Commands:");
    console.log("  status - Check which templates have images");
    console.log("  next   - Show next steps for missing templates");
    console.log("  guide  - Show detailed guide for specific template");
    console.log("");
    console.log("Examples:");
    console.log("  node track-progress.js status");
    console.log("  node track-progress.js next");
    console.log("  node track-progress.js guide mobile-storyboard");
    break;
}
