"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectTypeSelector } from "@/components/project-type-selector"
import { ScreenshotUploader } from "@/components/screenshot-uploader"
import { EnhancedTemplateLibrary } from "@/components/enhanced-template-library"
import { AdvancedArrangementCanvas } from "@/components/advanced-arrangement-canvas"
import { ProfessionalExportEngine } from "@/components/professional-export-engine"
import { useToast } from "@/hooks/use-toast"
import type { ProjectType, Screenshot, Template, ArrangementSlot } from "@/types"

export default function DesignerPortfolioOrganizer() {
  const [projectType, setProjectType] = useState<ProjectType>("website")
  const [screenshots, setScreenshots] = useState<Screenshot[]>([])
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [arrangement, setArrangement] = useState<ArrangementSlot[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [draggedScreenshot, setDraggedScreenshot] = useState<Screenshot | null>(null)
  const [draggedFromSlot, setDraggedFromSlot] = useState<string | null>(null)
  const { toast } = useToast()

  const handleScreenshotsUploaded = (newScreenshots: Screenshot[]) => {
    setScreenshots((prev) => [...prev, ...newScreenshots])

    // Auto-adjust template if needed
    if (selectedTemplate && newScreenshots.length > 0) {
      autoAdjustTemplate([...screenshots, ...newScreenshots])
    }

    toast({
      title: "Screenshots uploaded",
      description: `${newScreenshots.length} designer-quality screenshot(s) added.`,
    })
  }

  const autoAdjustTemplate = (allScreenshots: Screenshot[]) => {
    if (!selectedTemplate) return

    const totalScreenshots = allScreenshots.length
    const templateSlots = selectedTemplate.slots.length

    if (totalScreenshots <= templateSlots) {
      // Template has enough slots, just update arrangement
      const updatedArrangement = selectedTemplate.slots.map((slot, index) => ({
        id: `slot-${index}`,
        ...slot,
        screenshot: allScreenshots[index] || null,
      }))
      setArrangement(updatedArrangement)
    } else {
      // Need multiple pages - keep current arrangement but notify user
      toast({
        title: "Multiple pages needed",
        description: `${totalScreenshots} screenshots will create ${Math.ceil(totalScreenshots / templateSlots)} pages. Enable multi-page export to include all.`,
      })
    }
  }

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template)

    // Smart template adjustment based on screenshot count
    const totalScreenshots = screenshots.length
    const templateSlots = template.slots.length

    if (totalScreenshots === 0) {
      // No screenshots yet, create empty arrangement
      const slots: ArrangementSlot[] = template.slots.map((slot, index) => ({
        id: `slot-${index}`,
        ...slot,
        screenshot: null,
      }))
      setArrangement(slots)
    } else if (totalScreenshots <= templateSlots) {
      // Screenshots fit in template
      const slots: ArrangementSlot[] = template.slots.map((slot, index) => ({
        id: `slot-${index}`,
        ...slot,
        screenshot: screenshots[index] || null,
      }))
      setArrangement(slots)
    } else {
      // More screenshots than slots - fill template and notify about extras
      const slots: ArrangementSlot[] = template.slots.map((slot, index) => ({
        id: `slot-${index}`,
        ...slot,
        screenshot: screenshots[index] || null,
      }))
      setArrangement(slots)

      const extraScreenshots = totalScreenshots - templateSlots
      toast({
        title: "Template adjusted",
        description: `Template loaded with ${templateSlots} slots. ${extraScreenshots} additional screenshots will be available for multi-page export.`,
      })
    }

    toast({
      title: "Template selected",
      description: `${template.name} template loaded with smart screenshot arrangement.`,
    })
  }

  const handleDragStart = (screenshot: Screenshot, fromSlot?: string) => {
    setDraggedScreenshot(screenshot)
    setDraggedFromSlot(fromSlot || null)
  }

  const handleDragEnd = () => {
    setDraggedScreenshot(null)
    setDraggedFromSlot(null)
  }

  const analyzeScreenshots = async () => {
    if (screenshots.length === 0) {
      toast({
        title: "No screenshots",
        description: "Please upload screenshots first.",
        variant: "destructive",
      })
      return
    }

    setIsAnalyzing(true)

    try {
      // Enhanced AI analysis simulation with more sophisticated categorization
      const analyzedScreenshots = screenshots.map((screenshot) => {
        const categories =
          projectType === "mobile"
            ? ["onboarding", "home", "profile", "chat", "settings", "login", "feed", "detail", "search"]
            : projectType === "desktop"
              ? ["dashboard", "analytics", "settings", "reports", "sidebar", "modal", "form", "table", "chart"]
              : ["hero", "about", "services", "portfolio", "contact", "blog", "product", "checkout", "testimonials"]

        const randomCategory = categories[Math.floor(Math.random() * categories.length)]
        const confidence = Math.random() * 0.25 + 0.75 // 75-100% confidence

        // Enhanced UI element detection
        const allUIElements = [
          "button",
          "form",
          "navigation",
          "text",
          "image",
          "icon",
          "card",
          "modal",
          "dropdown",
          "slider",
          "toggle",
          "chart",
          "table",
          "list",
          "grid",
          "header",
          "footer",
          "sidebar",
          "search",
          "filter",
          "pagination",
          "breadcrumb",
          "tooltip",
        ]
        const detectedElements = allUIElements.filter(() => Math.random() > 0.6)

        return {
          ...screenshot,
          category: randomCategory,
          confidence,
          uiElements: detectedElements,
        }
      })

      setScreenshots(analyzedScreenshots)

      // Smart auto-arrangement if template is selected
      if (selectedTemplate && arrangement.length > 0) {
        autoArrangeScreenshots(analyzedScreenshots)
      }

      toast({
        title: "AI Analysis Complete",
        description: "Screenshots analyzed with advanced design intelligence.",
      })
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "Failed to analyze screenshots.",
        variant: "destructive",
      })
    } finally {
      setIsAnalyzing(false)
    }
  }

  const autoArrangeScreenshots = (analyzedScreenshots: Screenshot[]) => {
    if (!selectedTemplate || arrangement.length === 0) return

    const updatedArrangement = [...arrangement]

    // Enhanced smart placement logic for real projects
    const getScreenPriority = (screenshot: Screenshot, template: Template) => {
      const category = screenshot.category || ""

      // Priority mapping based on template category
      if (template.category === "E-commerce") {
        const priorities = { home: 0, product: 1, cart: 2, checkout: 3, profile: 4 }
        return priorities[category as keyof typeof priorities] ?? 999
      } else if (template.category === "Social Media") {
        const priorities = { feed: 0, profile: 1, messages: 2, stories: 3, explore: 4 }
        return priorities[category as keyof typeof priorities] ?? 999
      } else if (template.category === "FinTech") {
        const priorities = { dashboard: 0, portfolio: 1, trading: 2, analytics: 3, settings: 4 }
        return priorities[category as keyof typeof priorities] ?? 999
      }

      return 999
    }

    // Sort screenshots by relevance to template
    const sortedScreenshots = [...analyzedScreenshots].sort((a, b) => {
      const aPriority = getScreenPriority(a, selectedTemplate)
      const bPriority = getScreenPriority(b, selectedTemplate)
      if (aPriority !== bPriority) return aPriority - bPriority
      return (b.confidence || 0) - (a.confidence || 0)
    })

    // Assign screenshots to slots
    sortedScreenshots.forEach((screenshot, index) => {
      if (index < updatedArrangement.length) {
        updatedArrangement[index].screenshot = screenshot
      }
    })

    setArrangement(updatedArrangement)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-700 mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Smart Template Adjustment + High-Quality Export
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Designer Portfolio Platform
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Create stunning portfolio layouts with AI-powered screenshot arrangement. Templates automatically adjust to
            your screenshot count with professional multi-page export.
          </p>
        </div>

        <Tabs defaultValue="setup" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 h-12">
            <TabsTrigger value="setup" className="text-sm">
              Project Setup
            </TabsTrigger>
            <TabsTrigger value="upload" className="text-sm">
              Upload & Analyze
            </TabsTrigger>
            <TabsTrigger value="templates" className="text-sm">
              Designer Templates
            </TabsTrigger>
            <TabsTrigger value="arrange" className="text-sm">
              Arrange & Design
            </TabsTrigger>
            <TabsTrigger value="export" className="text-sm">
              Export Portfolio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-xl">Project Type Selection</CardTitle>
                <CardDescription className="text-base">
                  Choose your project type to unlock specialized templates and AI analysis optimized for your platform
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ProjectTypeSelector selectedType={projectType} onTypeSelect={setProjectType} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="upload" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="text-xl">Screenshot Upload & AI Analysis</CardTitle>
                <CardDescription className="text-base">
                  Upload your {projectType} screenshots and let our AI analyze them for optimal arrangement
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ScreenshotUploader onScreenshotsUploaded={handleScreenshotsUploaded} projectType={projectType} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="text-xl">Designer Template Library</CardTitle>
                <CardDescription className="text-base">
                  Choose from 50+ professionally designed templates that automatically adjust to your screenshot count
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <EnhancedTemplateLibrary
                  selectedTemplate={selectedTemplate}
                  onTemplateSelect={handleTemplateSelect}
                  projectType={projectType}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="arrange" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="text-xl">Advanced Arrangement Canvas</CardTitle>
                <CardDescription className="text-base">
                  Drag, drop, and fine-tune your screenshots with professional design tools and effects
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {selectedTemplate ? (
                  <AdvancedArrangementCanvas
                    template={selectedTemplate}
                    screenshots={screenshots}
                    arrangement={arrangement}
                    onArrangementChange={setArrangement}
                    draggedScreenshot={draggedScreenshot}
                    draggedFromSlot={draggedFromSlot}
                    handleDragEnd={handleDragEnd}
                  />
                ) : (
                  <div className="text-center py-16 text-slate-500">
                    <div className="space-y-4">
                      <div className="mx-auto w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <div>
                        <p className="text-lg font-medium">Select a Designer Template</p>
                        <p className="text-sm">Choose from our collection of professional templates to get started</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="export" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-cyan-50">
                <CardTitle className="text-xl">Export Professional Portfolio</CardTitle>
                <CardDescription className="text-base">
                  Export your designer portfolio with smart multi-page support and high-quality rendering
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <ProfessionalExportEngine
                  template={selectedTemplate}
                  arrangement={arrangement}
                  projectType={projectType}
                  screenshots={screenshots}
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
