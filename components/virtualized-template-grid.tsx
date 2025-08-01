"use client";

import type { Template } from "@/types";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef, useState } from "react";
import { EnhancedTemplatePreview } from "./enhanced-template-preview";

interface VirtualizedTemplateGridProps {
  templates: Template[];
  selectedTemplate?: Template;
  onTemplateSelect: (template: Template) => void;
  containerHeight?: number;
}

export function VirtualizedTemplateGrid({
  templates,
  selectedTemplate,
  onTemplateSelect,
  containerHeight = 600,
}: VirtualizedTemplateGridProps) {
  const parentRef = useRef<HTMLDivElement>(null);
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  // Calculate row size based on template complexity
  const getRowSize = (template: Template) => {
    const slotCount = template.slots.length;
    if (slotCount <= 4) return 200;
    if (slotCount <= 8) return 240;
    if (slotCount <= 12) return 280;
    return 320;
  };

  // Virtualized row renderer
  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(templates.length / 3), // 3 templates per row
    getScrollElement: () => parentRef.current,
    estimateSize: () => 280, // Average row height
    overscan: 2, // Render 2 extra rows for smooth scrolling
  });

  // Group templates into rows of 3
  const templateRows = useMemo(() => {
    const rows = [];
    for (let i = 0; i < templates.length; i += 3) {
      rows.push(templates.slice(i, i + 3));
    }
    return rows;
  }, [templates]);

  const renderTemplateRow = (rowIndex: number, templatesInRow: Template[]) => {
    return (
      <div className="flex gap-4 mb-4">
        {templatesInRow.map((template) => (
          <div
            key={template.id}
            className="flex-1 cursor-pointer transition-all duration-200 hover:scale-[1.02]"
            onMouseEnter={() => setHoveredTemplate(template.id)}
            onMouseLeave={() => setHoveredTemplate(null)}
            onClick={() => onTemplateSelect(template)}
          >
            <div
              className={`
                p-3 rounded-lg border transition-all duration-200
                ${
                  selectedTemplate?.id === template.id
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : hoveredTemplate === template.id
                    ? "border-gray-300 bg-white shadow-md"
                    : "border-gray-200 bg-gray-50"
                }
              `}
            >
              <EnhancedTemplatePreview
                template={template}
                isSelected={selectedTemplate?.id === template.id}
                onSelect={() => onTemplateSelect(template)}
                showDeviceFrames={true}
                containerWidth={500}
              />
            </div>
          </div>
        ))}
        {/* Fill empty slots in the last row */}
        {templatesInRow.length < 3 &&
          Array.from({ length: 3 - templatesInRow.length }).map((_, index) => (
            <div key={`empty-${index}`} className="flex-1" />
          ))}
      </div>
    );
  };

  return (
    <div
      ref={parentRef}
      className="overflow-auto"
      style={{ height: containerHeight }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const rowIndex = virtualRow.index;
          const templatesInRow = templateRows[rowIndex] || [];

          return (
            <div
              key={virtualRow.index}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              {renderTemplateRow(rowIndex, templatesInRow)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
