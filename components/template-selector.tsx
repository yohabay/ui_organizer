"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Template {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  layout: "grid" | "carousel" | "mobile-first" | "desktop-focus"
}

interface TemplateSelectorProps {
  templates: Template[]
  selectedTemplate: Template
  onTemplateSelect: (template: Template) => void
}

export function TemplateSelector({ templates, selectedTemplate, onTemplateSelect }: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {templates.map((template) => (
        <Card
          key={template.id}
          className={cn(
            "cursor-pointer transition-all hover:shadow-md",
            selectedTemplate.id === template.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-slate-50",
          )}
          onClick={() => onTemplateSelect(template)}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "p-2 rounded-lg",
                    selectedTemplate.id === template.id ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-600",
                  )}
                >
                  {template.icon}
                </div>
                <div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription className="text-sm">{template.description}</CardDescription>
                </div>
              </div>
              {selectedTemplate.id === template.id && <Badge className="bg-blue-500">Selected</Badge>}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
              <div className="text-sm text-slate-500 capitalize">{template.layout} layout preview</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
