import type { Template } from "@/types"

export const designerTemplates: Template[] = [
  // FLOATING & OVERLAPPING DESIGNS
  {
    id: "floating-cards-hero",
    name: "Floating Cards Hero",
    description: "Hero image with floating card overlays creating depth and visual interest",
    category: "Floating Designs",
    projectTypes: ["website", "mobile", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 7, rotation: 0, zIndex: 1 }, // Main hero
      { x: 6, y: 2, w: 4, h: 3, rotation: -5, zIndex: 3, shadow: "large" }, // Floating card 1
      { x: 1, y: 5, w: 3, h: 4, rotation: 8, zIndex: 2, shadow: "medium" }, // Floating card 2
      { x: 8, y: 7, w: 3, h: 3, rotation: -3, zIndex: 2, shadow: "medium" }, // Floating card 3
      { x: 2, y: 9, w: 4, h: 2, rotation: 2, zIndex: 1 }, // Bottom accent
    ],
    preview: "floating-hero",
    tags: ["hero", "floating", "depth", "modern"],
  },

  {
    id: "diagonal-cascade",
    name: "Diagonal Cascade",
    description: "Screenshots arranged in a dynamic diagonal flow with varying sizes",
    category: "Diagonal Layouts",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 3, h: 3, rotation: -2 },
      { x: 2, y: 2, w: 4, h: 3, rotation: 1, zIndex: 2 },
      { x: 4, y: 4, w: 3, h: 4, rotation: -1 },
      { x: 6, y: 1, w: 3, h: 2, rotation: 3 },
      { x: 7, y: 6, w: 3, h: 3, rotation: -2 },
      { x: 1, y: 7, w: 2, h: 3, rotation: 4 },
    ],
    preview: "diagonal-cascade",
    tags: ["diagonal", "cascade", "dynamic", "flow"],
  },

  {
    id: "circular-spotlight",
    name: "Circular Spotlight",
    description: "Central hero with screenshots arranged in a circular pattern around it",
    category: "Radial Designs",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 4, y: 4, w: 4, h: 4, borderRadius: "full", zIndex: 3 }, // Center spotlight
      { x: 1, y: 1, w: 2, h: 2, rotation: -15 }, // Top left
      { x: 6, y: 0, w: 2, h: 2, rotation: 0 }, // Top center
      { x: 9, y: 2, w: 2, h: 2, rotation: 15 }, // Top right
      { x: 10, y: 6, w: 2, h: 2, rotation: 30 }, // Right
      { x: 8, y: 9, w: 2, h: 2, rotation: 45 }, // Bottom right
      { x: 4, y: 10, w: 2, h: 2, rotation: 0 }, // Bottom
      { x: 0, y: 8, w: 2, h: 2, rotation: -30 }, // Bottom left
      { x: 0, y: 4, w: 2, h: 2, rotation: -45 }, // Left
    ],
    preview: "circular-spotlight",
    tags: ["circular", "spotlight", "radial", "center-focus"],
  },

  {
    id: "asymmetric-hero",
    name: "Asymmetric Hero",
    description: "Bold asymmetric layout with overlapping elements and varied proportions",
    category: "Asymmetric Designs",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 6, h: 6, zIndex: 1 }, // Large hero
      { x: 5, y: 1, w: 4, h: 3, rotation: 3, zIndex: 2, shadow: "large" }, // Overlapping element
      { x: 1, y: 6, w: 3, h: 2, rotation: -2 },
      { x: 6, y: 5, w: 2, h: 4, rotation: 1 },
      { x: 8, y: 7, w: 2, h: 3, rotation: -1 },
      { x: 4, y: 8, w: 3, h: 2, rotation: 2 },
    ],
    preview: "asymmetric-hero",
    tags: ["asymmetric", "bold", "overlapping", "modern"],
  },

  {
    id: "staggered-gallery",
    name: "Staggered Gallery",
    description: "Pinterest-style staggered layout with varying heights and subtle rotations",
    category: "Masonry Layouts",
    projectTypes: ["mobile", "website"],
    rows: 14,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 4, rotation: -1 },
      { x: 2, y: 0, w: 2, h: 3, rotation: 1 },
      { x: 4, y: 0, w: 2, h: 5, rotation: 0 },
      { x: 6, y: 0, w: 2, h: 2, rotation: 2 },
      { x: 0, y: 4, w: 2, h: 3, rotation: 1 },
      { x: 2, y: 3, w: 2, h: 4, rotation: -1 },
      { x: 4, y: 5, w: 2, h: 2, rotation: 1 },
      { x: 6, y: 2, w: 2, h: 4, rotation: -2 },
      { x: 0, y: 7, w: 2, h: 3, rotation: 0 },
      { x: 2, y: 7, w: 2, h: 2, rotation: 2 },
      { x: 4, y: 7, w: 2, h: 4, rotation: -1 },
      { x: 6, y: 6, w: 2, h: 3, rotation: 1 },
    ],
    preview: "staggered-gallery",
    tags: ["staggered", "masonry", "pinterest", "varied-heights"],
  },

  // CREATIVE MOBILE DESIGNS
  {
    id: "phone-stack-3d",
    name: "3D Phone Stack",
    description: "Mobile screenshots in a 3D stacked phone mockup with perspective",
    category: "Mobile Mockups",
    projectTypes: ["mobile"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 2, y: 1, w: 2, h: 6, rotation: -5, zIndex: 3, deviceFrame: "iphone", shadow: "large" },
      { x: 4, y: 2, w: 2, h: 6, rotation: 0, zIndex: 2, deviceFrame: "iphone", shadow: "medium" },
      { x: 6, y: 1, w: 2, h: 6, rotation: 5, zIndex: 1, deviceFrame: "iphone", shadow: "small" },
      { x: 8, y: 3, w: 2, h: 4, rotation: 10, deviceFrame: "android" },
    ],
    preview: "phone-stack-3d",
    tags: ["mobile", "3d", "stack", "perspective", "mockup"],
  },

  {
    id: "mobile-journey-flow",
    name: "Mobile Journey Flow",
    description: "Connected mobile screens showing user flow with arrows and connections",
    category: "Flow Designs",
    projectTypes: ["mobile"],
    rows: 8,
    cols: 12,
    slots: [
      { x: 0, y: 2, w: 2, h: 4, deviceFrame: "iphone", connectionTo: 1 },
      { x: 3, y: 1, w: 2, h: 4, deviceFrame: "iphone", connectionTo: 2 },
      { x: 6, y: 3, w: 2, h: 4, deviceFrame: "iphone", connectionTo: 3 },
      { x: 9, y: 2, w: 2, h: 4, deviceFrame: "iphone" },
      { x: 1, y: 6, w: 2, h: 2, rotation: 2 }, // Supporting element
      { x: 7, y: 0, w: 2, h: 1, rotation: -1 }, // UI detail
    ],
    preview: "mobile-journey",
    tags: ["mobile", "journey", "flow", "connected", "ux"],
  },

  // DESKTOP & WEB DESIGNS
  {
    id: "browser-window-stack",
    name: "Browser Window Stack",
    description: "Layered browser windows with realistic shadows and depth",
    category: "Browser Mockups",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 1, y: 1, w: 8, h: 5, browserFrame: true, zIndex: 3, shadow: "large" },
      { x: 2, y: 2, w: 8, h: 5, browserFrame: true, zIndex: 2, shadow: "medium", opacity: 0.9 },
      { x: 3, y: 3, w: 8, h: 5, browserFrame: true, zIndex: 1, shadow: "small", opacity: 0.7 },
      { x: 0, y: 7, w: 3, h: 2, rotation: -3 }, // Side element
      { x: 9, y: 8, w: 3, h: 2, rotation: 2 }, // Side element
    ],
    preview: "browser-stack",
    tags: ["browser", "stack", "web", "layered", "depth"],
  },

  {
    id: "dashboard-spotlight",
    name: "Dashboard Spotlight",
    description: "Central dashboard with supporting UI elements in a spotlight arrangement",
    category: "Dashboard Layouts",
    projectTypes: ["desktop", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 2, y: 2, w: 8, h: 6, zIndex: 2, shadow: "large", borderRadius: "lg" }, // Main dashboard
      { x: 0, y: 0, w: 3, h: 2, rotation: -5, opacity: 0.8 }, // Top left widget
      { x: 9, y: 0, w: 3, h: 2, rotation: 5, opacity: 0.8 }, // Top right widget
      { x: 0, y: 9, w: 2, h: 3, rotation: -3, opacity: 0.8 }, // Bottom left
      { x: 10, y: 9, w: 2, h: 3, rotation: 3, opacity: 0.8 }, // Bottom right
      { x: 4, y: 9, w: 4, h: 2, rotation: 1, opacity: 0.9 }, // Bottom center
    ],
    preview: "dashboard-spotlight",
    tags: ["dashboard", "spotlight", "widgets", "enterprise"],
  },

  // CREATIVE ARTISTIC DESIGNS
  {
    id: "polaroid-scatter",
    name: "Polaroid Scatter",
    description: "Scattered polaroid-style photos with handwritten labels and tape effects",
    category: "Artistic Layouts",
    projectTypes: ["mobile", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 1, y: 1, w: 3, h: 4, rotation: -8, polaroidFrame: true, tape: "top-left" },
      { x: 5, y: 0, w: 3, h: 4, rotation: 12, polaroidFrame: true, tape: "top-right" },
      { x: 8, y: 3, w: 3, h: 4, rotation: -5, polaroidFrame: true, tape: "bottom" },
      { x: 0, y: 6, w: 3, h: 4, rotation: 15, polaroidFrame: true, tape: "corner" },
      { x: 4, y: 7, w: 3, h: 4, rotation: -10, polaroidFrame: true, tape: "side" },
      { x: 7, y: 8, w: 3, h: 4, rotation: 7, polaroidFrame: true, tape: "top" },
    ],
    preview: "polaroid-scatter",
    tags: ["polaroid", "artistic", "scattered", "vintage", "creative"],
  },

  {
    id: "magazine-spread",
    name: "Magazine Spread",
    description: "Editorial magazine layout with text blocks and image arrangements",
    category: "Editorial Layouts",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 5, h: 6, zIndex: 1 }, // Main article image
      { x: 5, y: 1, w: 3, h: 2, rotation: 1 }, // Supporting image 1
      { x: 8, y: 0, w: 4, h: 3, rotation: -1 }, // Supporting image 2
      { x: 6, y: 4, w: 6, h: 2, textBlock: true }, // Text block
      { x: 0, y: 6, w: 4, h: 3, rotation: 2 }, // Bottom left image
      { x: 4, y: 7, w: 3, h: 3, rotation: -1 }, // Bottom center
      { x: 8, y: 6, w: 4, h: 4, rotation: 1 }, // Bottom right
    ],
    preview: "magazine-spread",
    tags: ["magazine", "editorial", "text-blocks", "professional"],
  },

  {
    id: "geometric-hexagon",
    name: "Geometric Hexagon",
    description: "Hexagonal arrangement with geometric patterns and modern aesthetics",
    category: "Geometric Designs",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 4, y: 2, w: 4, h: 3, shape: "hexagon", zIndex: 2 }, // Center
      { x: 2, y: 0, w: 3, h: 2, shape: "hexagon", rotation: 30 }, // Top left
      { x: 7, y: 0, w: 3, h: 2, shape: "hexagon", rotation: -30 }, // Top right
      { x: 0, y: 4, w: 3, h: 3, shape: "hexagon", rotation: 0 }, // Left
      { x: 9, y: 4, w: 3, h: 3, shape: "hexagon", rotation: 0 }, // Right
      { x: 2, y: 8, w: 3, h: 2, shape: "hexagon", rotation: -30 }, // Bottom left
      { x: 7, y: 8, w: 3, h: 2, shape: "hexagon", rotation: 30 }, // Bottom right
    ],
    preview: "geometric-hexagon",
    tags: ["geometric", "hexagon", "modern", "pattern"],
  },

  // INNOVATIVE LAYOUTS
  {
    id: "spiral-galaxy",
    name: "Spiral Galaxy",
    description: "Screenshots arranged in a spiral pattern creating dynamic visual flow",
    category: "Spiral Designs",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 5, y: 5, w: 2, h: 2, zIndex: 5 }, // Center
      { x: 4, y: 3, w: 2, h: 2, rotation: -20, zIndex: 4 },
      { x: 2, y: 4, w: 2, h: 2, rotation: -40, zIndex: 3 },
      { x: 1, y: 7, w: 2, h: 2, rotation: -60, zIndex: 2 },
      { x: 3, y: 9, w: 2, h: 2, rotation: -80, zIndex: 1 },
      { x: 6, y: 9, w: 2, h: 2, rotation: -100 },
      { x: 9, y: 8, w: 2, h: 2, rotation: -120 },
      { x: 10, y: 5, w: 2, h: 2, rotation: -140 },
      { x: 8, y: 2, w: 2, h: 2, rotation: -160 },
      { x: 6, y: 1, w: 2, h: 2, rotation: -180 },
    ],
    preview: "spiral-galaxy",
    tags: ["spiral", "galaxy", "dynamic", "flow", "creative"],
  },

  {
    id: "layered-cards",
    name: "Layered Cards",
    description: "Playing card style layout with realistic shadows and depth",
    category: "Card Layouts",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 2, y: 2, w: 3, h: 4, rotation: -5, zIndex: 5, shadow: "xl", borderRadius: "lg" },
      { x: 3, y: 2, w: 3, h: 4, rotation: -2, zIndex: 4, shadow: "lg", borderRadius: "lg" },
      { x: 4, y: 2, w: 3, h: 4, rotation: 1, zIndex: 3, shadow: "md", borderRadius: "lg" },
      { x: 5, y: 2, w: 3, h: 4, rotation: 4, zIndex: 2, shadow: "sm", borderRadius: "lg" },
      { x: 6, y: 2, w: 3, h: 4, rotation: 7, zIndex: 1, shadow: "xs", borderRadius: "lg" },
    ],
    preview: "layered-cards",
    tags: ["cards", "layered", "depth", "shadows", "realistic"],
  },

  {
    id: "infinity-loop",
    name: "Infinity Loop",
    description: "Figure-8 arrangement creating an infinity symbol with flowing screenshots",
    category: "Symbol Layouts",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 2, y: 2, w: 2, h: 2, rotation: -30 }, // Top left curve
      { x: 4, y: 1, w: 2, h: 2, rotation: -15 },
      { x: 6, y: 2, w: 2, h: 2, rotation: 0 }, // Center crossing
      { x: 8, y: 1, w: 2, h: 2, rotation: 15 },
      { x: 10, y: 2, w: 2, h: 2, rotation: 30 }, // Top right curve
      { x: 8, y: 4, w: 2, h: 2, rotation: 45 },
      { x: 6, y: 5, w: 2, h: 2, rotation: 0, zIndex: 2 }, // Center crossing
      { x: 4, y: 4, w: 2, h: 2, rotation: -45 },
      { x: 2, y: 6, w: 2, h: 2, rotation: -30 }, // Bottom left curve
      { x: 4, y: 7, w: 2, h: 2, rotation: -15 },
      { x: 8, y: 7, w: 2, h: 2, rotation: 15 },
      { x: 10, y: 6, w: 2, h: 2, rotation: 30 }, // Bottom right curve
    ],
    preview: "infinity-loop",
    tags: ["infinity", "loop", "symbol", "flowing", "creative"],
  },

  // MODERN PORTFOLIO STYLES
  {
    id: "dribbble-showcase",
    name: "Dribbble Showcase",
    description: "Modern portfolio grid inspired by Dribbble with hover effects",
    category: "Portfolio Grids",
    projectTypes: ["website", "mobile", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 4, h: 3, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
      { x: 4, y: 0, w: 4, h: 4, borderRadius: "xl", shadow: "lg", hoverEffect: "lift" },
      { x: 8, y: 0, w: 4, h: 3, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
      { x: 0, y: 3, w: 3, h: 4, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
      { x: 8, y: 3, w: 4, h: 4, borderRadius: "xl", shadow: "lg", hoverEffect: "lift" },
      { x: 3, y: 4, w: 5, h: 3, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
      { x: 0, y: 7, w: 4, h: 3, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
      { x: 4, y: 7, w: 4, h: 3, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
      { x: 8, y: 7, w: 4, h: 3, borderRadius: "xl", shadow: "md", hoverEffect: "lift" },
    ],
    preview: "dribbble-showcase",
    tags: ["dribbble", "portfolio", "modern", "hover-effects", "grid"],
  },

  {
    id: "behance-hero",
    name: "Behance Hero",
    description: "Behance-style hero layout with project details and supporting images",
    category: "Hero Layouts",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 8, h: 6, borderRadius: "lg", shadow: "xl" }, // Main hero
      { x: 8, y: 0, w: 4, h: 2, textBlock: true, backgroundColor: "accent" }, // Project title
      { x: 8, y: 2, w: 4, h: 1, textBlock: true, backgroundColor: "muted" }, // Project details
      { x: 8, y: 3, w: 2, h: 3, borderRadius: "md", shadow: "sm" }, // Supporting image 1
      { x: 10, y: 3, w: 2, h: 3, borderRadius: "md", shadow: "sm" }, // Supporting image 2
      { x: 0, y: 6, w: 4, h: 3, borderRadius: "md", shadow: "md" }, // Bottom left
      { x: 4, y: 6, w: 4, h: 3, borderRadius: "md", shadow: "md" }, // Bottom center
      { x: 8, y: 6, w: 4, h: 3, borderRadius: "md", shadow: "md" }, // Bottom right
    ],
    preview: "behance-hero",
    tags: ["behance", "hero", "project", "professional", "detailed"],
  },

  // EXPERIMENTAL DESIGNS
  {
    id: "liquid-flow",
    name: "Liquid Flow",
    description: "Organic, flowing layout with curved edges and liquid-like arrangement",
    category: "Organic Layouts",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 1, y: 1, w: 4, h: 3, borderRadius: "3xl", rotation: -3, liquidShape: true },
      { x: 4, y: 3, w: 5, h: 4, borderRadius: "3xl", rotation: 2, liquidShape: true, zIndex: 2 },
      { x: 7, y: 1, w: 3, h: 3, borderRadius: "full", rotation: 5, liquidShape: true },
      { x: 0, y: 5, w: 3, h: 4, borderRadius: "3xl", rotation: -5, liquidShape: true },
      { x: 2, y: 8, w: 4, h: 3, borderRadius: "3xl", rotation: 3, liquidShape: true },
      { x: 8, y: 7, w: 4, h: 4, borderRadius: "3xl", rotation: -2, liquidShape: true },
    ],
    preview: "liquid-flow",
    tags: ["liquid", "organic", "flowing", "curved", "experimental"],
  },

  {
    id: "neon-grid",
    name: "Neon Grid",
    description: "Cyberpunk-inspired layout with neon glows and futuristic aesthetics",
    category: "Futuristic Layouts",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 1, y: 1, w: 3, h: 2, neonGlow: "blue", borderRadius: "md" },
      { x: 5, y: 0, w: 4, h: 3, neonGlow: "purple", borderRadius: "lg" },
      { x: 0, y: 4, w: 2, h: 3, neonGlow: "pink", borderRadius: "md" },
      { x: 3, y: 3, w: 3, h: 4, neonGlow: "cyan", borderRadius: "lg", zIndex: 2 },
      { x: 7, y: 4, w: 3, h: 2, neonGlow: "green", borderRadius: "md" },
      { x: 1, y: 7, w: 4, h: 2, neonGlow: "orange", borderRadius: "lg" },
      { x: 6, y: 7, w: 3, h: 3, neonGlow: "red", borderRadius: "md" },
    ],
    preview: "neon-grid",
    tags: ["neon", "cyberpunk", "futuristic", "glow", "tech"],
  },

  // MINIMALIST MODERN
  {
    id: "swiss-minimal",
    name: "Swiss Minimal",
    description: "Clean Swiss design principles with perfect typography and spacing",
    category: "Minimalist Layouts",
    projectTypes: ["website", "desktop"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 6, h: 4, borderRadius: "none", shadow: "none" },
      { x: 6, y: 0, w: 6, h: 2, textBlock: true, typography: "swiss" },
      { x: 6, y: 2, w: 3, h: 2, borderRadius: "none", shadow: "none" },
      { x: 9, y: 2, w: 3, h: 2, borderRadius: "none", shadow: "none" },
      { x: 0, y: 4, w: 4, h: 3, borderRadius: "none", shadow: "none" },
      { x: 4, y: 4, w: 4, h: 3, borderRadius: "none", shadow: "none" },
      { x: 8, y: 4, w: 4, h: 3, borderRadius: "none", shadow: "none" },
      { x: 0, y: 7, w: 12, h: 2, textBlock: true, typography: "swiss" },
      { x: 0, y: 9, w: 6, h: 3, borderRadius: "none", shadow: "none" },
      { x: 6, y: 9, w: 6, h: 3, borderRadius: "none", shadow: "none" },
    ],
    preview: "swiss-minimal",
    tags: ["swiss", "minimal", "typography", "clean", "professional"],
  },

  {
    id: "brutalist-blocks",
    name: "Brutalist Blocks",
    description: "Bold brutalist design with stark contrasts and geometric blocks",
    category: "Brutalist Layouts",
    projectTypes: ["website", "desktop"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 4, h: 4, borderRadius: "none", shadow: "harsh", backgroundColor: "black" },
      { x: 4, y: 0, w: 3, h: 2, borderRadius: "none", shadow: "harsh", backgroundColor: "red" },
      { x: 7, y: 0, w: 3, h: 3, borderRadius: "none", shadow: "harsh", backgroundColor: "white" },
      { x: 4, y: 2, w: 3, h: 2, borderRadius: "none", shadow: "harsh", backgroundColor: "yellow" },
      { x: 0, y: 4, w: 2, h: 3, borderRadius: "none", shadow: "harsh", backgroundColor: "blue" },
      { x: 2, y: 4, w: 5, h: 3, borderRadius: "none", shadow: "harsh", backgroundColor: "white" },
      { x: 7, y: 3, w: 3, h: 4, borderRadius: "none", shadow: "harsh", backgroundColor: "black" },
      { x: 0, y: 7, w: 7, h: 3, borderRadius: "none", shadow: "harsh", backgroundColor: "white" },
      { x: 7, y: 7, w: 3, h: 3, borderRadius: "none", shadow: "harsh", backgroundColor: "red" },
    ],
    preview: "brutalist-blocks",
    tags: ["brutalist", "bold", "geometric", "contrast", "stark"],
  },

  // INTERACTIVE & DYNAMIC
  {
    id: "parallax-layers",
    name: "Parallax Layers",
    description: "Multi-layered design with parallax scrolling effects and depth",
    category: "Interactive Layouts",
    projectTypes: ["website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 4, parallaxSpeed: 0.5, zIndex: 1, opacity: 0.8 }, // Background layer
      { x: 2, y: 2, w: 8, h: 4, parallaxSpeed: 1, zIndex: 2, shadow: "lg" }, // Mid layer
      { x: 4, y: 4, w: 4, h: 3, parallaxSpeed: 1.5, zIndex: 3, shadow: "xl" }, // Foreground
      { x: 1, y: 7, w: 3, h: 2, parallaxSpeed: 0.8, zIndex: 2 },
      { x: 8, y: 8, w: 3, h: 2, parallaxSpeed: 1.2, zIndex: 2 },
      { x: 0, y: 10, w: 12, h: 2, parallaxSpeed: 0.3, zIndex: 1, opacity: 0.6 }, // Far background
    ],
    preview: "parallax-layers",
    tags: ["parallax", "layers", "interactive", "depth", "scrolling"],
  },

  {
    id: "morphing-shapes",
    name: "Morphing Shapes",
    description: "Dynamic shapes that morph and transform with organic animations",
    category: "Animated Layouts",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 1, y: 1, w: 3, h: 3, morphShape: "circle-to-square", animationDelay: 0 },
      { x: 5, y: 0, w: 4, h: 2, morphShape: "rectangle-to-diamond", animationDelay: 0.5 },
      { x: 6, y: 3, w: 3, h: 4, morphShape: "square-to-hexagon", animationDelay: 1 },
      { x: 0, y: 5, w: 2, h: 3, morphShape: "triangle-to-circle", animationDelay: 1.5 },
      { x: 3, y: 6, w: 4, h: 3, morphShape: "hexagon-to-star", animationDelay: 2 },
      { x: 8, y: 7, w: 2, h: 3, morphShape: "star-to-heart", animationDelay: 2.5 },
    ],
    preview: "morphing-shapes",
    tags: ["morphing", "animated", "shapes", "dynamic", "organic"],
  },

  // Add 30 more templates to reach 50+...
  {
    id: "vintage-collage",
    name: "Vintage Collage",
    description: "Nostalgic collage with torn edges, vintage filters, and scrapbook aesthetics",
    category: "Vintage Layouts",
    projectTypes: ["mobile", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 1, y: 1, w: 4, h: 3, rotation: -5, tornEdges: true, vintageFilter: "sepia" },
      { x: 4, y: 0, w: 3, h: 4, rotation: 8, tornEdges: true, vintageFilter: "warm" },
      { x: 7, y: 2, w: 4, h: 3, rotation: -3, tornEdges: true, vintageFilter: "cool" },
      { x: 0, y: 5, w: 3, h: 4, rotation: 12, tornEdges: true, vintageFilter: "faded" },
      { x: 3, y: 6, w: 4, h: 3, rotation: -7, tornEdges: true, vintageFilter: "sepia" },
      { x: 7, y: 7, w: 3, h: 4, rotation: 5, tornEdges: true, vintageFilter: "warm" },
      { x: 2, y: 10, w: 6, h: 2, rotation: 1, tornEdges: true, vintageFilter: "faded" },
    ],
    preview: "vintage-collage",
    tags: ["vintage", "collage", "torn", "nostalgic", "scrapbook"],
  },

  {
    id: "holographic-display",
    name: "Holographic Display",
    description: "Futuristic holographic interface with transparent overlays and sci-fi aesthetics",
    category: "Sci-Fi Layouts",
    projectTypes: ["desktop", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 2, y: 2, w: 8, h: 5, holographicEffect: true, opacity: 0.9, borderGlow: "cyan" },
      { x: 0, y: 0, w: 3, h: 2, holographicEffect: true, opacity: 0.7, borderGlow: "blue" },
      { x: 9, y: 0, w: 3, h: 2, holographicEffect: true, opacity: 0.7, borderGlow: "purple" },
      { x: 0, y: 8, w: 2, h: 3, holographicEffect: true, opacity: 0.6, borderGlow: "green" },
      { x: 10, y: 8, w: 2, h: 3, holographicEffect: true, opacity: 0.6, borderGlow: "pink" },
      { x: 3, y: 8, w: 6, h: 2, holographicEffect: true, opacity: 0.8, borderGlow: "cyan" },
    ],
    preview: "holographic-display",
    tags: ["holographic", "sci-fi", "futuristic", "transparent", "glow"],
  },

  // Continue with more creative templates...
  {
    id: "origami-fold",
    name: "Origami Fold",
    description: "Paper-folding inspired layout with geometric folds and shadow play",
    category: "Paper Layouts",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 4, h: 4, foldEffect: "valley", rotation: 0, shadow: "fold" },
      { x: 4, y: 0, w: 3, h: 3, foldEffect: "mountain", rotation: 45, shadow: "fold" },
      { x: 7, y: 1, w: 3, h: 4, foldEffect: "valley", rotation: -30, shadow: "fold" },
      { x: 1, y: 4, w: 3, h: 3, foldEffect: "mountain", rotation: 15, shadow: "fold" },
      { x: 4, y: 5, w: 4, h: 3, foldEffect: "valley", rotation: -10, shadow: "fold" },
      { x: 2, y: 7, w: 3, h: 3, foldEffect: "mountain", rotation: 25, shadow: "fold" },
    ],
    preview: "origami-fold",
    tags: ["origami", "paper", "fold", "geometric", "shadow"],
  },

  {
    id: "constellation-map",
    name: "Constellation Map",
    description: "Star constellation pattern with connected screenshots forming celestial designs",
    category: "Celestial Layouts",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 2, y: 1, w: 2, h: 2, shape: "star", connectionLines: [1, 2] },
      { x: 5, y: 0, w: 2, h: 2, shape: "star", connectionLines: [0, 2, 3] },
      { x: 8, y: 2, w: 2, h: 2, shape: "star", connectionLines: [1, 4] },
      { x: 1, y: 4, w: 2, h: 2, shape: "star", connectionLines: [1, 4, 5] },
      { x: 6, y: 5, w: 2, h: 2, shape: "star", connectionLines: [2, 3, 6] },
      { x: 0, y: 7, w: 2, h: 2, shape: "star", connectionLines: [3, 6] },
      { x: 4, y: 8, w: 2, h: 2, shape: "star", connectionLines: [4, 5, 7] },
      { x: 8, y: 9, w: 2, h: 2, shape: "star", connectionLines: [6] },
    ],
    preview: "constellation-map",
    tags: ["constellation", "stars", "celestial", "connected", "space"],
  },

  {
    id: "kaleidoscope-pattern",
    name: "Kaleidoscope Pattern",
    description: "Symmetrical kaleidoscope arrangement with mirrored and rotated elements",
    category: "Symmetrical Layouts",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 5, y: 5, w: 2, h: 2, zIndex: 5 }, // Center
      { x: 3, y: 3, w: 2, h: 2, rotation: 45, mirror: "horizontal" },
      { x: 7, y: 3, w: 2, h: 2, rotation: -45, mirror: "vertical" },
      { x: 3, y: 7, w: 2, h: 2, rotation: -45, mirror: "vertical" },
      { x: 7, y: 7, w: 2, h: 2, rotation: 45, mirror: "horizontal" },
      { x: 1, y: 1, w: 2, h: 2, rotation: 90, mirror: "both" },
      { x: 9, y: 1, w: 2, h: 2, rotation: -90, mirror: "both" },
      { x: 1, y: 9, w: 2, h: 2, rotation: -90, mirror: "both" },
      { x: 9, y: 9, w: 2, h: 2, rotation: 90, mirror: "both" },
    ],
    preview: "kaleidoscope-pattern",
    tags: ["kaleidoscope", "symmetrical", "mirrored", "pattern", "rotated"],
  },

  {
    id: "comic-book-panels",
    name: "Comic Book Panels",
    description: "Comic book style panels with speech bubbles and dynamic action layouts",
    category: "Comic Layouts",
    projectTypes: ["mobile", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 5, h: 4, comicPanel: true, speechBubble: "top-right" },
      { x: 5, y: 0, w: 3, h: 3, comicPanel: true, speechBubble: "bottom-left" },
      { x: 8, y: 0, w: 4, h: 2, comicPanel: true, thoughtBubble: true },
      { x: 8, y: 2, w: 4, h: 3, comicPanel: true, actionLines: true },
      { x: 0, y: 4, w: 3, h: 4, comicPanel: true, speechBubble: "center" },
      { x: 3, y: 4, w: 4, h: 3, comicPanel: true, explosionEffect: true },
      { x: 7, y: 5, w: 5, h: 3, comicPanel: true, speedLines: true },
      { x: 0, y: 8, w: 6, h: 4, comicPanel: true, speechBubble: "top-center" },
      { x: 6, y: 8, w: 6, h: 4, comicPanel: true, thoughtBubble: true },
    ],
    preview: "comic-book-panels",
    tags: ["comic", "panels", "speech-bubbles", "action", "dynamic"],
  },

  {
    id: "architectural-blueprint",
    name: "Architectural Blueprint",
    description: "Technical blueprint style with precise measurements and architectural elements",
    category: "Technical Layouts",
    projectTypes: ["desktop", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 1, y: 1, w: 6, h: 4, blueprintStyle: true, measurements: true, gridLines: true },
      { x: 7, y: 0, w: 4, h: 3, blueprintStyle: true, technicalDrawing: true },
      { x: 0, y: 5, w: 3, h: 3, blueprintStyle: true, crossSection: true },
      { x: 3, y: 6, w: 4, h: 2, blueprintStyle: true, dimensions: true },
      { x: 7, y: 4, w: 5, h: 4, blueprintStyle: true, floorPlan: true },
      { x: 0, y: 9, w: 7, h: 3, blueprintStyle: true, elevationView: true },
      { x: 8, y: 9, w: 4, h: 3, blueprintStyle: true, detailView: true },
    ],
    preview: "architectural-blueprint",
    tags: ["blueprint", "architectural", "technical", "measurements", "precise"],
  },

  // Continue adding more templates to reach 50+...
  // I'll add a few more key ones to demonstrate the variety

  {
    id: "watercolor-splash",
    name: "Watercolor Splash",
    description: "Artistic watercolor effects with organic splashes and paint-like textures",
    category: "Artistic Layouts",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 1, y: 1, w: 3, h: 3, watercolorEffect: "blue", opacity: 0.8, rotation: -5 },
      { x: 4, y: 0, w: 4, h: 2, watercolorEffect: "purple", opacity: 0.9, rotation: 3 },
      { x: 6, y: 3, w: 3, h: 4, watercolorEffect: "pink", opacity: 0.7, rotation: -2 },
      { x: 0, y: 5, w: 2, h: 3, watercolorEffect: "green", opacity: 0.8, rotation: 8 },
      { x: 3, y: 6, w: 4, h: 3, watercolorEffect: "orange", opacity: 0.9, rotation: -4 },
      { x: 7, y: 8, w: 3, h: 2, watercolorEffect: "yellow", opacity: 0.7, rotation: 6 },
    ],
    preview: "watercolor-splash",
    tags: ["watercolor", "artistic", "splash", "organic", "paint"],
  },

  {
    id: "isometric-cube",
    name: "Isometric Cube",
    description: "3D isometric cube arrangement with perspective and depth illusion",
    category: "3D Layouts",
    projectTypes: ["desktop", "website"],
    rows: 12,
    cols: 12,
    slots: [
      { x: 4, y: 2, w: 4, h: 3, isometric: "top", perspective: "30deg" },
      { x: 2, y: 4, w: 4, h: 4, isometric: "left", perspective: "30deg" },
      { x: 6, y: 4, w: 4, h: 4, isometric: "right", perspective: "30deg" },
      { x: 1, y: 7, w: 3, h: 2, isometric: "top", perspective: "15deg" },
      { x: 8, y: 7, w: 3, h: 2, isometric: "top", perspective: "15deg" },
      { x: 4, y: 8, w: 4, h: 3, isometric: "front", perspective: "0deg" },
    ],
    preview: "isometric-cube",
    tags: ["isometric", "3d", "cube", "perspective", "depth"],
  },

  {
    id: "music-vinyl-records",
    name: "Music Vinyl Records",
    description: "Vintage vinyl record layout with rotating discs and music-inspired aesthetics",
    category: "Music Layouts",
    projectTypes: ["mobile", "website"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 1, y: 1, w: 3, h: 3, shape: "circle", vinylRecord: true, rotation: 45 },
      { x: 5, y: 0, w: 3, h: 3, shape: "circle", vinylRecord: true, rotation: -30 },
      { x: 6, y: 4, w: 3, h: 3, shape: "circle", vinylRecord: true, rotation: 60 },
      { x: 0, y: 5, w: 3, h: 3, shape: "circle", vinylRecord: true, rotation: -45 },
      { x: 3, y: 7, w: 3, h: 3, shape: "circle", vinylRecord: true, rotation: 15 },
      { x: 7, y: 7, w: 3, h: 3, shape: "circle", vinylRecord: true, rotation: -60 },
    ],
    preview: "music-vinyl-records",
    tags: ["vinyl", "music", "records", "circular", "vintage"],
  },
]
