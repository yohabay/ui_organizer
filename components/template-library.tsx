"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid3X3, Layout, Smartphone, Monitor, Search } from "lucide-react"
import { useState } from "react"
import type { Template, ProjectType } from "@/types"
import { cn } from "@/lib/utils"

interface TemplateLibraryProps {
  templates: Template[]
  selectedTemplate: Template | null
  onTemplateSelect: (template: Template) => void
  projectType: ProjectType
}

export function TemplateLibrary({ templates, selectedTemplate, onTemplateSelect, projectType }: TemplateLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")

  const categories = Array.from(new Set(templates.map((t) => t.category)))

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = categoryFilter === "all" || template.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const getTemplateIcon = (category: string) => {
    switch (category) {
      case "Basic Grid":
        return <Grid3X3 className="h-4 w-4" />
      case "Hero Grid":
        return <Layout className="h-4 w-4" />
      case "Device Mockup":
        return <Smartphone className="h-4 w-4" />
      case "Vertical Flow":
        return <Monitor className="h-4 w-4" />
      default:
        return <Grid3X3 className="h-4 w-4" />
    }
  }

  const renderTemplatePreview = (template: Template) => {
    return (
      <div className="h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-2">
        <div
          className="grid gap-1 h-full"
          style={{
            gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
            gridTemplateRows: `repeat(${template.rows}, 1fr)`,
          }}
        >
          {template.slots.map((slot, index) => (
            <div
              key={index}
              className="bg-blue-200 rounded-sm border border-blue-300"
              style={{
                gridColumn: `${slot.x + 1} / span ${slot.w}`,
                gridRow: `${slot.y + 1} / span ${slot.h}`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Template Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card
            key={template.id}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md",
              selectedTemplate?.id === template.id ? "ring-2 ring-blue-500 bg-blue-50" : "hover:bg-slate-50",
            )}
            onClick={() => onTemplateSelect(template)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "p-1.5 rounded-md",
                      selectedTemplate?.id === template.id
                        ? "bg-blue-100 text-blue-600"
                        : "bg-slate-100 text-slate-600",
                    )}
                  >
                    {getTemplateIcon(template.category)}
                  </div>
                  <div>
                    <CardTitle className="text-base">{template.name}</CardTitle>
                    <Badge variant="outline" className="text-xs mt-1">
                      {template.category}
                    </Badge>
                  </div>
                </div>
                {selectedTemplate?.id === template.id && <Badge className="bg-blue-500">Selected</Badge>}
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <CardDescription className="text-sm">{template.description}</CardDescription>

              {renderTemplatePreview(template)}

              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{template.slots.length} slots</span>
                <span>
                  {template.rows}×{template.cols} grid
                </span>
              </div>

              <div className="flex flex-wrap gap-1">
                {template.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          <p className="text-lg font-medium">No templates found</p>
          <p className="text-sm">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Template Stats */}
      <div className="flex items-center justify-center gap-6 text-sm text-slate-500 pt-4 border-t">
        <span>{filteredTemplates.length} templates available</span>
        <span>Optimized for {projectType} projects</span>
      </div>
    </div>
  )
}
