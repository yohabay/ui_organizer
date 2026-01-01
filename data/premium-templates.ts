import type { Template } from "@/types";

// Import device-specific templates to organize them by tier
import { mobileTemplates, desktopTemplates, websiteTemplates, tabletTemplates, chromeTemplates } from "./device-specific-templates";

export const premiumTemplates: Template[] = [
  // 1. Premium Dynamic Grid - Asymmetric Layout (12 slots minimum)
  {
    id: "premium-dynamic-grid",
    name: "Premium Dynamic Grid", 
    description:
      "Professional asymmetric layout with varying slot sizes, advanced shadows, and premium visual hierarchy for high-end projects",
    category: "Premium Dynamic",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 6,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 4, h: 3, shadow: "xl", borderRadius: "lg", rotation: 0, zIndex: 10 }, // Large hero with premium styling
      { x: 4, y: 0, w: 4, h: 2, shadow: "lg", borderRadius: "md", rotation: 0, zIndex: 8 }, // Top right with enhanced shadows
      { x: 4, y: 2, w: 4, h: 1, shadow: "lg", borderRadius: "md", rotation: 0, zIndex: 8 }, // Bottom right with premium effects
      { x: 0, y: 3, w: 3, h: 2, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 6 }, // Bottom left 1 enhanced
      { x: 3, y: 3, w: 3, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 6 }, // Bottom left 2 enhanced
      { x: 6, y: 3, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 6 }, // Bottom left 3 enhanced
      { x: 0, y: 5, w: 2, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Footer 1 with subtle effects
      { x: 2, y: 5, w: 2, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Footer 2 with premium finish
      { x: 4, y: 5, w: 2, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Footer 3 professional styling
      { x: 6, y: 5, w: 2, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Footer 4 additional slot
      { x: 3, y: 4, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 5 }, // Additional slot 11
      { x: 5, y: 4, w: 3, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 5 }, // Additional slot 12
    ],
    preview: "/template-previews/premium-dynamic-grid.jpg",
    tags: ["premium", "dynamic", "asymmetric", "modern", "professional", "high-end", "advanced-shadows"],
    tier: "premium",
  },

  // 2. Premium Masonry Layout (12 slots minimum)
  {
    id: "premium-masonry",
    name: "Premium Masonry",
    description: "Pinterest-style masonry with varying heights and premium creative layout",
    category: "Premium Creative",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 5,
    slots: [
      { x: 0, y: 0, w: 1, h: 3, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Tall left enhanced
      { x: 1, y: 0, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Medium
      { x: 2, y: 0, w: 1, h: 3, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Tall center
      { x: 3, y: 0, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Short
      { x: 4, y: 0, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Medium right
      { x: 0, y: 3, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Medium bottom left
      { x: 1, y: 2, w: 1, h: 2, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Tall
      { x: 2, y: 3, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Short
      { x: 3, y: 1, w: 1, h: 3, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Tall
      { x: 4, y: 2, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Medium
      { x: 0, y: 5, w: 1, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 3 }, // Short bottom
      { x: 1, y: 4, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Medium bottom
      { x: 2, y: 4, w: 1, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 3 }, // Short bottom
      { x: 3, y: 4, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Medium bottom
      { x: 4, y: 4, w: 1, h: 2, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Medium bottom
    ],
    preview: "/template-previews/premium-masonry.jpg",
    tags: ["premium", "masonry", "creative", "pinterest", "professional", "high-end"],
    tier: "premium",
  },

  // 3. Premium Zigzag Layout (12 slots minimum)
  {
    id: "premium-zigzag",
    name: "Premium Zigzag",
    description: "Dynamic zigzag pattern for visual flow with premium styling",
    category: "Premium Dynamic",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top left enhanced
      { x: 3, y: 0, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top center enhanced
      { x: 6, y: 0, w: 2, h: 1, shadow: "lg", borderRadius: "md", rotation: 0, zIndex: 7 }, // Top right enhanced
      { x: 0, y: 1, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 5 }, // Middle left small
      { x: 2, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Middle center large
      { x: 5, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Middle right large
      { x: 0, y: 2, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Bottom left large
      { x: 3, y: 2, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 5 }, // Bottom center small
      { x: 5, y: 2, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Bottom right large
      { x: 0, y: 3, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Additional row small
      { x: 2, y: 3, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 6 }, // Additional row large
      { x: 5, y: 3, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 6 }, // Additional row large
      { x: 0, y: 4, w: 8, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 3 }, // Footer full width
    ],
    preview: "/template-previews/premium-zigzag.jpg",
    tags: ["premium", "zigzag", "dynamic", "flow", "professional", "high-end"],
    tier: "premium",
  },

  // 4. Premium Spotlight Layout (12 slots minimum)
  {
    id: "premium-spotlight",
    name: "Premium Spotlight",
    description: "Center spotlight with surrounding elements and premium visual effects",
    category: "Premium Spotlight",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top left enhanced
      { x: 3, y: 0, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Top center enhanced
      { x: 4, y: 0, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top right enhanced
      { x: 0, y: 1, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 1, y: 1, w: 4, h: 4, shadow: "xl", borderRadius: "xl", rotation: 0, zIndex: 10 }, // Center spotlight enhanced
      { x: 5, y: 1, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side
      { x: 0, y: 2, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 5, y: 2, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side
      { x: 0, y: 3, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 5, y: 3, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side
      { x: 0, y: 4, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side bottom
      { x: 5, y: 4, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side bottom
      { x: 0, y: 5, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Bottom left
      { x: 3, y: 5, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Bottom center
      { x: 4, y: 5, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Bottom right
    ],
    preview: "/template-previews/premium-spotlight.jpg",
    tags: ["premium", "spotlight", "center", "focus", "professional", "high-end"],
    tier: "premium",
  },

  // 5. Premium Diagonal Layout (12 slots minimum)
  {
    id: "premium-diagonal",
    name: "Premium Diagonal",
    description: "Diagonal flow pattern for dynamic movement with premium effects",
    category: "Premium Dynamic",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top left enhanced
      { x: 3, y: 0, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top center
      { x: 5, y: 0, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top right center
      { x: 7, y: 0, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Top right
      { x: 0, y: 1, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Second row left
      { x: 2, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Second row center
      { x: 5, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Second row right
      { x: 0, y: 2, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Third row left
      { x: 3, y: 2, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Third row center
      { x: 5, y: 2, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Third row right center
      { x: 7, y: 2, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Third row right
      { x: 0, y: 3, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Additional row left
      { x: 2, y: 3, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 6 }, // Additional row center
      { x: 5, y: 3, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 6 }, // Additional row right
      { x: 0, y: 4, w: 8, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 3 }, // Footer full width
    ],
    preview: "/template-previews/premium-diagonal.jpg",
    tags: ["premium", "diagonal", "flow", "dynamic", "professional", "high-end"],
    tier: "premium",
  },

  // 6. Premium Pyramid Layout (12 slots minimum)
  {
    id: "premium-pyramid",
    name: "Premium Pyramid",
    description: "Pyramid structure with focal point and premium visual hierarchy",
    category: "Premium Structure",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 9,
    slots: [
      { x: 4, y: 0, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 10 }, // Top center enhanced
      { x: 3, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 9 }, // Second row enhanced
      { x: 2, y: 2, w: 5, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Third row enhanced
      { x: 1, y: 3, w: 7, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Fourth row enhanced
      { x: 0, y: 4, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Fifth row base left
      { x: 3, y: 4, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Fifth row base center
      { x: 6, y: 4, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Fifth row base right
      { x: 0, y: 5, w: 3, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom left
      { x: 3, y: 5, w: 3, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom center
      { x: 6, y: 5, w: 3, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom right
    ],
    preview: "/template-previews/premium-pyramid.jpg",
    tags: ["premium", "pyramid", "structure", "focus", "professional", "high-end"],
    tier: "premium",
  },

  // 7. Premium Spiral Layout (16 slots minimum)
  {
    id: "premium-spiral",
    name: "Premium Spiral",
    description: "Spiral pattern for creative flow with premium visual effects",
    category: "Premium Creative",
    projectTypes: ["website", "desktop"],
    rows: 6,
    cols: 6,
    slots: [
      { x: 2, y: 0, w: 2, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top center enhanced
      { x: 4, y: 0, w: 1, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top right
      { x: 5, y: 0, w: 1, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top right corner
      { x: 5, y: 1, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side
      { x: 5, y: 2, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side
      { x: 5, y: 3, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side
      { x: 5, y: 4, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Right side bottom
      { x: 5, y: 5, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom right
      { x: 4, y: 5, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom center
      { x: 3, y: 5, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom left center
      { x: 2, y: 5, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom left
      { x: 1, y: 5, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom left corner
      { x: 0, y: 5, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Bottom left corner
      { x: 0, y: 4, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 0, y: 3, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 0, y: 2, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 0, y: 1, w: 1, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Left side
      { x: 1, y: 0, w: 1, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Top left
      { x: 1, y: 1, w: 3, h: 3, shadow: "xl", borderRadius: "xl", rotation: 0, zIndex: 10 }, // Center large enhanced
    ],
    preview: "/template-previews/premium-spiral.jpg",
    tags: ["premium", "spiral", "creative", "flow", "professional", "high-end"],
    tier: "premium",
  },

  // 8. Premium Wave Layout (13 slots minimum)
  {
    id: "premium-wave",
    name: "Premium Wave",
    description: "Wave pattern for organic flow with premium visual effects",
    category: "Premium Organic",
    projectTypes: ["website", "desktop"],
    rows: 5,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Wave start enhanced
      { x: 3, y: 0, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Wave dip
      { x: 5, y: 0, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Wave peak
      { x: 8, y: 0, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Wave dip
      { x: 0, y: 1, w: 2, h: 1, shadow: "md", borderRadius: "sm", rotation: 0, zIndex: 4 }, // Second wave start
      { x: 2, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Second wave peak
      { x: 5, y: 1, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Second wave dip
      { x: 7, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Second wave peak
      { x: 0, y: 2, w: 10, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 9 }, // Middle full width enhanced
      { x: 0, y: 3, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Bottom left
      { x: 3, y: 3, w: 4, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Bottom center
      { x: 7, y: 3, w: 3, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 5 }, // Bottom right
      { x: 0, y: 4, w: 10, h: 1, shadow: "sm", borderRadius: "sm", rotation: 0, zIndex: 3 }, // Bottom full width
    ],
    preview: "/template-previews/premium-wave.jpg",
    tags: ["premium", "wave", "organic", "flow", "professional", "high-end"],
    tier: "premium",
  },

  // 9. Premium Diamond Layout (15+ slots)
  {
    id: "premium-diamond",
    name: "Premium Diamond",
    description: "Diamond pattern for geometric interest with premium styling and extensive layout capacity",
    category: "Premium Geometric",
    projectTypes: ["website", "desktop"],
    rows: 8,
    cols: 9,
    slots: [
      { x: 4, y: 0, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 10 }, // Top point enhanced
      { x: 3, y: 1, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 9 }, // Upper diamond enhanced
      { x: 2, y: 2, w: 5, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Upper middle
      { x: 1, y: 3, w: 7, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Upper base
      { x: 0, y: 4, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Center left
      { x: 2, y: 4, w: 3, h: 1, shadow: "xl", borderRadius: "xl", rotation: 0, zIndex: 12 }, // Center diamond enhanced
      { x: 5, y: 4, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Center right
      { x: 7, y: 4, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Center far right
      { x: 1, y: 5, w: 7, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 7 }, // Lower base
      { x: 2, y: 6, w: 5, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Lower middle
      { x: 3, y: 7, w: 3, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 9 }, // Lower diamond enhanced
      { x: 4, y: 8, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 10 }, // Bottom point enhanced
    ],
    preview: "/template-previews/premium-diamond.jpg",
    tags: ["premium", "diamond", "geometric", "pattern", "professional", "high-end", "extensive"],
    tier: "premium",
  },

  // 10. Premium Cross Layout (15+ slots)
  {
    id: "premium-cross",
    name: "Premium Cross",
    description: "Cross pattern for balanced composition with premium visual effects and extensive layout options",
    category: "Premium Balanced",
    projectTypes: ["website", "desktop"],
    rows: 9,
    cols: 9,
    slots: [
      { x: 4, y: 0, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top arm enhanced
      { x: 4, y: 1, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top arm enhanced
      { x: 4, y: 2, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top arm enhanced
      { x: 4, y: 3, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Top arm enhanced
      { x: 0, y: 4, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Center left
      { x: 2, y: 4, w: 2, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 10 }, // Center left middle
      { x: 4, y: 4, w: 1, h: 1, shadow: "xl", borderRadius: "xl", rotation: 0, zIndex: 12 }, // Center cross enhanced
      { x: 5, y: 4, w: 2, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 10 }, // Center right middle
      { x: 7, y: 4, w: 2, h: 1, shadow: "md", borderRadius: "md", rotation: 0, zIndex: 6 }, // Center right
      { x: 4, y: 5, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Bottom arm enhanced
      { x: 4, y: 6, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Bottom arm enhanced
      { x: 4, y: 7, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Bottom arm enhanced
      { x: 4, y: 8, w: 1, h: 1, shadow: "lg", borderRadius: "lg", rotation: 0, zIndex: 8 }, // Bottom arm enhanced
    ],
    preview: "/template-previews/premium-cross.jpg",
    tags: ["premium", "cross", "balanced", "composition", "professional", "high-end", "extensive"],
    tier: "premium",
  },
  // Add device-specific templates organized by device type
  ...mobileTemplates,
  ...desktopTemplates,
  ...websiteTemplates,
  ...tabletTemplates,
  ...chromeTemplates,
];
