"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { allUniqueTemplates } from "@/data/all-unique-templates";
import { designerTemplates } from "@/data/designer-templates";
import { deviceFrameTemplates } from "@/data/device-frame-templates";
import { ecommerceTemplates } from "@/data/ecommerce-templates";
import { educationTemplates } from "@/data/education-templates";
import { financeTemplates } from "@/data/finance-templates";
import { fitnessTemplates } from "@/data/fitness-templates";
import { foodTemplates } from "@/data/food-templates";
import { freeTemplates } from "@/data/free-templates";
import { premiumTemplates } from "@/data/premium-templates";
import { socialMediaTemplates } from "@/data/social-media-templates";
import { technologyTemplates } from "@/data/technology-templates";
import { travelTemplates } from "@/data/travel-templates";
import { Template } from "@/types";
import { Grid, List, Search } from "lucide-react";
import { useMemo, useState } from "react";

interface EnhancedTemplateLibraryProps {
  onTemplateSelect: (template: Template) => void;
  selectedTemplate?: Template;
}

export default function EnhancedTemplateLibrary({
  onTemplateSelect,
  selectedTemplate,
}: EnhancedTemplateLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState("all");

  // Combine all templates from different sources with unique IDs
  const allTemplates = useMemo(() => {
    // Add unique prefix to avoid ID conflicts
    const free = freeTemplates.map((t, index) => ({
      ...t,
      tier: "free" as const,
      id: `free-original-${index}-${t.id}`,
    }));

    const premium = premiumTemplates.map((t, index) => ({
      ...t,
      tier: "premium" as const,
      id: `premium-original-${index}-${t.id}`,
    }));

    const ecommerce = ecommerceTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `ecommerce-${index}-${t.id}`,
    }));

    const socialMedia = socialMediaTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `social-${index}-${t.id}`,
    }));

    const fitness = fitnessTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `fitness-${index}-${t.id}`,
    }));

    const education = educationTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `education-${index}-${t.id}`,
    }));

    const food = foodTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `food-${index}-${t.id}`,
    }));

    const travel = travelTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `travel-${index}-${t.id}`,
    }));

    const technology = technologyTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `tech-${index}-${t.id}`,
    }));

    const finance = financeTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `finance-${index}-${t.id}`,
    }));

    // Add designer templates
    const designer = designerTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `designer-${index}-${t.id}`,
    }));

    // Add the unique templates (343 templates!)
    const unique = allUniqueTemplates.map((t, index) => ({
      ...t,
      tier: t.id.startsWith("premium")
        ? ("premium" as const)
        : ("free" as const),
      id: `unique-${index}-${t.id}`,
    }));

    // Add device frame templates
    const deviceFrames = deviceFrameTemplates.map((t, index) => ({
      ...t,
      tier: t.isPremium ? ("premium" as const) : ("free" as const),
      id: `device-frame-${index}-${t.id}`,
    }));

    return [
      ...free,
      ...premium,
      ...ecommerce,
      ...socialMedia,
      ...fitness,
      ...education,
      ...food,
      ...travel,
      ...technology,
      ...finance,
      ...designer,
      ...deviceFrames,
      ...unique,
    ];
  }, []);

  // Filter templates based on search, category, and platform
  const filteredTemplates = useMemo(() => {
    let filtered = allTemplates;

    // Filter by tab (all, free, premium)
    if (activeTab === "free") {
      filtered = filtered.filter((t) => t.tier === "free");
    } else if (activeTab === "premium") {
      filtered = filtered.filter((t) => t.tier === "premium");
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (template) =>
          template.name.toLowerCase().includes(query) ||
          template.description.toLowerCase().includes(query) ||
          template.category.toLowerCase().includes(query) ||
          template.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((template) =>
        template.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by platform
    if (selectedPlatform !== "all") {
      filtered = filtered.filter((template) =>
        template.projectTypes.includes(selectedPlatform as any)
      );
    }

    return filtered;
  }, [
    allTemplates,
    searchQuery,
    selectedCategory,
    selectedPlatform,
    activeTab,
  ]);

  // Get unique categories and platforms for filters
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allTemplates.map((t) => t.category))];
    return [
      { id: "all", name: "All Categories" },
      ...uniqueCategories.map((c) => ({
        id: c.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        name: c,
      })),
    ];
  }, [allTemplates]);

  const platforms = useMemo(
    () => [
      { id: "all", name: "All Platforms" },
      { id: "website", name: "Website" },
      { id: "mobile", name: "Mobile App" },
      { id: "desktop", name: "Desktop App" },
    ],
    []
  );

  const handleTemplateClick = (template: Template) => {
    console.log("Template clicked:", template.id);
    onTemplateSelect(template);
  };

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Template Library</h2>
          <p className="text-muted-foreground">
            {filteredTemplates.length} of {allTemplates.length} templates
            available
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Total: {allTemplates.length} templates | Free:{" "}
            {allTemplates.filter((t) => t.tier === "free").length} | Premium:{" "}
            {allTemplates.filter((t) => t.tier === "premium").length}
          </p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs for All/Free/Premium */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">
            All Templates ({allTemplates.length})
          </TabsTrigger>
          <TabsTrigger value="free">
            Free ({allTemplates.filter((t) => t.tier === "free").length})
          </TabsTrigger>
          <TabsTrigger value="premium">
            Premium ({allTemplates.filter((t) => t.tier === "premium").length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Platform Filter */}
            <Select
              value={selectedPlatform}
              onValueChange={setSelectedPlatform}
            >
              <SelectTrigger className="w-full sm:w-[200px]">
                <SelectValue placeholder="Select platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((platform) => (
                  <SelectItem key={platform.id} value={platform.id}>
                    {platform.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Template Grid/List */}
          {filteredTemplates.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No templates found matching your criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedPlatform("all");
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "space-y-4"
              }
            >
              {filteredTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedTemplate?.id === template.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() => handleTemplateClick(template)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">
                          {template.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">
                          {template.description}
                        </p>
                      </div>
                      <Badge
                        variant={
                          template.tier === "premium" ? "default" : "secondary"
                        }
                      >
                        {template.tier === "premium" ? "Premium" : "Free"}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Template Grid Preview */}
                    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-4 p-3 border">
                      <div className="text-xs text-gray-500 mb-2 text-center">
                        {template.name} Layout
                      </div>
                      <div
                        className="w-full h-full relative bg-white rounded border"
                        style={{
                          display: "grid",
                          gridTemplateColumns: `repeat(${template.cols}, 1fr)`,
                          gridTemplateRows: `repeat(${template.rows}, 1fr)`,
                          gap: "1px",
                          padding: "4px",
                        }}
                      >
                        {/* Template slots */}
                        {template.slots.map((slot, index) => {
                          // Check if this is a device frame template
                          const isDeviceFrame =
                            template.category === "Device Frames" ||
                            slot.deviceFrame;

                          if (isDeviceFrame) {
                            // Render realistic device frame
                            const getDeviceFrameStyle = () => {
                              const deviceType = slot.deviceFrame || "iphone";
                              switch (deviceType) {
                                case "iphone":
                                  return "from-black via-gray-900 to-black border-gray-800";
                                case "android":
                                  return "from-gray-900 via-black to-gray-900 border-gray-700";
                                case "tablet":
                                  return "from-gray-800 via-gray-900 to-gray-800 border-gray-600";
                                case "browser":
                                  return "from-gray-700 via-gray-800 to-gray-700 border-gray-600";
                                default:
                                  return "from-gray-800 to-black border-gray-700";
                              }
                            };

                            const getDeviceShape = () => {
                              const deviceType = slot.deviceFrame || "iphone";
                              switch (deviceType) {
                                case "iphone":
                                  return "rounded-[20px]"; // iPhone rounded corners
                                case "android":
                                  return "rounded-[16px]"; // Android rounded corners
                                case "tablet":
                                  return "rounded-[12px]"; // Tablet rounded corners
                                case "browser":
                                  return "rounded-t-lg"; // Browser window style
                                default:
                                  return "rounded-xl";
                              }
                            };

                            return (
                              <div
                                key={index}
                                className={`bg-gradient-to-br ${getDeviceFrameStyle()} ${getDeviceShape()} border-2 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl`}
                                style={{
                                  gridColumn: `${slot.x + 1} / span ${slot.w}`,
                                  gridRow: `${slot.y + 1} / span ${slot.h}`,
                                  transform: slot.rotation
                                    ? `rotate(${slot.rotation}deg)`
                                    : "none",
                                  zIndex: slot.zIndex || 1,
                                  boxShadow:
                                    slot.shadow === "xl"
                                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                                      : slot.shadow === "lg"
                                      ? "0 15px 30px -5px rgba(0, 0, 0, 0.4)"
                                      : slot.shadow === "md"
                                      ? "0 8px 16px -4px rgba(0, 0, 0, 0.3)"
                                      : slot.shadow === "sm"
                                      ? "0 4px 8px -2px rgba(0, 0, 0, 0.2)"
                                      : "0 8px 16px -4px rgba(0, 0, 0, 0.3)",
                                }}
                              >
                                {/* Device screen area */}
                                <div className="w-full h-full bg-white rounded-[12px] m-1 flex items-center justify-center relative">
                                  {/* Screen content placeholder */}
                                  <div className="text-center space-y-2">
                                    <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto"></div>
                                    <div className="text-xs text-gray-500 font-medium">
                                      {slot.deviceFrame || "device"}
                                    </div>
                                  </div>

                                  {/* Device-specific details */}
                                  {slot.deviceFrame === "iphone" && (
                                    <>
                                      {/* Notch */}
                                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-b-lg"></div>
                                      {/* Home indicator */}
                                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black rounded-full"></div>
                                    </>
                                  )}

                                  {slot.deviceFrame === "android" && (
                                    <>
                                      {/* Camera */}
                                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
                                      {/* Home button */}
                                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 border-2 border-gray-400 rounded-full"></div>
                                    </>
                                  )}

                                  {slot.deviceFrame === "browser" && (
                                    <>
                                      {/* Browser controls */}
                                      <div className="absolute top-0 left-0 right-0 h-6 bg-gray-200 rounded-t-lg flex items-center px-2">
                                        <div className="flex gap-1">
                                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                        <div className="flex-1 bg-white rounded px-2 py-1 mx-2 text-xs text-gray-500">
                                          example.com
                                        </div>
                                      </div>
                                    </>
                                  )}

                                  {slot.deviceFrame === "tablet" && (
                                    <>
                                      {/* Camera */}
                                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>
                                      {/* Home button */}
                                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-gray-400 rounded-full"></div>
                                    </>
                                  )}
                                </div>
                              </div>
                            );
                          } else {
                            // Render regular grid slot
                            const getSlotStyle = () => {
                              const category = template.category.toLowerCase();
                              if (category.includes("hero")) {
                                return "from-purple-400 to-purple-600 border-purple-700";
                              } else if (category.includes("grid")) {
                                return "from-blue-400 to-blue-600 border-blue-700";
                              } else if (category.includes("masonry")) {
                                return "from-green-400 to-green-600 border-green-700";
                              } else if (category.includes("mobile")) {
                                return "from-pink-400 to-pink-600 border-pink-700";
                              } else if (category.includes("floating")) {
                                return "from-orange-400 to-orange-600 border-orange-700";
                              } else if (category.includes("diagonal")) {
                                return "from-red-400 to-red-600 border-red-700";
                              } else if (category.includes("circular")) {
                                return "from-indigo-400 to-indigo-600 border-indigo-700";
                              } else {
                                return "from-gray-400 to-gray-600 border-gray-700";
                              }
                            };

                            return (
                              <div
                                key={index}
                                className={`bg-gradient-to-br ${getSlotStyle()} rounded border flex items-center justify-center`}
                                style={{
                                  gridColumn: `${slot.x + 1} / span ${slot.w}`,
                                  gridRow: `${slot.y + 1} / span ${slot.h}`,
                                  transform: slot.rotation
                                    ? `rotate(${slot.rotation}deg)`
                                    : "none",
                                  zIndex: slot.zIndex || 1,
                                  boxShadow:
                                    slot.shadow === "xl"
                                      ? "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                                      : slot.shadow === "lg"
                                      ? "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
                                      : slot.shadow === "md"
                                      ? "0 4px 6px -1px rgba(0, 0, 0, 0.15)"
                                      : slot.shadow === "sm"
                                      ? "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                                      : "none",
                                  borderRadius:
                                    slot.borderRadius === "lg"
                                      ? "8px"
                                      : slot.borderRadius === "md"
                                      ? "6px"
                                      : slot.borderRadius === "sm"
                                      ? "4px"
                                      : slot.borderRadius === "xl"
                                      ? "12px"
                                      : slot.borderRadius === "full"
                                      ? "50%"
                                      : "0",
                                }}
                              >
                                <span className="text-white text-xs font-medium">
                                  {index + 1}
                                </span>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>

                    {/* Template Info */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Category:</span>
                        <span>{template.category}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Slots:</span>
                        <span>{template.slots.length}</span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          Platforms:
                        </span>
                        <div className="flex gap-1">
                          {template.projectTypes.map((type) => (
                            <Badge
                              key={type}
                              variant="outline"
                              className="text-xs"
                            >
                              {type}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {template.tags.slice(0, 3).map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {template.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{template.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
