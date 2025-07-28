"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { Card } from "@/components/ui/card"
import { Upload, ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadZoneProps {
  onFilesUploaded: (files: File[]) => void
}

export function UploadZone({ onFilesUploaded }: UploadZoneProps) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)

      const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))

      if (files.length > 0) {
        onFilesUploaded(files)
      }
    },
    [onFilesUploaded],
  )

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []).filter((file) => file.type.startsWith("image/"))

      if (files.length > 0) {
        onFilesUploaded(files)
      }

      // Reset input
      e.target.value = ""
    },
    [onFilesUploaded],
  )

  return (
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
              {isDragOver ? "Drop your screenshots here" : "Upload Screenshots"}
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
  )
}
