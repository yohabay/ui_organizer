"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, X, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ProjectType, Screenshot } from "@/types"

interface ScreenshotUploaderProps {
  onScreenshotsUploaded: (screenshots: Screenshot[]) => void
  projectType: ProjectType
}

export function ScreenshotUploader({ onScreenshotsUploaded, projectType }: ScreenshotUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<Screenshot[]>([])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)

    const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))

    processFiles(files)
  }, [])

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).filter((file) => file.type.startsWith("image/"))

    processFiles(files)
    e.target.value = ""
  }, [])

  const processFiles = (files: File[]) => {
    const newScreenshots: Screenshot[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      file,
      url: URL.createObjectURL(file),
    }))

    setUploadedFiles((prev) => [...prev, ...newScreenshots])
    onScreenshotsUploaded(newScreenshots)
  }

  const removeScreenshot = (id: string) => {
    setUploadedFiles((prev) => prev.filter((screenshot) => screenshot.id !== id))
  }

  const getProjectTypeHints = () => {
    switch (projectType) {
      case "mobile":
        return ["Login screens", "Onboarding flows", "Home screens", "Profile pages", "Settings"]
      case "desktop":
        return ["Dashboard views", "Login forms", "Settings panels", "Report screens", "Modals"]
      case "website":
        return ["Homepage", "About page", "Contact forms", "Product pages", "Checkout flow"]
      default:
        return []
    }
  }

  return (
    <div className="space-y-6">
      <Card
        className={cn(
          "border-2 border-dashed transition-colors cursor-pointer",
          isDragOver ? "border-blue-500 bg-blue-50" : "border-slate-300 hover:border-slate-400",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <label className="block p-12 text-center cursor-pointer">
          <input type="file" multiple accept="image/*" onChange={handleFileInput} className="hidden" />

          <div className="space-y-4">
            <div className="flex justify-center">
              <div className={cn("p-4 rounded-full transition-colors", isDragOver ? "bg-blue-100" : "bg-slate-100")}>
                <Upload className={cn("h-8 w-8 transition-colors", isDragOver ? "text-blue-600" : "text-slate-600")} />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                {isDragOver ? "Drop your screenshots here" : `Upload ${projectType} Screenshots`}
              </h3>
              <p className="text-slate-600">Drag and drop your project screenshots or click to browse</p>
              <p className="text-sm text-slate-500">Supports PNG, JPG, JPEG, WebP files</p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-500">
              <ImageIcon className="h-4 w-4" />
              <span>Multiple files supported</span>
            </div>
          </div>
        </label>
      </Card>

      {/* Project Type Hints */}
      <Card className="p-4 bg-slate-50">
        <h4 className="font-medium text-sm text-slate-700 mb-2">Recommended {projectType} screenshots:</h4>
        <div className="flex flex-wrap gap-2">
          {getProjectTypeHints().map((hint) => (
            <span key={hint} className="px-2 py-1 bg-white rounded text-xs text-slate-600 border">
              {hint}
            </span>
          ))}
        </div>
      </Card>

      {/* Uploaded Files Preview */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Recently Uploaded ({uploadedFiles.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {uploadedFiles.map((screenshot) => (
              <div key={screenshot.id} className="relative group">
                <img
                  src={screenshot.url || "/placeholder.svg"}
                  alt={screenshot.name}
                  className="w-full h-24 object-cover rounded-lg border"
                />
                <Button
                  size="sm"
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeScreenshot(screenshot.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
                <div className="absolute bottom-1 left-1 right-1">
                  <p className="text-xs text-white bg-black/70 rounded px-1 truncate">{screenshot.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
