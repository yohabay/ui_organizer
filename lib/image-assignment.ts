import type { ProjectType, Template, TemplateSlot } from "@/types";

// Device-specific image collections
const DEVICE_IMAGES = {
  mobile: [
    "/template-previews/mobileapp/photo_2025-07-29_19-39-34.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-36.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-39.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-40.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-42.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-44.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-47.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-49.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-51.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-53.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-55.jpg",
    "/template-previews/mobileapp/photo_2025-07-29_19-39-57.jpg",
  ],
  tablet: [
    "/template-previews/tablet/_hotel.png",
    "/template-previews/tablet/_hotel-1.png",
    "/template-previews/tablet/_hotel-2.png",
    "/template-previews/tablet/_hotel-3.png",
    "/template-previews/tablet/_hotel-4.png",
    "/template-previews/tablet/_hotel-5.png",
    "/template-previews/tablet/_hotel-6.png",
  ],
  desktop: [
    "/template-previews/desctopapp/Frame 1.png",
    "/template-previews/desctopapp/Frame 2.png",
    "/template-previews/desctopapp/image 2.png",
    "/template-previews/desctopapp/image 3.png",
    "/template-previews/desctopapp/image 4.png",
    "/template-previews/desctopapp/image 5.png",
    "/template-previews/desctopapp/image 6.png",
  ],
  website: [
    "/template-previews/website/profile.png",
    "/template-previews/website/profile-1.png",
    "/template-previews/website/profile-2.png",
    "/template-previews/website/profile-3.png",
    "/template-previews/website/profile-4.png",
    "/template-previews/website/profile-5.png",
    "/template-previews/website/profile-6.png",
    "/template-previews/website/profile-7.png",
    "/template-previews/website/profile-8.png",
    "/template-previews/website/profile-9.png",
    "/template-previews/website/profile-10.png",
  ],
};

// Device aspect ratios for proper scaling
export const DEVICE_ASPECT_RATIOS = {
  mobile: 9 / 19.5, // iPhone 14 Pro aspect ratio
  tablet: 4 / 3, // iPad aspect ratio
  desktop: 16 / 9, // Desktop window aspect ratio
  website: 16 / 9, // Website browser aspect ratio
};

// Device frame types for visual enhancement
export const DEVICE_FRAMES = {
  mobile: "iphone",
  tablet: "tablet",
  desktop: "browser",
  website: "browser",
};

// Determine the best device context for a slot based on its properties
export function getSlotDeviceContext(
  slot: TemplateSlot,
  template: Template
): ProjectType {
  // If slot has explicit device frame, use that
  if (slot.deviceFrame) {
    switch (slot.deviceFrame) {
      case "iphone":
      case "android":
        return "mobile";
      case "tablet":
        return "tablet";
      case "browser":
        return "website";
      default:
        break;
    }
  }

  // Determine based on slot dimensions and template project types
  const aspectRatio = slot.w / slot.h;

  // Mobile-like slots (tall and narrow)
  if (aspectRatio < 0.8) {
    return "mobile";
  }

  // Tablet-like slots (closer to square or slightly wider)
  if (aspectRatio >= 0.8 && aspectRatio <= 1.5) {
    return "tablet";
  }

  // Desktop/Website-like slots (wide)
  if (aspectRatio > 1.5) {
    return "website";
  }

  // Default to template's first project type
  return template.projectTypes[0] || "website";
}

// Get appropriate images for a slot based on device context
export function getImagesForSlot(
  slot: TemplateSlot,
  template: Template
): string[] {
  const deviceContext = getSlotDeviceContext(slot, template);
  return DEVICE_IMAGES[deviceContext] || DEVICE_IMAGES.website;
}

// Assign images to template slots with intelligent distribution
export function assignImagesToTemplate(
  template: Template
): { slotIndex: number; images: string[] }[] {
  const assignments: { slotIndex: number; images: string[] }[] = [];

  template.slots.forEach((slot, index) => {
    const deviceContext = getSlotDeviceContext(slot, template);
    const availableImages =
      DEVICE_IMAGES[deviceContext] || DEVICE_IMAGES.website;

    // For larger slots, assign multiple images to create variety
    const imageCount = Math.min(
      Math.max(1, Math.floor((slot.w * slot.h) / 2)), // More images for larger slots
      availableImages.length
    );

    // Shuffle and select images
    const shuffled = [...availableImages].sort(() => Math.random() - 0.5);
    const selectedImages = shuffled.slice(0, imageCount);

    assignments.push({
      slotIndex: index,
      images: selectedImages,
    });
  });

  return assignments;
}

// Get responsive dimensions for a slot based on device context
export function getResponsiveSlotDimensions(
  slot: TemplateSlot,
  template: Template,
  containerWidth: number
) {
  const deviceContext = getSlotDeviceContext(slot, template);
  const aspectRatio = DEVICE_ASPECT_RATIOS[deviceContext];

  // Calculate responsive dimensions
  const maxWidth = containerWidth * (slot.w / template.cols);
  const maxHeight = containerWidth * (slot.h / template.rows);

  // Maintain aspect ratio while fitting within slot bounds
  let width = maxWidth;
  let height = maxHeight;

  if (width / height > aspectRatio) {
    // Too wide, adjust height
    height = width / aspectRatio;
  } else {
    // Too tall, adjust width
    width = height * aspectRatio;
  }

  return {
    width: Math.min(width, maxWidth),
    height: Math.min(height, maxHeight),
    aspectRatio,
    deviceContext,
  };
}

// Validate template responsiveness
export function validateTemplateResponsiveness(template: Template): {
  isValid: boolean;
  issues: string[];
} {
  const issues: string[] = [];

  // Check for overlapping slots
  for (let i = 0; i < template.slots.length; i++) {
    for (let j = i + 1; j < template.slots.length; j++) {
      const slotA = template.slots[i];
      const slotB = template.slots[j];

      const overlapX = Math.max(
        0,
        Math.min(slotA.x + slotA.w, slotB.x + slotB.w) -
          Math.max(slotA.x, slotB.x)
      );
      const overlapY = Math.max(
        0,
        Math.min(slotA.y + slotA.h, slotB.y + slotB.h) -
          Math.max(slotA.y, slotB.y)
      );

      if (overlapX > 0 && overlapY > 0) {
        issues.push(`Slots ${i} and ${j} overlap by ${overlapX}x${overlapY}`);
      }
    }
  }

  // Check for slots outside grid bounds
  template.slots.forEach((slot, index) => {
    if (
      slot.x < 0 ||
      slot.y < 0 ||
      slot.x + slot.w > template.cols ||
      slot.y + slot.h > template.rows
    ) {
      issues.push(`Slot ${index} extends beyond grid bounds`);
    }
  });

  // Check for empty grid areas
  const grid = Array(template.rows)
    .fill(null)
    .map(() => Array(template.cols).fill(false));
  template.slots.forEach((slot) => {
    for (let y = slot.y; y < slot.y + slot.h; y++) {
      for (let x = slot.x; x < slot.x + slot.w; x++) {
        if (y < template.rows && x < template.cols) {
          grid[y][x] = true;
        }
      }
    }
  });

  const emptyCells = grid.flat().filter((cell) => !cell).length;
  if (emptyCells > template.rows * template.cols * 0.3) {
    issues.push(
      `Template has ${emptyCells} empty cells (${Math.round(
        (emptyCells / (template.rows * template.cols)) * 100
      )}% of grid)`
    );
  }

  return {
    isValid: issues.length === 0,
    issues,
  };
}

// Optimize template for better responsiveness
export function optimizeTemplateForResponsiveness(
  template: Template
): Template {
  const optimized = { ...template };

  // Ensure minimum gap between slots
  const minGap = 0.1;
  optimized.slots = optimized.slots.map((slot) => ({
    ...slot,
    x: Math.max(0, slot.x - minGap),
    y: Math.max(0, slot.y - minGap),
    w: Math.min(template.cols - slot.x, slot.w + minGap * 2),
    h: Math.min(template.rows - slot.y, slot.h + minGap * 2),
  }));

  return optimized;
}
