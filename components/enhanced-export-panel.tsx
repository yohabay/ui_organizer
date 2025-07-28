"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Download, FileImage, FileText, Settings, Zap } from "lucide-react"
import type { Template, ArrangementSlot, ProjectType } from "@/types"
import { useToast } from "@/hooks/use-toast"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

interface EnhancedExportPanelProps {
  template: Template | null
  arrangement: ArrangementSlot[]
  projectType: ProjectType
  screenshots: any[]
}

export function EnhancedExportPanel({ template, arrangement, projectType, screenshots }: EnhancedExportPanelProps) {
  const [exportFormat, setExportFormat] = useState<"png" | "pdf" | "jpg">("png")
  const [exportQuality, setExportQuality] = useState("high")
  const [portfolioTitle, setPortfolioTitle] = useState("")
  const [isExporting, setIsExporting] = useState(false)
  const [exportSize, setExportSize] = useState<"small" | "medium" | "large" | "custom">("large")
  const [customWidth, setCustomWidth] = useState(1920)
  const [customHeight, setCustomHeight] = useState(1080)
  const [includeWatermark, setIncludeWatermark] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [exportPages, setExportPages] = useState<"single" | "multiple">("single")
  const { toast } = useToast()

  const filledSlots = arrangement.filter((slot) => slot.screenshot).length
  const canExport = template && filledSlots > 0

  // Calculate how many pages we need based on screenshots vs template slots
  const calculatePages = () => {
    if (!template || screenshots.length === 0) return 1
    return Math.ceil(screenshots.length / template.slots.length)
  }

  const totalPages = calculatePages()
  const unusedScreenshots = screenshots.length - filledSlots

  const getExportDimensions = () => {
    switch (exportSize) {
      case "small":
        return { width: 1280, height: 720 }
      case "medium":
        return { width: 1920, height: 1080 }
      case "large":
        return { width: 2560, height: 1440 }
      case "custom":
        return { width: customWidth, height: customHeight }
      default:
        return { width: 1920, height: 1080 }
    }
  }

  const getQualitySettings = () => {
    switch (exportQuality) {
      case "low":
        return { scale: 1, quality: 0.7 }
      case "medium":
        return { scale: 2, quality: 0.85 }
      case "high":
        return { scale: 3, quality: 0.95 }
      default:
        return { scale: 2, quality: 0.85 }
    }
  }

  const createCanvasFromArrangement = async (arrangementData: ArrangementSlot[], pageNumber = 1) => {
    const { width, height } = getExportDimensions()
    const { scale } = getQualitySettings()

    // Create a temporary container
    const container = document.createElement("div")
    container.style.width = `${width}px`
    container.style.height = `${height}px`
    container.style.position = "absolute"
    container.style.top = "-9999px"
    container.style.left = "-9999px"
    container.style.backgroundColor = backgroundColor
    container.style.padding = "40px"
    container.style.boxSizing = "border-box"

    // Add title if provided
    if (portfolioTitle) {
      const titleElement = document.createElement("div")
      titleElement.textContent = portfolioTitle
      titleElement.style.fontSize = "32px"
      titleElement.style.fontWeight = "bold"
      titleElement.style.textAlign = "center"
      titleElement.style.marginBottom = "30px"
      titleElement.style.color = "#1f2937"
      container.appendChild(titleElement)
    }

    // Create grid container
    const gridContainer = document.createElement("div")
    gridContainer.style.display = "grid"
    gridContainer.style.gridTemplateColumns = `repeat(${template!.cols}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${template!.rows}, 1fr)`
    gridContainer.style.gap = "8px"
    gridContainer.style.width = "100%"
    gridContainer.style.height = portfolioTitle ? "calc(100% - 100px)" : "100%"
    gridContainer.style.position = "relative"

    // Add slots to grid
    for (const slot of arrangementData) {
      if (!slot.screenshot) continue

      const slotElement = document.createElement("div")
      slotElement.style.gridColumn = `${slot.x + 1} / span ${slot.w}`
      slotElement.style.gridRow = `${slot.y + 1} / span ${slot.h}`
      slotElement.style.position = "relative"
      slotElement.style.overflow = "hidden"

      // Apply visual effects
      if (slot.borderRadius === "full") {
        slotElement.style.borderRadius = "50%"
      } else if (slot.borderRadius === "lg") {
        slotElement.style.borderRadius = "12px"
      } else if (slot.borderRadius === "xl") {
        slotElement.style.borderRadius = "16px"
      } else {
        slotElement.style.borderRadius = "8px"
      }

      if (slot.shadow === "xl") {
        slotElement.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      } else if (slot.shadow === "lg") {
        slotElement.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      } else if (slot.shadow === "md") {
        slotElement.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
      }

      if (slot.rotation) {
        slotElement.style.transform = `rotate(${slot.rotation}deg)`
      }

      if (slot.opacity) {
        slotElement.style.opacity = slot.opacity.toString()
      }

      // Handle device frames
      if (slot.deviceFrame === "iphone") {
        const phoneFrame = document.createElement("div")
        phoneFrame.style.width = "100%"
        phoneFrame.style.height = "100%"
        phoneFrame.style.backgroundColor = "#000"
        phoneFrame.style.borderRadius = "24px"
        phoneFrame.style.padding = "4px"
        phoneFrame.style.position = "relative"

        const screen = document.createElement("div")
        screen.style.width = "100%"
        screen.style.height = "100%"
        screen.style.backgroundColor = "#fff"
        screen.style.borderRadius = "20px"
        screen.style.overflow = "hidden"

        const img = document.createElement("img")
        img.src = slot.screenshot.url
        img.style.width = "100%"
        img.style.height = "100%"
        img.style.objectFit = "cover"
        img.crossOrigin = "anonymous"

        screen.appendChild(img)
        phoneFrame.appendChild(screen)
        slotElement.appendChild(phoneFrame)
      } else if (slot.browserFrame) {
        const browserFrame = document.createElement("div")
        browserFrame.style.width = "100%"
        browserFrame.style.height = "100%"
        browserFrame.style.backgroundColor = "#e5e7eb"
        browserFrame.style.borderRadius = "8px"
        browserFrame.style.overflow = "hidden"

        const titleBar = document.createElement("div")
        titleBar.style.height = "24px"
        titleBar.style.backgroundColor = "#d1d5db"
        titleBar.style.display = "flex"
        titleBar.style.alignItems = "center"
        titleBar.style.paddingLeft = "8px"
        titleBar.style.gap = "4px"

        const dots = ["#ef4444", "#f59e0b", "#10b981"]
        dots.forEach((color) => {
          const dot = document.createElement("div")
          dot.style.width = "8px"
          dot.style.height = "8px"
          dot.style.borderRadius = "50%"
          dot.style.backgroundColor = color
          titleBar.appendChild(dot)
        })

        const content = document.createElement("div")
        content.style.width = "100%"
        content.style.height = "calc(100% - 24px)"
        content.style.padding = "4px"

        const img = document.createElement("img")
        img.src = slot.screenshot.url
        img.style.width = "100%"
        img.style.height = "100%"
        img.style.objectFit = "cover"
        img.style.borderRadius = "4px"
        img.crossOrigin = "anonymous"

        content.appendChild(img)
        browserFrame.appendChild(titleBar)
        browserFrame.appendChild(content)
        slotElement.appendChild(browserFrame)
      } else {
        // Regular image
        const img = document.createElement("img")
        img.src = slot.screenshot.url
        img.style.width = "100%"
        img.style.height = "100%"
        img.style.objectFit = "cover"
        img.style.borderRadius = "inherit"
        img.crossOrigin = "anonymous"
        slotElement.appendChild(img)
      }

      gridContainer.appendChild(slotElement)
    }

    container.appendChild(gridContainer)

    // Add watermark if enabled
    if (includeWatermark) {
      const watermark = document.createElement("div")
      watermark.textContent = "Created with Portfolio Designer"
      watermark.style.position = "absolute"
      watermark.style.bottom = "10px"
      watermark.style.right = "20px"
      watermark.style.fontSize = "12px"
      watermark.style.color = "#6b7280"
      watermark.style.opacity = "0.7"
      container.appendChild(watermark)
    }

    // Add page number for multiple pages
    if (totalPages > 1) {
      const pageNumber = document.createElement("div")
      pageNumber.textContent = `Page ${pageNumber} of ${totalPages}`
      pageNumber.style.position = "absolute"
      pageNumber.style.bottom = "10px"
      pageNumber.style.left = "20px"
      pageNumber.style.fontSize = "12px"
      pageNumber.style.color = "#6b7280"
      container.appendChild(pageNumber)
    }

    document.body.appendChild(container)

    try {
      const canvas = await html2canvas(container, {
        scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor,
        width,
        height,
      })

      document.body.removeChild(container)
      return canvas
    } catch (error) {
      document.body.removeChild(container)
      throw error
    }
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
      const { quality } = getQualitySettings()

      if (exportPages === "single" || totalPages === 1) {
        // Single page export
        const canvas = await createCanvasFromArrangement(arrangement)

        if (exportFormat === "pdf") {
          const pdf = new jsPDF({
            orientation: canvas.width > canvas.height ? "landscape" : "portrait",
            unit: "px",
            format: [canvas.width, canvas.height],
          })

          pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height)
          pdf.save(`${portfolioTitle || "portfolio"}.pdf`)
        } else {
          const link = document.createElement("a")
          link.download = `${portfolioTitle || "portfolio"}.${exportFormat}`
          link.href = canvas.toDataURL(`image/${exportFormat}`, quality)
          link.click()
        }
      } else {
        // Multiple pages export
        const canvases: HTMLCanvasElement[] = []

        // Create arrangements for each page
        for (let page = 0; page < totalPages; page++) {
          const startIndex = page * template!.slots.length
          const endIndex = Math.min(startIndex + template!.slots.length, screenshots.length)
          const pageScreenshots = screenshots.slice(startIndex, endIndex)

          // Create arrangement for this page
          const pageArrangement = template!.slots.map((slot, index) => ({
            id: `page-${page}-slot-${index}`,
            ...slot,
            screenshot: pageScreenshots[index] || null,
          }))

          const canvas = await createCanvasFromArrangement(pageArrangement, page + 1)
          canvases.push(canvas)
        }

        if (exportFormat === "pdf") {
          const pdf = new jsPDF({
            orientation: canvases[0].width > canvases[0].height ? "landscape" : "portrait",
            unit: "px",
            format: [canvases[0].width, canvases[0].height],
          })

          canvases.forEach((canvas, index) => {
            if (index > 0) pdf.addPage()
            pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, canvas.width, canvas.height)
          })

          pdf.save(`${portfolioTitle || "portfolio"}-${totalPages}-pages.pdf`)
        } else {
          // Export as ZIP file with multiple images
          const JSZip = (await import("jszip")).default
          const zip = new JSZip()

          canvases.forEach((canvas, index) => {
            const dataUrl = canvas.toDataURL(`image/${exportFormat}`, quality)
            const base64Data = dataUrl.split(",")[1]
            zip.file(`page-${index + 1}.${exportFormat}`, base64Data, { base64: true })
          })

          const zipBlob = await zip.generateAsync({ type: "blob" })
          const link = document.createElement("a")
          link.href = URL.createObjectURL(zipBlob)
          link.download = `${portfolioTitle || "portfolio"}-${totalPages}-pages.zip`
          link.click()
        }
      }

      toast({
        title: "Export successful",
        description: `Portfolio exported as ${exportFormat.toUpperCase()}${totalPages > 1 ? ` (${totalPages} pages)` : ""}.`,
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

  const getExportPreview = () => {
    if (!template || filledSlots === 0) {
      return (
        <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center">
          <div className="text-center text-slate-500">
            <p className="font-medium">No preview available</p>
            <p className="text-sm">Add screenshots to see preview</p>
          </div>
        </div>
      )
    }

    return (
      <div className="h-48 bg-white rounded-lg border p-4 relative overflow-hidden">
        <div
          className="grid gap-1 h-full"
          style={{
            gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
            gridTemplateRows: `repeat(${template.rows}, 1fr)`,
          }}
        >
          {arrangement.map((slot, index) => (
            <div
              key={slot.id}
              className="rounded-sm overflow-hidden border relative"
              style={{
                gridColumn: `${slot.x + 1} / span ${slot.w}`,
                gridRow: `${slot.y + 1} / span ${slot.h}`,
                transform: `rotate(${slot.rotation || 0}deg)`,
                opacity: slot.opacity || 1,
              }}
            >
              {slot.screenshot ? (
                <img
                  src={slot.screenshot.url || "/placeholder.svg"}
                  alt={slot.screenshot.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-slate-100" />
              )}

              {/* Visual effect indicators */}
              {slot.deviceFrame && (
                <div className="absolute top-1 left-1">
                  <Badge variant="secondary" className="text-[8px] px-1 py-0">
                    {slot.deviceFrame}
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Preview overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute bottom-2 left-2 text-white text-xs font-medium">Preview</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Smart Template Analysis */}
      {screenshots.length > 0 && template && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Zap className="h-4 w-4 text-blue-600" />
              Smart Template Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{screenshots.length}</div>
                <div className="text-slate-600">Screenshots</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-green-600">{template.slots.length}</div>
                <div className="text-slate-600">Template Slots</div>
              </div>
              <div className="text-center p-3 bg-white rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{totalPages}</div>
                <div className="text-slate-600">Pages Needed</div>
              </div>
            </div>

            {unusedScreenshots > 0 && (
              <div className="mt-4 p-3 bg-amber-100 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>{unusedScreenshots} screenshots</strong> will be used in additional pages. Enable "Multiple
                  Pages" export to include all screenshots.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Export Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Export Preview</CardTitle>
          <CardDescription>Preview of your portfolio layout before export</CardDescription>
        </CardHeader>
        <CardContent>
          {getExportPreview()}

          {template && (
            <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center gap-4">
                <span>Template: {template.name}</span>
                <Badge variant="outline">{projectType}</Badge>
                {totalPages > 1 && <Badge className="bg-purple-500">{totalPages} Pages</Badge>}
              </div>
              <span>
                {filledSlots} of {arrangement.length} slots filled
              </span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Export Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Export Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Settings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="format">Export Format</Label>
              <Select value={exportFormat} onValueChange={(value: "png" | "pdf" | "jpg") => setExportFormat(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">
                    <div className="flex items-center gap-2">
                      <FileImage className="h-4 w-4" />
                      PNG (Best Quality)
                    </div>
                  </SelectItem>
                  <SelectItem value="jpg">
                    <div className="flex items-center gap-2">
                      <FileImage className="h-4 w-4" />
                      JPG (Smaller Size)
                    </div>
                  </SelectItem>
                  <SelectItem value="pdf">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      PDF Document
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quality">Export Quality</Label>
              <Select value={exportQuality} onValueChange={setExportQuality}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low (Fast, 1x)</SelectItem>
                  <SelectItem value="medium">Medium (2x)</SelectItem>
                  <SelectItem value="high">High (3x, Best)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Size Settings */}
          <div className="space-y-4">
            <Label>Export Size</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { value: "small", label: "Small", size: "1280×720" },
                { value: "medium", label: "Medium", size: "1920×1080" },
                { value: "large", label: "Large", size: "2560×1440" },
                { value: "custom", label: "Custom", size: "Custom" },
              ].map((size) => (
                <Button
                  key={size.value}
                  variant={exportSize === size.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setExportSize(size.value as any)}
                  className="flex flex-col h-auto py-2"
                >
                  <span className="font-medium">{size.label}</span>
                  <span className="text-xs opacity-70">{size.size}</span>
                </Button>
              ))}
            </div>

            {exportSize === "custom" && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="width">Width (px)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Number(e.target.value))}
                    min={800}
                    max={4000}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">Height (px)</Label>
                  <Input
                    id="height"
                    type="number"
                    value={customHeight}
                    onChange={(e) => setCustomHeight(Number(e.target.value))}
                    min={600}
                    max={4000}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Multiple Pages Setting */}
          {totalPages > 1 && (
            <div className="space-y-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="pages" className="text-base font-medium">
                    Multiple Pages Export
                  </Label>
                  <p className="text-sm text-slate-600 mt-1">
                    Export all {screenshots.length} screenshots across {totalPages} pages
                  </p>
                </div>
                <Switch
                  id="pages"
                  checked={exportPages === "multiple"}
                  onCheckedChange={(checked) => setExportPages(checked ? "multiple" : "single")}
                />
              </div>
              {exportPages === "multiple" && (
                <div className="text-sm text-purple-700 bg-purple-100 p-3 rounded-lg">
                  <p>
                    <strong>Multiple pages mode:</strong> Each page will contain {template!.slots.length} screenshots
                    using the same template layout.{" "}
                    {exportFormat === "pdf"
                      ? "All pages will be in one PDF file."
                      : "Images will be exported as a ZIP file."}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Advanced Settings */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Portfolio Title (Optional)</Label>
              <Input
                id="title"
                placeholder="My Amazing Project Portfolio"
                value={portfolioTitle}
                onChange={(e) => setPortfolioTitle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="background">Background Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="background"
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-16 h-10 p-1"
                  />
                  <Input
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    placeholder="#ffffff"
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="watermark">Include Watermark</Label>
                  <p className="text-xs text-slate-500">Add subtle branding</p>
                </div>
                <Switch id="watermark" checked={includeWatermark} onCheckedChange={setIncludeWatermark} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Export Actions */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <Button onClick={handleExport} disabled={!canExport || isExporting} className="w-full" size="lg">
              {isExporting ? (
                <>
                  <Download className="h-4 w-4 mr-2 animate-bounce" />
                  Exporting{totalPages > 1 ? ` ${totalPages} pages` : ""}...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Export as {exportFormat.toUpperCase()}
                  {totalPages > 1 && exportPages === "multiple" ? ` (${totalPages} pages)` : ""}
                </>
              )}
            </Button>

            {!canExport && (
              <div className="text-center text-sm text-slate-500">
                {!template && "Please select a template first"}
                {template && filledSlots === 0 && "Please add screenshots to export"}
              </div>
            )}

            <div className="text-xs text-slate-500 text-center space-y-1">
              <p>Export will include all arranged screenshots with applied visual effects</p>
              <p>High quality exports may take longer to process</p>
              {totalPages > 1 && (
                <p className="text-purple-600 font-medium">
                  Smart pagination: {screenshots.length} screenshots → {totalPages} pages
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
