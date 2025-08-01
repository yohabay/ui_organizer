"use client";

import {
  DEVICE_ASPECT_RATIOS,
  DEVICE_FRAMES,
  getImagesForSlot,
  getSlotDeviceContext,
} from "@/lib/image-assignment";
import { cn } from "@/lib/utils";
import type { Template } from "@/types";
import { Globe, Image, Monitor, Smartphone, Tablet } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

interface EnhancedTemplatePreviewProps {
  template: Template;
  isSelected?: boolean;
  onSelect?: () => void;
  showDeviceFrames?: boolean;
  containerWidth?: number;
}

// Image cache to prevent re-loading
const imageCache = new Map<string, string>();

export function EnhancedTemplatePreview({
  template,
  isSelected = false,
  onSelect,
  showDeviceFrames = true,
  containerWidth = 500,
}: EnhancedTemplatePreviewProps) {
  const [imageAssignments, setImageAssignments] = useState<{
    [key: number]: string;
  }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Calculate dynamic container height based on number of slots
  const getContainerHeight = () => {
    const slotCount = template.slots.length;
    if (slotCount <= 4) return 320; // Increased from 280
    if (slotCount <= 8) return 360; // Increased from 320
    if (slotCount <= 12) return 400; // Increased from 360
    if (slotCount <= 16) return 440; // New tier for premium layouts
    return 480; // Increased from 400 for very complex layouts
  };

  // Calculate dynamic slot sizes based on container and slot count
  const getSlotSize = () => {
    const slotCount = template.slots.length;
    const containerHeight = getContainerHeight();
    const containerWidth = 500; // Increased width for better visibility

    // Calculate optimal slot size
    const maxSlotsPerRow = Math.ceil(Math.sqrt(slotCount));
    const maxSlotsPerCol = Math.ceil(slotCount / maxSlotsPerRow);

    const slotWidth = Math.min(containerWidth / maxSlotsPerRow, 160); // Increased from 140
    const slotHeight = Math.min(containerHeight / maxSlotsPerCol, 120); // Increased from 100

    return { width: slotWidth, height: slotHeight };
  };

  // Memoized image assignments to prevent unnecessary recalculations
  const memoizedImageAssignments = useMemo(() => {
    const assignments: { [key: number]: string } = {};
    const cacheKey = `${template.id}-${template.slots.length}`;

    // Check if we have cached assignments for this template
    if (imageCache.has(cacheKey)) {
      return JSON.parse(imageCache.get(cacheKey)!);
    }

    template.slots.forEach((slot, index) => {
      const deviceContext = getSlotDeviceContext(slot, template);
      const availableImages = getImagesForSlot(slot, template);

      // Select a random image for this slot
      const randomIndex = Math.floor(Math.random() * availableImages.length);
      assignments[index] = availableImages[randomIndex];
    });

    // Cache the assignments
    imageCache.set(cacheKey, JSON.stringify(assignments));
    return assignments;
  }, [template.id, template.slots.length]);

  // Optimized image loading with intersection observer
  const loadImage = useCallback((index: number, imageUrl: string) => {
    const imgElement = new window.Image();
    imgElement.onload = () => {
      setLoadedImages((prev) => new Set([...prev, index]));
    };
    imgElement.onerror = () => {
      // Fallback to placeholder if image fails to load
      setLoadedImages((prev) => new Set([...prev, index]));
    };
    imgElement.src = imageUrl;
  }, []);

  // Load images with delay to prevent overwhelming the browser
  useEffect(() => {
    setImageAssignments(memoizedImageAssignments);
    setIsLoading(false);

    // Load images with staggered delay to prevent lag
    const loadImagesWithDelay = async () => {
      const entries = Object.entries(memoizedImageAssignments);

      for (let i = 0; i < entries.length; i++) {
        const [index, imageUrl] = entries[i];
        await new Promise((resolve) => setTimeout(resolve, i * 50)); // 50ms delay between each image
        loadImage(parseInt(index), imageUrl);
      }
    };

    loadImagesWithDelay();
  }, [memoizedImageAssignments, loadImage]);

  const getDeviceIcon = (deviceContext: string) => {
    switch (deviceContext) {
      case "mobile":
        return <Smartphone className="w-2 h-2" />;
      case "tablet":
        return <Tablet className="w-2 h-2" />;
      case "desktop":
        return <Monitor className="w-2 h-2" />;
      case "website":
        return <Globe className="w-2 h-2" />;
      default:
        return <Image className="w-2 h-2" />;
    }
  };

  const renderSlot = (slot: any, index: number) => {
    const deviceContext = getSlotDeviceContext(slot, template);
    const deviceFrame = DEVICE_FRAMES[deviceContext];
    const aspectRatio = DEVICE_ASPECT_RATIOS[deviceContext];
    const imageUrl = imageAssignments[index];
    const isImageLoaded = loadedImages.has(index);

    // Use dynamic slot sizing
    const slotSize = getSlotSize();
    const dimensions = {
      width: slotSize.width,
      height: slotSize.height,
      aspectRatio,
      deviceContext,
    };

    return (
      <div
        key={index}
        className={cn(
          "relative transition-all duration-300 ease-out group",
          "border border-slate-200/60 rounded-lg overflow-hidden bg-white/90 backdrop-blur-sm",
          "hover:border-slate-300 hover:bg-white hover:shadow-lg hover:scale-[1.02]",
          "hover:shadow-slate-200/50",
          slot.shadow === "xl" && "shadow-2xl",
          slot.shadow === "lg" && "shadow-lg",
          slot.shadow === "md" && "shadow-md",
          slot.shadow === "sm" && "shadow-sm",
          slot.shadow === "xs" && "shadow",
          slot.borderRadius === "full" && "rounded-full",
          slot.borderRadius === "xl" && "rounded-2xl",
          slot.borderRadius === "lg" && "rounded-xl",
          slot.borderRadius === "md" && "rounded-lg",
          slot.borderRadius === "sm" && "rounded-md",
          isSelected && "ring-2 ring-blue-500 ring-offset-1"
        )}
        style={{
          gridColumn: `${slot.x + 1} / span ${slot.w}`,
          gridRow: `${slot.y + 1} / span ${slot.h}`,
          transform: `rotate(${slot.rotation || 0}deg)`,
          zIndex: slot.zIndex || 1,
          opacity: slot.opacity || 1,
          aspectRatio: showDeviceFrames ? aspectRatio : "auto",
          minHeight: showDeviceFrames ? `${dimensions.height}px` : "auto",
          maxWidth: `${dimensions.width}px`,
          maxHeight: `${dimensions.height}px`,
        }}
        onClick={onSelect}
      >
        {isLoading || !isImageLoaded ? (
          // Optimized loading skeleton
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 animate-pulse">
            <div className="w-4 h-4 bg-slate-300 rounded"></div>
          </div>
        ) : imageUrl ? (
          // Real image with device frame
          <div className="relative w-full h-full">
            {showDeviceFrames && deviceFrame !== "none" ? (
              <div
                className={cn(
                  "absolute inset-0 z-10 pointer-events-none",
                  "shadow-md shadow-black/20",
                  deviceFrame === "iphone" &&
                    "bg-gradient-to-b from-black via-gray-900 to-black rounded-[8px] p-0.5",
                  deviceFrame === "android" &&
                    "bg-gradient-to-b from-gray-800 via-black to-gray-800 rounded-[6px] p-0",
                  deviceFrame === "tablet" &&
                    "bg-gradient-to-b from-gray-700 via-black to-gray-700 rounded-[8px] p-0.5",
                  deviceFrame === "browser" &&
                    "bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-t-sm p-0"
                )}
              >
                {/* Browser Frame */}
                {deviceFrame === "browser" && (
                  <div className="flex items-center gap-0.5 mb-0.5 px-0.5 pt-0">
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-0.5 rounded-full bg-red-500 shadow-sm"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-yellow-500 shadow-sm"></div>
                      <div className="w-0.5 h-0.5 rounded-full bg-green-500 shadow-sm"></div>
                    </div>
                    <div className="flex-1 bg-gray-700/80 backdrop-blur-sm rounded px-0.5 py-0 text-xs text-white/90 font-medium">
                      example.com
                    </div>
                  </div>
                )}

                {/* Device Frame Content */}
                <div
                  className={cn(
                    "w-full h-full bg-white overflow-hidden",
                    deviceFrame === "iphone" && "rounded-[6px]",
                    deviceFrame === "android" && "rounded-[4px]",
                    deviceFrame === "tablet" && "rounded-[6px]",
                    deviceFrame === "browser" && "rounded"
                  )}
                >
                  <img
                    src={imageUrl}
                    alt={`${deviceContext} screenshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    style={{
                      borderRadius:
                        slot.borderRadius === "full"
                          ? "50%"
                          : slot.borderRadius === "xl"
                          ? "8px"
                          : slot.borderRadius === "lg"
                          ? "6px"
                          : slot.borderRadius === "md"
                          ? "4px"
                          : slot.borderRadius === "sm"
                          ? "2px"
                          : "2px",
                    }}
                  />
                </div>
              </div>
            ) : (
              // Image without device frame
              <img
                src={imageUrl}
                alt={`${deviceContext} screenshot`}
                className="w-full h-full object-cover"
                loading="lazy"
                style={{
                  borderRadius:
                    slot.borderRadius === "full"
                      ? "50%"
                      : slot.borderRadius === "xl"
                      ? "8px"
                      : slot.borderRadius === "lg"
                      ? "6px"
                      : slot.borderRadius === "md"
                      ? "4px"
                      : slot.borderRadius === "sm"
                      ? "2px"
                      : "2px",
                }}
              />
            )}

            {/* Device context indicator */}
            <div className="absolute top-0.5 right-0.5 bg-black/60 backdrop-blur-sm rounded-full p-0.5">
              {getDeviceIcon(deviceContext)}
            </div>
          </div>
        ) : (
          // Fallback placeholder
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300">
            <div className="text-center">
              <Image className="w-3 h-3 text-slate-400 mx-auto mb-1" />
              <div className="text-xs text-slate-500">No Image</div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-1">
      {/* Template Header - Minimal at top */}
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="font-medium text-slate-900 text-xs">
            {template.name}
          </h3>
        </div>
        <div className="flex items-center gap-1 text-xs text-slate-500">
          <span>{template.slots.length} slots</span>
        </div>
      </div>

      {/* Template Preview Grid - Focus on slots */}
      <div
        className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-lg overflow-hidden border border-slate-200/50 shadow-md"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
          gridTemplateRows: `repeat(${template.rows}, 1fr)`,
          gap: "1px",
          padding: "2px",
          height: `${getContainerHeight()}px`,
          width: "100%",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
        }}
      >
        {template.slots.map((slot, index) => renderSlot(slot, index))}
      </div>
    </div>
  );
}
