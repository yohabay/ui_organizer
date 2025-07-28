"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Settings, Palette } from "lucide-react"
import type { Template, ArrangementSlot, ProjectType } from "@/types"
import { useToast } from "@/hooks/use-toast"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface ProfessionalExportEngineProps {
  template: Template | null
  arrangement: ArrangementSlot[]
  projectType: ProjectType
  screenshots: any[]
}

export function ProfessionalExportEngine({
  template,
  arrangement,
  projectType,
  screenshots,
}: ProfessionalExportEngineProps) {
  const [exportFormat, setExportFormat] = useState<"png" | "pdf" | "jpg">("png")
  const [portfolioStyle, setPortfolioStyle] = useState<"dribbble" | "behance" | "minimal" | "magazine">("dribbble")
  const [portfolioTitle, setPortfolioTitle] = useState("")
  const [projectDescription, setProjectDescription] = useState("")
  const [isExporting, setIsExporting] = useState(false)
  const [includeProjectInfo, setIncludeProjectInfo] = useState(true)
  const [includeBrowserFrames, setIncludeBrowserFrames] = useState(true)
  const [backgroundColor, setBackgroundColor] = useState("#f8fafc")
  const [accentColor, setAccentColor] = useState("#3b82f6")
  const { toast } = useToast()

  const filledSlots = arrangement.filter((slot) => slot.screenshot).length
  const canExport = template && filledSlots > 0

  const portfolioStyles = {
    dribbble: {
      name: "Dribbble Style",
      description: "Clean, modern layout with generous spacing",
      padding: 80,
      spacing: 40,
      borderRadius: 16,
      shadows: true,
      titleSize: 48,
      subtitleSize: 18,
    },
    behance: {
      name: "Behance Style",
      description: "Professional presentation with project details",
      padding: 60,
      spacing: 30,
      borderRadius: 8,
      shadows: true,
      titleSize: 42,
      subtitleSize: 16,
    },
    minimal: {
      name: "Minimal Style",
      description: "Clean, minimal design with focus on content",
      padding: 100,
      spacing: 60,
      borderRadius: 12,
      shadows: false,
      titleSize: 36,
      subtitleSize: 14,
    },
    magazine: {
      name: "Magazine Style",
      description: "Editorial layout with rich typography",
      padding: 40,
      spacing: 20,
      borderRadius: 4,
      shadows: true,
      titleSize: 52,
      subtitleSize: 20,
    },
  }

  const createProfessionalCanvas = async (arrangementData: ArrangementSlot[], pageNumber = 1) => {
    const style = portfolioStyles[portfolioStyle]
    const canvasWidth = 1920
    const canvasHeight = Math.max(1080, 600 + Math.ceil(arrangementData.filter((s) => s.screenshot).length / 2) * 600)

    // Create main container
    const container = document.createElement("div")
    container.style.width = `${canvasWidth}px`
    container.style.height = `${canvasHeight}px`
    container.style.position = "absolute"
    container.style.top = "-9999px"
    container.style.left = "-9999px"
    container.style.backgroundColor = backgroundColor
    container.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    container.style.color = "#1f2937"
    container.style.overflow = "hidden"

    // Add professional header
    if (includeProjectInfo && (portfolioTitle || projectDescription)) {
      const header = document.createElement("div")
      header.style.padding = `${style.padding}px ${style.padding}px 40px ${style.padding}px`
      header.style.textAlign = "center"
      header.style.borderBottom = "1px solid #e5e7eb"
      header.style.marginBottom = "60px"

      if (portfolioTitle) {
        const title = document.createElement("h1")
        title.textContent = portfolioTitle
        title.style.fontSize = `${style.titleSize}px`
        title.style.fontWeight = "700"
        title.style.color = "#111827"
        title.style.marginBottom = "16px"
        title.style.lineHeight = "1.2"
        header.appendChild(title)
      }

      if (projectDescription) {
        const description = document.createElement("p")
        description.textContent = projectDescription
        description.style.fontSize = `${style.subtitleSize}px`
        description.style.color = "#6b7280"
        description.style.maxWidth = "800px"
        description.style.margin = "0 auto"
        description.style.lineHeight = "1.6"
        header.appendChild(description)
      }

      // Add project type badge
      const badge = document.createElement("div")
      badge.textContent = projectType.toUpperCase()
      badge.style.display = "inline-block"
      badge.style.backgroundColor = accentColor
      badge.style.color = "white"
      badge.style.padding = "8px 16px"
      badge.style.borderRadius = "20px"
      badge.style.fontSize = "12px"
      badge.style.fontWeight = "600"
      badge.style.marginTop = "20px"
      badge.style.letterSpacing = "0.5px"
      header.appendChild(badge)

      container.appendChild(header)
    }

    // Create main content area
    const contentArea = document.createElement("div")
    contentArea.style.padding = `0 ${style.padding}px ${style.padding}px ${style.padding}px`

    // Filter screenshots and create professional layout
    const screenshotsWithSlots = arrangementData.filter((slot) => slot.screenshot)

    if (portfolioStyle === "dribbble") {
      await createDribbbleLayout(contentArea, screenshotsWithSlots, style)
    } else if (portfolioStyle === "behance") {
      await createBehanceLayout(contentArea, screenshotsWithSlots, style)
    } else if (portfolioStyle === "minimal") {
      await createMinimalLayout(contentArea, screenshotsWithSlots, style)
    } else {
      await createMagazineLayout(contentArea, screenshotsWithSlots, style)
    }

    container.appendChild(contentArea)

    // Add professional footer
    const footer = document.createElement("div")
    footer.style.position = "absolute"
    footer.style.bottom = "30px"
    footer.style.left = "50%"
    footer.style.transform = "translateX(-50%)"
    footer.style.fontSize = "14px"
    footer.style.color = "#9ca3af"
    footer.style.textAlign = "center"

    const footerText = document.createElement("div")
    footerText.textContent = `Page ${pageNumber} • Created with Portfolio Designer`
    footer.appendChild(footerText)

    container.appendChild(footer)

    document.body.appendChild(container)

    try {
      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor,
        width: canvasWidth,
        height: canvasHeight,
        logging: false,
      })

      document.body.removeChild(container)
      return canvas
    } catch (error) {
      document.body.removeChild(container)
      throw error
    }
  }

  const createDribbbleLayout = async (container: HTMLElement, slots: ArrangementSlot[], style: any) => {
    // Hero screenshot (first one, large)
    if (slots.length > 0) {
      const heroSection = document.createElement("div")
      heroSection.style.marginBottom = `${style.spacing * 2}px`

      const heroImage = await createProfessionalScreenshot(slots[0], {
        width: "100%",
        height: "500px",
        borderRadius: `${style.borderRadius}px`,
        shadow: style.shadows ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)" : "none",
        marginBottom: "20px",
      })

      heroSection.appendChild(heroImage)

      // Add screenshot title
      const title = document.createElement("h3")
      title.textContent = slots[0].screenshot?.name || "Main View"
      title.style.fontSize = "24px"
      title.style.fontWeight = "600"
      title.style.color = "#374151"
      title.style.marginTop = "20px"
      heroSection.appendChild(title)

      container.appendChild(heroSection)
    }

    // Grid of remaining screenshots
    if (slots.length > 1) {
      const grid = document.createElement("div")
      grid.style.display = "grid"
      grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(400px, 1fr))"
      grid.style.gap = `${style.spacing}px`
      grid.style.marginTop = `${style.spacing}px`

      for (let i = 1; i < slots.length; i++) {
        const gridItem = document.createElement("div")

        const image = await createProfessionalScreenshot(slots[i], {
          width: "100%",
          height: "300px",
          borderRadius: `${style.borderRadius}px`,
          shadow: style.shadows ? "0 10px 25px -5px rgba(0, 0, 0, 0.1)" : "none",
        })

        gridItem.appendChild(image)

        // Add screenshot label
        const label = document.createElement("p")
        label.textContent = slots[i].screenshot?.name || `View ${i + 1}`
        label.style.fontSize = "16px"
        label.style.color = "#6b7280"
        label.style.marginTop = "12px"
        label.style.fontWeight = "500"
        gridItem.appendChild(label)

        grid.appendChild(gridItem)
      }

      container.appendChild(grid)
    }
  }

  const createBehanceLayout = async (container: HTMLElement, slots: ArrangementSlot[], style: any) => {
    // Full-width showcase
    for (let i = 0; i < slots.length; i++) {
      const section = document.createElement("div")
      section.style.marginBottom = `${style.spacing * 2}px`

      // Screenshot with professional frame
      const imageContainer = document.createElement("div")
      imageContainer.style.position = "relative"
      imageContainer.style.marginBottom = "30px"

      const image = await createProfessionalScreenshot(slots[i], {
        width: "100%",
        height: i === 0 ? "600px" : "400px", // Hero image larger
        borderRadius: `${style.borderRadius}px`,
        shadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)",
      })

      imageContainer.appendChild(image)
      section.appendChild(imageContainer)

      // Professional caption
      const caption = document.createElement("div")
      caption.style.display = "flex"
      caption.style.justifyContent = "space-between"
      caption.style.alignItems = "center"
      caption.style.padding = "20px 0"
      caption.style.borderBottom = "1px solid #e5e7eb"

      const leftInfo = document.createElement("div")
      const title = document.createElement("h3")
      title.textContent = slots[i].screenshot?.name || `Screen ${i + 1}`
      title.style.fontSize = "20px"
      title.style.fontWeight = "600"
      title.style.color = "#111827"
      title.style.marginBottom = "4px"
      leftInfo.appendChild(title)

      const subtitle = document.createElement("p")
      subtitle.textContent = slots[i].screenshot?.category || "User Interface"
      subtitle.style.fontSize = "14px"
      subtitle.style.color = "#6b7280"
      leftInfo.appendChild(subtitle)

      const rightInfo = document.createElement("div")
      rightInfo.style.textAlign = "right"
      const tech = document.createElement("span")
      tech.textContent =
        projectType === "mobile" ? "Mobile App" : projectType === "desktop" ? "Desktop App" : "Web Application"
      tech.style.fontSize = "14px"
      tech.style.color = "#9ca3af"
      rightInfo.appendChild(tech)

      caption.appendChild(leftInfo)
      caption.appendChild(rightInfo)
      section.appendChild(caption)

      container.appendChild(section)
    }
  }

  const createMinimalLayout = async (container: HTMLElement, slots: ArrangementSlot[], style: any) => {
    // Ultra-clean minimal layout
    for (let i = 0; i < slots.length; i++) {
      const section = document.createElement("div")
      section.style.marginBottom = `${style.spacing * 3}px`
      section.style.textAlign = "center"

      const image = await createProfessionalScreenshot(slots[i], {
        width: "90%",
        height: "500px",
        borderRadius: `${style.borderRadius}px`,
        shadow: "none",
        border: "1px solid #e5e7eb",
        margin: "0 auto",
      })

      section.appendChild(image)

      // Minimal caption
      const caption = document.createElement("p")
      caption.textContent = slots[i].screenshot?.name || `${i + 1}`
      caption.style.fontSize = "16px"
      caption.style.color = "#9ca3af"
      caption.style.marginTop = "30px"
      caption.style.fontWeight = "400"
      section.appendChild(caption)

      container.appendChild(section)
    }
  }

  const createMagazineLayout = async (container: HTMLElement, slots: ArrangementSlot[], style: any) => {
    // Magazine-style editorial layout
    const columns = document.createElement("div")
    columns.style.columnCount = "2"
    columns.style.columnGap = `${style.spacing}px`
    columns.style.columnFill = "balance"

    for (let i = 0; i < slots.length; i++) {
      const article = document.createElement("div")
      article.style.breakInside = "avoid"
      article.style.marginBottom = `${style.spacing}px`
      article.style.backgroundColor = "white"
      article.style.padding = "20px"
      article.style.borderRadius = `${style.borderRadius}px`
      article.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"

      const image = await createProfessionalScreenshot(slots[i], {
        width: "100%",
        height: "250px",
        borderRadius: "8px",
        shadow: "none",
      })

      article.appendChild(image)

      // Magazine-style caption
      const caption = document.createElement("div")
      caption.style.marginTop = "15px"

      const title = document.createElement("h4")
      title.textContent = slots[i].screenshot?.name || `Feature ${i + 1}`
      title.style.fontSize = "18px"
      title.style.fontWeight = "700"
      title.style.color = "#111827"
      title.style.marginBottom = "8px"
      caption.appendChild(title)

      const description = document.createElement("p")
      description.textContent = `Professional ${projectType} interface showcasing modern design principles and user experience best practices.`
      description.style.fontSize = "14px"
      description.style.color = "#6b7280"
      description.style.lineHeight = "1.5"
      caption.appendChild(description)

      article.appendChild(caption)
      columns.appendChild(article)
    }

    container.appendChild(columns)
  }

  const createProfessionalScreenshot = async (slot: ArrangementSlot, styles: any): Promise<HTMLElement> => {
    const wrapper = document.createElement("div")
    wrapper.style.position = "relative"
    wrapper.style.width = styles.width
    wrapper.style.height = styles.height
    wrapper.style.borderRadius = styles.borderRadius
    wrapper.style.overflow = "hidden"
    wrapper.style.boxShadow = styles.shadow
    wrapper.style.border = styles.border || "none"
    wrapper.style.margin = styles.margin || "0"

    if (includeBrowserFrames && (projectType === "website" || projectType === "desktop")) {
      // Create browser frame
      const browserFrame = document.createElement("div")
      browserFrame.style.width = "100%"
      browserFrame.style.height = "100%"
      browserFrame.style.backgroundColor = "#f3f4f6"
      browserFrame.style.borderRadius = styles.borderRadius
      browserFrame.style.overflow = "hidden"

      // Browser title bar
      const titleBar = document.createElement("div")
      titleBar.style.height = "40px"
      titleBar.style.backgroundColor = "#e5e7eb"
      titleBar.style.display = "flex"
      titleBar.style.alignItems = "center"
      titleBar.style.padding = "0 16px"
      titleBar.style.borderBottom = "1px solid #d1d5db"

      // Traffic lights
      const trafficLights = document.createElement("div")
      trafficLights.style.display = "flex"
      trafficLights.style.gap = "8px"

      const colors = ["#ff5f57", "#ffbd2e", "#28ca42"]
      colors.forEach((color) => {
        const dot = document.createElement("div")
        dot.style.width = "12px"
        dot.style.height = "12px"
        dot.style.borderRadius = "50%"
        dot.style.backgroundColor = color
        trafficLights.appendChild(dot)
      })

      // URL bar
      const urlBar = document.createElement("div")
      urlBar.style.flex = "1"
      urlBar.style.marginLeft = "20px"
      urlBar.style.height = "24px"
      urlBar.style.backgroundColor = "white"
      urlBar.style.borderRadius = "12px"
      urlBar.style.display = "flex"
      urlBar.style.alignItems = "center"
      urlBar.style.paddingLeft = "12px"
      urlBar.style.fontSize = "12px"
      urlBar.style.color = "#6b7280"
      urlBar.textContent = "https://example.com"

      titleBar.appendChild(trafficLights)
      titleBar.appendChild(urlBar)
      browserFrame.appendChild(titleBar)

      // Content area
      const contentArea = document.createElement("div")
      contentArea.style.width = "100%"
      contentArea.style.height = "calc(100% - 40px)"
      contentArea.style.position = "relative"

      const img = document.createElement("img")
      img.src = slot.screenshot!.url
      img.style.width = "100%"
      img.style.height = "100%"
      img.style.objectFit = "cover"
      img.crossOrigin = "anonymous"

      contentArea.appendChild(img)
      browserFrame.appendChild(contentArea)
      wrapper.appendChild(browserFrame)
    } else if (projectType === "mobile") {
      // Create mobile frame
      const phoneFrame = document.createElement("div")
      phoneFrame.style.width = "300px"
      phoneFrame.style.height = "100%"
      phoneFrame.style.backgroundColor = "#1f2937"
      phoneFrame.style.borderRadius = "30px"
      phoneFrame.style.padding = "8px"
      phoneFrame.style.margin = "0 auto"
      phoneFrame.style.position = "relative"

      // Screen
      const screen = document.createElement("div")
      screen.style.width = "100%"
      screen.style.height = "100%"
      screen.style.backgroundColor = "#000"
      screen.style.borderRadius = "22px"
      screen.style.overflow = "hidden"
      screen.style.position = "relative"

      // Notch
      const notch = document.createElement("div")
      notch.style.position = "absolute"
      notch.style.top = "8px"
      notch.style.left = "50%"
      notch.style.transform = "translateX(-50%)"
      notch.style.width = "120px"
      notch.style.height = "20px"
      notch.style.backgroundColor = "#000"
      notch.style.borderRadius = "10px"
      notch.style.zIndex = "10"

      const img = document.createElement("img")
      img.src = slot.screenshot!.url
      img.style.width = "100%"
      img.style.height = "100%"
      img.style.objectFit = "cover"
      img.crossOrigin = "anonymous"

      screen.appendChild(notch)
      screen.appendChild(img)
      phoneFrame.appendChild(screen)
      wrapper.appendChild(phoneFrame)
    } else {
      // Regular image
      const img = document.createElement("img")
      img.src = slot.screenshot!.url
      img.style.width = "100%"
      img.style.height = "100%"
      img.style.objectFit = "cover"
      img.style.borderRadius = styles.borderRadius
      img.crossOrigin = "anonymous"
      wrapper.appendChild(img)
    }

    return wrapper
  }

  const handleExport = async () => {
    if (!canExport) {
      toast({
        title: "Cannot export",
        description: "Please select a template and add screenshots first.",
        variant: "destructive",
      })
      return
    }

    setIsExporting(true)

    try {
      const canvas = await createProfessionalCanvas(arrangement)

      if (exportFormat === "pdf") {
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [canvas.width, canvas.height],
        })

        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height)
        pdf.save(`${portfolioTitle || "professional-portfolio"}.pdf`)
      } else {
        const link = document.createElement("a")
        link.download = `${portfolioTitle || "professional-portfolio"}.${exportFormat}`
        link.href = canvas.toDataURL(`image/${exportFormat}`, 0.95)
        link.click()
      }

      toast({
        title: "Export successful",
        description: `Professional portfolio exported as ${exportFormat.toUpperCase()}.`,
      })
    } catch (error) {
      console.error("Export error:", error)
      toast({
        title: "Export failed",
        description: "Failed to export portfolio. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Style Preview */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Professional Portfolio Styles
          </CardTitle>
          <CardDescription>Choose from professional design styles used by top UI designers</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={portfolioStyle} onValueChange={(value: any) => setPortfolioStyle(value)}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="dribbble">Dribbble</TabsTrigger>
              <TabsTrigger value="behance">Behance</TabsTrigger>
              <TabsTrigger value="minimal">Minimal</TabsTrigger>
              <TabsTrigger value="magazine">Magazine</TabsTrigger>
            </TabsList>

            {Object.entries(portfolioStyles).map(([key, style]) => (
              <TabsContent key={key} value={key} className="mt-4">
                <div className="p-4 bg-white rounded-lg border">
                  <h3 className="font-semibold text-lg mb-2">{style.name}</h3>
                  <p className="text-slate-600 mb-4">{style.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Padding:</span> {style.padding}px
                    </div>
                    <div>
                      <span className="font-medium">Spacing:</span> {style.spacing}px
                    </div>
                    <div>
                      <span className="font-medium">Shadows:</span> {style.shadows ? "Yes" : "No"}
                    </div>
                    <div>
                      <span className="font-medium">Title:</span> {style.titleSize}px
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Project Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Project Information</CardTitle>
          <CardDescription>Add professional project details to your portfolio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Portfolio Title</Label>
              <Input
                id="title"
                placeholder="My Amazing Project"
                value={portfolioTitle}
                onChange={(e) => setPortfolioTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="format">Export Format</Label>
              <Select value={exportFormat} onValueChange={(value: any) => setExportFormat(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG (Best Quality)</SelectItem>
                  <SelectItem value="jpg">JPG (Smaller Size)</SelectItem>
                  <SelectItem value="pdf">PDF (Professional)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Project Description</Label>
            <Input
              id="description"
              placeholder="A modern, user-friendly application designed to..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Professional Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Professional Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Include Project Information</Label>
                  <p className="text-sm text-slate-500">Add title and description header</p>
                </div>
                <Switch checked={includeProjectInfo} onCheckedChange={setIncludeProjectInfo} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label>Browser Frames</Label>
                  <p className="text-sm text-slate-500">Add realistic browser/device frames</p>
                </div>
                <Switch checked={includeBrowserFrames} onCheckedChange={setIncludeBrowserFrames} />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Accent Color</Label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={accentColor}
                    onChange={(e) => setAccentColor(e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input value={accentColor} onChange={(e) => setAccentColor(e.target.value)} className="flex-1" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Professional Preview</CardTitle>
          <CardDescription>Preview of your professional portfolio layout</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-slate-700">{portfolioStyles[portfolioStyle].name}</div>
              <div className="text-sm text-slate-500">{filledSlots} screenshots • Professional layout</div>
              <Badge className="bg-blue-500">{portfolioStyles[portfolioStyle].description}</Badge>
            </div>

            {/* Mock layout indicators */}
            <div className="absolute inset-4 border-2 border-dashed border-slate-300 rounded-lg opacity-50" />
            <div className="absolute top-8 left-8 right-8 h-12 bg-white/50 rounded border border-slate-300" />
            <div className="absolute bottom-8 left-8 right-8 h-32 bg-white/50 rounded border border-slate-300" />
          </div>
        </CardContent>
      </Card>

      {/* Export Button */}
      <Card>
        <CardContent className="pt-6">
          <Button onClick={handleExport} disabled={!canExport || isExporting} className="w-full" size="lg">
            {isExporting ? (
              <>
                <Download className="h-4 w-4 mr-2 animate-bounce" />
                Creating Professional Portfolio...
              </>
            ) : (
              <>
                <Download className="h-4 w-4 mr-2" />
                Export Professional Portfolio
              </>
            )}
          </Button>

          {!canExport && (
            <div className="text-center text-sm text-slate-500 mt-4">
              Please select a template and add screenshots to export
            </div>
          )}

          <div className="text-xs text-slate-500 text-center mt-4 space-y-1">
            <p>✨ Professional layouts with generous spacing and beautiful typography</p>
            <p>🖼️ Realistic browser frames and device mockups</p>
            <p>🎨 High-quality export optimized for portfolios and presentations</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
