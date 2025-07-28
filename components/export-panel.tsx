"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, FileImage, FileText, Settings } from "lucide-react"
import type { Template, ArrangementSlot, ProjectType } from "@/types"
import { useToast } from "@/hooks/use-toast"

interface ExportPanelProps {
  template: Template | null
  arrangement: ArrangementSlot[]
  projectType: ProjectType
}

export function ExportPanel({ template, arrangement, projectType }: ExportPanelProps) {
  const [exportFormat, setExportFormat] = useState<"png" | "pdf">("png")
  const [exportQuality, setExportQuality] = useState("high")
  const [portfolioTitle, setPortfolioTitle] = useState("")
  const [isExporting, setIsExporting] = useState(false)
  const { toast } = useToast()

  const filledSlots = arrangement.filter((slot) => slot.screenshot).length
  const canExport = template && filledSlots > 0

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
      // Simulate export process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Export successful",
        description: `Portfolio exported as ${exportFormat.toUpperCase()}.`,
      })

      // In a real implementation, you would:
      // 1. Create a canvas element
      // 2. Draw the arrangement using html2canvas or similar
      // 3. Convert to desired format
      // 4. Trigger download
    } catch (error) {
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
      <div className="h-48 bg-white rounded-lg border p-4">
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
              className="rounded-sm overflow-hidden border"
              style={{
                gridColumn: `${slot.x + 1} / span ${slot.w}`,
                gridRow: `${slot.y + 1} / span ${slot.h}`,
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
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
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
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="format">Export Format</Label>
              <Select value={exportFormat} onValueChange={(value: "png" | "pdf") => setExportFormat(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">
                    <div className="flex items-center gap-2">
                      <FileImage className="h-4 w-4" />
                      PNG Image
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
                  <SelectItem value="low">Low (Fast)</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High (Best)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Portfolio Title (Optional)</Label>
            <Input
              id="title"
              placeholder="My Project Portfolio"
              value={portfolioTitle}
              onChange={(e) => setPortfolioTitle(e.target.value)}
            />
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
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Export as {exportFormat.toUpperCase()}
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
              <p>Export will include all arranged screenshots in the selected template</p>
              <p>High quality exports may take longer to process</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
