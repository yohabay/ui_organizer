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
import { allCategoryTemplates } from "@/data/all-categories-templates";
import { allMissingTemplates } from "@/data/all-missing-templates";
import { allUniqueTemplates } from "@/data/all-unique-templates";
import { freeTemplates as comprehensiveFreeTemplates } from "@/data/comprehensive-templates";
import { designerTemplates } from "@/data/designer-templates";
import { deviceFrameTemplates } from "@/data/device-frame-templates";
import {
  chromeTemplates,
  desktopTemplates,
  mobileTemplates,
  tabletTemplates,
  websiteTemplates,
} from "@/data/device-specific-templates";
import { ecommerceTemplates } from "@/data/ecommerce-templates";
import { educationTemplates } from "@/data/education-templates";
import { financeTemplates } from "@/data/finance-templates";
import { fitnessTemplates } from "@/data/fitness-templates";
import { foodTemplates } from "@/data/food-templates";
import { freeTemplates } from "@/data/free-templates";
import { premiumTemplates } from "@/data/premium-templates";
import { realProjectTemplates } from "@/data/real-project-templates";
import { socialMediaTemplates } from "@/data/social-media-templates";
import { technologyTemplates } from "@/data/technology-templates";
import { travelTemplates } from "@/data/travel-templates";
import { Template } from "@/types";
import { Grid, List, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { EnhancedTemplatePreview } from "./enhanced-template-preview";

interface EnhancedTemplateLibraryV2Props {
  onTemplateSelect: (template: Template) => void;
  selectedTemplate: Template | null;
}

export default function EnhancedTemplateLibraryV2({
  onTemplateSelect,
  selectedTemplate,
}: EnhancedTemplateLibraryV2Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [visibleCount, setVisibleCount] = useState(10); // Show only 10 templates initially

  const allTemplates = useMemo(() => {
    return [
      ...allCategoryTemplates,
      ...allMissingTemplates,
      ...allUniqueTemplates,
      ...comprehensiveFreeTemplates,
      ...designerTemplates,
      ...deviceFrameTemplates,
      ...ecommerceTemplates,
      ...educationTemplates,
      ...financeTemplates,
      ...fitnessTemplates,
      ...foodTemplates,
      ...freeTemplates,
      ...premiumTemplates,
      ...realProjectTemplates,
      ...socialMediaTemplates,
      ...technologyTemplates,
      ...travelTemplates,
      ...mobileTemplates,
      ...desktopTemplates,
      ...websiteTemplates,
      ...tabletTemplates,
      ...chromeTemplates,
    ];
  }, [
    allCategoryTemplates,
    allMissingTemplates,
    allUniqueTemplates,
    comprehensiveFreeTemplates,
    designerTemplates,
    deviceFrameTemplates,
    ecommerceTemplates,
    educationTemplates,
    financeTemplates,
    fitnessTemplates,
    foodTemplates,
    freeTemplates,
    premiumTemplates,
    realProjectTemplates,
    socialMediaTemplates,
    technologyTemplates,
    travelTemplates,
    mobileTemplates,
    desktopTemplates,
    websiteTemplates,
    tabletTemplates,
    chromeTemplates,
  ]);

  const filteredTemplates = useMemo(() => {
    let filtered = allTemplates.filter((template) => {
      const matchesSearch =
        searchQuery === "" ||
        template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        template.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || template.category === selectedCategory;

      const matchesPlatform =
        selectedPlatform === "all" ||
        template.projectTypes.includes(selectedPlatform as any);

      return matchesSearch && matchesCategory && matchesPlatform;
    });

    // Prioritize device-specific templates when a platform is selected
    if (selectedPlatform !== "all") {
      const deviceSpecificCategories = [
        "Mobile Development",
        "Desktop Development",
        "Website Development",
        "Tablet Development",
        "Chrome Development",
        "Mobile",
        "Desktop",
        "Website",
        "Tablet",
        "Chrome",
      ];

      const deviceSpecificTemplates = filtered.filter((template) => {
        const isDeviceSpecific = deviceSpecificCategories.some((cat) =>
          template.category.includes(cat)
        );
        return (
          isDeviceSpecific &&
          template.projectTypes.includes(selectedPlatform as any)
        );
      });

      const otherTemplates = filtered.filter((template) => {
        const isDeviceSpecific = deviceSpecificCategories.some((cat) =>
          template.category.includes(cat)
        );
        return (
          !isDeviceSpecific &&
          template.projectTypes.includes(selectedPlatform as any)
        );
      });

      // Return device-specific templates first, then others
      return [...deviceSpecificTemplates, ...otherTemplates];
    }

    return filtered;
  }, [allTemplates, searchQuery, selectedCategory, selectedPlatform]);

  // Get only the visible templates for pagination
  const visibleTemplates = useMemo(() => {
    return filteredTemplates.slice(0, visibleCount);
  }, [filteredTemplates, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10); // Load 10 more templates
  };

  const handleTemplateClick = (template: Template) => {
    onTemplateSelect(template);
  };

  const categories = useMemo(() => {
    const uniqueCategories = new Set(allTemplates.map((t) => t.category));
    return Array.from(uniqueCategories).sort();
  }, [allTemplates]);

  const platforms = [
    { value: "all", label: "All Platforms" },
    { value: "mobile", label: "Mobile" },
    { value: "desktop", label: "Desktop" },
    { value: "website", label: "Website" },
    { value: "tablet", label: "Tablet" },
    { value: "chrome", label: "Chrome" },
  ];

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Select category" />
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
        <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Select platform" />
          </SelectTrigger>
          <SelectContent>
            {platforms.map((platform) => (
              <SelectItem key={platform.value} value={platform.value}>
                {platform.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Template Count Display */}
      <div className="text-sm text-muted-foreground">
        Showing {visibleTemplates.length} of {filteredTemplates.length}{" "}
        templates
      </div>

      {/* Templates Grid */}
      <div className="space-y-6">
        <Tabs
          defaultValue="all"
          className="w-full"
          onValueChange={() => setVisibleCount(10)}
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="free">Free</TabsTrigger>
            <TabsTrigger value="premium">Premium</TabsTrigger>
            <TabsTrigger value="device-specific">Device Specific</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-4"
              }
            >
              {visibleTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedTemplate?.id === template.id
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() => handleTemplateClick(template)}
                >
                  <CardHeader className="pb-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-sm">
                          {template.name}
                        </CardTitle>
                      </div>
                      <Badge
                        variant={
                          template.tier === "premium" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {template.tier === "premium" ? "Premium" : "Free"}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="mb-1">
                      <EnhancedTemplatePreview
                        template={template}
                        isSelected={selectedTemplate?.id === template.id}
                        onSelect={() => handleTemplateClick(template)}
                        showDeviceFrames={true}
                        containerWidth={500}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            {visibleTemplates.length < filteredTemplates.length && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  className="px-8"
                >
                  Load More Templates (
                  {filteredTemplates.length - visibleTemplates.length}{" "}
                  remaining)
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="free" className="space-y-6">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-4"
              }
            >
              {filteredTemplates
                .filter((template) => template.tier === "free")
                .slice(0, visibleCount)
                .map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedTemplate?.id === template.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => handleTemplateClick(template)}
                  >
                    <CardHeader className="pb-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-sm">
                            {template.name}
                          </CardTitle>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          Free
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-1">
                        <EnhancedTemplatePreview
                          template={template}
                          isSelected={selectedTemplate?.id === template.id}
                          onSelect={() => handleTemplateClick(template)}
                          showDeviceFrames={true}
                          containerWidth={500}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {filteredTemplates.filter((template) => template.tier === "free")
              .length > visibleCount && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  className="px-8"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="premium" className="space-y-6">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-4"
              }
            >
              {filteredTemplates
                .filter((template) => template.tier === "premium")
                .slice(0, visibleCount)
                .map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedTemplate?.id === template.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => handleTemplateClick(template)}
                  >
                    <CardHeader className="pb-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-sm">
                            {template.name}
                          </CardTitle>
                        </div>
                        <Badge variant="default" className="text-xs">
                          Premium
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-1">
                        <EnhancedTemplatePreview
                          template={template}
                          isSelected={selectedTemplate?.id === template.id}
                          onSelect={() => handleTemplateClick(template)}
                          showDeviceFrames={true}
                          containerWidth={500}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {filteredTemplates.filter(
              (template) => template.tier === "premium"
            ).length > visibleCount && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  className="px-8"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="ecommerce" className="space-y-6">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-4"
              }
            >
              {filteredTemplates
                .filter(
                  (template) =>
                    template.tags.includes("ecommerce") ||
                    template.category.includes("E-commerce")
                )
                .slice(0, visibleCount)
                .map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedTemplate?.id === template.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => handleTemplateClick(template)}
                  >
                    <CardHeader className="pb-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-sm">
                            {template.name}
                          </CardTitle>
                        </div>
                        <Badge
                          variant={
                            template.tier === "premium"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {template.tier === "premium" ? "Premium" : "Free"}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-1">
                        <EnhancedTemplatePreview
                          template={template}
                          isSelected={selectedTemplate?.id === template.id}
                          onSelect={() => handleTemplateClick(template)}
                          showDeviceFrames={true}
                          containerWidth={500}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {filteredTemplates.filter(
              (template) =>
                template.tags.includes("ecommerce") ||
                template.category.includes("E-commerce")
            ).length > visibleCount && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  className="px-8"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="social" className="space-y-6">
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  : "space-y-4"
              }
            >
              {filteredTemplates
                .filter(
                  (template) =>
                    template.tags.includes("social") ||
                    template.category.includes("Social")
                )
                .slice(0, visibleCount)
                .map((template) => (
                  <Card
                    key={template.id}
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedTemplate?.id === template.id
                        ? "ring-2 ring-primary"
                        : ""
                    }`}
                    onClick={() => handleTemplateClick(template)}
                  >
                    <CardHeader className="pb-1">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-sm">
                            {template.name}
                          </CardTitle>
                        </div>
                        <Badge
                          variant={
                            template.tier === "premium"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {template.tier === "premium" ? "Premium" : "Free"}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="mb-1">
                        <EnhancedTemplatePreview
                          template={template}
                          isSelected={selectedTemplate?.id === template.id}
                          onSelect={() => handleTemplateClick(template)}
                          showDeviceFrames={true}
                          containerWidth={500}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
            {filteredTemplates.filter(
              (template) =>
                template.tags.includes("social") ||
                template.category.includes("Social")
            ).length > visibleCount && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleLoadMore}
                  variant="outline"
                  className="px-8"
                >
                  Load More
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="device-specific" className="space-y-6">
            <div className="space-y-6">
              {/* Mobile Development Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
                  📱 Mobile Development
                </h3>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "space-y-4"
                  }
                >
                  {mobileTemplates
                    .slice(0, Math.min(visibleCount, mobileTemplates.length))
                    .map((template) => (
                      <Card
                        key={template.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedTemplate?.id === template.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => handleTemplateClick(template)}
                      >
                        <CardHeader className="pb-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-sm">
                                {template.name}
                              </CardTitle>
                            </div>
                            <Badge
                              variant={
                                template.tier === "premium"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {template.tier === "premium" ? "Premium" : "Free"}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="mb-1">
                            <EnhancedTemplatePreview
                              template={template}
                              isSelected={selectedTemplate?.id === template.id}
                              onSelect={() => handleTemplateClick(template)}
                              showDeviceFrames={true}
                              containerWidth={500}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Desktop Development Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
                  🖥️ Desktop Development
                </h3>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "space-y-4"
                  }
                >
                  {desktopTemplates
                    .slice(0, Math.min(visibleCount, desktopTemplates.length))
                    .map((template) => (
                      <Card
                        key={template.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedTemplate?.id === template.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => handleTemplateClick(template)}
                      >
                        <CardHeader className="pb-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-sm">
                                {template.name}
                              </CardTitle>
                            </div>
                            <Badge
                              variant={
                                template.tier === "premium"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {template.tier === "premium" ? "Premium" : "Free"}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="mb-1">
                            <EnhancedTemplatePreview
                              template={template}
                              isSelected={selectedTemplate?.id === template.id}
                              onSelect={() => handleTemplateClick(template)}
                              showDeviceFrames={true}
                              containerWidth={500}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Website Development Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
                  🌐 Website Development
                </h3>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "space-y-4"
                  }
                >
                  {websiteTemplates
                    .slice(0, Math.min(visibleCount, websiteTemplates.length))
                    .map((template) => (
                      <Card
                        key={template.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedTemplate?.id === template.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => handleTemplateClick(template)}
                      >
                        <CardHeader className="pb-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-sm">
                                {template.name}
                              </CardTitle>
                            </div>
                            <Badge
                              variant={
                                template.tier === "premium"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {template.tier === "premium" ? "Premium" : "Free"}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="mb-1">
                            <EnhancedTemplatePreview
                              template={template}
                              isSelected={selectedTemplate?.id === template.id}
                              onSelect={() => handleTemplateClick(template)}
                              showDeviceFrames={true}
                              containerWidth={500}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Tablet Development Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
                  📱 Tablet Development
                </h3>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "space-y-4"
                  }
                >
                  {tabletTemplates
                    .slice(0, Math.min(visibleCount, tabletTemplates.length))
                    .map((template) => (
                      <Card
                        key={template.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedTemplate?.id === template.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => handleTemplateClick(template)}
                      >
                        <CardHeader className="pb-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-sm">
                                {template.name}
                              </CardTitle>
                            </div>
                            <Badge
                              variant={
                                template.tier === "premium"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {template.tier === "premium" ? "Premium" : "Free"}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="mb-1">
                            <EnhancedTemplatePreview
                              template={template}
                              isSelected={selectedTemplate?.id === template.id}
                              onSelect={() => handleTemplateClick(template)}
                              showDeviceFrames={true}
                              containerWidth={500}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Chrome Development Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-slate-900">
                  🔧 Chrome Development
                </h3>
                <div
                  className={
                    viewMode === "grid"
                      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                      : "space-y-4"
                  }
                >
                  {chromeTemplates
                    .slice(0, Math.min(visibleCount, chromeTemplates.length))
                    .map((template) => (
                      <Card
                        key={template.id}
                        className={`cursor-pointer transition-all hover:shadow-lg ${
                          selectedTemplate?.id === template.id
                            ? "ring-2 ring-primary"
                            : ""
                        }`}
                        onClick={() => handleTemplateClick(template)}
                      >
                        <CardHeader className="pb-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-sm">
                                {template.name}
                              </CardTitle>
                            </div>
                            <Badge
                              variant={
                                template.tier === "premium"
                                  ? "default"
                                  : "secondary"
                              }
                              className="text-xs"
                            >
                              {template.tier === "premium" ? "Premium" : "Free"}
                            </Badge>
                          </div>
                        </CardHeader>

                        <CardContent className="pt-0">
                          <div className="mb-1">
                            <EnhancedTemplatePreview
                              template={template}
                              isSelected={selectedTemplate?.id === template.id}
                              onSelect={() => handleTemplateClick(template)}
                              showDeviceFrames={true}
                              containerWidth={500}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
