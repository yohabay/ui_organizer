"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Screenshot {
  id: string
  file: File
  url: string
  category?: "login" | "homepage" | "dashboard" | "profile" | "settings" | "mobile" | "other"
  confidence?: number
}

interface Template {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  layout: "grid" | "carousel" | "mobile-first" | "desktop-focus"
}

interface PortfolioPreviewProps {
  screenshots: Screenshot[]
  template: Template
}

export function PortfolioPreview({ screenshots, template }: PortfolioPreviewProps) {
  if (screenshots.length === 0) {
    return (
      <Card className="p-12 text-center">
        <div className="text-slate-500">
          <p className="text-lg font-medium">No screenshots to preview</p>
          <p className="text-sm">Upload some screenshots to see the preview</p>
        </div>
      </Card>
    )
  }

  const renderGridLayout = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {screenshots.map((screenshot) => (
        <Card key={screenshot.id} className="overflow-hidden">
          <div className="relative">
            <img src={screenshot.url || "/placeholder.svg"} alt="Screenshot" className="w-full h-48 object-cover" />
            {screenshot.category && <Badge className="absolute top-2 left-2">{screenshot.category}</Badge>}
          </div>
        </Card>
      ))}
    </div>
  )

  const renderMobileFirstLayout = () => {
    const mobileScreenshots = screenshots.filter((s) => s.category === "mobile")
    const otherScreenshots = screenshots.filter((s) => s.category !== "mobile")

    return (
      <div className="space-y-8">
        {mobileScreenshots.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Mobile Experience</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {mobileScreenshots.map((screenshot) => (
                <div key={screenshot.id} className="relative">
                  <div className="w-64 h-96 bg-slate-900 rounded-3xl p-2">
                    <img
                      src={screenshot.url || "/placeholder.svg"}
                      alt="Mobile screenshot"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {screenshot.category && (
                    <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      {screenshot.category}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {otherScreenshots.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Desktop Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherScreenshots.map((screenshot) => (
                <Card key={screenshot.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={screenshot.url || "/placeholder.svg"}
                      alt="Screenshot"
                      className="w-full h-48 object-cover"
                    />
                    {screenshot.category && <Badge className="absolute top-2 left-2">{screenshot.category}</Badge>}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  const renderDesktopFocusLayout = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {screenshots.slice(0, 2).map((screenshot) => (
          <Card key={screenshot.id} className="overflow-hidden">
            <div className="relative">
              <img src={screenshot.url || "/placeholder.svg"} alt="Screenshot" className="w-full h-64 object-cover" />
              {screenshot.category && <Badge className="absolute top-2 left-2">{screenshot.category}</Badge>}
            </div>
          </Card>
        ))}
      </div>

      {screenshots.length > 2 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {screenshots.slice(2).map((screenshot) => (
            <Card key={screenshot.id} className="overflow-hidden">
              <div className="relative">
                <img src={screenshot.url || "/placeholder.svg"} alt="Screenshot" className="w-full h-32 object-cover" />
                {screenshot.category && <Badge className="absolute top-1 left-1 text-xs">{screenshot.category}</Badge>}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )

  const renderCarouselLayout = () => (
    <div className="space-y-6">
      <div className="flex overflow-x-auto gap-6 pb-4">
        {screenshots.map((screenshot, index) => (
          <Card key={screenshot.id} className="flex-shrink-0 w-80 overflow-hidden">
            <div className="relative">
              <img src={screenshot.url || "/placeholder.svg"} alt="Screenshot" className="w-full h-48 object-cover" />
              <div className="absolute top-2 left-2 flex gap-2">
                <Badge variant="secondary">{index + 1}</Badge>
                {screenshot.category && <Badge>{screenshot.category}</Badge>}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderLayout = () => {
    switch (template.layout) {
      case "mobile-first":
        return renderMobileFirstLayout()
      case "desktop-focus":
        return renderDesktopFocusLayout()
      case "carousel":
        return renderCarouselLayout()
      default:
        return renderGridLayout()
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Portfolio Preview</h3>
          <p className="text-sm text-slate-600">
            Using {template.name} template with {screenshots.length} screenshot(s)
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-2">
          {template.icon}
          {template.name}
        </Badge>
      </div>

      <Card className="p-6">
        <CardContent className="p-0">{renderLayout()}</CardContent>
      </Card>
    </div>
  )
}
