import type { Template } from "@/types";

export const travelTemplates: Template[] = [
  {
    id: "free-travel-booking",
    name: "Travel Booking",
    description: "Travel booking and reservation system",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Flights
      { x: 2, y: 2, w: 2, h: 2 }, // Hotels
      { x: 4, y: 2, w: 2, h: 2 }, // Cars
      { x: 6, y: 2, w: 2, h: 2 }, // Activities
      { x: 0, y: 4, w: 4, h: 3 }, // Search form
      { x: 4, y: 4, w: 4, h: 3 }, // Results
    ],
    preview: "/template-previews/free-travel-booking.jpg",
    tags: ["travel", "booking", "reservation", "tourism"],
  },
  {
    id: "free-hotel-booking",
    name: "Hotel Booking",
    description: "Hotel reservation platform",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Header
      { x: 0, y: 2, w: 2, h: 2 }, // Hotel 1
      { x: 2, y: 2, w: 2, h: 2 }, // Hotel 2
      { x: 4, y: 2, w: 2, h: 2 }, // Hotel 3
      { x: 0, y: 4, w: 3, h: 3 }, // Hotel details
      { x: 3, y: 4, w: 3, h: 3 }, // Booking form
    ],
    preview: "/template-previews/free-hotel-booking.jpg",
    tags: ["hotel", "booking", "accommodation", "travel"],
  },
  {
    id: "free-travel-guide",
    name: "Travel Guide",
    description: "Destination travel guide",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 8,
    slots: [
      { x: 0, y: 0, w: 8, h: 3 }, // Hero destination
      { x: 0, y: 3, w: 2, h: 2 }, // Attractions
      { x: 2, y: 3, w: 2, h: 2 }, // Restaurants
      { x: 4, y: 3, w: 2, h: 2 }, // Hotels
      { x: 6, y: 3, w: 2, h: 2 }, // Transportation
      { x: 0, y: 5, w: 4, h: 3 }, // Map
      { x: 4, y: 5, w: 4, h: 3 }, // Reviews
      { x: 0, y: 8, w: 4, h: 2 }, // Tips
      { x: 4, y: 8, w: 4, h: 2 }, // Weather
    ],
    preview: "/template-previews/free-travel-guide.jpg",
    tags: ["guide", "destination", "travel", "tourism"],
  },
  {
    id: "free-flight-search",
    name: "Flight Search",
    description: "Flight search and booking",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 8,
    cols: 6,
    slots: [
      { x: 0, y: 0, w: 6, h: 2 }, // Search form
      { x: 0, y: 2, w: 2, h: 2 }, // Flight 1
      { x: 2, y: 2, w: 2, h: 2 }, // Flight 2
      { x: 4, y: 2, w: 2, h: 2 }, // Flight 3
      { x: 0, y: 4, w: 3, h: 3 }, // Flight details
      { x: 3, y: 4, w: 3, h: 3 }, // Booking options
    ],
    preview: "/template-previews/free-flight-search.jpg",
    tags: ["flight", "search", "booking", "travel"],
  },
  {
    id: "free-travel-app",
    name: "Travel App",
    description: "Mobile travel application",
    category: "Travel & Tourism",
    projectTypes: ["mobile"],
    rows: 8,
    cols: 4,
    slots: [
      { x: 0, y: 0, w: 4, h: 1 }, // Header
      { x: 0, y: 1, w: 2, h: 2 }, // Bookings
      { x: 2, y: 1, w: 2, h: 2 }, // Explore
      { x: 0, y: 3, w: 4, h: 3 }, // Trip details
      { x: 0, y: 6, w: 2, h: 2 }, // Itinerary
      { x: 2, y: 6, w: 2, h: 2 }, // Photos
    ],
    preview: "/template-previews/free-travel-app.jpg",
    tags: ["travel", "mobile", "app", "tourism"],
  },
  {
    id: "premium-travel-luxury",
    name: "Travel Luxury",
    description: "Luxury travel experience platform",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 4 }, // Hero experience
      { x: 0, y: 4, w: 3, h: 3 }, // Luxury hotels
      { x: 3, y: 4, w: 4, h: 3 }, // Exclusive tours
      { x: 7, y: 4, w: 3, h: 3 }, // Private transfers
      { x: 0, y: 7, w: 2, h: 2 }, // Concierge
      { x: 2, y: 7, w: 2, h: 2 }, // VIP services
      { x: 4, y: 7, w: 2, h: 2 }, // Fine dining
      { x: 6, y: 7, w: 2, h: 2 }, // Spa services
      { x: 8, y: 7, w: 2, h: 2 }, // Experiences
    ],
    preview: "/template-previews/premium-travel-luxury.jpg",
    tags: ["luxury", "travel", "exclusive", "premium"],
  },
  {
    id: "premium-travel-agency",
    name: "Travel Agency",
    description: "Professional travel agency platform",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 12,
    cols: 10,
    slots: [
      { x: 0, y: 0, w: 10, h: 2 }, // Agency header
      { x: 0, y: 2, w: 3, h: 2 }, // Destinations
      { x: 3, y: 2, w: 3, h: 2 }, // Packages
      { x: 6, y: 2, w: 4, h: 2 }, // Special offers
      { x: 0, y: 4, w: 2, h: 2 }, // Europe
      { x: 2, y: 4, w: 2, h: 2 }, // Asia
      { x: 4, y: 4, w: 2, h: 2 }, // Americas
      { x: 6, y: 4, w: 2, h: 2 }, // Africa
      { x: 8, y: 4, w: 2, h: 2 }, // Oceania
      { x: 0, y: 6, w: 5, h: 3 }, // Featured trips
      { x: 5, y: 6, w: 5, h: 3 }, // Customer reviews
      { x: 0, y: 9, w: 4, h: 2 }, // Contact
      { x: 4, y: 9, w: 3, h: 2 }, // About
      { x: 7, y: 9, w: 3, h: 2 }, // Services
    ],
    preview: "/template-previews/premium-travel-agency.jpg",
    tags: ["agency", "professional", "travel", "premium"],
  },
  {
    id: "premium-travel-analytics",
    name: "Travel Analytics",
    description: "Travel industry analytics platform",
    category: "Travel & Tourism",
    projectTypes: ["website", "mobile"],
    rows: 10,
    cols: 12,
    slots: [
      { x: 0, y: 0, w: 12, h: 2 }, // Analytics header
      { x: 0, y: 2, w: 3, h: 2 }, // Bookings
      { x: 3, y: 2, w: 3, h: 2 }, // Revenue
      { x: 6, y: 2, w: 3, h: 2 }, // Customer satisfaction
      { x: 9, y: 2, w: 3, h: 2 }, // Market trends
      { x: 0, y: 4, w: 6, h: 3 }, // Booking trends
      { x: 6, y: 4, w: 6, h: 3 }, // Revenue analysis
      { x: 0, y: 7, w: 4, h: 2 }, // Popular destinations
      { x: 4, y: 7, w: 4, h: 2 }, // Customer insights
      { x: 8, y: 7, w: 4, h: 2 }, // Performance metrics
    ],
    preview: "/template-previews/premium-travel-analytics.jpg",
    tags: ["analytics", "travel", "insights", "premium"],
  },
];
