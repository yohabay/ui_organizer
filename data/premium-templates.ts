import type { Template } from "@/types";

export const premiumTemplates: Template[] = [
  // 1. Premium Dynamic Grid - Asymmetric Layout
  {
    id: "premium-dynamic-grid",
    name: "Premium Dynamic Grid",
    description:
      "Asymmetric layout with varying slot sizes for visual interest",
    category: "Premium Dynamic",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 3, h: 2, shadow: "xl" }, // Large hero
      { x: 3, y: 0, w: 3, h: 1, shadow: "lg" }, // Top right
      { x: 3, y: 1, w: 3, h: 1, shadow: "lg" }, // Bottom right
      { x: 0, y: 2, w: 2, h: 1, shadow: "md" }, // Bottom left 1
      { x: 2, y: 2, w: 2, h: 1, shadow: "md" }, // Bottom left 2
      { x: 4, y: 2, w: 2, h: 1, shadow: "md" }, // Bottom left 3
      { x: 0, y: 3, w: 2, h: 1, shadow: "sm" }, // Footer 1
      { x: 2, y: 3, w: 2, h: 1, shadow: "sm" }, // Footer 2
      { x: 4, y: 3, w: 2, h: 1, shadow: "sm" }, // Footer 3
    ],
    preview: "/template-previews/premium-dynamic-grid.jpg",
    tags: ["premium", "dynamic", "asymmetric", "modern"],
    isPremium: true,
  },

  // 2. Premium Masonry Layout
  {
    id: "premium-masonry",
    name: "Premium Masonry",
    description: "Pinterest-style masonry with varying heights",
    category: "Premium Creative",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 2, shadow: "lg" }, // Tall left
      { x: 1, y: 0, w: 1, h: 1, shadow: "md" }, // Short
      { x: 2, y: 0, w: 1, h: 2, shadow: "lg" }, // Tall
      { x: 3, y: 0, w: 1, h: 1, shadow: "md" }, // Short
      { x: 0, y: 2, w: 1, h: 1, shadow: "md" }, // Short
      { x: 1, y: 1, w: 1, h: 2, shadow: "lg" }, // Tall
      { x: 2, y: 2, w: 1, h: 1, shadow: "md" }, // Short
      { x: 3, y: 1, w: 1, h: 2, shadow: "lg" }, // Tall
      { x: 0, y: 3, w: 1, h: 2, shadow: "lg" }, // Tall
      { x: 1, y: 3, w: 1, h: 1, shadow: "md" }, // Short
      { x: 2, y: 3, w: 1, h: 1, shadow: "md" }, // Short
      { x: 3, y: 3, w: 1, h: 2, shadow: "lg" }, // Tall
    ],
    preview: "/template-previews/premium-masonry.jpg",
    tags: ["premium", "masonry", "creative", "pinterest"],
    isPremium: true,
  },

  // 3. Premium Zigzag Layout
  {
    id: "premium-zigzag",
    name: "Premium Zigzag",
    description: "Dynamic zigzag pattern for visual flow",
    category: "Premium Dynamic",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 1, shadow: "lg" }, // Top left
      { x: 2, y: 0, w: 2, h: 1, shadow: "lg" }, // Top center
      { x: 4, y: 0, w: 2, h: 1, shadow: "lg" }, // Top right
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Middle left small
      { x: 1, y: 1, w: 2, h: 1, shadow: "lg" }, // Middle center large
      { x: 3, y: 1, w: 2, h: 1, shadow: "lg" }, // Middle right large
      { x: 5, y: 1, w: 1, h: 1, shadow: "md" }, // Middle right small
      { x: 0, y: 2, w: 2, h: 1, shadow: "lg" }, // Bottom left large
      { x: 2, y: 2, w: 1, h: 1, shadow: "md" }, // Bottom center small
      { x: 3, y: 2, w: 2, h: 1, shadow: "lg" }, // Bottom right large
      { x: 5, y: 2, w: 1, h: 1, shadow: "md" }, // Bottom right small
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer full width
    ],
    preview: "/template-previews/premium-zigzag.jpg",
    tags: ["premium", "zigzag", "dynamic", "flow"],
    isPremium: true,
  },

  // 4. Premium Spotlight Layout
  {
    id: "premium-spotlight",
    name: "Premium Spotlight",
    description: "Center spotlight with surrounding elements",
    category: "Premium Spotlight",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 5,
    slots: [
      { x: 0, y: 0, w: 2, h: 1, shadow: "md" }, // Top left
      { x: 2, y: 0, w: 1, h: 1, shadow: "lg" }, // Top center
      { x: 3, y: 0, w: 2, h: 1, shadow: "md" }, // Top right
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Left side
      { x: 1, y: 1, w: 3, h: 3, shadow: "xl" }, // Center spotlight
      { x: 4, y: 1, w: 1, h: 1, shadow: "md" }, // Right side
      { x: 0, y: 2, w: 1, h: 1, shadow: "md" }, // Left side
      { x: 4, y: 2, w: 1, h: 1, shadow: "md" }, // Right side
      { x: 0, y: 3, w: 1, h: 1, shadow: "md" }, // Left side
      { x: 4, y: 3, w: 1, h: 1, shadow: "md" }, // Right side
      { x: 0, y: 4, w: 2, h: 1, shadow: "md" }, // Bottom left
      { x: 2, y: 4, w: 1, h: 1, shadow: "lg" }, // Bottom center
      { x: 3, y: 4, w: 2, h: 1, shadow: "md" }, // Bottom right
    ],
    preview: "/template-previews/premium-spotlight.jpg",
    tags: ["premium", "spotlight", "center", "focus"],
    isPremium: true,
  },

  // 5. Premium Diagonal Layout
  {
    id: "premium-diagonal",
    name: "Premium Diagonal",
    description: "Diagonal flow pattern for dynamic movement",
    category: "Premium Dynamic",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 2, h: 1, shadow: "lg" }, // Top left
      { x: 2, y: 0, w: 1, h: 1, shadow: "md" }, // Top center
      { x: 3, y: 0, w: 1, h: 1, shadow: "md" }, // Top right center
      { x: 4, y: 0, w: 2, h: 1, shadow: "lg" }, // Top right
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Second row left
      { x: 1, y: 1, w: 2, h: 1, shadow: "lg" }, // Second row center
      { x: 3, y: 1, w: 2, h: 1, shadow: "lg" }, // Second row right
      { x: 0, y: 2, w: 2, h: 1, shadow: "lg" }, // Third row left
      { x: 2, y: 2, w: 1, h: 1, shadow: "md" }, // Third row center
      { x: 3, y: 2, w: 1, h: 1, shadow: "md" }, // Third row right center
      { x: 4, y: 2, w: 2, h: 1, shadow: "lg" }, // Third row right
      { x: 0, y: 3, w: 6, h: 1, shadow: "sm" }, // Footer full width
    ],
    preview: "/template-previews/premium-diagonal.jpg",
    tags: ["premium", "diagonal", "flow", "dynamic"],
    isPremium: true,
  },

  // 6. Premium Pyramid Layout
  {
    id: "premium-pyramid",
    name: "Premium Pyramid",
    description: "Pyramid structure with focal point",
    category: "Premium Structure",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 7,
    slots: [
      { x: 3, y: 0, w: 1, h: 1, shadow: "lg" }, // Top center
      { x: 2, y: 1, w: 3, h: 1, shadow: "lg" }, // Second row
      { x: 1, y: 2, w: 5, h: 1, shadow: "lg" }, // Third row
      { x: 0, y: 3, w: 7, h: 1, shadow: "sm" }, // Bottom full width
    ],
    preview: "/template-previews/premium-pyramid.jpg",
    tags: ["premium", "pyramid", "structure", "focus"],
    isPremium: true,
  },

  // 7. Premium Spiral Layout
  {
    id: "premium-spiral",
    name: "Premium Spiral",
    description: "Spiral pattern for creative flow",
    category: "Premium Creative",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 5,
    slots: [
      { x: 2, y: 0, w: 1, h: 1, shadow: "lg" }, // Top center
      { x: 3, y: 0, w: 1, h: 1, shadow: "md" }, // Top right
      { x: 4, y: 0, w: 1, h: 1, shadow: "md" }, // Top right corner
      { x: 4, y: 1, w: 1, h: 1, shadow: "md" }, // Right side
      { x: 4, y: 2, w: 1, h: 1, shadow: "md" }, // Right side
      { x: 4, y: 3, w: 1, h: 1, shadow: "md" }, // Right side
      { x: 4, y: 4, w: 1, h: 1, shadow: "md" }, // Bottom right
      { x: 3, y: 4, w: 1, h: 1, shadow: "md" }, // Bottom center
      { x: 2, y: 4, w: 1, h: 1, shadow: "md" }, // Bottom left center
      { x: 1, y: 4, w: 1, h: 1, shadow: "md" }, // Bottom left
      { x: 0, y: 4, w: 1, h: 1, shadow: "md" }, // Bottom left corner
      { x: 0, y: 3, w: 1, h: 1, shadow: "md" }, // Left side
      { x: 0, y: 2, w: 1, h: 1, shadow: "md" }, // Left side
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Left side
      { x: 1, y: 0, w: 1, h: 1, shadow: "md" }, // Top left
      { x: 1, y: 1, w: 2, h: 2, shadow: "xl" }, // Center large
    ],
    preview: "/template-previews/premium-spiral.jpg",
    tags: ["premium", "spiral", "creative", "flow"],
    isPremium: true,
  },

  // 8. Premium Wave Layout
  {
    id: "premium-wave",
    name: "Premium Wave",
    description: "Wave pattern for organic flow",
    category: "Premium Organic",
    projectTypes: ["website", "desktop"],
    rows: 4,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 2, h: 1, shadow: "lg" }, // Wave start
      { x: 2, y: 0, w: 1, h: 1, shadow: "md" }, // Wave dip
      { x: 3, y: 0, w: 2, h: 1, shadow: "lg" }, // Wave peak
      { x: 5, y: 0, w: 1, h: 1, shadow: "md" }, // Wave dip
      { x: 6, y: 0, w: 2, h: 1, shadow: "lg" }, // Wave end
      { x: 0, y: 1, w: 1, h: 1, shadow: "md" }, // Second wave start
      { x: 1, y: 1, w: 2, h: 1, shadow: "lg" }, // Second wave peak
      { x: 3, y: 1, w: 1, h: 1, shadow: "md" }, // Second wave dip
      { x: 4, y: 1, w: 2, h: 1, shadow: "lg" }, // Second wave peak
      { x: 6, y: 1, w: 1, h: 1, shadow: "md" }, // Second wave dip
      { x: 7, y: 1, w: 1, h: 1, shadow: "md" }, // Second wave end
      { x: 0, y: 2, w: 8, h: 1, shadow: "lg" }, // Middle full width
      { x: 0, y: 3, w: 8, h: 1, shadow: "sm" }, // Bottom full width
    ],
    preview: "/template-previews/premium-wave.jpg",
    tags: ["premium", "wave", "organic", "flow"],
    isPremium: true,
  },

  // 9. Premium Diamond Layout
  {
    id: "premium-diamond",
    name: "Premium Diamond",
    description: "Diamond pattern for geometric interest",
    category: "Premium Geometric",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 5,
    slots: [
      { x: 2, y: 0, w: 1, h: 1, shadow: "lg" }, // Top point
      { x: 1, y: 1, w: 3, h: 1, shadow: "lg" }, // Upper diamond
      { x: 0, y: 2, w: 5, h: 1, shadow: "xl" }, // Center diamond
      { x: 1, y: 3, w: 3, h: 1, shadow: "lg" }, // Lower diamond
      { x: 2, y: 4, w: 1, h: 1, shadow: "lg" }, // Bottom point
    ],
    preview: "/template-previews/premium-diamond.jpg",
    tags: ["premium", "diamond", "geometric", "pattern"],
    isPremium: true,
  },

  // 10. Premium Cross Layout
  {
    id: "premium-cross",
    name: "Premium Cross",
    description: "Cross pattern for balanced composition",
    category: "Premium Balanced",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 5,
    slots: [
      { x: 2, y: 0, w: 1, h: 1, shadow: "lg" }, // Top arm
      { x: 2, y: 1, w: 1, h: 1, shadow: "lg" }, // Top arm
      { x: 0, y: 2, w: 5, h: 1, shadow: "xl" }, // Center cross
      { x: 2, y: 3, w: 1, h: 1, shadow: "lg" }, // Bottom arm
      { x: 2, y: 4, w: 1, h: 1, shadow: "lg" }, // Bottom arm
    ],
    preview: "/template-previews/premium-cross.jpg",
    tags: ["premium", "cross", "balanced", "composition"],
    isPremium: true,
  },
];
