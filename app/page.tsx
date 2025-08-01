"use client";

import EnhancedTemplateLibraryV2 from "@/components/enhanced-template-library-v2";
import { ProfessionalExportEngine } from "@/components/professional-export-engine";
import { RealProjectPreview } from "@/components/real-project-preview";
import { ScreenshotLibrary } from "@/components/screenshot-library";
import { ScreenshotUploader } from "@/components/screenshot-uploader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import type {
  ArrangementSlot,
  ProjectType,
  Screenshot,
  Template,
} from "@/types";
import { Download } from "lucide-react";
import { Suspense, useMemo, useState } from "react";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [screenshots, setScreenshots] = useState<Screenshot[]>([]);
  const [projectType, setProjectType] = useState<ProjectType>("website");
  const [activeTab, setActiveTab] = useState("templates");
  const [selectedFrame, setSelectedFrame] = useState<string>("none");
  const { toast } = useToast();

  // Function to create dynamic template based on screenshot count
  const createDynamicTemplate = (screenshotCount: number): Template => {
    const layouts = [
      // 1-2 screenshots: Hero layout
      {
        name: "hero-single",
        slots: [{ x: 2, y: 2, w: 8, h: 6, zIndex: 2, shadow: "xl" as const }],
        rows: 10,
        cols: 12,
      },
      {
        name: "hero-duo",
        slots: [
          { x: 1, y: 1, w: 6, h: 5, zIndex: 2, shadow: "lg" as const },
          { x: 7, y: 2, w: 4, h: 4, zIndex: 1, shadow: "md" as const },
        ],
        rows: 10,
        cols: 12,
      },
      // 3-4 screenshots: Grid layout
      {
        name: "grid-3",
        slots: [
          {
            x: 0,
            y: 0,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 4,
            y: 0,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 8,
            y: 0,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 8,
        cols: 12,
      },
      {
        name: "grid-4",
        slots: [
          {
            x: 0,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 9,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 6,
        cols: 12,
      },
      // 5-6 screenshots: Masonry layout
      {
        name: "masonry-5",
        slots: [
          {
            x: 0,
            y: 0,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 4,
            y: 0,
            w: 4,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 8,
            y: 0,
            w: 4,
            h: 5,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 0,
            y: 4,
            w: 4,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 4,
            y: 3,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 10,
        cols: 12,
      },
      {
        name: "masonry-6",
        slots: [
          {
            x: 0,
            y: 0,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 4,
            y: 0,
            w: 4,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 8,
            y: 0,
            w: 4,
            h: 5,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 0,
            y: 4,
            w: 4,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 4,
            y: 3,
            w: 4,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 8,
            y: 5,
            w: 4,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 10,
        cols: 12,
      },
      // 7-9 screenshots: Staggered layout
      {
        name: "staggered-7",
        slots: [
          {
            x: 0,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 0,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 0,
            w: 3,
            h: 2,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 9,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 0,
            y: 3,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 4,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 2,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 10,
        cols: 12,
      },
      {
        name: "staggered-8",
        slots: [
          {
            x: 0,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 0,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 0,
            w: 3,
            h: 2,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 9,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 0,
            y: 3,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 4,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 2,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 9,
            y: 3,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 10,
        cols: 12,
      },
      {
        name: "staggered-9",
        slots: [
          {
            x: 0,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 0,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 0,
            w: 3,
            h: 2,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 9,
            y: 0,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 0,
            y: 3,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 3,
            y: 4,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 6,
            y: 2,
            w: 3,
            h: 4,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 9,
            y: 3,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
          {
            x: 0,
            y: 7,
            w: 3,
            h: 3,
            borderRadius: "lg" as const,
            shadow: "md" as const,
          },
        ],
        rows: 12,
        cols: 12,
      },
    ];

    // Select layout based on screenshot count
    let selectedLayout;
    if (screenshotCount <= 2) {
      selectedLayout = layouts[screenshotCount - 1];
    } else if (screenshotCount <= 4) {
      selectedLayout = layouts[screenshotCount];
    } else if (screenshotCount <= 6) {
      selectedLayout = layouts[screenshotCount + 1];
    } else if (screenshotCount <= 9) {
      selectedLayout = layouts[screenshotCount + 2];
    } else {
      // For 10+ screenshots, create a grid layout
      const cols = 4;
      const rows = Math.ceil(screenshotCount / cols);
      const slots = [];

      for (let i = 0; i < screenshotCount; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;
        slots.push({
          x: col * 3,
          y: row * 3,
          w: 3,
          h: 3,
          borderRadius: "lg" as const,
          shadow: "md" as const,
        });
      }

      selectedLayout = {
        name: `grid-${screenshotCount}`,
        slots,
        rows: rows * 3,
        cols: 12,
      };
    }

    return {
      id: `dynamic-${screenshotCount}`,
      name: `Dynamic Layout (${screenshotCount} screenshots)`,
      description: `Automatically generated layout for ${screenshotCount} screenshots`,
      category: "Dynamic Layouts",
      projectTypes: ["website", "mobile", "desktop"] as ProjectType[],
      ...selectedLayout,
      preview: `/template-previews/dynamic-${screenshotCount}.jpg`,
      tags: ["dynamic", "auto-generated", "responsive"],
    };
  };

  // Create dynamic template based on screenshot count
  const dynamicTemplate = useMemo(() => {
    if (screenshots.length === 0) return null;
    return createDynamicTemplate(screenshots.length);
  }, [screenshots.length]);

  // Create arrangement data from template and screenshots
  const arrangement = useMemo(() => {
    if (!screenshots.length) {
      return [];
    }

    // Use selected template if available, otherwise use dynamic template
    const templateToUse = selectedTemplate || dynamicTemplate;
    if (!templateToUse) return [];

    // Create arrangement slots for all screenshots
    const arrangementSlots: ArrangementSlot[] = templateToUse.slots.map(
      (slot, index) => ({
        ...slot,
        screenshot: screenshots[index] || null,
        id: `slot-${index}`,
      })
    );

    return arrangementSlots;
  }, [screenshots, selectedTemplate, dynamicTemplate]);

  const handleTemplateSelect = (template: Template) => {
    console.log("Template selected:", template);
    setSelectedTemplate(template);

    // Automatically move to the next step (Upload tab)
    setActiveTab("upload");

    toast({
      title: "Template Selected!",
      description: `${template.name} has been selected. You can now upload your screenshots.`,
    });
  };

  const handleScreenshotUpload = (newScreenshots: Screenshot[]) => {
    console.log("Screenshots uploaded:", newScreenshots);
    setScreenshots(newScreenshots);

    // Automatically move to Preview tab after uploading screenshots
    if (newScreenshots.length > 0) {
      setActiveTab("preview");
      toast({
        title: "Screenshots Uploaded!",
        description: `${newScreenshots.length} screenshots uploaded. Check the preview tab to see your layout.`,
      });
    }
  };

  const handleScreenshotRemove = (id: string) => {
    setScreenshots((prev) => prev.filter((screenshot) => screenshot.id !== id));
    toast({
      title: "Screenshot Removed",
      description: "Screenshot has been removed from your project.",
    });
  };

  const handleExport = async (exportSettings: any) => {
    if (!selectedTemplate) {
      toast({
        title: "No Template Selected",
        description: "Please select a template before exporting.",
        variant: "destructive",
      });
      return;
    }

    if (screenshots.length === 0) {
      toast({
        title: "No Screenshots",
        description: "Please upload at least one screenshot before exporting.",
        variant: "destructive",
      });
      return;
    }

    // Check if screenshots exceed template slots
    if (screenshots.length > selectedTemplate.slots.length) {
      toast({
        title: "Too Many Screenshots",
        description: `This template supports ${selectedTemplate.slots.length} screenshots, but you have ${screenshots.length}. Some screenshots may not be included.`,
        variant: "destructive",
      });
    }

    try {
      // Export logic here
      toast({
        title: "Export Successful",
        description:
          "Your professional portfolio has been exported successfully!",
      });
    } catch (error) {
      toast({
        title: "Export Failed",
        description:
          "There was an error exporting your portfolio. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Portfolio Designer
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Create stunning portfolio layouts with our professional templates
            and export high-quality designs for your projects.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6"
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates">📚 Template Library</TabsTrigger>
            <TabsTrigger value="upload">📤 Upload Screenshots</TabsTrigger>
            <TabsTrigger value="preview">👁️ Preview</TabsTrigger>
            <TabsTrigger value="export">🚀 Export</TabsTrigger>
          </TabsList>

          {/* Template Library Tab */}
          <TabsContent value="templates" className="space-y-6">
            <Suspense
              fallback={
                <div className="text-center py-8">Loading templates...</div>
              }
            >
              <EnhancedTemplateLibraryV2
                onTemplateSelect={handleTemplateSelect}
                selectedTemplate={selectedTemplate}
              />
            </Suspense>
          </TabsContent>

          {/* Upload Screenshots Tab */}
          <TabsContent value="upload" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upload Screenshots</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScreenshotUploader
                    onScreenshotsUploaded={handleScreenshotUpload}
                    projectType={projectType}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Screenshot Library</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScreenshotLibrary
                    screenshots={screenshots}
                    projectType={projectType}
                    onScreenshotDelete={handleScreenshotRemove}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Preview Tab */}
          <TabsContent value="preview" className="space-y-6">
            {screenshots.length > 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>Preview Your Portfolio</CardTitle>
                  <CardDescription>
                    Review your layout before exporting
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {selectedTemplate || dynamicTemplate ? (
                    <RealProjectPreview
                      template={selectedTemplate || dynamicTemplate!}
                      screenshots={screenshots}
                      isSelected={false}
                      onSelect={() => {}}
                      selectedFrame={selectedFrame}
                      onFrameChange={setSelectedFrame}
                    />
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">
                        Please select a template first.
                      </p>
                    </div>
                  )}

                  {/* Debug info */}
                  {screenshots.length > 0 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">
                        ✅ {screenshots.length} screenshots passed to preview
                      </p>
                    </div>
                  )}

                  {/* Auto-navigate to Export */}
                  <div className="mt-6 flex justify-center">
                    <Button
                      onClick={() => setActiveTab("export")}
                      className="w-full sm:w-auto"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Export Portfolio
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Please upload screenshots to see the preview.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Export Tab */}
          <TabsContent value="export" className="space-y-6">
            {screenshots.length > 0 ? (
              <Card>
                <CardHeader>
                  <CardTitle>Export Professional Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <ProfessionalExportEngine
                    template={selectedTemplate || dynamicTemplate || null}
                    arrangement={arrangement}
                    projectType={projectType}
                    screenshots={screenshots}
                  />
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Please upload screenshots to export your portfolio.
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-600">
                {selectedTemplate ? "1" : "0"}
              </div>
              <p className="text-sm text-muted-foreground">Template Selected</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-600">
                {screenshots.length}
              </div>
              <p className="text-sm text-muted-foreground">
                Screenshots Uploaded
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-purple-600">
                {selectedTemplate
                  ? selectedTemplate.slots.length
                  : dynamicTemplate
                  ? dynamicTemplate.slots.length
                  : "0"}
              </div>
              <p className="text-sm text-muted-foreground">Available Slots</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
