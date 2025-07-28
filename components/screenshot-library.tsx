"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Trash2 } from "lucide-react"
import type { Screenshot } from "@/types"
import { cn } from "@/lib/utils"

interface ScreenshotLibraryProps {
  screenshots: Screenshot[]
  onScreenshotSelect?: (screenshot: Screenshot) => void
  onScreenshotRemove?: (screenshotId: string) => void
  selectedScreenshots?: string[]
}

export function ScreenshotLibrary({
  screenshots,
  onScreenshotSelect,
  onScreenshotRemove,
  selectedScreenshots = [],
}: ScreenshotLibraryProps) {
  if (screenshots.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Available Screenshots</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-slate-500">
            <ImageIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-sm">No screenshots uploaded yet</p>
            <p className="text-xs text-slate-400">Upload screenshots to get started</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Available Screenshots ({screenshots.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
          {screenshots.map((screenshot) => {
            const isSelected = selectedScreenshots.includes(screenshot.id)

            return (
              <div
                key={screenshot.id}
                className={cn(
                  "relative group cursor-pointer border rounded-lg overflow-hidden transition-all",
                  isSelected ? "ring-2 ring-blue-500 border-blue-300" : "hover:shadow-md hover:border-slate-300",
                )}
                onClick={() => onScreenshotSelect?.(screenshot)}
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("screenshot", JSON.stringify(screenshot))
                }}
              >
                <div className="flex items-center gap-3 p-3">
                  <img
                    src={screenshot.url || "/placeholder.svg"}
                    alt={screenshot.name}
                    className="w-16 h-12 object-cover rounded border"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{screenshot.name}</p>
                    {screenshot.category && (
                      <Badge variant="outline" className="text-xs mt-1">
                        {screenshot.category}
                      </Badge>
                    )}
                    {screenshot.confidence && (
                      <p className="text-xs text-slate-500 mt-1">
                        {Math.round(screenshot.confidence * 100)}% confidence
                      </p>
                    )}
                  </div>
                  {onScreenshotRemove && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation()
                        onScreenshotRemove(screenshot.id)
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
