const fs = require("fs");
const path = require("path");

// Template layout configurations for preview generation
const templateLayouts = {
  "mobile-storyboard": {
    name: "Mobile App UI/UX Design",
    description: "Mobile app screens arranged in storyboard flow",
    layout: {
      rows: 4,
      cols: 4,
      slots: [
        { x: 0, y: 0, w: 2, h: 2, label: "Login" },
        { x: 2, y: 0, w: 2, h: 2, label: "Home" },
        { x: 0, y: 2, w: 2, h: 2, label: "Product" },
        { x: 2, y: 2, w: 2, h: 2, label: "Cart" },
      ],
    },
    style: "mobile-app",
    colors: ["#3B82F6", "#1E40AF", "#1D4ED8", "#2563EB"],
  },

  "free-ecommerce-showcase": {
    name: "E-commerce Website Design",
    description: "Online store with product showcase layout",
    layout: {
      rows: 6,
      cols: 6,
      slots: [
        { x: 0, y: 0, w: 3, h: 2, label: "Hero" },
        { x: 3, y: 0, w: 3, h: 2, label: "Featured" },
        { x: 0, y: 2, w: 2, h: 2, label: "Category" },
        { x: 2, y: 2, w: 2, h: 2, label: "Product" },
        { x: 4, y: 2, w: 2, h: 2, label: "Cart" },
        { x: 0, y: 4, w: 3, h: 2, label: "Checkout" },
        { x: 3, y: 4, w: 3, h: 2, label: "Account" },
      ],
    },
    style: "ecommerce",
    colors: ["#10B981", "#059669", "#047857", "#065F46"],
  },

  "free-dashboard-layout": {
    name: "Admin Dashboard UI",
    description: "Analytics dashboard with data visualization",
    layout: {
      rows: 6,
      cols: 6,
      slots: [
        { x: 0, y: 0, w: 4, h: 2, label: "Main Chart" },
        { x: 4, y: 0, w: 2, h: 2, label: "Stats" },
        { x: 0, y: 2, w: 2, h: 2, label: "Users" },
        { x: 2, y: 2, w: 2, h: 2, label: "Analytics" },
        { x: 4, y: 2, w: 2, h: 2, label: "Reports" },
        { x: 0, y: 4, w: 3, h: 2, label: "Data Table" },
        { x: 3, y: 4, w: 3, h: 2, label: "Settings" },
      ],
    },
    style: "dashboard",
    colors: ["#6366F1", "#4F46E5", "#4338CA", "#3730A3"],
  },

  "free-portfolio-grid": {
    name: "Designer Portfolio",
    description: "Creative portfolio with project showcase",
    layout: {
      rows: 6,
      cols: 6,
      slots: [
        { x: 0, y: 0, w: 3, h: 2, label: "Hero" },
        { x: 3, y: 0, w: 3, h: 2, label: "About" },
        { x: 0, y: 2, w: 2, h: 2, label: "Project 1" },
        { x: 2, y: 2, w: 2, h: 2, label: "Project 2" },
        { x: 4, y: 2, w: 2, h: 2, label: "Project 3" },
        { x: 0, y: 4, w: 2, h: 2, label: "Services" },
        { x: 2, y: 4, w: 2, h: 2, label: "Contact" },
        { x: 4, y: 4, w: 2, h: 2, label: "Blog" },
      ],
    },
    style: "portfolio",
    colors: ["#8B5CF6", "#7C3AED", "#6D28D9", "#5B21B6"],
  },

  "free-restaurant-menu": {
    name: "Restaurant Website & App",
    description: "Food delivery with menu showcase",
    layout: {
      rows: 5,
      cols: 5,
      slots: [
        { x: 0, y: 0, w: 3, h: 2, label: "Hero" },
        { x: 3, y: 0, w: 2, h: 2, label: "Menu" },
        { x: 0, y: 2, w: 2, h: 2, label: "Dish 1" },
        { x: 2, y: 2, w: 2, h: 2, label: "Dish 2" },
        { x: 4, y: 2, w: 1, h: 2, label: "Order" },
        { x: 0, y: 4, w: 3, h: 1, label: "Checkout" },
        { x: 3, y: 4, w: 2, h: 1, label: "Contact" },
      ],
    },
    style: "restaurant",
    colors: ["#F59E0B", "#D97706", "#B45309", "#92400E"],
  },

  "free-travel-blog": {
    name: "Travel Booking Platform",
    description: "Travel website with destination showcase",
    layout: {
      rows: 6,
      cols: 6,
      slots: [
        { x: 0, y: 0, w: 4, h: 2, label: "Hero" },
        { x: 4, y: 0, w: 2, h: 2, label: "Search" },
        { x: 0, y: 2, w: 2, h: 2, label: "Destination 1" },
        { x: 2, y: 2, w: 2, h: 2, label: "Destination 2" },
        { x: 4, y: 2, w: 2, h: 2, label: "Booking" },
        { x: 0, y: 4, w: 3, h: 2, label: "Blog" },
        { x: 3, y: 4, w: 3, h: 2, label: "Contact" },
      ],
    },
    style: "travel",
    colors: ["#06B6D4", "#0891B2", "#0E7490", "#155E75"],
  },

  "free-photography-portfolio": {
    name: "Photography Portfolio",
    description: "Professional photography showcase",
    layout: {
      rows: 6,
      cols: 6,
      slots: [
        { x: 0, y: 0, w: 3, h: 2, label: "Hero" },
        { x: 3, y: 0, w: 3, h: 2, label: "About" },
        { x: 0, y: 2, w: 2, h: 2, label: "Photo 1" },
        { x: 2, y: 2, w: 2, h: 2, label: "Photo 2" },
        { x: 4, y: 2, w: 2, h: 2, label: "Photo 3" },
        { x: 0, y: 4, w: 2, h: 2, label: "Services" },
        { x: 2, y: 4, w: 2, h: 2, label: "Pricing" },
        { x: 4, y: 4, w: 2, h: 2, label: "Contact" },
      ],
    },
    style: "photography",
    colors: ["#6B7280", "#4B5563", "#374151", "#1F2937"],
  },

  "free-music-player": {
    name: "Music Streaming App",
    description: "Mobile music app interface",
    layout: {
      rows: 4,
      cols: 4,
      slots: [
        { x: 0, y: 0, w: 2, h: 2, label: "Now Playing" },
        { x: 2, y: 0, w: 2, h: 2, label: "Playlist" },
        { x: 0, y: 2, w: 2, h: 2, label: "Library" },
        { x: 2, y: 2, w: 2, h: 2, label: "Search" },
      ],
    },
    style: "music",
    colors: ["#EC4899", "#DB2777", "#BE185D", "#9D174D"],
  },

  "free-fitness-tracker": {
    name: "Fitness & Wellness App",
    description: "Health and fitness tracking interface",
    layout: {
      rows: 5,
      cols: 5,
      slots: [
        { x: 0, y: 0, w: 3, h: 2, label: "Dashboard" },
        { x: 3, y: 0, w: 2, h: 2, label: "Stats" },
        { x: 0, y: 2, w: 2, h: 2, label: "Workout" },
        { x: 2, y: 2, w: 2, h: 2, label: "Progress" },
        { x: 4, y: 2, w: 1, h: 2, label: "Nutrition" },
        { x: 0, y: 4, w: 3, h: 1, label: "Goals" },
        { x: 3, y: 4, w: 2, h: 1, label: "Profile" },
      ],
    },
    style: "fitness",
    colors: ["#EF4444", "#DC2626", "#B91C1C", "#991B1B"],
  },
};

function generateLayoutDescription() {
  console.log("🎨 TEMPLATE LAYOUT PREVIEW DESCRIPTIONS\n");
  console.log(
    "These previews show the actual arrangement structure like the canvas:\n"
  );

  Object.entries(templateLayouts).forEach(([templateId, info]) => {
    console.log(`📱 ${info.name}`);
    console.log(`   Template ID: ${templateId}`);
    console.log(`   Description: ${info.description}`);
    console.log(`   Layout: ${info.layout.rows}x${info.layout.cols} grid`);
    console.log(`   Slots: ${info.layout.slots.length} elements`);
    console.log(`   Style: ${info.style}`);
    console.log(`   Colors: ${info.colors.join(", ")}`);
    console.log("");
    console.log("   📋 Layout Structure:");
    info.layout.slots.forEach((slot, index) => {
      console.log(
        `      ${index + 1}. ${slot.label} (${slot.w}x${slot.h} at ${slot.x},${
          slot.y
        })`
      );
    });
    console.log("   " + "─".repeat(60));
    console.log("");
  });
}

function generatePreviewInstructions() {
  console.log("🎨 HOW TO CREATE LAYOUT PREVIEW IMAGES\n");
  console.log(
    "Instead of downloading screenshots, create previews that show the layout structure:\n"
  );

  console.log("📏 Image Requirements:");
  console.log("   • Size: 400x300 pixels");
  console.log("   • Format: JPG");
  console.log("   • Style: Show actual layout grid with labels");
  console.log("   • Colors: Use template-specific color schemes");
  console.log("");

  console.log("🎨 Design Elements:");
  console.log("   • Grid lines showing slot boundaries");
  console.log("   • Labels for each slot (e.g., 'Login', 'Homepage')");
  console.log("   • Template-specific colors and styling");
  console.log("   • Professional, clean design");
  console.log("");

  console.log("🛠️ Tools to Use:");
  console.log("   • Canva (free): https://canva.com");
  console.log("   • Figma (free): https://figma.com");
  console.log("   • Adobe Illustrator");
  console.log("   • Online grid makers");
  console.log("");

  console.log("💡 Design Tips:");
  console.log("   • Use dashed lines for grid boundaries");
  console.log("   • Add subtle shadows for depth");
  console.log("   • Include template name and description");
  console.log("   • Make it look professional and modern");
}

function generateQuickStart() {
  console.log("🚀 QUICK START: Create Layout Previews\n");

  const priorityTemplates = [
    "mobile-storyboard",
    "free-ecommerce-showcase",
    "free-dashboard-layout",
    "free-portfolio-grid",
  ];

  priorityTemplates.forEach((templateId, index) => {
    const info = templateLayouts[templateId];
    console.log(`${index + 1}. ${info.name}`);
    console.log(`   📁 Save as: public/template-previews/${templateId}.jpg`);
    console.log(`   📏 Size: 400x300 pixels`);
    console.log(`   🎨 Style: ${info.style}`);
    console.log(`   🎨 Colors: ${info.colors[0]}, ${info.colors[1]}`);
    console.log(`   📋 Slots: ${info.layout.slots.length} elements`);
    console.log("");
  });
}

// Main execution
const command = process.argv[2];

switch (command) {
  case "descriptions":
    generateLayoutDescription();
    break;
  case "instructions":
    generatePreviewInstructions();
    break;
  case "quick":
    generateQuickStart();
    break;
  default:
    console.log(
      "Usage: node generate-layout-previews.js [descriptions|instructions|quick]"
    );
    console.log("");
    console.log("Commands:");
    console.log("  descriptions - Show layout descriptions for all templates");
    console.log("  instructions - Show how to create layout preview images");
    console.log("  quick        - Quick start for priority templates");
    break;
}
