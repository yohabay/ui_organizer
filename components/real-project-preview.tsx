"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe, Smartphone, Monitor } from "lucide-react"
import type { Template } from "@/types"
import { cn } from "@/lib/utils"

interface RealProjectPreviewProps {
  template: Template
  isSelected: boolean
  onSelect: () => void
}

export function RealProjectPreview({ template, isSelected, onSelect }: RealProjectPreviewProps) {
  const renderProjectMockup = () => {
    // Create realistic project UI mockups based on the template category
    const mockupElements = template.slots.map((slot, index) => {
      let mockupContent = ""
      let bgColor = "bg-slate-200"
      let textColor = "text-slate-600"

      // Determine content based on project type and slot properties
      if (template.category === "E-commerce") {
        const ecommerceScreens = ["Product Grid", "Item Detail", "Cart", "Checkout", "Profile", "Orders", "Wishlist"]
        mockupContent = ecommerceScreens[index] || "Screen"
        bgColor = "bg-blue-100"
        textColor = "text-blue-700"
      } else if (template.category === "SaaS Landing") {
        const saasScreens = ["Hero", "Features", "Pricing", "Testimonials", "Demo", "Contact", "Footer"]
        mockupContent = saasScreens[index] || "Section"
        bgColor = "bg-purple-100"
        textColor = "text-purple-700"
      } else if (template.category === "Social Media") {
        const socialScreens = [
          "Feed",
          "Stories",
          "Profile",
          "Messages",
          "Camera",
          "Explore",
          "Notifications",
          "Settings",
          "Search",
        ]
        mockupContent = socialScreens[index] || "Screen"
        bgColor = "bg-pink-100"
        textColor = "text-pink-700"
      } else if (template.category === "FinTech") {
        const fintechScreens = [
          "Dashboard",
          "Portfolio",
          "Market",
          "Transactions",
          "Analytics",
          "Trading",
          "Reports",
          "Settings",
        ]
        mockupContent = fintechScreens[index] || "Screen"
        bgColor = "bg-green-100"
        textColor = "text-green-700"
      } else if (template.category === "Food Delivery") {
        const foodScreens = ["Restaurants", "Menu", "Cart", "Tracking", "Profile", "History", "Reviews", "Favorites"]
        mockupContent = foodScreens[index] || "Screen"
        bgColor = "bg-orange-100"
        textColor = "text-orange-700"
      } else if (template.category === "Healthcare") {
        const healthScreens = [
          "Dashboard",
          "Video Call",
          "Doctor",
          "Appointments",
          "Records",
          "Prescriptions",
          "Health",
        ]
        mockupContent = healthScreens[index] || "Screen"
        bgColor = "bg-teal-100"
        textColor = "text-teal-700"
      } else {
        mockupContent = `Screen ${index + 1}`
        bgColor = "bg-slate-100"
        textColor = "text-slate-600"
      }

      const slotStyle: React.CSSProperties = {
        gridColumn: `${slot.x + 1} / span ${slot.w}`,
        gridRow: `${slot.y + 1} / span ${slot.h}`,
        transform: `rotate(${slot.rotation || 0}deg)`,
        zIndex: slot.zIndex || 1,
      }

      let slotClasses = cn(
        "border transition-all duration-300 flex items-center justify-center text-xs font-medium",
        bgColor,
        textColor,
        slot.shadow === "xl" && "shadow-xl",
        slot.shadow === "lg" && "shadow-lg",
        slot.shadow === "md" && "shadow-md",
        slot.shadow === "sm" && "shadow-sm",
      )

      if (slot.deviceFrame === "iphone") {
        slotClasses += " rounded-2xl border-2 border-slate-800"
      } else if (slot.browserFrame) {
        slotClasses += " rounded-lg border-slate-300"
      } else if (slot.borderRadius === "full") {
        slotClasses += " rounded-full"
      } else {
        slotClasses += " rounded-md"
      }

      return (
        <div key={index} className={slotClasses} style={slotStyle}>
          <div className="text-center p-1">
            {slot.deviceFrame === "iphone" && <Smartphone className="h-3 w-3 mx-auto mb-1" />}
            {slot.browserFrame && <Monitor className="h-3 w-3 mx-auto mb-1" />}
            <div className="text-[10px] leading-tight">{mockupContent}</div>
          </div>
        </div>
      )
    })

    return (
      <div className="h-40 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-3 overflow-hidden relative">
        <div
          className="grid gap-1 h-full relative"
          style={{
            gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
            gridTemplateRows: `repeat(${template.rows}, 1fr)`,
          }}
        >
          {mockupElements}
        </div>

        {/* Project Type Indicator */}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="text-[10px] px-1 py-0">
            {template.projectTypes[0]}
          </Badge>
        </div>

        {/* Real Project Badge */}
        <div className="absolute bottom-2 left-2">
          <Badge className="text-[10px] px-1 py-0 bg-green-500">Real Project</Badge>
        </div>
      </div>
    )
  }

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        isSelected ? "ring-2 ring-blue-500 bg-blue-50 shadow-lg" : "hover:bg-slate-50",
      )}
      onClick={onSelect}
    >
      <CardContent className="p-4 space-y-4">
        {/* Project Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-base leading-tight">{template.name}</h3>
              <p className="text-sm text-slate-600 mt-1">{template.description}</p>
            </div>
            {isSelected && <Badge className="bg-blue-500 text-xs">Selected</Badge>}
          </div>

          {/* Real Project Info */}
          {template.realProject && (
            <div className="bg-slate-50 rounded-lg p-3 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm text-slate-800">{template.realProject.name}</h4>
                <Badge variant="outline" className="text-xs">
                  {template.realProject.platform}
                </Badge>
              </div>
              <p className="text-xs text-slate-600">{template.realProject.description}</p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs">
                  {template.realProject.industry}
                </Badge>
                <div className="flex gap-1">
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Project Mockup */}
        {renderProjectMockup()}

        {/* Template Stats */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t">
          <span>{template.slots.length} screens</span>
          <span>{template.category}</span>
          <span>
            {template.rows}×{template.cols} layout
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {template.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {template.tags.length > 4 && (
            <Badge variant="secondary" className="text-xs">
              +{template.tags.length - 4}
            </Badge>
          )}
        </div>

        {/* Project Type Icons */}
        <div className="flex items-center gap-2 pt-2">
          {template.projectTypes.map((type) => (
            <div key={type} className="flex items-center gap-1 text-xs text-slate-500">
              {type === "mobile" && <Smartphone className="h-3 w-3" />}
              {type === "desktop" && <Monitor className="h-3 w-3" />}
              {type === "website" && <Globe className="h-3 w-3" />}
              <span className="capitalize">{type}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
