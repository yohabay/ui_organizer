"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Star, TrendingUp, Clock, ExternalLink } from "lucide-react"
import { useState } from "react"
import type { Template, ProjectType } from "@/types"
import { realProjectTemplates } from "@/data/real-project-templates"
import { RealProjectPreview } from "@/components/real-project-preview"

interface EnhancedTemplateLibraryProps {
  selectedTemplate: Template | null
  onTemplateSelect: (template: Template) => void
  projectType: ProjectType
}

export function EnhancedTemplateLibrary({
  selectedTemplate,
  onTemplateSelect,
  projectType,
}: EnhancedTemplateLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("popular")
  const [industryFilter, setIndustryFilter] = useState<string>("all")

  const filteredTemplates = realProjectTemplates.filter((template) => {
    const matchesProject = template.projectTypes.includes(projectType)
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      template.realProject?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.realProject?.industry.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || template.category === categoryFilter
    const matchesIndustry = industryFilter === "all" || template.realProject?.industry === industryFilter

    return matchesProject && matchesSearch && matchesCategory && matchesIndustry
  })

  const categories = Array.from(new Set(realProjectTemplates.map((t) => t.category)))
  const industries = Array.from(new Set(realProjectTemplates.map((t) => t.realProject?.industry).filter(Boolean)))

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "newest":
        return b.id.localeCompare(a.id) // Assuming newer templates have later IDs
      case "popular":
      default:
        // Simulate popularity based on category and tags
        const aPopularity = a.tags.length + (a.category === "E-commerce" ? 10 : 0)
        const bPopularity = b.tags.length + (b.category === "E-commerce" ? 10 : 0)
        return bPopularity - aPopularity
    }
  })

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="text-center space-y-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 rounded-full text-sm font-medium text-green-700">
          <Star className="h-4 w-4" />
          Real Project Templates
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Professional Project Showcases</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Choose from real-world project templates inspired by successful apps and websites. Each template showcases
          actual UI patterns and user flows from different industries.
        </p>
      </div>

      {/* Advanced Filters */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Project Category" />
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

          <Select value={industryFilter} onValueChange={setIndustryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Industries</SelectItem>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Popular
                </div>
              </SelectItem>
              <SelectItem value="newest">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Newest
                </div>
              </SelectItem>
              <SelectItem value="name">A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Quick Category Tabs */}
        <Tabs value={categoryFilter} onValueChange={setCategoryFilter} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 xl:grid-cols-8">
            <TabsTrigger value="all" className="text-xs">
              All
            </TabsTrigger>
            <TabsTrigger value="E-commerce" className="text-xs">
              E-commerce
            </TabsTrigger>
            <TabsTrigger value="SaaS Landing" className="text-xs">
              SaaS
            </TabsTrigger>
            <TabsTrigger value="Social Media" className="text-xs">
              Social
            </TabsTrigger>
            <TabsTrigger value="FinTech" className="text-xs">
              FinTech
            </TabsTrigger>
            <TabsTrigger value="Healthcare" className="text-xs">
              Health
            </TabsTrigger>
            <TabsTrigger value="Food Delivery" className="text-xs">
              Food
            </TabsTrigger>
            <TabsTrigger value="Travel" className="text-xs">
              Travel
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Stats Bar */}
      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
        <div className="flex items-center gap-6 text-sm text-slate-600">
          <span className="font-medium">{sortedTemplates.length} real projects</span>
          <Badge variant="outline" className="capitalize">
            {projectType} focused
          </Badge>
          <span className="flex items-center gap-1">
            <Star className="h-3 w-3 text-yellow-500" />
            Industry-tested designs
          </span>
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <Filter className="h-4 w-4" />
          Advanced Filters
        </Button>
      </div>

      {/* Project Templates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {sortedTemplates.map((template) => (
          <RealProjectPreview
            key={template.id}
            template={template}
            isSelected={selectedTemplate?.id === template.id}
            onSelect={() => onTemplateSelect(template)}
          />
        ))}
      </div>

      {/* Empty State */}
      {sortedTemplates.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
              <Search className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-medium">No projects found</p>
              <p className="text-sm">Try adjusting your search or filter criteria</p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setCategoryFilter("all")
                setIndustryFilter("all")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      )}

      {/* Featured Projects Section */}
      <div className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">Featured Real Projects</h3>
            <p className="text-sm text-slate-600">Handpicked templates from successful companies</p>
          </div>
          <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
            <ExternalLink className="h-4 w-4" />
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {realProjectTemplates.slice(0, 3).map((template) => (
            <Card key={template.id} className="p-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500 text-xs">Featured</Badge>
                  <Badge variant="outline" className="text-xs">
                    {template.category}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm">{template.realProject?.name}</h4>
                <p className="text-xs text-slate-600">{template.realProject?.description}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {template.realProject?.platform}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {template.realProject?.industry}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Template Inspiration Note */}
      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Star className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <h4 className="font-medium text-amber-900">Real Project Inspiration</h4>
            <p className="text-sm text-amber-700 mt-1">
              These templates are inspired by real, successful projects from companies like Shopify, Stripe, Airbnb, and
              other industry leaders. Each template captures proven UI patterns and user experience flows.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
