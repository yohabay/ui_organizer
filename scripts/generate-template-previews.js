#!/usr/bin/env node

/**
 * Template Preview Generator
 * This script helps generate preview images for templates
 */

const fs = require("fs");
const path = require("path");

// Template IDs that need preview images
const templateIds = [
  // Free Templates (30)
  "free-simple-grid",
  "free-hero-grid",
  "free-masonry-basic",
  "free-mobile-storyboard",
  "free-focus-grid",
  "free-sidebar-layout",
  "free-card-grid",
  "free-timeline-layout",
  "free-gallery-grid",
  "free-blog-layout",
  "free-pricing-table",
  "free-team-grid",
  "free-feature-grid",
  "free-testimonial-grid",
  "free-comparison-table",
  "free-faq-layout",
  "free-contact-form",
  "free-about-page",
  "free-landing-page",
  "free-portfolio-grid",
  "free-dashboard-basic",
  "free-ecommerce-grid",
  "free-news-layout",
  "free-restaurant-menu",
  "free-real-estate",
  "free-education-course",
  "free-fitness-tracker",
  "free-travel-blog",
  "free-photography-portfolio",
  "free-music-player",

  // Premium Templates (20)
  "premium-hero-grid",
  "premium-dashboard",
  "premium-ecommerce",
  "premium-portfolio",
  "premium-agency",
  "premium-saas",
  "premium-mobile-app",
  "premium-restaurant",
  "premium-hotel",
  "premium-education",
  "premium-healthcare",
  "premium-real-estate",
  "premium-finance",
  "premium-travel",
  "premium-photography",
  "premium-fitness",
  "premium-law",
  "premium-consulting",
  "premium-technology",
  "premium-creative",

  // Special Templates
  "dynamic-auto-generated",
];

// Image suggestions by template type
const imageSuggestions = {
  grid: [
    "Website grid layout",
    "Portfolio grid design",
    "Product grid catalog",
    "Image gallery grid",
  ],
  hero: [
    "Hero section website",
    "Landing page hero",
    "Website header design",
    "Banner section UI",
  ],
  mobile: [
    "Mobile app mockup",
    "App interface design",
    "Phone screen design",
    "Mobile UI template",
  ],
  dashboard: [
    "Admin dashboard",
    "Analytics dashboard",
    "Control panel UI",
    "Management interface",
  ],
  ecommerce: [
    "E-commerce website",
    "Product catalog",
    "Online store design",
    "Shopping website",
  ],
  portfolio: [
    "Designer portfolio",
    "Creative portfolio",
    "Artist portfolio",
    "Professional portfolio",
  ],
  premium: [
    "Premium website design",
    "Luxury brand website",
    "High-end UI design",
    "Professional layout",
  ],
};

function generateImageList() {
  console.log("📸 Template Preview Image Generator\n");

  console.log("🎯 You need to create preview images for these templates:\n");

  templateIds.forEach((id, index) => {
    const isPremium = id.startsWith("premium");
    const category = getCategory(id);
    const suggestions =
      imageSuggestions[category] || imageSuggestions["premium"];

    console.log(`${index + 1}. ${id}`);
    console.log(`   📁 File: public/template-previews/${id}.jpg`);
    console.log(`   🏷️  Category: ${category}`);
    console.log(`   💡 Search terms: ${suggestions.join(", ")}`);
    console.log(`   ${isPremium ? "👑 Premium" : "🆓 Free"}\n`);
  });

  console.log("\n📋 Instructions:");
  console.log("1. Go to Unsplash.com or Dribbble.com");
  console.log("2. Search for the suggested terms");
  console.log("3. Download high-quality images");
  console.log("4. Resize to 400x300px");
  console.log("5. Save with template ID as filename");
  console.log("6. Place in public/template-previews/ directory");

  console.log("\n🔗 Quick Links:");
  console.log("- Unsplash: https://unsplash.com");
  console.log("- Dribbble: https://dribbble.com");
  console.log("- Pexels: https://pexels.com");
  console.log("- Behance: https://behance.net");
}

function getCategory(templateId) {
  if (templateId.includes("grid")) return "grid";
  if (templateId.includes("hero")) return "hero";
  if (templateId.includes("mobile")) return "mobile";
  if (templateId.includes("dashboard")) return "dashboard";
  if (templateId.includes("ecommerce")) return "ecommerce";
  if (templateId.includes("portfolio")) return "portfolio";
  if (templateId.startsWith("premium")) return "premium";
  return "general";
}

function checkExistingImages() {
  const previewDir = path.join(__dirname, "../public/template-previews");

  if (!fs.existsSync(previewDir)) {
    fs.mkdirSync(previewDir, { recursive: true });
  }

  const existingFiles = fs.readdirSync(previewDir);
  const existingImages = existingFiles.filter((file) =>
    file.match(/\.(jpg|jpeg|png|gif|svg)$/i)
  );

  console.log("📊 Image Status:");
  console.log(`✅ Existing images: ${existingImages.length}`);
  console.log(
    `❌ Missing images: ${templateIds.length - existingImages.length}`
  );

  if (existingImages.length > 0) {
    console.log("\n✅ Existing images:");
    existingImages.forEach((file) => console.log(`   - ${file}`));
  }

  const missingImages = templateIds.filter(
    (id) => !existingImages.some((file) => file.startsWith(id))
  );

  if (missingImages.length > 0) {
    console.log("\n❌ Missing images:");
    missingImages.forEach((id) => console.log(`   - ${id}.jpg`));
  }
}

// Run the script
if (require.main === module) {
  const command = process.argv[2];

  switch (command) {
    case "list":
      generateImageList();
      break;
    case "check":
      checkExistingImages();
      break;
    default:
      console.log("Usage: node generate-template-previews.js [list|check]");
      console.log("\nCommands:");
      console.log("  list  - Show all templates that need images");
      console.log("  check - Check existing vs missing images");
      break;
  }
}

module.exports = { templateIds, imageSuggestions };
