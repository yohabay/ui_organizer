"use client"

import { useState, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shuffle, RotateCcw } from "lucide-react"
import type { Template, Screenshot, ArrangementSlot } from "@/types"
import { cn } from "@/lib/utils"

interface ArrangementCanvasProps {
  template: Template
  screenshots: Screenshot[]
  arrangement: ArrangementSlot[]
  onArrangementChange: (arrangement: ArrangementSlot[]) => void
}

export function ArrangementCanvas({ template, screenshots, arrangement, onArrangementChange }: ArrangementCanvasProps) {
  const [draggedScreenshot, setDraggedScreenshot] = useState<Screenshot | null>(null)
  const [draggedFromSlot, setDraggedFromSlot] = useState<string | null>(null)

  const handleDragStart = useCallback((screenshot: Screenshot, fromSlot?: string) => {
    setDraggedScreenshot(screenshot)
    setDraggedFromSlot(fromSlot || null)
  }, [])

  const handleDragEnd = useCallback(() => {
    setDraggedScreenshot(null)
    setDraggedFromSlot(null)
  }, [])

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

  const handleSlotClear = useCallback(
    (slotId: string) => {
      const updatedArrangement = arrangement.map((slot) => (slot.id === slotId ? { ...slot, screenshot: null } : slot))
      onArrangementChange(updatedArrangement)
    },
    [arrangement, onArrangementChange],
  )

  const autoArrange = useCallback(() => {
    const availableScreenshots = [...screenshots]
    const updatedArrangement = arrangement.map((slot, index) => ({
      ...slot,
      screenshot: availableScreenshots[index] || null,
    }))
    onArrangementChange(updatedArrangement)
  }, [screenshots, arrangement, onArrangementChange])

  const clearAll = useCallback(() => {
    const clearedArrangement = arrangement.map((slot) => ({
      ...slot,
      screenshot: null,
    }))
    onArrangementChange(clearedArrangement)
  }, [arrangement, onArrangementChange])

  const unassignedScreenshots = screenshots.filter(
    (screenshot) => !arrangement.some((slot) => slot.screenshot?.id === screenshot.id),
  )

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{template.name}</h3>
          <p className="text-sm text-slate-600">
            {arrangement.filter((slot) => slot.screenshot).length} of {arrangement.length} slots filled
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={autoArrange}>
            <Shuffle className="h-4 w-4 mr-2" />
            Auto Arrange
          </Button>
          <Button variant="outline" size="sm" onClick={clearAll}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Canvas */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Arrangement Canvas</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="grid gap-2 p-4 bg-slate-50 rounded-lg min-h-96"
                style={{
                  gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
                  gridTemplateRows: `repeat(${template.rows}, 1fr)`,
                  aspectRatio: `${template.cols}/${template.rows}`,
                }}
              >
                {arrangement.map((slot) => (
                  <div
                    key={slot.id}
                    className={cn(
                      "border-2 border-dashed rounded-lg flex items-center justify-center transition-colors relative group",
                      slot.screenshot
                        ? "border-blue-300 bg-white"
                        : "border-slate-300 bg-slate-100 hover:border-slate-400",
                    )}
                    style={{
                      gridColumn: `${slot.x + 1} / span ${slot.w}`,
                      gridRow: `${slot.y + 1} / span ${slot.h}`,
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      handleDrop(slot.id)
                    }}
                  >
                    {slot.screenshot ? (
                      <>
                        <img
                          src={slot.screenshot.url || "/placeholder.svg"}
                          alt={slot.screenshot.name}
                          className="w-full h-full object-cover rounded-md cursor-move"
                          draggable
                          onDragStart={() => handleDragStart(slot.screenshot!, slot.id)}
                          onDragEnd={handleDragEnd}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-md" />
                        <Button
                          size="sm"
                          variant="destructive"
                          className="absolute top-1 right-1 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => handleSlotClear(slot.id)}
                        >
                          ×
                        </Button>
                        {slot.screenshot.category && (
                          <Badge className="absolute bottom-1 left-1 text-xs">{slot.screenshot.category}</Badge>
                        )}
                      </>
                    ) : (
                      <div className="text-center text-slate-500">
                        <div className="text-sm font-medium">Drop here</div>
                        <div className="text-xs">
                          {slot.w}×{slot.h} slot
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Screenshot Library */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Available Screenshots</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {unassignedScreenshots.length > 0 ? (
                  unassignedScreenshots.map((screenshot) => (
                    <div
                      key={screenshot.id}
                      className="relative group cursor-move border rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      draggable
                      onDragStart={() => handleDragStart(screenshot)}
                      onDragEnd={handleDragEnd}
                    >
                      <img
                        src={screenshot.url || "/placeholder.svg"}
                        alt={screenshot.name}
                        className="w-full h-20 object-cover"
                      />
                      <div className="p-2">
                        <p className="text-xs font-medium truncate">{screenshot.name}</p>
                        {screenshot.category && (
                          <Badge variant="outline" className="text-xs mt-1">
                            {screenshot.category}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-slate-500 py-8">
                    <p className="text-sm">All screenshots assigned</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
