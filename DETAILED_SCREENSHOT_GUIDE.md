# Detailed Screenshot Guide

## 🎯 Priority Templates - Exact Search Terms

### 1. Mobile App (mobile-storyboard)

**Find these 8 screenshots and arrange in a 2x4 grid:**

| Screen         | Search Term                  | Dribbble Link                             |
| -------------- | ---------------------------- | ----------------------------------------- |
| Login/Signup   | "mobile app login screen"    | https://dribbble.com/tags/mobile_login    |
| Homepage       | "mobile app homepage design" | https://dribbble.com/tags/mobile_homepage |
| Product Detail | "product detail page mobile" | https://dribbble.com/tags/product_detail  |
| Shopping Cart  | "shopping cart mobile app"   | https://dribbble.com/tags/shopping_cart   |
| Checkout       | "checkout flow mobile"       | https://dribbble.com/tags/checkout        |
| User Profile   | "user profile mobile app"    | https://dribbble.com/tags/user_profile    |
| Settings       | "app settings screen"        | https://dribbble.com/tags/app_settings    |
| Search Results | "search results mobile"      | https://dribbble.com/tags/search_results  |

**Grid Layout:**

```
[Login] [Homepage] [Product] [Cart]
[Checkout] [Profile] [Settings] [Search]
```

### 2. E-commerce Website (free-ecommerce-showcase)

**Find these 8 screenshots and arrange in a 2x4 grid:**

| Screen         | Search Term                  | Dribbble Link                                |
| -------------- | ---------------------------- | -------------------------------------------- |
| Homepage       | "ecommerce homepage design"  | https://dribbble.com/tags/ecommerce_homepage |
| Category Page  | "product category page"      | https://dribbble.com/tags/product_category   |
| Product Detail | "product detail page design" | https://dribbble.com/tags/product_detail     |
| Shopping Cart  | "shopping cart website"      | https://dribbble.com/tags/shopping_cart      |
| Checkout       | "checkout page design"       | https://dribbble.com/tags/checkout           |
| User Dashboard | "user account dashboard"     | https://dribbble.com/tags/user_dashboard     |
| Search Results | "search results ecommerce"   | https://dribbble.com/tags/search_results     |
| About Page     | "about page design"          | https://dribbble.com/tags/about_page         |

**Grid Layout:**

```
[Homepage] [Category] [Product] [Cart]
[Checkout] [Dashboard] [Search] [About]
```

### 3. Dashboard (free-dashboard-layout)

**Find these 8 screenshots and arrange in a 2x4 grid:**

| Screen           | Search Term                  | Dribbble Link                                |
| ---------------- | ---------------------------- | -------------------------------------------- |
| Main Dashboard   | "dashboard overview design"  | https://dribbble.com/tags/dashboard_overview |
| Analytics Charts | "analytics charts dashboard" | https://dribbble.com/tags/analytics_charts   |
| User Management  | "user management interface"  | https://dribbble.com/tags/user_management    |
| Settings         | "settings configuration"     | https://dribbble.com/tags/settings_config    |
| Reports          | "reports dashboard"          | https://dribbble.com/tags/reports_dashboard  |
| Notifications    | "notifications center"       | https://dribbble.com/tags/notifications      |
| Data Tables      | "data tables design"         | https://dribbble.com/tags/data_tables        |
| Profile Settings | "profile settings"           | https://dribbble.com/tags/profile_settings   |

**Grid Layout:**

```
[Dashboard] [Analytics] [Users] [Settings]
[Reports] [Notifications] [Tables] [Profile]
```

### 4. Portfolio (free-portfolio-grid)

**Find these 8 screenshots and arrange in a 2x4 grid:**

| Screen           | Search Term                  | Dribbble Link                                |
| ---------------- | ---------------------------- | -------------------------------------------- |
| Homepage         | "portfolio homepage design"  | https://dribbble.com/tags/portfolio_homepage |
| Projects Gallery | "projects gallery portfolio" | https://dribbble.com/tags/projects_gallery   |
| Case Study       | "case study page design"     | https://dribbble.com/tags/case_study         |
| About Page       | "about page portfolio"       | https://dribbble.com/tags/about_page         |
| Services         | "services page design"       | https://dribbble.com/tags/services_page      |
| Contact          | "contact page design"        | https://dribbble.com/tags/contact_page       |
| Blog             | "blog page design"           | https://dribbble.com/tags/blog_page          |
| Resume           | "resume page design"         | https://dribbble.com/tags/resume_page        |

**Grid Layout:**

```
[Homepage] [Gallery] [Case Study] [About]
[Services] [Contact] [Blog] [Resume]
```

## 🛠️ How to Create Grid Images

### Step 1: Find Screenshots

1. Go to each Dribbble link above
2. Find screenshots that match the search terms
3. Download 8 screenshots for each template
4. Make sure they're all from the same project/app

### Step 2: Create Grid Layout

1. Use **Canva** (free): https://canva.com
2. Create a 400x300 pixel canvas
3. Arrange screenshots in 2x4 grid
4. Each screenshot should be about 100x75 pixels

### Step 3: Alternative Tools

- **Photoshop**: Professional editing
- **GIMP**: Free alternative to Photoshop
- **Online collage makers**: Search "online image grid maker"
- **Paint**: Simple Windows tool

### Step 4: Save and Name

1. Save as JPG format
2. Size: 400x300 pixels
3. Save in: `public/template-previews/`
4. Name exactly: `mobile-storyboard.jpg`, `free-ecommerce-showcase.jpg`, etc.

## 🎨 Grid Layout Examples

### Mobile App Grid:

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Login     │  Homepage   │   Product   │    Cart     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│  Checkout   │   Profile   │  Settings   │   Search    │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### E-commerce Grid:

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│  Homepage   │  Category   │   Product   │    Cart     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│  Checkout   │ Dashboard   │   Search    │   About     │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

## 💡 Tips for Finding Good Screenshots

1. **Look for consistency**: All screenshots should be from the same project
2. **Same style**: Same color scheme, fonts, design language
3. **High quality**: Clear, professional-looking screenshots
4. **Real projects**: Avoid generic mockups, find actual app screenshots
5. **Proper sizing**: Make sure all screenshots are similar size when arranged

## 🚀 Quick Start Commands

```bash
# Check which templates need images
node scripts/generate-template-previews.js list

# Get detailed search guide
node scripts/find-multi-screen-images.js guide
```

## 📱 Alternative Sources

If Dribbble doesn't have what you need, try:

- **Behance**: https://behance.net (search same terms)
- **Pinterest**: Search "mobile app screenshots", "dashboard design"
- **Unsplash**: Search "mobile app design", "website mockup"
- **Figma Community**: https://figma.com/community (free UI kits)

Start with the **mobile app template** first - it's the most important one!
