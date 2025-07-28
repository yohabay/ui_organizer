import type { Template } from "@/types"

export const templates: Template[] = [
  // Basic Grid Templates
  {
    id: "basic-4x2",
    name: "Basic 4x2 Grid",
    description: "8 equal-sized screenshots in a clean grid layout",
    category: "Basic Grid",
    projectTypes: ["website", "desktop"],
    rows: 2,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 3, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
      { x: 2, y: 1, w: 1, h: 1 },
      { x: 3, y: 1, w: 1, h: 1 },
    ],
    preview: "grid-4x2",
    tags: ["grid", "equal", "basic"],
  },
  {
    id: "basic-3x3",
    name: "Basic 3x3 Grid",
    description: "9 equal-sized screenshots in a square grid",
    category: "Basic Grid",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
      { x: 2, y: 1, w: 1, h: 1 },
      { x: 0, y: 2, w: 1, h: 1 },
      { x: 1, y: 2, w: 1, h: 1 },
      { x: 2, y: 2, w: 1, h: 1 },
    ],
    preview: "grid-3x3",
    tags: ["grid", "equal", "square"],
  },
  {
    id: "basic-5x2",
    name: "Basic 5x2 Grid",
    description: "10 screenshots in a wide grid layout",
    category: "Basic Grid",
    projectTypes: ["website", "desktop"],
    rows: 2,
    cols: 5,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 3, y: 0, w: 1, h: 1 },
      { x: 4, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
      { x: 2, y: 1, w: 1, h: 1 },
      { x: 3, y: 1, w: 1, h: 1 },
      { x: 4, y: 1, w: 1, h: 1 },
    ],
    preview: "grid-5x2",
    tags: ["grid", "wide", "basic"],
  },

  // Hero Grid Templates
  {
    id: "hero-3x2-left",
    name: "Hero Grid - Left Focus",
    description: "Large hero screenshot on the left with smaller supporting images",
    category: "Hero Grid",
    projectTypes: ["website", "desktop"],
    rows: 2,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 2, h: 2 }, // Hero slot
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 2, y: 1, w: 1, h: 1 },
    ],
    preview: "hero-left",
    tags: ["hero", "focus", "asymmetric"],
  },
  {
    id: "hero-3x3-center",
    name: "Hero Grid - Center Focus",
    description: "Large center hero with surrounding smaller screenshots",
    category: "Hero Grid",
    projectTypes: ["website", "desktop", "mobile"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 2, h: 2 }, // Hero slot
      { x: 0, y: 2, w: 1, h: 1 },
    ],
    preview: "hero-center",
    tags: ["hero", "center", "focus"],
  },

  // Vertical Flow Templates
  {
    id: "vertical-1x5",
    name: "Vertical Flow 1x5",
    description: "5 screenshots stacked vertically for scrolling portfolios",
    category: "Vertical Flow",
    projectTypes: ["mobile", "website"],
    rows: 5,
    cols: 1,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 0, y: 2, w: 1, h: 1 },
      { x: 0, y: 3, w: 1, h: 1 },
      { x: 0, y: 4, w: 1, h: 1 },
    ],
    preview: "vertical-5",
    tags: ["vertical", "flow", "mobile"],
  },
  {
    id: "vertical-1x6",
    name: "Vertical Flow 1x6",
    description: "6 screenshots in a vertical scrolling layout",
    category: "Vertical Flow",
    projectTypes: ["mobile", "website"],
    rows: 6,
    cols: 1,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 0, y: 2, w: 1, h: 1 },
      { x: 0, y: 3, w: 1, h: 1 },
      { x: 0, y: 4, w: 1, h: 1 },
      { x: 0, y: 5, w: 1, h: 1 },
    ],
    preview: "vertical-6",
    tags: ["vertical", "flow", "long"],
  },

  // Mobile Device Mockup Templates
  {
    id: "mobile-frame-4",
    name: "Mobile Frame - 4 Screens",
    description: "4 mobile screenshots in device frames",
    category: "Device Mockup",
    projectTypes: ["mobile"],
    rows: 1,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 3, y: 0, w: 1, h: 1 },
    ],
    preview: "mobile-4",
    tags: ["mobile", "device", "frame"],
  },
  {
    id: "mobile-frame-6",
    name: "Mobile Frame - 6 Screens",
    description: "6 mobile screenshots in a 2x3 device frame layout",
    category: "Device Mockup",
    projectTypes: ["mobile"],
    rows: 2,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 1, h: 1 },
      { x: 1, y: 0, w: 1, h: 1 },
      { x: 2, y: 0, w: 1, h: 1 },
      { x: 0, y: 1, w: 1, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
      { x: 2, y: 1, w: 1, h: 1 },
    ],
    preview: "mobile-6",
    tags: ["mobile", "device", "grid"],
  },

  // Mixed Grid Templates
  {
    id: "mixed-alternating",
    name: "Mixed Alternating Grid",
    description: "3x3 grid with alternating large and small slots",
    category: "Mixed Grid",
    projectTypes: ["website", "desktop"],
    rows: 3,
    cols: 3,
    slots: [
      { x: 0, y: 0, w: 2, h: 1 }, // Large
      { x: 2, y: 0, w: 1, h: 1 }, // Small
      { x: 0, y: 1, w: 1, h: 1 }, // Small
      { x: 1, y: 1, w: 2, h: 1 }, // Large
      { x: 0, y: 2, w: 2, h: 1 }, // Large
      { x: 2, y: 2, w: 1, h: 1 }, // Small
    ],
    preview: "mixed-alt",
    tags: ["mixed", "alternating", "dynamic"],
  },
]
