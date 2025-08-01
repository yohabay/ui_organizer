const fs = require("fs");
const path = require("path");

// Modern layout patterns for unique templates
const modernLayouts = [
  // Asymmetric layouts
  {
    name: "asymmetric-hero",
    slots: [
      { x: 0, y: 0, w: 6, h: 4, rotation: 0 },
      { x: 5, y: 1, w: 4, h: 3, rotation: 5, zIndex: 2 },
      { x: 1, y: 4, w: 3, h: 3, rotation: -3 },
      { x: 6, y: 5, w: 3, h: 2, rotation: 2 },
    ],
  },
  {
    name: "diagonal-cascade",
    slots: [
      { x: 0, y: 0, w: 3, h: 3, rotation: -5 },
      { x: 2, y: 2, w: 4, h: 3, rotation: 3, zIndex: 2 },
      { x: 4, y: 4, w: 3, h: 4, rotation: -2 },
      { x: 6, y: 1, w: 3, h: 2, rotation: 8 },
    ],
  },
  {
    name: "floating-cards",
    slots: [
      { x: 2, y: 2, w: 4, h: 3, rotation: 0, zIndex: 1 },
      { x: 1, y: 1, w: 3, h: 2, rotation: -8, zIndex: 3 },
      { x: 6, y: 3, w: 3, h: 2, rotation: 5, zIndex: 2 },
      { x: 0, y: 4, w: 2, h: 3, rotation: 12, zIndex: 1 },
    ],
  },
  {
    name: "circular-spotlight",
    slots: [
      { x: 4, y: 3, w: 4, h: 4, borderRadius: "full", zIndex: 3 },
      { x: 1, y: 1, w: 2, h: 2, rotation: -15 },
      { x: 7, y: 1, w: 2, h: 2, rotation: 15 },
      { x: 9, y: 4, w: 2, h: 2, rotation: 30 },
      { x: 7, y: 7, w: 2, h: 2, rotation: 45 },
      { x: 1, y: 7, w: 2, h: 2, rotation: -30 },
    ],
  },
  {
    name: "staggered-masonry",
    slots: [
      { x: 0, y: 0, w: 2, h: 4, rotation: -1 },
      { x: 2, y: 0, w: 2, h: 3, rotation: 2 },
      { x: 4, y: 0, w: 2, h: 5, rotation: 0 },
      { x: 0, y: 4, w: 2, h: 3, rotation: 1 },
      { x: 2, y: 3, w: 2, h: 4, rotation: -2 },
      { x: 4, y: 5, w: 2, h: 2, rotation: 3 },
    ],
  },
  {
    name: "layered-depth",
    slots: [
      { x: 1, y: 1, w: 6, h: 4, zIndex: 1, shadow: "lg" },
      { x: 0, y: 0, w: 3, h: 2, rotation: -5, zIndex: 3 },
      { x: 6, y: 0, w: 3, h: 2, rotation: 5, zIndex: 3 },
      { x: 2, y: 5, w: 4, h: 3, zIndex: 2, shadow: "md" },
    ],
  },
  {
    name: "geometric-hexagon",
    slots: [
      { x: 4, y: 2, w: 4, h: 3, shape: "hexagon", zIndex: 2 },
      { x: 2, y: 0, w: 3, h: 2, shape: "hexagon", rotation: 30 },
      { x: 7, y: 0, w: 3, h: 2, shape: "hexagon", rotation: -30 },
      { x: 0, y: 4, w: 3, h: 3, shape: "hexagon", rotation: 0 },
      { x: 9, y: 4, w: 3, h: 3, shape: "hexagon", rotation: 0 },
    ],
  },
  {
    name: "spiral-flow",
    slots: [
      { x: 5, y: 4, w: 2, h: 2, zIndex: 5 },
      { x: 4, y: 2, w: 2, h: 2, rotation: -20, zIndex: 4 },
      { x: 2, y: 3, w: 2, h: 2, rotation: -40, zIndex: 3 },
      { x: 1, y: 6, w: 2, h: 2, rotation: -60, zIndex: 2 },
      { x: 3, y: 8, w: 2, h: 2, rotation: -80, zIndex: 1 },
      { x: 7, y: 7, w: 2, h: 2, rotation: -100 },
      { x: 9, y: 5, w: 2, h: 2, rotation: -120 },
    ],
  },
  {
    name: "infinity-loop",
    slots: [
      { x: 2, y: 2, w: 2, h: 2, rotation: -30 },
      { x: 4, y: 1, w: 2, h: 2, rotation: -15 },
      { x: 6, y: 2, w: 2, h: 2, rotation: 0 },
      { x: 8, y: 1, w: 2, h: 2, rotation: 15 },
      { x: 6, y: 4, w: 2, h: 2, rotation: 0, zIndex: 2 },
      { x: 4, y: 5, w: 2, h: 2, rotation: -45 },
      { x: 2, y: 6, w: 2, h: 2, rotation: -30 },
      { x: 8, y: 5, w: 2, h: 2, rotation: 15 },
    ],
  },
  {
    name: "liquid-organic",
    slots: [
      {
        x: 1,
        y: 1,
        w: 4,
        h: 3,
        borderRadius: "3xl",
        rotation: -3,
        liquidShape: true,
      },
      {
        x: 4,
        y: 3,
        w: 5,
        h: 4,
        borderRadius: "3xl",
        rotation: 2,
        liquidShape: true,
        zIndex: 2,
      },
      {
        x: 7,
        y: 1,
        w: 3,
        h: 3,
        borderRadius: "full",
        rotation: 5,
        liquidShape: true,
      },
      {
        x: 0,
        y: 5,
        w: 3,
        h: 4,
        borderRadius: "3xl",
        rotation: -5,
        liquidShape: true,
      },
    ],
  },
  {
    name: "neon-grid",
    slots: [
      { x: 1, y: 1, w: 3, h: 2, neonGlow: "blue", borderRadius: "md" },
      { x: 5, y: 0, w: 4, h: 3, neonGlow: "purple", borderRadius: "lg" },
      { x: 0, y: 4, w: 2, h: 3, neonGlow: "pink", borderRadius: "md" },
      {
        x: 3,
        y: 3,
        w: 3,
        h: 4,
        neonGlow: "cyan",
        borderRadius: "lg",
        zIndex: 2,
      },
      { x: 7, y: 4, w: 3, h: 2, neonGlow: "green", borderRadius: "md" },
    ],
  },
  {
    name: "polaroid-scatter",
    slots: [
      {
        x: 1,
        y: 1,
        w: 3,
        h: 4,
        rotation: -8,
        polaroidFrame: true,
        tape: "top-left",
      },
      {
        x: 5,
        y: 0,
        w: 3,
        h: 4,
        rotation: 12,
        polaroidFrame: true,
        tape: "top-right",
      },
      {
        x: 8,
        y: 3,
        w: 3,
        h: 4,
        rotation: -5,
        polaroidFrame: true,
        tape: "bottom",
      },
      {
        x: 0,
        y: 6,
        w: 3,
        h: 4,
        rotation: 15,
        polaroidFrame: true,
        tape: "corner",
      },
    ],
  },
  {
    name: "magazine-spread",
    slots: [
      { x: 0, y: 0, w: 5, h: 6, zIndex: 1 },
      { x: 5, y: 1, w: 3, h: 2, rotation: 1 },
      { x: 8, y: 0, w: 4, h: 3, rotation: -1 },
      { x: 6, y: 4, w: 6, h: 2, textBlock: true },
      { x: 0, y: 6, w: 4, h: 3, rotation: 2 },
      { x: 4, y: 7, w: 3, h: 3, rotation: -1 },
    ],
  },
  {
    name: "comic-panels",
    slots: [
      { x: 0, y: 0, w: 5, h: 4, comicPanel: true, speechBubble: "top-right" },
      { x: 5, y: 0, w: 3, h: 3, comicPanel: true, speechBubble: "bottom-left" },
      { x: 8, y: 0, w: 4, h: 2, comicPanel: true, thoughtBubble: true },
      { x: 0, y: 4, w: 3, h: 4, comicPanel: true, speechBubble: "center" },
      { x: 3, y: 4, w: 4, h: 3, comicPanel: true, explosionEffect: true },
    ],
  },
  {
    name: "blueprint-tech",
    slots: [
      {
        x: 1,
        y: 1,
        w: 6,
        h: 4,
        blueprintStyle: true,
        measurements: true,
        gridLines: true,
      },
      { x: 7, y: 0, w: 4, h: 3, blueprintStyle: true, technicalDrawing: true },
      { x: 0, y: 5, w: 3, h: 3, blueprintStyle: true, crossSection: true },
      { x: 3, y: 6, w: 4, h: 2, blueprintStyle: true, dimensions: true },
    ],
  },
  {
    name: "watercolor-art",
    slots: [
      {
        x: 1,
        y: 1,
        w: 3,
        h: 3,
        watercolorEffect: "blue",
        opacity: 0.8,
        rotation: -5,
      },
      {
        x: 4,
        y: 0,
        w: 4,
        h: 2,
        watercolorEffect: "purple",
        opacity: 0.9,
        rotation: 3,
      },
      {
        x: 6,
        y: 3,
        w: 3,
        h: 4,
        watercolorEffect: "pink",
        opacity: 0.7,
        rotation: -2,
      },
      {
        x: 0,
        y: 5,
        w: 2,
        h: 3,
        watercolorEffect: "green",
        opacity: 0.8,
        rotation: 8,
      },
    ],
  },
  {
    name: "isometric-3d",
    slots: [
      { x: 4, y: 2, w: 4, h: 3, isometric: "top", perspective: "30deg" },
      { x: 2, y: 4, w: 4, h: 4, isometric: "left", perspective: "30deg" },
      { x: 6, y: 4, w: 4, h: 4, isometric: "right", perspective: "30deg" },
      { x: 1, y: 7, w: 3, h: 2, isometric: "top", perspective: "15deg" },
    ],
  },
  {
    name: "vinyl-records",
    slots: [
      {
        x: 1,
        y: 1,
        w: 3,
        h: 3,
        shape: "circle",
        vinylRecord: true,
        rotation: 45,
      },
      {
        x: 5,
        y: 0,
        w: 3,
        h: 3,
        shape: "circle",
        vinylRecord: true,
        rotation: -30,
      },
      {
        x: 6,
        y: 4,
        w: 3,
        h: 3,
        shape: "circle",
        vinylRecord: true,
        rotation: 60,
      },
      {
        x: 0,
        y: 5,
        w: 3,
        h: 3,
        shape: "circle",
        vinylRecord: true,
        rotation: -45,
      },
    ],
  },
  {
    name: "constellation-stars",
    slots: [
      { x: 2, y: 1, w: 2, h: 2, shape: "star", connectionLines: [1, 2] },
      { x: 5, y: 0, w: 2, h: 2, shape: "star", connectionLines: [0, 2, 3] },
      { x: 8, y: 2, w: 2, h: 2, shape: "star", connectionLines: [1, 4] },
      { x: 1, y: 4, w: 2, h: 2, shape: "star", connectionLines: [1, 4, 5] },
      { x: 6, y: 5, w: 2, h: 2, shape: "star", connectionLines: [2, 3, 6] },
    ],
  },
  {
    name: "kaleidoscope-symmetry",
    slots: [
      { x: 5, y: 5, w: 2, h: 2, zIndex: 5 },
      { x: 3, y: 3, w: 2, h: 2, rotation: 45, mirror: "horizontal" },
      { x: 7, y: 3, w: 2, h: 2, rotation: -45, mirror: "vertical" },
      { x: 3, y: 7, w: 2, h: 2, rotation: -45, mirror: "vertical" },
      { x: 7, y: 7, w: 2, h: 2, rotation: 45, mirror: "horizontal" },
    ],
  },
  {
    name: "origami-fold",
    slots: [
      {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        foldEffect: "valley",
        rotation: 0,
        shadow: "fold",
      },
      {
        x: 4,
        y: 0,
        w: 3,
        h: 3,
        foldEffect: "mountain",
        rotation: 45,
        shadow: "fold",
      },
      {
        x: 7,
        y: 1,
        w: 3,
        h: 4,
        foldEffect: "valley",
        rotation: -30,
        shadow: "fold",
      },
      {
        x: 1,
        y: 4,
        w: 3,
        h: 3,
        foldEffect: "mountain",
        rotation: 15,
        shadow: "fold",
      },
    ],
  },
  {
    name: "holographic-sci-fi",
    slots: [
      {
        x: 2,
        y: 2,
        w: 8,
        h: 5,
        holographicEffect: true,
        opacity: 0.9,
        borderGlow: "cyan",
      },
      {
        x: 0,
        y: 0,
        w: 3,
        h: 2,
        holographicEffect: true,
        opacity: 0.7,
        borderGlow: "blue",
      },
      {
        x: 9,
        y: 0,
        w: 3,
        h: 2,
        holographicEffect: true,
        opacity: 0.7,
        borderGlow: "purple",
      },
      {
        x: 0,
        y: 8,
        w: 2,
        h: 3,
        holographicEffect: true,
        opacity: 0.6,
        borderGlow: "green",
      },
    ],
  },
  {
    name: "vintage-collage",
    slots: [
      {
        x: 1,
        y: 1,
        w: 4,
        h: 3,
        rotation: -5,
        tornEdges: true,
        vintageFilter: "sepia",
      },
      {
        x: 4,
        y: 0,
        w: 3,
        h: 4,
        rotation: 8,
        tornEdges: true,
        vintageFilter: "warm",
      },
      {
        x: 7,
        y: 2,
        w: 4,
        h: 3,
        rotation: -3,
        tornEdges: true,
        vintageFilter: "cool",
      },
      {
        x: 0,
        y: 5,
        w: 3,
        h: 4,
        rotation: 12,
        tornEdges: true,
        vintageFilter: "faded",
      },
    ],
  },
  {
    name: "morphing-shapes",
    slots: [
      {
        x: 1,
        y: 1,
        w: 3,
        h: 3,
        morphShape: "circle-to-square",
        animationDelay: 0,
      },
      {
        x: 5,
        y: 0,
        w: 4,
        h: 2,
        morphShape: "rectangle-to-diamond",
        animationDelay: 0.5,
      },
      {
        x: 6,
        y: 3,
        w: 3,
        h: 4,
        morphShape: "square-to-hexagon",
        animationDelay: 1,
      },
      {
        x: 0,
        y: 5,
        w: 2,
        h: 3,
        morphShape: "triangle-to-circle",
        animationDelay: 1.5,
      },
    ],
  },
  {
    name: "parallax-layers",
    slots: [
      { x: 0, y: 0, w: 12, h: 4, parallaxSpeed: 0.5, zIndex: 1, opacity: 0.8 },
      { x: 2, y: 2, w: 8, h: 4, parallaxSpeed: 1, zIndex: 2, shadow: "lg" },
      { x: 4, y: 4, w: 4, h: 3, parallaxSpeed: 1.5, zIndex: 3, shadow: "xl" },
      { x: 1, y: 7, w: 3, h: 2, parallaxSpeed: 0.8, zIndex: 2 },
    ],
  },
  {
    name: "swiss-minimal",
    slots: [
      { x: 0, y: 0, w: 6, h: 4, borderRadius: "none" },
      { x: 6, y: 0, w: 6, h: 2, textBlock: true, typography: "swiss" },
      { x: 6, y: 2, w: 3, h: 2, borderRadius: "none" },
      { x: 9, y: 2, w: 3, h: 2, borderRadius: "none" },
      { x: 0, y: 4, w: 4, h: 3, borderRadius: "none" },
      { x: 4, y: 4, w: 4, h: 3, borderRadius: "none" },
    ],
  },
  {
    name: "brutalist-bold",
    slots: [
      {
        x: 0,
        y: 0,
        w: 4,
        h: 4,
        borderRadius: "none",
        shadow: "harsh",
        backgroundColor: "black",
      },
      {
        x: 4,
        y: 0,
        w: 3,
        h: 2,
        borderRadius: "none",
        shadow: "harsh",
        backgroundColor: "red",
      },
      {
        x: 7,
        y: 0,
        w: 3,
        h: 3,
        borderRadius: "none",
        shadow: "harsh",
        backgroundColor: "white",
      },
      {
        x: 4,
        y: 2,
        w: 3,
        h: 2,
        borderRadius: "none",
        shadow: "harsh",
        backgroundColor: "yellow",
      },
    ],
  },
  {
    name: "dribbble-modern",
    slots: [
      {
        x: 0,
        y: 0,
        w: 4,
        h: 3,
        borderRadius: "xl",
        shadow: "md",
        hoverEffect: "lift",
      },
      {
        x: 4,
        y: 0,
        w: 4,
        h: 4,
        borderRadius: "xl",
        shadow: "lg",
        hoverEffect: "lift",
      },
      {
        x: 8,
        y: 0,
        w: 4,
        h: 3,
        borderRadius: "xl",
        shadow: "md",
        hoverEffect: "lift",
      },
      {
        x: 0,
        y: 3,
        w: 3,
        h: 4,
        borderRadius: "xl",
        shadow: "md",
        hoverEffect: "lift",
      },
      {
        x: 8,
        y: 3,
        w: 4,
        h: 4,
        borderRadius: "xl",
        shadow: "lg",
        hoverEffect: "lift",
      },
    ],
  },
  {
    name: "behance-hero",
    slots: [
      { x: 0, y: 0, w: 8, h: 6, borderRadius: "lg", shadow: "xl" },
      { x: 8, y: 0, w: 4, h: 2, textBlock: true, backgroundColor: "accent" },
      { x: 8, y: 2, w: 4, h: 1, textBlock: true, backgroundColor: "muted" },
      { x: 8, y: 3, w: 2, h: 3, borderRadius: "md", shadow: "sm" },
      { x: 10, y: 3, w: 2, h: 3, borderRadius: "md", shadow: "sm" },
    ],
  },
  {
    name: "phone-stack-3d",
    slots: [
      {
        x: 2,
        y: 1,
        w: 2,
        h: 6,
        rotation: -5,
        zIndex: 3,
        deviceFrame: "iphone",
        shadow: "xl",
      },
      {
        x: 4,
        y: 2,
        w: 2,
        h: 6,
        rotation: 0,
        zIndex: 2,
        deviceFrame: "iphone",
        shadow: "lg",
      },
      {
        x: 6,
        y: 1,
        w: 2,
        h: 6,
        rotation: 5,
        zIndex: 1,
        deviceFrame: "iphone",
        shadow: "md",
      },
      { x: 8, y: 3, w: 2, h: 4, rotation: 10, deviceFrame: "android" },
    ],
  },
  {
    name: "browser-window-stack",
    slots: [
      { x: 1, y: 1, w: 8, h: 5, browserFrame: true, zIndex: 3, shadow: "xl" },
      {
        x: 2,
        y: 2,
        w: 8,
        h: 5,
        browserFrame: true,
        zIndex: 2,
        shadow: "lg",
        opacity: 0.9,
      },
      {
        x: 3,
        y: 3,
        w: 8,
        h: 5,
        browserFrame: true,
        zIndex: 1,
        shadow: "md",
        opacity: 0.7,
      },
      { x: 0, y: 7, w: 3, h: 2, rotation: -3 },
    ],
  },
  {
    name: "mobile-journey-flow",
    slots: [
      { x: 0, y: 2, w: 2, h: 4, deviceFrame: "iphone", connectionTo: 1 },
      { x: 3, y: 1, w: 2, h: 4, deviceFrame: "iphone", connectionTo: 2 },
      { x: 6, y: 3, w: 2, h: 4, deviceFrame: "iphone", connectionTo: 3 },
      { x: 9, y: 2, w: 2, h: 4, deviceFrame: "iphone" },
    ],
  },
  {
    name: "dashboard-spotlight",
    slots: [
      { x: 2, y: 2, w: 8, h: 6, zIndex: 2, shadow: "xl", borderRadius: "lg" },
      { x: 0, y: 0, w: 3, h: 2, rotation: -5, opacity: 0.8 },
      { x: 9, y: 0, w: 3, h: 2, rotation: 5, opacity: 0.8 },
      { x: 0, y: 9, w: 2, h: 3, rotation: -3, opacity: 0.8 },
      { x: 10, y: 9, w: 2, h: 3, rotation: 3, opacity: 0.8 },
    ],
  },
];

// Categories with their descriptions
const categories = [
  {
    name: "E-commerce & Shopping",
    slug: "ecommerce",
    description: "Online stores and shopping platforms",
  },
  {
    name: "Social Media & Networking",
    slug: "social",
    description: "Social platforms and networking apps",
  },
  {
    name: "Fitness & Health",
    slug: "fitness",
    description: "Health, fitness, and wellness apps",
  },
  {
    name: "Education & Learning",
    slug: "education",
    description: "Educational platforms and learning apps",
  },
  {
    name: "Food & Dining",
    slug: "food",
    description: "Restaurants, delivery, and food apps",
  },
  {
    name: "Travel & Tourism",
    slug: "travel",
    description: "Travel booking and tourism platforms",
  },
  {
    name: "Technology & Software",
    slug: "tech",
    description: "Tech products and software solutions",
  },
  {
    name: "Finance & Banking",
    slug: "finance",
    description: "Financial services and banking apps",
  },
  {
    name: "Design & Creative",
    slug: "design",
    description: "Design tools and creative platforms",
  },
  {
    name: "Entertainment & Media",
    slug: "entertainment",
    description: "Entertainment and media platforms",
  },
  {
    name: "Real Estate & Property",
    slug: "realestate",
    description: "Real estate and property platforms",
  },
  {
    name: "Automotive & Transport",
    slug: "automotive",
    description: "Cars, transport, and automotive apps",
  },
  {
    name: "Fashion & Beauty",
    slug: "fashion",
    description: "Fashion, beauty, and lifestyle apps",
  },
  {
    name: "Gaming & Entertainment",
    slug: "gaming",
    description: "Games and interactive entertainment",
  },
  {
    name: "Healthcare & Medical",
    slug: "healthcare",
    description: "Medical and healthcare applications",
  },
  {
    name: "Business & Professional",
    slug: "business",
    description: "Business and professional services",
  },
  {
    name: "News & Information",
    slug: "news",
    description: "News, information, and content platforms",
  },
  {
    name: "Sports & Recreation",
    slug: "sports",
    description: "Sports and recreational activities",
  },
  {
    name: "Music & Audio",
    slug: "music",
    description: "Music streaming and audio platforms",
  },
  {
    name: "Photography & Art",
    slug: "photography",
    description: "Photography and artistic platforms",
  },
  {
    name: "Home & Lifestyle",
    slug: "lifestyle",
    description: "Home improvement and lifestyle apps",
  },
  {
    name: "Pet Care & Animals",
    slug: "pets",
    description: "Pet care and animal-related apps",
  },
  {
    name: "Parenting & Family",
    slug: "parenting",
    description: "Parenting and family-oriented apps",
  },
  {
    name: "Environment & Sustainability",
    slug: "environment",
    description: "Environmental and sustainability apps",
  },
  {
    name: "Government & Public",
    slug: "government",
    description: "Government and public service apps",
  },
  {
    name: "Non-Profit & Charity",
    slug: "nonprofit",
    description: "Non-profit and charitable organizations",
  },
  {
    name: "Legal & Law",
    slug: "legal",
    description: "Legal services and law-related apps",
  },
  {
    name: "Insurance & Protection",
    slug: "insurance",
    description: "Insurance and protection services",
  },
  {
    name: "Marketing & Advertising",
    slug: "marketing",
    description: "Marketing and advertising platforms",
  },
  {
    name: "Human Resources",
    slug: "hr",
    description: "HR and recruitment platforms",
  },
  {
    name: "Manufacturing & Industry",
    slug: "manufacturing",
    description: "Manufacturing and industrial apps",
  },
  {
    name: "Agriculture & Farming",
    slug: "agriculture",
    description: "Agriculture and farming technology",
  },
  {
    name: "Construction & Building",
    slug: "construction",
    description: "Construction and building industry",
  },
  {
    name: "Energy & Utilities",
    slug: "energy",
    description: "Energy and utility services",
  },
  {
    name: "Telecommunications",
    slug: "telecom",
    description: "Telecommunications and communication",
  },
  {
    name: "Retail & Commerce",
    slug: "retail",
    description: "Retail and commercial platforms",
  },
  {
    name: "Hospitality & Hotels",
    slug: "hospitality",
    description: "Hospitality and hotel services",
  },
  {
    name: "Events & Entertainment",
    slug: "events",
    description: "Events and entertainment booking",
  },
  {
    name: "Wedding & Celebrations",
    slug: "wedding",
    description: "Wedding and celebration planning",
  },
  {
    name: "Dating & Relationships",
    slug: "dating",
    description: "Dating and relationship platforms",
  },
  {
    name: "Language & Translation",
    slug: "language",
    description: "Language learning and translation",
  },
  {
    name: "Science & Research",
    slug: "science",
    description: "Scientific and research applications",
  },
  {
    name: "Religion & Spirituality",
    slug: "religion",
    description: "Religious and spiritual platforms",
  },
  {
    name: "Politics & Activism",
    slug: "politics",
    description: "Political and activist platforms",
  },
  {
    name: "Veterans & Military",
    slug: "veterans",
    description: "Veteran and military services",
  },
  {
    name: "Disability & Accessibility",
    slug: "accessibility",
    description: "Accessibility and disability support",
  },
  {
    name: "Mental Health & Wellness",
    slug: "mentalhealth",
    description: "Mental health and wellness apps",
  },
  {
    name: "LGBTQ+ & Community",
    slug: "lgbtq",
    description: "LGBTQ+ and community platforms",
  },
  {
    name: "Immigration & Citizenship",
    slug: "immigration",
    description: "Immigration and citizenship services",
  },
  {
    name: "Veterinary & Animal Care",
    slug: "veterinary",
    description: "Veterinary and animal care services",
  },
  {
    name: "Astrology & Horoscope",
    slug: "astrology",
    description: "Astrology and horoscope platforms",
  },
  {
    name: "Cryptocurrency & Blockchain",
    slug: "crypto",
    description: "Cryptocurrency and blockchain apps",
  },
  {
    name: "NFT & Digital Art",
    slug: "nft",
    description: "NFT and digital art platforms",
  },
  {
    name: "AI & Machine Learning",
    slug: "ai",
    description: "AI and machine learning applications",
  },
  {
    name: "VR & Augmented Reality",
    slug: "vr",
    description: "Virtual and augmented reality apps",
  },
  {
    name: "IoT & Smart Home",
    slug: "iot",
    description: "Internet of Things and smart home",
  },
  {
    name: "Robotics & Automation",
    slug: "robotics",
    description: "Robotics and automation platforms",
  },
  {
    name: "Space & Astronomy",
    slug: "space",
    description: "Space and astronomy applications",
  },
  {
    name: "Ocean & Marine",
    slug: "ocean",
    description: "Ocean and marine-related apps",
  },
  {
    name: "Forest & Nature",
    slug: "forest",
    description: "Forest and nature conservation",
  },
  {
    name: "Desert & Arid",
    slug: "desert",
    description: "Desert and arid environment apps",
  },
  {
    name: "Mountain & Adventure",
    slug: "mountain",
    description: "Mountain and adventure sports",
  },
  {
    name: "Urban & City",
    slug: "urban",
    description: "Urban and city planning apps",
  },
  {
    name: "Rural & Countryside",
    slug: "rural",
    description: "Rural and countryside applications",
  },
];

// Generate all unique templates
const allUniqueTemplates = [];

let templateIndex = 0;

categories.forEach((category, categoryIndex) => {
  // Generate 8-10 templates per category (mix of free and premium)
  const templatesPerCategory = 8 + (categoryIndex % 3); // 8-10 templates per category

  for (let i = 0; i < templatesPerCategory; i++) {
    const layoutIndex = i % modernLayouts.length;
    const layout = modernLayouts[layoutIndex];
    const isPremium = i % 3 === 0; // Every 3rd template is premium

    const template = {
      id: `${isPremium ? "premium" : "free"}-${category.slug}-${
        layout.name
      }-${i}`,
      name: `${category.name} ${
        layout.name.charAt(0).toUpperCase() + layout.name.slice(1)
      }`,
      description: `${isPremium ? "Premium" : "Free"} ${
        layout.name
      } layout for ${category.description.toLowerCase()}`,
      category: category.name,
      projectTypes: ["website", "mobile"],
      rows: 10,
      cols: 10,
      slots: layout.slots.map((slot, slotIndex) => ({
        ...slot,
        x: slot.x + (i % 2), // Slight variation
        y: slot.y + (i % 2),
      })),
      preview: `/template-previews/${isPremium ? "premium" : "free"}-${
        category.slug
      }-${layout.name}-${i}.jpg`,
      tags: [
        category.slug,
        layout.name,
        isPremium ? "premium" : "free",
        "unique",
      ],
      tier: isPremium ? "premium" : "free",
    };

    allUniqueTemplates.push(template);
    templateIndex++;
  }
});

console.log(
  `Generated ${allUniqueTemplates.length} unique templates across ${categories.length} categories`
);

// Write to file
const outputPath = path.join(__dirname, "../data/all-unique-templates.ts");
const fileContent = `import type { Template } from "@/types";

export const allUniqueTemplates: Template[] = ${JSON.stringify(
  allUniqueTemplates,
  null,
  2
)};
`;

fs.writeFileSync(outputPath, fileContent);
console.log(
  `✅ Generated ${allUniqueTemplates.length} templates in ${outputPath}`
);

// Show category breakdown
const categoryBreakdown = {};
allUniqueTemplates.forEach((template) => {
  const category = template.category;
  if (!categoryBreakdown[category]) {
    categoryBreakdown[category] = { free: 0, premium: 0 };
  }
  categoryBreakdown[category][template.tier]++;
});

console.log("\n📊 Category Breakdown:");
Object.entries(categoryBreakdown).forEach(([category, counts]) => {
  console.log(
    `${category}: ${counts.free} free, ${counts.premium} premium (${
      counts.free + counts.premium
    } total)`
  );
});

console.log(`\n🎯 Total: ${allUniqueTemplates.length} templates`);
console.log(`📱 Categories: ${categories.length}`);
console.log(
  `💎 Premium: ${allUniqueTemplates.filter((t) => t.tier === "premium").length}`
);
console.log(
  `🆓 Free: ${allUniqueTemplates.filter((t) => t.tier === "free").length}`
);
