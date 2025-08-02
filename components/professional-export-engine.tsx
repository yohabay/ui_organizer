"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import type {
  ArrangementSlot,
  ProjectType,
  Template,
  TemplateSlot,
} from "@/types";
import { Download, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { DownloadTroubleshooter } from "./download-troubleshooter";

interface ProfessionalExportEngineProps {
  template: Template | null;
  projectType: ProjectType;
  screenshots: any[];
}

export function ProfessionalExportEngine({
  template,
  projectType,
  screenshots,
}: ProfessionalExportEngineProps) {
  const [exportFormat, setExportFormat] = useState<"png" | "pdf" | "jpg">(
    "png"
  );
  const [portfolioStyle, setPortfolioStyle] = useState<
    "modern" | "minimalist" | "creative" | "corporate"
  >("modern");
  const [portfolioTitle, setPortfolioTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [isExporting, setIsExporting] = useState(false);
  const [includeProjectInfo, setIncludeProjectInfo] = useState(true);
  const [includeBrowserFrames, setIncludeBrowserFrames] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState("#0a0a0a");
  const [accentColor, setAccentColor] = useState("#3b82f6");
  const [useAdvancedEffects, setUseAdvancedEffects] = useState(true);
  const [useGradients, setUseGradients] = useState(true);
  const { toast } = useToast();

  const arrangement = useMemo(() => {
    if (!template || !template.slots || !screenshots) {
      return [];
    } 

    return template.slots.map((slot, index) => ({
      ...slot,
      screenshot: screenshots[index] || null,
    }));
  }, [template, screenshots]);

  const filledSlots = arrangement.filter((slot) => slot.screenshot).length;
  const canExport = template && filledSlots > 0;

  // Check if downloads are blocked by browser
  const checkDownloadSupport = () => {
    const supportsDownload = "download" in document.createElement("a");
    const supportsBlob = "Blob" in window;
    const supportsURL = "URL" in window && "createObjectURL" in window.URL;

    return {
      supportsDownload,
      supportsBlob,
      supportsURL,
      isSupported: supportsDownload && supportsBlob && supportsURL,
    };
  };

  // Debug information
  console.log("Export Engine Debug:", {
    template: template?.name,
    arrangementLength: arrangement.length,
    filledSlots,
    screenshotsLength: screenshots.length,
    canExport,
    arrangementDetails: arrangement.map((slot) => ({
      id: slot.id,
      hasScreenshot: !!slot.screenshot,
      screenshotUrl: slot.screenshot?.url,
      position: { x: slot.x, y: slot.y, w: slot.w, h: slot.h },
    })),
  });

  const portfolioStyles = {
    modern: {
      name: "Modern Designer",
      description:
        "Contemporary design with bold typography and dynamic layouts",
      backgroundColor: "#0a0a0a",
      textColor: "#ffffff",
      accentColor: "#3b82f6",
      secondaryColor: "#64748b",
      spacing: 24,
      borderRadius: 16,
      shadows: true,
      gradients: true,
      titleSize: 64,
      subtitleSize: 20,
    },
    minimalist: {
      name: "Minimalist Pro",
      description: "Clean, focused design with maximum impact",
      backgroundColor: "#ffffff",
      textColor: "#1a1a1a",
      accentColor: "#000000",
      secondaryColor: "#666666",
      spacing: 32,
      borderRadius: 8,
      shadows: false,
      gradients: false,
      titleSize: 48,
      subtitleSize: 18,
    },
    creative: {
      name: "Creative Portfolio",
      description: "Bold, artistic layouts with vibrant colors",
      backgroundColor: "#f8fafc",
      textColor: "#1e293b",
      accentColor: "#f59e0b",
      secondaryColor: "#64748b",
      spacing: 20,
      borderRadius: 20,
      shadows: true,
      gradients: true,
      titleSize: 56,
      subtitleSize: 22,
    },
    corporate: {
      name: "Corporate Professional",
      description: "Sophisticated business presentation style",
      backgroundColor: "#1e293b",
      textColor: "#f8fafc",
      accentColor: "#06b6d4",
      secondaryColor: "#94a3b8",
      spacing: 28,
      borderRadius: 12,
      shadows: true,
      gradients: true,
      titleSize: 52,
      subtitleSize: 19,
    },
  };

  const createProfessionalCanvas = async (
    arrangementData: ArrangementSlot[],
    pageNumber = 1
  ) => {
    console.log(
      "Creating professional canvas with arrangement:",
      arrangementData
    );

    // Use template from component props
    const templateToUse = optimalTemplate;
    if (!templateToUse) {
      throw new Error("No template available for export");
    }

    // Increase canvas size for better quality and spacing
    const canvasWidth = (templateToUse.cols || 12) * 120;
    const canvasHeight = (templateToUse.rows || 8) * 120;

    const canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("Could not get canvas context");
    }

    // Set high-quality rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Clean background with gradient
    const gradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
    gradient.addColorStop(0, backgroundColor);
    gradient.addColorStop(1, backgroundColor + "20");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Calculate cell dimensions with proper spacing
    const gap = 8; // Gap between cells
    const cellWidth =
      (canvasWidth - gap * (templateToUse.cols || 12 + 1)) /
      (templateToUse.cols || 12);
    const cellHeight =
      (canvasHeight - gap * (templateToUse.rows || 8 + 1)) /
      (templateToUse.rows || 8);

    // Process each slot exactly as defined in template
    for (let i = 0; i < arrangementData.length; i++) {
      const slot = arrangementData[i];
      console.log(`Processing slot ${i}:`, slot);

      if (!slot.screenshot) {
        console.log(`No screenshot for slot ${i}`);
        continue;
      }

      // Calculate position and size exactly as template defines with gaps
      const gap = 8;
      const x = slot.x * (cellWidth + gap) + gap;
      const y = slot.y * (cellHeight + gap) + gap;
      const width = slot.w * cellWidth + (slot.w - 1) * gap;
      const height = slot.h * cellHeight + (slot.h - 1) * gap;

      try {
        // Load screenshot image
        if (!slot.screenshot?.url) {
          console.error(`No URL for screenshot in slot ${i}`);
          continue;
        }

        const img = new Image();
        await new Promise((resolve, reject) => {
          img.onload = () => {
            console.log(
              `Image loaded successfully for slot ${i}:`,
              img.width,
              "x",
              img.height
            );
            resolve(null);
          };
          img.onerror = (error) => {
            console.error(
              `Failed to load image for slot ${i}:`,
              slot.screenshot?.url,
              error
            );
            reject(new Error(`Failed to load image: ${slot.screenshot?.url}`));
          };

          img.crossOrigin = "anonymous";
          img.src = slot.screenshot.url;
        });

        // Calculate proper image fitting
        const slotAspectRatio = width / height;
        const imageAspectRatio = img.width / img.height;

        let drawWidth = width;
        let drawHeight = height;
        let drawX = x;
        let drawY = y;

        // Use object-contain approach for consistent sizing
        if (imageAspectRatio > slotAspectRatio) {
          drawWidth = width;
          drawHeight = width / imageAspectRatio;
          drawY = y + (height - drawHeight) / 2;
        } else {
          drawHeight = height;
          drawWidth = height * imageAspectRatio;
          drawX = x + (width - drawWidth) / 2;
        }

        // Apply rotation only if explicitly specified
        const shouldRotate = slot.rotation && Math.abs(slot.rotation) < 45;

        if (shouldRotate) {
          ctx.save();
          const centerX = x + width / 2;
          const centerY = y + height / 2;
          ctx.translate(centerX, centerY);
          ctx.rotate((slot.rotation * Math.PI) / 180);
          ctx.translate(-centerX, -centerY);
        }

        // Add device frame if enabled
        if (includeBrowserFrames && (slot.deviceFrame || slot.browserFrame)) {
          const frameType =
            slot.deviceFrame || (slot.browserFrame ? "browser" : null);

          if (frameType === "browser") {
            // Simple browser frame
            ctx.fillStyle = "#374151";
            ctx.fillRect(x - 2, y - 30, width + 4, height + 32);
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x, y, width, height);
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          } else if (frameType === "iphone" || frameType === "android") {
            // Simple phone frame
            const framePadding = 8;
            ctx.fillStyle = "#000000";
            ctx.fillRect(
              x - framePadding,
              y - framePadding,
              width + framePadding * 2,
              height + framePadding * 2
            );
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(x, y, width, height);
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          }
        } else {
          // No device frame - draw directly
          if (slot.borderRadius && slot.borderRadius !== "none") {
            ctx.save();
            ctx.beginPath();
            let radius = 0;
            switch (slot.borderRadius) {
              case "sm":
                radius = 4;
                break;
              case "md":
                radius = 6;
                break;
              case "lg":
                radius = 8;
                break;
              case "xl":
                radius = 12;
                break;
              case "full":
                radius = Math.min(width, height) / 2;
                break;
              default:
                radius = 8;
            }
            ctx.roundRect(x, y, width, height, radius);
            ctx.clip();
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
            ctx.restore();
          } else {
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          }
        }

        if (shouldRotate) {
          ctx.restore();
        }
      } catch (error) {
        console.error(`Error processing slot ${i}:`, error);
        // Draw placeholder for failed images with better text rendering
        ctx.fillStyle = "#e5e7eb";
        ctx.fillRect(x, y, width, height);
        ctx.strokeStyle = "#d1d5db";
        ctx.lineWidth = 2;
        ctx.strokeRect(x, y, width, height);

        // Improved text rendering
        ctx.fillStyle = "#6b7280";
        ctx.font =
          "bold 16px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Add text shadow for better readability
        ctx.shadowColor = "rgba(0,0,0,0.1)";
        ctx.shadowBlur = 2;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;

        ctx.fillText(`Slot ${i + 1} (Failed to Load)`, x + width / 2, y + height / 2);

        // Reset shadow
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;

        // Add a red border for failed images
        ctx.strokeStyle = "red";
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, width, height);
      }
    }

    return canvas;
  };

  const createModernLayout = async (
    container: HTMLElement,
    slots: ArrangementSlot[],
    style: any
  ) => {
    // Create dynamic masonry-style layout
    const masonryContainer = document.createElement("div");
    masonryContainer.style.display = "grid";
    masonryContainer.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(400px, 1fr))";
    masonryContainer.style.gap = `${style.spacing}px`;
    masonryContainer.style.alignItems = "start";

    for (let i = 0; i < slots.length; i++) {
      const item = document.createElement("div");
      item.style.position = "relative";
      item.style.overflow = "hidden";
      item.style.borderRadius = `${style.borderRadius}px`;
      item.style.background =
        useGradients && style.gradients
          ? `linear-gradient(145deg, ${style.accentColor}10 0%, transparent 100%)`
          : `${style.accentColor}08`;
      item.style.padding = "20px";
      item.style.transition = "all 0.3s ease";

      // Add sophisticated image container
      const imageContainer = document.createElement("div");
      imageContainer.style.position = "relative";
      imageContainer.style.overflow = "hidden";
      imageContainer.style.borderRadius = `${style.borderRadius - 4}px`;
      imageContainer.style.marginBottom = "16px";

      const image = await createAdvancedScreenshot(slots[i], {
        width: "100%",
        height: i === 0 ? "500px" : "300px",
        borderRadius: `${style.borderRadius - 4}px`,
        shadow: useAdvancedEffects
          ? `0 20px 40px -12px rgba(0, 0, 0, 0.25)`
          : "none",
        overlay: useAdvancedEffects,
        style: style,
      });

      imageContainer.appendChild(image);
      item.appendChild(imageContainer);

      // Add sophisticated caption
      const caption = document.createElement("div");
      caption.style.position = "relative";
      caption.style.zIndex = "2";

      const title = document.createElement("h3");
      title.textContent = slots[i].screenshot?.name || `Interface ${i + 1}`;
      title.style.fontSize = "20px";
      title.style.fontWeight = "700";
      title.style.color = style.textColor;
      title.style.marginBottom = "8px";
      title.style.letterSpacing = "-0.01em";
      caption.appendChild(title);

      const subtitle = document.createElement("p");
      subtitle.textContent = `Professional ${projectType} interface showcasing modern design principles and user experience best practices.`;
      subtitle.style.fontSize = "14px";
      subtitle.style.color = style.secondaryColor;
      subtitle.style.lineHeight = "1.5";
      subtitle.style.fontWeight = "400";
      caption.appendChild(subtitle);

      item.appendChild(caption);
      masonryContainer.appendChild(item);
    }

    container.appendChild(masonryContainer);
  };

  const createMinimalistLayout = async (
    container: HTMLElement,
    slots: ArrangementSlot[],
    style: any
  ) => {
    // Create clean, focused layout
    const layoutContainer = document.createElement("div");
    layoutContainer.style.display = "flex";
    layoutContainer.style.flexDirection = "column";
    layoutContainer.style.gap = `${style.spacing * 2}px`;

    for (let i = 0; i < slots.length; i++) {
      const section = document.createElement("div");
      section.style.position = "relative";
      section.style.marginBottom = `${style.spacing}px`;

      const image = await createAdvancedScreenshot(slots[i], {
        width: "100%",
        height: i === 0 ? "600px" : "400px",
        borderRadius: `${style.borderRadius}px`,
        shadow: "none",
        overlay: false,
        style: style,
      });

      section.appendChild(image);

      // Minimal caption
      if (i === 0) {
        const caption = document.createElement("div");
        caption.style.marginTop = "24px";
        caption.style.textAlign = "center";

        const title = document.createElement("h2");
        title.textContent = slots[i].screenshot?.name || "Main Interface";
        title.style.fontSize = "32px";
        title.style.fontWeight = "600";
        title.style.color = style.textColor;
        title.style.marginBottom = "8px";
        caption.appendChild(title);

        const description = document.createElement("p");
        description.textContent =
          projectDescription ||
          `A sophisticated ${projectType} interface designed with precision and purpose.`;
        description.style.fontSize = "16px";
        description.style.color = style.secondaryColor;
        description.style.maxWidth = "600px";
        description.style.margin = "0 auto";
        caption.appendChild(description);

        section.appendChild(caption);
      }

      layoutContainer.appendChild(section);
    }

    container.appendChild(layoutContainer);
  };

  const createCreativeLayout = async (
    container: HTMLElement,
    slots: ArrangementSlot[],
    style: any
  ) => {
    // Create artistic, dynamic layout
    const creativeContainer = document.createElement("div");
    creativeContainer.style.position = "relative";
    creativeContainer.style.display = "grid";
    creativeContainer.style.gridTemplateColumns = "1fr 1fr";
    creativeContainer.style.gap = `${style.spacing}px`;
    creativeContainer.style.alignItems = "start";

    // Hero section (left side)
    if (slots.length > 0) {
      const heroSection = document.createElement("div");
      heroSection.style.gridColumn = "1";
      heroSection.style.position = "relative";

      const heroImage = await createAdvancedScreenshot(slots[0], {
        width: "100%",
        height: "700px",
        borderRadius: `${style.borderRadius}px`,
        shadow: useAdvancedEffects
          ? `0 25px 50px -12px rgba(0, 0, 0, 0.3)`
          : "none",
        overlay: useAdvancedEffects,
        style: style,
      });

      heroSection.appendChild(heroImage);

      // Add creative overlay
      if (useAdvancedEffects) {
        const overlay = document.createElement("div");
        overlay.style.position = "absolute";
        overlay.style.top = "20px";
        overlay.style.left = "20px";
        overlay.style.right = "20px";
        overlay.style.bottom = "20px";
        overlay.style.background = `linear-gradient(135deg, ${style.accentColor}20 0%, transparent 100%)`;
        overlay.style.borderRadius = `${style.borderRadius - 4}px`;
        overlay.style.pointerEvents = "none";
        heroSection.appendChild(overlay);
      }

      creativeContainer.appendChild(heroSection);
    }

    // Side gallery (right side)
    if (slots.length > 1) {
      const gallerySection = document.createElement("div");
      gallerySection.style.gridColumn = "2";
      gallerySection.style.display = "flex";
      gallerySection.style.flexDirection = "column";
      gallerySection.style.gap = `${style.spacing}px`;

      for (let i = 1; i < slots.length; i++) {
        const galleryItem = document.createElement("div");
        galleryItem.style.position = "relative";

        const image = await createAdvancedScreenshot(slots[i], {
          width: "100%",
          height: "300px",
          borderRadius: `${style.borderRadius}px`,
          shadow: useAdvancedEffects
            ? `0 10px 25px -5px rgba(0, 0, 0, 0.2)`
            : "none",
          overlay: useAdvancedEffects,
          style: style,
        });

        galleryItem.appendChild(image);
        gallerySection.appendChild(galleryItem);
      }

      creativeContainer.appendChild(gallerySection);
    }

    container.appendChild(creativeContainer);
  };

  const createCorporateLayout = async (
    container: HTMLElement,
    slots: ArrangementSlot[],
    style: any
  ) => {
    // Create professional business layout
    const corporateContainer = document.createElement("div");
    corporateContainer.style.display = "flex";
    corporateContainer.style.flexDirection = "column";
    corporateContainer.style.gap = `${style.spacing * 1.5}px`;

    for (let i = 0; i < slots.length; i++) {
      const section = document.createElement("div");
      section.style.position = "relative";
      section.style.marginBottom = `${style.spacing}px`;

      const imageContainer = document.createElement("div");
      imageContainer.style.position = "relative";
      imageContainer.style.marginBottom = "24px";

      const image = await createAdvancedScreenshot(slots[i], {
        width: "100%",
        height: i === 0 ? "500px" : "350px",
        borderRadius: `${style.borderRadius}px`,
        shadow: useAdvancedEffects
          ? `0 15px 35px -8px rgba(0, 0, 0, 0.2)`
          : "none",
        overlay: useAdvancedEffects,
        style: style,
      });

      imageContainer.appendChild(image);
      section.appendChild(imageContainer);

      // Professional caption
      const caption = document.createElement("div");
      caption.style.display = "flex";
      caption.style.justifyContent = "space-between";
      caption.style.alignItems = "flex-start";
      caption.style.padding = "20px 0";
      caption.style.borderBottom = `1px solid ${style.accentColor}20`;

      const leftInfo = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = slots[i].screenshot?.name || `Interface ${i + 1}`;
      title.style.fontSize = "22px";
      title.style.fontWeight = "600";
      title.style.color = style.textColor;
      title.style.marginBottom = "8px";
      leftInfo.appendChild(title);

      const subtitle = document.createElement("p");
      subtitle.textContent = `Professional ${projectType} interface designed for optimal user experience and business impact.`;
      subtitle.style.fontSize = "15px";
      subtitle.style.color = style.secondaryColor;
      subtitle.style.lineHeight = "1.5";
      leftInfo.appendChild(subtitle);

      const rightInfo = document.createElement("div");
      rightInfo.style.textAlign = "right";
      const tech = document.createElement("span");
      tech.textContent = projectType.toUpperCase();
      tech.style.display = "inline-block";
      tech.style.background =
        useGradients && style.gradients
          ? `linear-gradient(135deg, ${style.accentColor} 0%, ${style.accentColor}dd 100%)`
          : style.accentColor;
      tech.style.color = "white";
      tech.style.padding = "6px 12px";
      tech.style.borderRadius = "4px";
      tech.style.fontSize = "11px";
      tech.style.fontWeight = "600";
      tech.style.letterSpacing = "0.5px";
      rightInfo.appendChild(tech);

      caption.appendChild(leftInfo);
      caption.appendChild(rightInfo);
      section.appendChild(caption);
      corporateContainer.appendChild(section);
    }

    container.appendChild(corporateContainer);
  };

  const createAdvancedScreenshot = async (
    slot: ArrangementSlot,
    styles: any
  ): Promise<HTMLElement> => {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";
    wrapper.style.width = styles.width;
    wrapper.style.height = styles.height;
    wrapper.style.borderRadius = styles.borderRadius;
    wrapper.style.overflow = "hidden";
    wrapper.style.boxShadow = styles.shadow;
    wrapper.style.border = styles.border || "none";
    wrapper.style.margin = styles.margin || "0";

    // Ensure proper spacing and prevent compression
    wrapper.style.padding = "4px";
    wrapper.style.boxSizing = "border-box";

    // Check for device-specific frame from template slot
    const templateSlot = template?.slots?.find(
      (s) => s.x === slot.x && s.y === slot.y
    );
    const deviceFrame = templateSlot?.deviceFrame;

    if (deviceFrame && deviceFrame !== "none") {
      // Create device-specific frame
      const deviceFrameWrapper = document.createElement("div");
      deviceFrameWrapper.style.width = "100%";
      deviceFrameWrapper.style.height = "100%";
      deviceFrameWrapper.style.position = "relative";
      deviceFrameWrapper.style.display = "flex";
      deviceFrameWrapper.style.alignItems = "center";
      deviceFrameWrapper.style.justifyContent = "center";

      // Device frame styling based on type
      const frameStyles = {
        iphone: {
          background:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)",
          borderRadius: "20px",
          padding: "8px",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        android: {
          background:
            "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #2d2d2d 100%)",
          borderRadius: "16px",
          padding: "6px",
          boxShadow:
            "0 6px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        tablet: {
          background:
            "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #2d2d2d 100%)",
          borderRadius: "24px",
          padding: "12px",
          boxShadow:
            "0 12px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        },
        browser: {
          background:
            "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)",
          borderRadius: "8px",
          padding: "0",
          boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        },
      };

      const frameStyle =
        frameStyles[deviceFrame as keyof typeof frameStyles] ||
        frameStyles.browser;

      deviceFrameWrapper.style.background = frameStyle.background;
      deviceFrameWrapper.style.borderRadius = frameStyle.borderRadius;
      deviceFrameWrapper.style.padding = frameStyle.padding;
      deviceFrameWrapper.style.boxShadow = frameStyle.boxShadow;

      // Create inner content area
      const contentArea = document.createElement("div");
      contentArea.style.width = "100%";
      contentArea.style.height = "100%";
      contentArea.style.backgroundColor = "white";
      contentArea.style.borderRadius =
        deviceFrame === "browser" ? "4px" : "12px";
      contentArea.style.overflow = "hidden";
      contentArea.style.position = "relative";

      // Add browser-specific elements
      if (deviceFrame === "browser") {
        const titleBar = document.createElement("div");
        titleBar.style.height = "24px";
        titleBar.style.background =
          "linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 100%)";
        titleBar.style.display = "flex";
        titleBar.style.alignItems = "center";
        titleBar.style.padding = "0 8px";
        titleBar.style.borderBottom = "1px solid #e2e8f0";
        titleBar.style.fontSize = "10px";

        // Traffic lights
        const trafficLights = document.createElement("div");
        trafficLights.style.display = "flex";
        trafficLights.style.gap = "4px";

        ["#ff5f57", "#ffbd2e", "#28ca42"].forEach((color) => {
          const dot = document.createElement("div");
          dot.style.width = "8px";
          dot.style.height = "8px";
          dot.style.borderRadius = "50%";
          dot.style.backgroundColor = color;
          dot.style.boxShadow = "inset 0 1px 2px rgba(0,0,0,0.1)";
          trafficLights.appendChild(dot);
        });

        // URL bar
        const urlBar = document.createElement("div");
        urlBar.style.flex = "1";
        urlBar.style.marginLeft = "12px";
        urlBar.style.height = "16px";
        urlBar.style.backgroundColor = "white";
        urlBar.style.borderRadius = "3px";
        urlBar.style.border = "1px solid #d1d5db";
        urlBar.style.display = "flex";
        urlBar.style.alignItems = "center";
        urlBar.style.padding = "0 8px";
        urlBar.style.fontSize = "9px";
        urlBar.style.color = "#6b7280";

        const urlText = document.createElement("span");
        urlText.textContent = "example.com";
        urlText.style.fontWeight = "400";
        urlBar.appendChild(urlText);

        titleBar.appendChild(trafficLights);
        titleBar.appendChild(urlBar);
        contentArea.appendChild(titleBar);
      }

      // Add screenshot content
      if (slot.screenshot) {
        const screenshotImg = document.createElement("img");
        screenshotImg.src = slot.screenshot.url;
        screenshotImg.style.width = "100%";
        screenshotImg.style.height =
          deviceFrame === "browser" ? "calc(100% - 24px)" : "100%";
        screenshotImg.style.objectFit = "cover";
        screenshotImg.style.display = "block";
        screenshotImg.style.borderRadius = "8px";
        screenshotImg.style.boxSizing = "border-box";
        contentArea.appendChild(screenshotImg);
      }

      deviceFrameWrapper.appendChild(contentArea);
      wrapper.appendChild(deviceFrameWrapper);
    } else if (
      includeBrowserFrames &&
      (projectType === "website" || projectType === "desktop")
    ) {
      // Create sophisticated browser frame for non-device-specific templates
      const browserFrame = document.createElement("div");
      browserFrame.style.width = "100%";
      browserFrame.style.height = "100%";
      browserFrame.style.backgroundColor = "#f8fafc";
      browserFrame.style.borderRadius = styles.borderRadius;
      browserFrame.style.overflow = "hidden";
      browserFrame.style.position = "relative";

      // Advanced browser title bar
      const titleBar = document.createElement("div");
      titleBar.style.height = "32px";
      titleBar.style.background =
        useGradients && styles.style.gradients
          ? "linear-gradient(90deg, #f1f5f9 0%, #e2e8f0 100%)"
          : "#f1f5f9";
      titleBar.style.display = "flex";
      titleBar.style.alignItems = "center";
      titleBar.style.padding = "0 16px";
      titleBar.style.borderBottom = "1px solid #e2e8f0";
      titleBar.style.position = "relative";

      // Sophisticated traffic lights
      const trafficLights = document.createElement("div");
      trafficLights.style.display = "flex";
      trafficLights.style.gap = "6px";

      const colors = ["#ff5f57", "#ffbd2e", "#28ca42"];
      colors.forEach((color) => {
        const dot = document.createElement("div");
        dot.style.width = "10px";
        dot.style.height = "10px";
        dot.style.borderRadius = "50%";
        dot.style.backgroundColor = color;
        dot.style.boxShadow = "inset 0 1px 2px rgba(0,0,0,0.1)";
        trafficLights.appendChild(dot);
      });

      // Professional URL bar
      const urlBar = document.createElement("div");
      urlBar.style.flex = "1";
      urlBar.style.marginLeft = "20px";
      urlBar.style.height = "20px";
      urlBar.style.backgroundColor = "white";
      urlBar.style.borderRadius = "4px";
      urlBar.style.border = "1px solid #d1d5db";
      urlBar.style.display = "flex";
      urlBar.style.alignItems = "center";
      urlBar.style.padding = "0 12px";
      urlBar.style.fontSize = "11px";
      urlBar.style.color = "#6b7280";
      urlBar.style.fontFamily = "'SF Mono', Monaco, 'Cascadia Code', monospace";

      const urlText = document.createElement("span");
      urlText.textContent = "https://example.com";
      urlText.style.fontWeight = "400";
      urlBar.appendChild(urlText);

      titleBar.appendChild(trafficLights);
      titleBar.appendChild(urlBar);
      browserFrame.appendChild(titleBar);

      // Add screenshot content
      if (slot.screenshot) {
        const screenshotImg = document.createElement("img");
        screenshotImg.src = slot.screenshot.url;
        screenshotImg.style.width = "100%";
        screenshotImg.style.height = "calc(100% - 32px)";
        screenshotImg.style.objectFit = "cover";
        screenshotImg.style.display = "block";
        screenshotImg.style.borderRadius = "8px";
        screenshotImg.style.boxSizing = "border-box";
        browserFrame.appendChild(screenshotImg);
      }

      wrapper.appendChild(browserFrame);
    } else {
      // Direct screenshot without frame
      if (slot.screenshot) {
        const screenshotImg = document.createElement("img");
        screenshotImg.src = slot.screenshot.url;
        screenshotImg.style.width = "100%";
        screenshotImg.style.height = "100%";
        screenshotImg.style.objectFit = "cover";
        screenshotImg.style.display = "block";
        screenshotImg.style.borderRadius = "8px";
        screenshotImg.style.boxSizing = "border-box";
        wrapper.appendChild(screenshotImg);
      }
    }

    // Add sophisticated overlay effects
    if (styles.overlay && useAdvancedEffects) {
      const overlay = document.createElement("div");
      overlay.style.position = "absolute";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.right = "0";
      overlay.style.bottom = "0";
      overlay.style.background = `linear-gradient(135deg, ${styles.style.accentColor}10 0%, transparent 50%, ${styles.style.accentColor}05 100%)`;
      overlay.style.pointerEvents = "none";
      overlay.style.borderRadius = styles.borderRadius;
      wrapper.appendChild(overlay);
    }

    return wrapper;
  };

  const handleExport = async () => {
    console.log("Export button clicked");
    console.log("Current state:", {
      arrangement: arrangement.length,
      template: template?.name,
      screenshots: screenshots.length,
      exportFormat,
    });

    if (!arrangement.length) {
      toast({
        title: "No Screenshots",
        description: "Please upload screenshots before exporting.",
        variant: "destructive",
      });
      return;
    }

    if (!template) {
      toast({
        title: "No Template",
        description: "Please select a template before exporting.",
        variant: "destructive",
      });
      return;
    }

    // Check browser compatibility
    const downloadSupport = checkDownloadSupport();
    if (!downloadSupport.isSupported) {
      toast({
        title: "Browser Not Supported",
        description: `Your browser doesn't support automatic downloads. Missing: ${[
          !downloadSupport.supportsDownload && "download attribute",
          !downloadSupport.supportsBlob && "Blob API",
          !downloadSupport.supportsURL && "URL.createObjectURL",
        ]
          .filter(Boolean)
          .join(", ")}. Please use a modern browser.`,
        variant: "destructive",
      });
      return;
    }

    try {
      setIsExporting(true);
      console.log("Starting export with arrangement:", arrangement);
      console.log("Template being used:", template);

      // Create canvas with template layout exactly as selected
      let canvas;
      try {
        canvas = await createProfessionalCanvas(arrangement);
      } catch (canvasError) {
        console.error(
          "Complex canvas creation failed, trying simple fallback:",
          canvasError
        );

        // Fallback: Create a simple canvas with screenshots
        canvas = document.createElement("canvas");
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          throw new Error("Could not get canvas context for fallback");
        }

        // Fill background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, 1200, 800);

        // Draw screenshots in a simple grid
        const screenshotsPerRow = 3;
        const screenshotWidth = 350;
        const screenshotHeight = 200;
        const padding = 20;

        for (let i = 0; i < screenshots.length; i++) {
          const row = Math.floor(i / screenshotsPerRow);
          const col = i % screenshotsPerRow;
          const x = col * (screenshotWidth + padding) + padding;
          const y = row * (screenshotHeight + padding) + padding;

          try {
            const img = new Image();
            await new Promise((resolve, reject) => {
              img.onload = resolve;
              img.onerror = reject;
              img.crossOrigin = "anonymous";
              img.src = screenshots[i].url;
            });

            ctx.drawImage(img, x, y, screenshotWidth, screenshotHeight);
          } catch (imgError) {
            console.error(`Failed to load screenshot ${i}:`, imgError);
            // Draw placeholder
            ctx.fillStyle = "#ccc";
            ctx.fillRect(x, y, screenshotWidth, screenshotHeight);
            ctx.fillStyle = "#666";
            ctx.font = "16px Arial";
            ctx.fillText(`Screenshot ${i + 1}`, x + 10, y + 30);
          }
        }
      }

      if (!canvas) {
        throw new Error("Failed to create canvas");
      }

      console.log("Canvas created successfully:", {
        width: canvas.width,
        height: canvas.height,
      });

      // Download the result
      await downloadImage(canvas, exportFormat);

      toast({
        title: "Export Successful!",
        description: `Portfolio exported as ${exportFormat.toUpperCase()}`,
      });
    } catch (error) {
      console.error("Export failed:", error);
      toast({
        title: "Export Failed",
        description:
          error instanceof Error
            ? error.message
            : "There was an error exporting your portfolio. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsExporting(false);
    }
  };

  // Simple test export function with improved error handling
  const testSimpleExport = async () => {
    console.log("Testing simple export...");

    // Create a simple test canvas
    const testCanvas = document.createElement("canvas");
    testCanvas.width = 800;
    testCanvas.height = 600;
    const ctx = testCanvas.getContext("2d");

    if (!ctx) {
      toast({
        title: "Test Export Failed",
        description:
          "Could not get canvas context. Check browser compatibility.",
        variant: "destructive",
      });
      return;
    }

    // Draw a simple test image
    ctx.fillStyle = "#3b82f6";
    ctx.fillRect(0, 0, 800, 600);
    ctx.fillStyle = "white";
    ctx.font = "48px Arial";
    ctx.fillText("Test Export", 200, 300);

    // Try to download the test image using the same method as main export
    try {
      await downloadImage(testCanvas, "png");

      console.log("Test export successful");
      toast({
        title: "Test Export Successful",
        description:
          "Basic export functionality is working. Check your downloads folder.",
      });
    } catch (error) {
      console.error("Test export failed:", error);
      toast({
        title: "Test Export Failed",
        description: `Error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
        variant: "destructive",
      });
    }
  };

  // Test screenshot loading
  const testScreenshotLoading = async () => {
    console.log("Testing screenshot loading...");
    console.log("Screenshots:", screenshots);
    console.log("Arrangement:", arrangement);

    if (screenshots.length === 0) {
      console.log("No screenshots available");
      toast({
        title: "No Screenshots",
        description: "Please upload some screenshots first.",
        variant: "destructive",
      });
      return;
    }

    // Test if screenshots are loading properly
    for (let i = 0; i < screenshots.length; i++) {
      const screenshot = screenshots[i];
      console.log(`Screenshot ${i}:`, screenshot);

      if (screenshot.url) {
        try {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => {
            console.log(
              `Screenshot ${i} loaded successfully:`,
              img.width,
              "x",
              img.height
            );
          };
          img.onerror = () => {
            console.error(`Screenshot ${i} failed to load:`, screenshot.url);
          };
          img.src = screenshot.url;
        } catch (error) {
          console.error(`Error testing screenshot ${i}:`, error);
        }
      }
    }
  };

  // Improved download function with multiple fallbacks
  const downloadImage = async (canvas: HTMLCanvasElement, format: string) => {
    console.log("Downloading image with format:", format);

    // Validate canvas
    if (!canvas || !canvas.getContext) {
      throw new Error("Invalid canvas element");
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get canvas context");
    }

    // Check if canvas has content
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const hasContent = imageData.data.some((pixel) => pixel !== 0);

    if (!hasContent) {
      console.warn("Canvas appears to be empty");
    }

    try {
      // Method 1: Use toBlob with better error handling
      const blob = await new Promise<Blob>((resolve, reject) => {
        try {
          canvas.toBlob(
            (blob) => {
              if (blob) {
                console.log("Blob created successfully, size:", blob.size);
                resolve(blob);
              } else {
                console.error("Blob creation returned null");
                reject(new Error("Failed to create blob - returned null"));
              }
            },
            `image/${format}`,
            1.0 // Maximum quality
          );
        } catch (error) {
          console.error("Error in toBlob:", error);
          reject(error);
        }
      });

      if (!blob || blob.size === 0) {
        throw new Error("Created blob is empty or invalid");
      }

      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${portfolioTitle || "professional-portfolio"}.${format}`;
      link.style.display = "none";

      // Ensure the link is properly added and clicked
      document.body.appendChild(link);

      // Use a small delay to ensure the link is properly attached
      await new Promise((resolve) => setTimeout(resolve, 100));

      link.click();

      // Clean up after a delay to ensure download starts
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 1000);

      console.log("Image download completed via blob method");
    } catch (error) {
      console.error("Blob method failed, trying data URL method:", error);

      // Method 2: Use data URL as fallback
      try {
        const dataUrl = canvas.toDataURL(`image/${format}`, 0.98);

        if (!dataUrl || dataUrl === "data:,") {
          throw new Error("Data URL creation failed");
        }

        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = `${
          portfolioTitle || "professional-portfolio"
        }.${format}`;
        link.style.display = "none";

        document.body.appendChild(link);

        // Use a small delay to ensure the link is properly attached
        await new Promise((resolve) => setTimeout(resolve, 100));

        link.click();

        // Clean up after a delay to ensure download starts
        setTimeout(() => {
          document.body.removeChild(link);
        }, 1000);

        console.log("Image download completed via data URL method");
      } catch (dataUrlError) {
        console.error("Data URL method also failed:", dataUrlError);

        // Method 3: Create a visible download link as fallback
        try {
          const dataUrl = canvas.toDataURL(`image/${format}`, 0.9);

          // Create a visible download link
          const downloadLink = document.createElement("a");
          downloadLink.href = dataUrl;
          downloadLink.download = `${
            portfolioTitle || "professional-portfolio"
          }.${format}`;
          downloadLink.textContent = `Download ${format.toUpperCase()} File`;
          downloadLink.className =
            "inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-2";

          // Add to page temporarily
          const container = document.createElement("div");
          container.style.position = "fixed";
          container.style.top = "20px";
          container.style.right = "20px";
          container.style.zIndex = "9999";
          container.style.background = "white";
          container.style.padding = "10px";
          container.style.border = "1px solid #ccc";
          container.style.borderRadius = "5px";
          container.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

          const closeButton = document.createElement("button");
          closeButton.textContent = "×";
          closeButton.style.position = "absolute";
          closeButton.style.top = "5px";
          closeButton.style.right = "5px";
          closeButton.style.background = "none";
          closeButton.style.border = "none";
          closeButton.style.fontSize = "20px";
          closeButton.style.cursor = "pointer";
          closeButton.onclick = () => document.body.removeChild(container);

          container.appendChild(closeButton);
          container.appendChild(downloadLink);
          document.body.appendChild(container);

          console.log("Created visible download link as fallback");
          toast({
            title: "Download Link Created",
            description:
              "A download link has been added to the page. Click it to download.",
          });

          // Auto-remove after 30 seconds
          setTimeout(() => {
            if (document.body.contains(container)) {
              document.body.removeChild(container);
            }
          }, 30000);
        } catch (windowError) {
          console.error("All download methods failed:", windowError);
          throw new Error(
            "All download methods failed. Please check your browser settings and try again."
          );
        }
      }
    }
  };

  // Dynamic template generation based on screenshot count
  const generateDynamicTemplate = (screenshotCount: number): Template => {
    const cols = 3; // Number of columns in the grid
    const rows = Math.ceil(screenshotCount / cols); // Calculate rows needed

    const slots: TemplateSlot[] = [];
    for (let i = 0; i < screenshotCount; i++) {
      const row = Math.floor(i / cols);
      const col = i % cols;
      slots.push({
        x: col * 4, // Each slot takes 4 grid units horizontally
        y: row * 3, // Each slot takes 3 grid units vertically
        w: 4,       // Width of each slot
        h: 3,       // Height of each slot
        borderRadius: "lg", // Example: default border radius
        shadow: "md",       // Example: default shadow
      });
    }

    return {
      id: `dynamic-${screenshotCount}`,
      name: `Dynamic Layout (${screenshotCount} screenshots)`,
      description: `Automatically generated grid layout for ${screenshotCount} screenshots`,
      category: "Dynamic Layouts",
      projectTypes: [projectType],
      rows: rows * 3, // Total rows based on slot height
      cols: cols * 4, // Total columns based on slot width
      slots,
      preview: `/template-previews/dynamic-${screenshotCount}.jpg`,
      tags: ["dynamic", "auto-generated", "grid"],
    };
  };

  // Smart template selection based on screenshot count
  const getOptimalTemplate = (screenshotCount: number): Template => {
    // If a template is explicitly selected and it has enough slots, use it.
    // Otherwise, generate a dynamic template that can hold all screenshots.
    if (template && template.slots.length >= screenshotCount) {
      return template;
    }
    return generateDynamicTemplate(screenshotCount);
  };

  // Get the optimal template for current screenshots
  const optimalTemplate = getOptimalTemplate(screenshots.length);

  return (
    <div className="space-y-6">
      {/* Simple Export Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Export Settings
            </CardTitle>
            <CardDescription>Configure your export options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Export Format */}
            <div className="space-y-2">
              <Label htmlFor="export-format">Export Format</Label>
              <Select value={exportFormat} onValueChange={setExportFormat}>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG (Best Quality)</SelectItem>
                  <SelectItem value="jpg">JPG (Smaller Size)</SelectItem>
                  <SelectItem value="pdf">PDF (Document)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Background Color */}
            <div className="space-y-2">
              <Label htmlFor="background-color">Background Color</Label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  id="background-color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-10 rounded border cursor-pointer"
                />
                <Input
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  placeholder="#ffffff"
                  className="flex-1"
                />
              </div>
            </div>

            {/* Device Frames */}
            <div className="space-y-2">
              <Label>Device Frames</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch
                    id="include-device-frames"
                    checked={includeBrowserFrames}
                    onCheckedChange={setIncludeBrowserFrames}
                  />
                  <Label htmlFor="include-device-frames">
                    Add device frames to screenshots
                  </Label>
                </div>
                <p className="text-xs text-muted-foreground">
                  Adds realistic phone/tablet frames around your screenshots
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Preview */}
        <Card>
          <CardHeader>
            <CardTitle>Export Preview</CardTitle>
            <CardDescription>
              Your template layout will be exported exactly as previewed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center"
              style={{minHeight: "200px"}}
            >
              <div className="text-center space-y-2">
                <Download className="h-8 w-8 mx-auto text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Template: {template?.name || "Dynamic Layout"}
                </p>
                <p className="text-xs text-muted-foreground">
                  {arrangement.length} screenshots •{" "}
                  {exportFormat.toUpperCase()} format
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Export Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Export Portfolio</CardTitle>
          <CardDescription>
            Download your portfolio with the selected template layout
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleExport}
              disabled={!arrangement.length}
              className="flex-1"
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Portfolio
            </Button>

            <Button
              variant="outline"
              onClick={testSimpleExport}
              disabled={!arrangement.length}
            >
              <Zap className="mr-2 h-4 w-4" />
              Test Export
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                console.log("Debug info:", {
                  arrangement: arrangement.length,
                  template: template?.name,
                  screenshots: screenshots.length,
                  exportFormat,
                  browserSupport: checkDownloadSupport(),
                });
                toast({
                  title: "Debug Info",
                  description:
                    "Check browser console for detailed debug information",
                });
              }}
              className="w-full mt-2"
            >
              🔍 Debug Info
            </Button>

            <Button
              variant="outline"
              onClick={async () => {
                try {
                  console.log("Testing canvas creation...");
                  const canvas = await createProfessionalCanvas(arrangement);
                  console.log("Canvas created successfully:", canvas);
                  toast({
                    title: "Canvas Test Success",
                    description:
                      "Canvas creation works! Check console for details.",
                  });
                } catch (error) {
                  console.error("Canvas creation failed:", error);
                  toast({
                    title: "Canvas Test Failed",
                    description:
                      error instanceof Error ? error.message : "Unknown error",
                    variant: "destructive",
                  });
                }
              }}
              className="w-full mt-2"
            >
              🎨 Test Canvas Creation
            </Button>
          </div>

          {!arrangement.length && (
            <p className="text-sm text-muted-foreground mt-2">
              Upload screenshots to enable export
            </p>
          )}

          {/* Debug Information */}
          <div className="mt-4 p-3 bg-slate-50 rounded-lg">
            <p className="text-xs font-medium text-slate-700 mb-2">
              Debug Info:
            </p>
            <div className="text-xs text-slate-600 space-y-1">
              <p>
                Browser Support:{" "}
                {checkDownloadSupport().isSupported
                  ? "✅ Supported"
                  : "❌ Not Supported"}
              </p>
              <p>Screenshots: {screenshots.length}</p>
              <p>Arrangement Slots: {arrangement.length}</p>
              <p>Template: {template?.name || "None"}</p>
            </div>
          </div>

          {/* Download Troubleshooter */}
          <DownloadTroubleshooter
            onTestDownload={testSimpleExport}
            browserSupport={checkDownloadSupport()}
          />
        </CardContent>
      </Card>
    </div>
  );
}
