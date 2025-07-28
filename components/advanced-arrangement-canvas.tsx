"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Shuffle, RotateCcw, Layers, Palette, Zap } from "lucide-react"
import type { Template, Screenshot, ArrangementSlot } from "@/types"
import { cn } from "@/lib/utils"
// Import the new component
import { ScreenshotLibrary } from "@/components/screenshot-library"

interface AdvancedArrangementCanvasProps {
  template: Template
  screenshots: Screenshot[]
  arrangement: ArrangementSlot[]
  onArrangementChange: (arrangement: ArrangementSlot[]) => void
  draggedScreenshot: Screenshot | null
  draggedFromSlot: string | null
  handleDragEnd: () => void
}

export function AdvancedArrangementCanvas({
  template,
  screenshots,
  arrangement,
  onArrangementChange,
  draggedScreenshot,
  draggedFromSlot,
  handleDragEnd,
}: AdvancedArrangementCanvasProps) {
  // Add this at the beginning of the component
  console.log("Canvas received:", { template, screenshots, arrangement })

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [canvasScale, setCanvasScale] = useState(1)
  const [showEffects, setShowEffects] = useState(true)

  const handleSlotClick = (slotId: string) => {
    setSelectedSlot(selectedSlot === slotId ? null : slotId)
  }

  const handleDrop = useCallback(
    (slotId: string) => {
      if (!draggedScreenshot) return

      const updatedArrangement = [...arrangement]
      const targetSlotIndex = updatedArrangement.findIndex((slot) => slot.id === slotId)

      if (targetSlotIndex === -1) return

      // If dragging from another slot, clear that slot
      if (draggedFromSlot) {
        const sourceSlotIndex = updatedArrangement.findIndex((slot) => slot.id === draggedFromSlot)
        if (sourceSlotIndex !== -1) {
          updatedArrangement[sourceSlotIndex].screenshot = null
        }
      }

      // Place screenshot in target slot
      updatedArrangement[targetSlotIndex].screenshot = draggedScreenshot

      onArrangementChange(updatedArrangement)
      handleDragEnd()
    },
    [draggedScreenshot, draggedFromSlot, arrangement, onArrangementChange, handleDragEnd],
  )

  // Add auto-arrange functionality
  const autoArrange = useCallback(() => {
    if (screenshots.length === 0) return

    const updatedArrangement = arrangement.map((slot, index) => ({
      ...slot,
      screenshot: screenshots[index] || null,
    }))
    onArrangementChange(updatedArrangement)
  }, [screenshots, arrangement, onArrangementChange])

  const renderAdvancedSlot = (slot: ArrangementSlot) => {
    const isSelected = selectedSlot === slot.id

    let slotClasses = cn(
      "border-2 border-dashed transition-all duration-300 relative group cursor-pointer",
      "hover:border-blue-400 hover:bg-blue-50/50",
      isSelected ? "border-blue-500 bg-blue-50" : "border-slate-300 bg-slate-100/50",
    )

    const slotStyle: React.CSSProperties = {
      gridColumn: `${slot.x + 1} / span ${slot.w}`,
      gridRow: `${slot.y + 1} / span ${slot.h}`,
      transform: `rotate(${slot.rotation || 0}deg) scale(${canvasScale})`,
      zIndex: slot.zIndex || 1,
      opacity: slot.opacity || 1,
      transformOrigin: "center",
    }

    // Apply advanced styling based on slot properties
    if (slot.borderRadius === "full") {
      slotClasses += " rounded-full"
    } else if (slot.borderRadius === "lg") {
      slotClasses += " rounded-lg"
    } else if (slot.borderRadius === "xl") {
      slotClasses += " rounded-xl"
    }

    if (slot.shadow === "xl") {
      slotClasses += " shadow-xl"
    } else if (slot.shadow === "lg") {
      slotClasses += " shadow-lg"
    } else if (slot.shadow === "md") {
      slotClasses += " shadow-md"
    }

    // Add special effects
    if (slot.neonGlow && showEffects) {
      slotClasses += ` shadow-${slot.neonGlow}-400/50 shadow-2xl border-${slot.neonGlow}-400`
    }

    if (slot.holographicEffect && showEffects) {
      slotClasses += " bg-gradient-to-br from-cyan-100/30 to-purple-100/30 backdrop-blur-sm"
    }

    return (
      <div
        key={slot.id}
        className={slotClasses}
        style={slotStyle}
        onClick={() => handleSlotClick(slot.id)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault()
          handleDrop(slot.id)
        }}
      >
        {slot.screenshot ? (
          <div className="relative w-full h-full">
            {/* Device Frame */}
            {slot.deviceFrame === "iphone" && (
              <div className="absolute inset-0 bg-black rounded-3xl p-1">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src={slot.screenshot.url || "/placeholder.svg"}
                    alt={slot.screenshot.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* iPhone notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-black rounded-full" />
              </div>
            )}

            {/* Browser Frame */}
            {slot.browserFrame && (
              <div className="absolute inset-0 bg-slate-200 rounded-lg">
                <div className="h-6 bg-slate-300 rounded-t-lg flex items-center px-2 gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                </div>
                <div className="p-1 h-[calc(100%-24px)]">
                  <img
                    src={slot.screenshot.url || "/placeholder.svg"}
                    alt={slot.screenshot.name}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              </div>
            )}

            {/* Polaroid Frame */}
            {slot.polaroidFrame && (
              <div className="absolute inset-0 bg-white p-2 shadow-lg" style={{ transform: "rotate(-2deg)" }}>
                <img
                  src={slot.screenshot.url || "/placeholder.svg"}
                  alt={slot.screenshot.name}
                  className="w-full h-4/5 object-cover"
                />
                <div className="h-1/5 flex items-center justify-center">
                  <p className="text-xs text-slate-600 font-handwriting">{slot.screenshot.name}</p>
                </div>
                {/* Tape effect */}
                {slot.tape && (
                  <div
                    className={cn(
                      "absolute w-8 h-4 bg-yellow-200/80 border border-yellow-300",
                      slot.tape === "top-left" && "top-0 left-2 -rotate-12",
                      slot.tape === "top-right" && "top-0 right-2 rotate-12",
                      slot.tape === "corner" && "top-0 right-0 rotate-45",
                    )}
                  />
                )}
              </div>
            )}

            {/* Regular Image */}
            {!slot.deviceFrame && !slot.browserFrame && !slot.polaroidFrame && (
              <>
                <img
                  src={slot.screenshot.url || "/placeholder.svg"}
                  alt={slot.screenshot.name}
                  className="w-full h-full object-cover rounded-inherit"
                />

                {/* Watercolor Effect */}
                {slot.watercolorEffect && showEffects && (
                  <div
                    className={cn(
                      "absolute inset-0 rounded-inherit mix-blend-multiply opacity-30",
                      slot.watercolorEffect === "blue" && "bg-gradient-radial from-blue-300 to-blue-600",
                      slot.watercolorEffect === "purple" && "bg-gradient-radial from-purple-300 to-purple-600",
                      slot.watercolorEffect === "pink" && "bg-gradient-radial from-pink-300 to-pink-600",
                    )}
                  />
                )}
              </>
            )}

            {/* Selection Overlay */}
            {isSelected && (
              <div className="absolute inset-0 bg-blue-500/20 border-2 border-blue-500 rounded-inherit flex items-center justify-center">
                <Badge className="bg-blue-500">Selected</Badge>
              </div>
            )}

            {/* Category Badge */}
            {slot.screenshot.category && (
              <Badge className="absolute bottom-1 left-1 text-xs">{slot.screenshot.category}</Badge>
            )}

            {/* Remove Button */}
            <Button
              size="sm"
              variant="destructive"
              className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={(e) => {
                e.stopPropagation()
                const updatedArrangement = arrangement.map((s) => (s.id === slot.id ? { ...s, screenshot: null } : s))
                onArrangementChange(updatedArrangement)
              }}
            >
              ×
            </Button>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 p-2">
            <div className="text-center">
              <div className="text-sm font-medium mb-1">Drop here</div>
              <div className="text-xs opacity-75">
                {slot.w}×{slot.h}
                {slot.deviceFrame && ` • ${slot.deviceFrame}`}
                {slot.shape && slot.shape !== "rectangle" && ` • ${slot.shape}`}
              </div>
            </div>

            {/* Special slot indicators */}
            {slot.deviceFrame === "iphone" && (
              <div className="mt-2 w-8 h-12 bg-slate-300 rounded-lg flex items-center justify-center">
                <div className="w-6 h-10 bg-slate-400 rounded-md" />
              </div>
            )}

            {slot.shape === "circle" && <div className="mt-2 w-6 h-6 bg-slate-300 rounded-full" />}
          </div>
        )}

        {/* Visual Effect Indicators */}
        {showEffects && (
          <div className="absolute top-1 right-1 flex gap-1">
            {slot.rotation && slot.rotation !== 0 && (
              <Badge variant="secondary" className="text-xs p-1">
                <Zap className="h-2 w-2" />
              </Badge>
            )}
            {slot.shadow && (
              <Badge variant="secondary" className="text-xs p-1">
                <Layers className="h-2 w-2" />
              </Badge>
            )}
            {(slot.neonGlow || slot.watercolorEffect) && (
              <Badge variant="secondary" className="text-xs p-1">
                <Palette className="h-2 w-2" />
              </Badge>
            )}
          </div>
        )}
      </div>
    )
  }

  // Update the component to handle empty states better
  if (!template) {
    return (
      <div className="text-center py-16 text-slate-500">
        <div className="space-y-4">
          <div className="mx-auto w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">🎨</span>
          </div>
          <div>
            <p className="text-lg font-medium">No Template Selected</p>
            <p className="text-sm">Please select a template from the previous step</p>
          </div>
        </div>
      </div>
    )
  }

  if (arrangement.length === 0) {
    return (
      <div className="text-center py-16 text-slate-500">
        <div className="space-y-4">
          <div className="mx-auto w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
            <span className="text-2xl">⚙️</span>
          </div>
          <div>
            <p className="text-lg font-medium">Loading Arrangement...</p>
            <p className="text-sm">Setting up your template layout</p>
          </div>
        </div>
      </div>
    )
  }

  const unassignedScreenshots = screenshots.filter(
    (screenshot) => !arrangement.some((slot) => slot.screenshot?.id === screenshot.id),
  )

  return (
    <div className="space-y-6">
      {/* Canvas Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{template.name}</h3>
          <p className="text-sm text-slate-600">
            {arrangement.filter((slot) => slot.screenshot).length} of {arrangement.length} elements filled
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setShowEffects(!showEffects)}>
            <Palette className="h-4 w-4 mr-2" />
            {showEffects ? "Hide" : "Show"} Effects
          </Button>
          <Button variant="outline" size="sm" onClick={autoArrange}>
            <Shuffle className="h-4 w-4 mr-2" />
            Auto Arrange
          </Button>
          <Button variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Canvas Scale Control */}
      <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
        <Label className="text-sm font-medium">Canvas Scale:</Label>
        <Slider
          value={[canvasScale]}
          onValueChange={(value) => setCanvasScale(value[0])}
          max={1.5}
          min={0.5}
          step={0.1}
          className="flex-1 max-w-32"
        />
        <span className="text-sm text-slate-600 min-w-12">{Math.round(canvasScale * 100)}%</span>
      </div>

      <div className="lg:grid lg:grid-cols-5 gap-4">
        {/* Advanced Canvas */}
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Layers className="h-4 w-4" />
              Designer Canvas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="grid gap-2 p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg min-h-96 relative overflow-hidden"
              style={{
                gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
                gridTemplateRows: `repeat(${template.rows}, 1fr)`,
                aspectRatio: `${template.cols}/${template.rows}`,
              }}
            >
              {arrangement.map(renderAdvancedSlot)}

              {/* Canvas Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Replace the existing screenshot library section with: */}
        <div className="lg:col-span-1">
          <ScreenshotLibrary
            screenshots={unassignedScreenshots}
            onScreenshotSelect={(screenshot) => {
              // Auto-assign to first empty slot
              const emptySlotIndex = arrangement.findIndex((slot) => !slot.screenshot)
              if (emptySlotIndex !== -1) {
                const updatedArrangement = [...arrangement]
                updatedArrangement[emptySlotIndex].screenshot = screenshot
                onArrangementChange(updatedArrangement)
              }
            }}
          />
        </div>
      </div>

      {/* Selected Slot Properties */}
      {selectedSlot && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Element Properties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {(() => {
                const slot = arrangement.find((s) => s.id === selectedSlot)
                if (!slot) return null

                return (
                  <>
                    <div>
                      <Label className="text-xs text-slate-500">Position</Label>
                      <p>
                        {slot.x}, {slot.y}
                      </p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Size</Label>
                      <p>
                        {slot.w} × {slot.h}
                      </p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Rotation</Label>
                      <p>{slot.rotation || 0}°</p>
                    </div>
                    <div>
                      <Label className="text-xs text-slate-500">Z-Index</Label>
                      <p>{slot.zIndex || 1}</p>
                    </div>
                    {slot.deviceFrame && (
                      <div>
                        <Label className="text-xs text-slate-500">Device</Label>
                        <p className="capitalize">{slot.deviceFrame}</p>
                      </div>
                    )}
                    {slot.shadow && (
                      <div>
                        <Label className="text-xs text-slate-500">Shadow</Label>
                        <p className="capitalize">{slot.shadow}</p>
                      </div>
                    )}
                    {slot.neonGlow && (
                      <div>
                        <Label className="text-xs text-slate-500">Glow</Label>
                        <p className="capitalize">{slot.neonGlow}</p>
                      </div>
                    )}
                    {slot.shape && slot.shape !== "rectangle" && (
                      <div>
                        <Label className="text-xs text-slate-500">Shape</Label>
                        <p className="capitalize">{slot.shape}</p>
                      </div>
                    )}
                  </>
                )
              })()}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
