"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Monitor, Globe } from "lucide-react"
import type { ProjectType } from "@/types"
import { cn } from "@/lib/utils"

interface ProjectTypeSelectorProps {
  selectedType: ProjectType
  onTypeSelect: (type: ProjectType) => void
}

const projectTypes = [
  {
    id: "mobile" as ProjectType,
    name: "Mobile App",
    description: "iOS, Android, or React Native applications",
    icon: <Smartphone className="h-6 w-6" />,
    features: ["Device frames", "Mobile-first templates", "Touch UI analysis"],
    color: "bg-blue-50 border-blue-200 text-blue-700",
    selectedColor: "bg-blue-100 border-blue-400 ring-2 ring-blue-500",
  },
  {
    id: "desktop" as ProjectType,
    name: "Desktop App",
    description: "Windows, macOS, or Linux desktop applications",
    icon: <Monitor className="h-6 w-6" />,
    features: ["Dashboard layouts", "Window chrome", "Desktop UI patterns"],
    color: "bg-green-50 border-green-200 text-green-700",
    selectedColor: "bg-green-100 border-green-400 ring-2 ring-green-500",
  },
  {
    id: "website" as ProjectType,
    name: "Website",
    description: "Web applications, landing pages, or websites",
    icon: <Globe className="h-6 w-6" />,
    features: ["Responsive layouts", "Web UI components", "Browser analysis"],
    color: "bg-purple-50 border-purple-200 text-purple-700",
    selectedColor: "bg-purple-100 border-purple-400 ring-2 ring-purple-500",
  },
]

export function ProjectTypeSelector({ selectedType, onTypeSelect }: ProjectTypeSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projectTypes.map((type) => (
        <Card
          key={type.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md",
            selectedType === type.id ? type.selectedColor : type.color,
          )}
          onClick={() => onTypeSelect(type.id)}
        >
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/50">{type.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{type.name}</h3>
                  {selectedType === type.id && <Badge className="mt-1">Selected</Badge>}
                </div>
              </div>

              <p className="text-sm opacity-80">{type.description}</p>

              <div className="space-y-2">
                <p className="text-xs font-medium opacity-70">Features:</p>
                <div className="flex flex-wrap gap-1">
                  {type.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
