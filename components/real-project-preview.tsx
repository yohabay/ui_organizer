"use client";

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { Screenshot, Template } from "@/types";
import { Globe, Image, Smartphone, Sparkles, Tablet } from "lucide-react";

interface RealProjectPreviewProps {
  template: Template;
  isSelected: boolean;
  onSelect: () => void;
  screenshots?: Screenshot[];
  selectedFrame?: string;
  onFrameChange?: (frame: string) => void;
}

export function RealProjectPreview({
  template,
  isSelected,
  onSelect,
  screenshots = [],
  selectedFrame = "none",
  onFrameChange,
}: RealProjectPreviewProps) {
  console.log("RealProjectPreview received:", {
    template: template?.name,
    screenshotsCount: screenshots.length,
    screenshots: screenshots.map((s) => ({ name: s.name, url: s.url })),
    selectedFrame,
  });

  // Get device aspect ratios based on real device dimensions
  const getDeviceAspectRatio = (frame: string) => {
    switch (frame) {
      case "iphone":
        return 9 / 19.5; // iPhone 14 Pro aspect ratio (393x852)
      case "android":
        return 9 / 16; // Android phone aspect ratio (360x640)
      case "tablet":
        return 4 / 3; // iPad aspect ratio (768x1024)
      case "browser":
        return 16 / 9; // Browser window aspect ratio (1920x1080)
      default:
        return 1; // Square for no frame
    }
  };

  // Get device dimensions at 18% scale (reduced to fit more content)
  const getDeviceDimensions = (frame: string) => {
    const scale = 0.18; // 18% of real device size
    switch (frame) {
      case "iphone":
        return { width: 393 * scale, height: 852 * scale }; // iPhone 14 Pro
      case "android":
        return { width: 360 * scale, height: 640 * scale }; // Android phone
      case "tablet":
        return { width: 768 * scale, height: 1024 * scale }; // iPad
      case "browser":
        return { width: 1920 * scale, height: 1080 * scale }; // Browser window
      default:
        return { width: 140, height: 140 }; // Default square
    }
  };

  const renderProjectPreview = () => {
    const hasScreenshots = screenshots.length > 0;
    console.log(
      "Rendering preview with screenshots:",
      hasScreenshots,
      screenshots.length
    );

    const deviceAspectRatio = getDeviceAspectRatio(selectedFrame);

    return (
      <div
        className="relative w-full h-full bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-2xl overflow-hidden border border-slate-200/50 shadow-xl"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
          gridTemplateRows: `repeat(${template.rows}, 1fr)`,
          gap: "2px sm:3px md:4px",
          padding: "4px sm:6px md:8px",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #f1f5f9 100%)",
        }}
      >
        {/* Template Slots - Enhanced with Modern Design */}
        {template.slots.map((slot, index) => {
          const screenshot = screenshots[index];

          return (
            <div
              key={index}
              className={cn(
                "relative transition-all duration-500 ease-out group",
                "border border-slate-200/60 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm",
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
                slot.borderRadius === "sm" && "rounded-md"
              )}
              style={{
                gridColumn: `${slot.x + 1} / span ${slot.w}`,
                gridRow: `${slot.y + 1} / span ${slot.h}`,
                transform: `rotate(${slot.rotation || 0}deg)`,
                zIndex: slot.zIndex || 1,
                opacity: slot.opacity || 1,
                // Use device frame dimensions for individual slots when device frames are selected
                width:
                  selectedFrame !== "none"
                    ? getDeviceDimensions(selectedFrame).width
                    : "100%",
                height:
                  selectedFrame !== "none"
                    ? getDeviceDimensions(selectedFrame).height
                    : "100%",
                aspectRatio: selectedFrame === "none" ? "auto" : undefined,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {screenshot ? (
                // Show actual screenshot with device frame or selected frame
                <div className="relative w-full h-full">
                  {(() => {
                    const templateDeviceFrame = slot.deviceFrame;
                    const frameToUse = templateDeviceFrame || selectedFrame;

                    if (frameToUse !== "none") {
                      return (
                        <div
                          className={cn(
                            "absolute inset-0 z-10 pointer-events-none",
                            "shadow-2xl shadow-black/20",
                            frameToUse === "iphone" &&
                              "bg-gradient-to-b from-black via-gray-900 to-black rounded-[14px] p-0.5",
                            frameToUse === "android" &&
                              "bg-gradient-to-b from-gray-800 via-black to-gray-800 rounded-[12px] p-0",
                            frameToUse === "tablet" &&
                              "bg-gradient-to-b from-gray-700 via-black to-gray-700 rounded-[14px] p-1",
                            frameToUse === "browser" &&
                              "bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-t-sm p-0"
                          )}
                          style={{
                            width: getDeviceDimensions(frameToUse).width,
                            height: getDeviceDimensions(frameToUse).height,
                            position: "relative",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                        >
                          {/* Browser Frame */}
                          {frameToUse === "browser" && (
                            <div className="flex items-center gap-0.5 mb-0.5 px-0.5 pt-0">
                              <div className="flex gap-0.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-sm"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-sm"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-sm"></div>
                              </div>
                              <div className="flex-1 bg-gray-700/80 backdrop-blur-sm rounded px-1 py-0.5 text-xs text-white/90 font-medium">
                                example.com
                              </div>
                            </div>
                          )}

                          {/* Device Frame Content */}
                          {(frameToUse === "iphone" ||
                            frameToUse === "android" ||
                            frameToUse === "tablet" ||
                            frameToUse === "browser") && (
                            <div
                              className={cn(
                                "w-full h-full bg-white overflow-hidden",
                                frameToUse === "iphone" && "rounded-[10px]",
                                frameToUse === "android" && "rounded-[8px]",
                                frameToUse === "tablet" && "rounded-[10px]",
                                frameToUse === "browser" && "rounded"
                              )}
                            >
                              <img
                                src={screenshot.url}
                                alt={screenshot.name}
                                className="w-full h-full"
                                style={{
                                  borderRadius:
                                    slot.borderRadius === "full"
                                      ? "50%"
                                      : slot.borderRadius === "xl"
                                      ? "12px"
                                      : slot.borderRadius === "lg"
                                      ? "8px"
                                      : slot.borderRadius === "md"
                                      ? "6px"
                                      : slot.borderRadius === "sm"
                                      ? "4px"
                                      : "8px",
                                  objectFit: "contain",
                                  objectPosition: "center",
                                  maxWidth: "100%",
                                  maxHeight: "100%",
                                }}
                              />
                            </div>
                          )}
                        </div>
                      );
                    } else {
                      return (
                        <img
                          src={screenshot.url}
                          alt={screenshot.name}
                          className="w-full h-full"
                          style={{
                            borderRadius:
                              slot.borderRadius === "full"
                                ? "50%"
                                : slot.borderRadius === "xl"
                                ? "12px"
                                : slot.borderRadius === "lg"
                                ? "8px"
                                : slot.borderRadius === "md"
                                ? "6px"
                                : slot.borderRadius === "sm"
                                ? "4px"
                                : "8px",
                            objectFit: "contain",
                            objectPosition: "center",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      );
                    }
                  })()}
                </div>
              ) : (
                // Show enhanced placeholder
                <div
                  className={cn(
                    "w-full h-full flex items-center justify-center text-center p-6",
                    "bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300",
                    "hover:border-slate-400 hover:from-slate-100 hover:to-slate-200 transition-all duration-300",
                    "group-hover:scale-105"
                  )}
                >
                  <div className="space-y-3">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Image className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-semibold text-slate-700">
                        {slot.w > 2 && slot.h > 2 ? (
                          <span>Upload Screenshot</span>
                        ) : (
                          <span>+</span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">
                        {slot.w > 2 && slot.h > 2 ? "Click to add content" : ""}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Enhanced Template Info */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-slate-200/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              <span className="font-semibold text-slate-800">
                {template.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <span>•</span>
              <span className="font-medium">
                {template.slots?.length || 0} slots
              </span>
            </div>
            {screenshots.length > 0 && (
              <div className="flex items-center gap-2">
                <span>•</span>
                <span className="text-green-600 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {screenshots.length} loaded
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Empty State */}
        {!hasScreenshots && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50/80 to-slate-100/80 backdrop-blur-sm">
            <div className="text-center space-y-6 bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-200/50 mx-6">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center shadow-xl">
                <Image className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-800">
                  Upload Screenshots to Preview
                </h3>
                <p className="text-slate-600 max-w-sm">
                  Add screenshots to see your {template.name} layout come to
                  life
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Enhanced View Mode Toggle */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200/50 shadow-sm">
        <Label className="text-sm font-semibold text-slate-700 whitespace-nowrap flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-blue-500" />
          Preview Mode:
        </Label>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onFrameChange?.("none")}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              selectedFrame === "none"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md border border-slate-200"
            }`}
          >
            <span className="mr-2">📱</span>
            <span className="hidden sm:inline">Clean Grid</span>
            <span className="sm:hidden">Grid</span>
          </button>
          <button
            onClick={() => onFrameChange?.("iphone")}
            className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              selectedFrame !== "none"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md border border-slate-200"
            }`}
          >
            <span className="mr-2">📱</span>
            <span className="hidden sm:inline">Device Frames</span>
            <span className="sm:hidden">Frames</span>
          </button>
        </div>
      </div>

      {/* Enhanced Frame Selection - Only show when device frames are enabled */}
      {selectedFrame !== "none" && onFrameChange && (
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl border border-slate-200/50 shadow-sm">
          <Label className="text-sm font-semibold text-slate-700 whitespace-nowrap flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-purple-500" />
            Device Frame:
          </Label>
          <div className="flex flex-wrap gap-3">
            {[
              {
                value: "iphone",
                label: "iPhone",
                shortLabel: "iPhone",
                icon: "📱",
                component: Smartphone,
              },
              {
                value: "android",
                label: "Android",
                shortLabel: "Android",
                icon: "📱",
                component: Smartphone,
              },
              {
                value: "tablet",
                label: "Tablet",
                shortLabel: "Tablet",
                icon: "📱",
                component: Tablet,
              },
              {
                value: "browser",
                label: "Browser",
                shortLabel: "Browser",
                icon: "🌐",
                component: Globe,
              },
            ].map((frame) => {
              const IconComponent = frame.component;
              return (
                <button
                  key={frame.value}
                  onClick={() => onFrameChange(frame.value)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    selectedFrame === frame.value
                      ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:shadow-md border border-slate-200"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{frame.label}</span>
                  <span className="sm:hidden">{frame.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Enhanced Preview Container */}
      <div className="relative w-full">
        <div
          className="bg-gradient-to-br from-white to-slate-50 rounded-3xl overflow-hidden border border-slate-200/50 shadow-2xl w-full max-w-[600px]"
          style={{
            height:
              selectedFrame !== "none"
                ? "min(700px, 95vh)"
                : "min(400px, 60vh)",
            minHeight:
              selectedFrame !== "none"
                ? "min(700px, 95vh)"
                : "min(400px, 60vh)",
          }}
        >
          {renderProjectPreview()}
        </div>
      </div>
    </div>
  );
}
