# Real Project Preview Guide

## What You Need

Instead of generic placeholder boxes, your template previews should show **real project screenshots** like the ones in the Pinterest image - actual mobile app UIs, e-commerce designs, dashboard layouts, etc.

## Image Sources

### 1. **Unsplash** (Free)

- Go to: https://unsplash.com
- Search terms: "mobile app design", "website mockup", "UI design", "dashboard interface"

### 2. **Dribbble** (Free)

- Go to: https://dribbble.com
- Search terms: "mobile app", "e-commerce", "dashboard", "portfolio"

### 3. **Behance** (Free)

- Go to: https://behance.net
- Search terms: "UI/UX projects", "mobile applications", "web design"

### 4. **Pinterest** (Free)

- Go to: https://pinterest.com
- Search terms: "mobile app UI design", "website design", "dashboard design"

## Template-Specific Search Terms

### Mobile App Templates

| Template ID              | Search Terms                                             | What to Look For                         |
| ------------------------ | -------------------------------------------------------- | ---------------------------------------- |
| `mobile-storyboard`      | "E-commerce mobile app UI", "iPhone shopping app mockup" | iPhone mockups with shopping app screens |
| `free-mobile-grid`       | "Fitness app UI design", "Mobile dashboard screenshots"  | Android/iPhone fitness app interfaces    |
| `free-mobile-storyboard` | "Mobile app flow", "App screenshots"                     | Multiple app screens in sequence         |

### E-commerce Templates

| Template ID               | Search Terms                                   | What to Look For                   |
| ------------------------- | ---------------------------------------------- | ---------------------------------- |
| `free-ecommerce-showcase` | "E-commerce website design", "Online store UI" | Desktop/mobile shopping websites   |
| `free-restaurant-menu`    | "Food delivery app", "Restaurant app UI"       | Mobile apps with food/menu screens |

### Dashboard Templates

| Template ID             | Search Terms                                | What to Look For                    |
| ----------------------- | ------------------------------------------- | ----------------------------------- |
| `free-dashboard-layout` | "Admin dashboard UI", "Analytics dashboard" | Desktop dashboards with charts/data |

### Portfolio Templates

| Template ID                  | Search Terms                                     | What to Look For                    |
| ---------------------------- | ------------------------------------------------ | ----------------------------------- |
| `free-portfolio-grid`        | "Designer portfolio website", "UI/UX portfolio"  | Creative portfolio layouts          |
| `free-photography-portfolio` | "Photography portfolio", "Photo gallery website" | Photography websites with galleries |

### Other Templates

| Template ID            | Search Terms                                   | What to Look For                        |
| ---------------------- | ---------------------------------------------- | --------------------------------------- |
| `free-travel-blog`     | "Travel website design", "Booking platform UI" | Travel websites with booking interfaces |
| `free-music-player`    | "Music app UI", "Streaming app design"         | Mobile music app interfaces             |
| `free-fitness-tracker` | "Fitness app design", "Health app UI"          | Fitness/health app screens              |

## Image Requirements

1. **Size**: 400x300 pixels
2. **Format**: JPG
3. **Content**: Real project screenshots, not generic placeholders
4. **Quality**: High resolution, professional looking

## Quick Steps

### Step 1: Find Images

1. Go to Unsplash.com
2. Search for "mobile app design" or "website mockup"
3. Download images that show real UI designs

### Step 2: Resize Images

1. Use any image editor (Paint, Photoshop, online tools)
2. Resize to 400x300 pixels
3. Save as JPG

### Step 3: Add to Project

1. Save images in `public/template-previews/` folder
2. Name them exactly like the template ID (e.g., `mobile-storyboard.jpg`)

## Example: What Good Previews Look Like

✅ **Good Examples:**

- iPhone mockups with real app screens
- Desktop dashboards with charts and data
- E-commerce websites with product pages
- Portfolio sites with project showcases

❌ **Bad Examples:**

- Generic colored boxes
- Abstract geometric shapes
- Plain text placeholders
- Simple grid layouts

## Quick Start Commands

Run these commands to see what templates need images:

```bash
# List all templates that need preview images
node scripts/generate-template-previews.js list

# Check which images already exist
node scripts/generate-template-previews.js check
```

## Priority Templates to Start With

1. **mobile-storyboard** - Most important, shows app flow
2. **free-ecommerce-showcase** - Popular template type
3. **free-dashboard-layout** - Professional use case
4. **free-portfolio-grid** - Creative showcase

## Need Help?

If you need help finding specific images or have questions about any template, just ask! I can help you find the right search terms or suggest alternative sources.
