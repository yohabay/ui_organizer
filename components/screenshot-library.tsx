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
import type { ProjectType, Screenshot } from "@/types";
import {
  Globe,
  Layout,
  Monitor,
  Search,
  Smartphone,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface ScreenshotLibraryProps {
  screenshots: Screenshot[];
  projectType: ProjectType;
  onScreenshotSelect?: (screenshot: Screenshot) => void;
  onScreenshotDelete?: (id: string) => void;
  onScreenshotRename?: (id: string, name: string) => void;
  onScreenshotCategoryChange?: (id: string, category: string) => void;
}

export function ScreenshotLibrary({
  screenshots,
  projectType,
  onScreenshotSelect,
  onScreenshotDelete,
  onScreenshotRename,
  onScreenshotCategoryChange,
}: ScreenshotLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("uploaded");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "analysis">(
    "grid"
  );
  const [selectedScreenshots, setSelectedScreenshots] = useState<Set<string>>(
    new Set()
  );
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const filteredScreenshots = screenshots.filter((screenshot) => {
    const matchesSearch =
      screenshot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      screenshot.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      screenshot.tags?.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      categoryFilter === "all" || screenshot.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const sortedScreenshots = [...filteredScreenshots].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "category":
        return (a.category || "").localeCompare(b.category || "");
      case "uploaded":
      default:
    return (
          new Date(b.uploadedAt).getTime() - new Date(a.uploadedAt).getTime()
        );
    }
  });

  const categories = Array.from(
    new Set(screenshots.map((s) => s.category).filter(Boolean))
  );

  // Analyze screenshots for professional arrangement
  const analyzeScreenshots = async () => {
    setIsAnalyzing(true);

    try {
      // Simulate AI analysis
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const analysis = {
        totalScreenshots: screenshots.length,
        recommendedLayout: getRecommendedLayout(screenshots, projectType),
        heroScreenshots: screenshots.filter((s) => isHeroScreenshot(s)),
        supportingScreenshots: screenshots.filter((s) => !isHeroScreenshot(s)),
        colorPalette: analyzeColorPalette(screenshots),
        layoutSuggestions: generateLayoutSuggestions(screenshots, projectType),
        professionalScore: calculateProfessionalScore(screenshots),
        improvementTips: generateImprovementTips(screenshots, projectType),
      };

      setAnalysisResults(analysis);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getRecommendedLayout = (
    screenshots: Screenshot[],
    projectType: ProjectType
  ) => {
    if (screenshots.length <= 3) return "hero-showcase";
    if (screenshots.length <= 6) return "masonry-grid";
    if (screenshots.length <= 9) return "asymmetric-hero";
    return "professional-mosaic";
  };

  const isHeroScreenshot = (screenshot: Screenshot) => {
    // Determine if screenshot should be featured as hero
    const heroKeywords = [
      "home",
      "main",
      "landing",
      "hero",
      "dashboard",
      "overview",
    ];
    return heroKeywords.some(
      (keyword) =>
        screenshot.name.toLowerCase().includes(keyword) ||
        screenshot.category?.toLowerCase().includes(keyword)
    );
  };

  const analyzeColorPalette = (screenshots: Screenshot[]) => {
    // Simulate color analysis
    const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
    return colors.slice(0, Math.min(3, screenshots.length));
  };

  const generateLayoutSuggestions = (
    screenshots: Screenshot[],
    projectType: ProjectType
  ) => {
    const suggestions = [];

    if (projectType === "mobile") {
      suggestions.push("Mobile storyboard layout for app flow");
      suggestions.push("Hero screen with supporting detail views");
    } else if (projectType === "website") {
      suggestions.push("Modern hero showcase with dynamic grid");
      suggestions.push("Professional masonry layout");
    } else {
      suggestions.push("Corporate presentation style");
      suggestions.push("Focused grid with center emphasis");
    }

    return suggestions;
  };

  const calculateProfessionalScore = (screenshots: Screenshot[]) => {
    // Calculate professional quality score
    let score = 0;
    score += screenshots.length * 10; // More screenshots = better
    score += screenshots.filter((s) => s.category).length * 5; // Categorized screenshots
    score += screenshots.filter((s) => s.tags && s.tags.length > 0).length * 3; // Tagged screenshots

    return Math.min(100, score);
  };

  const generateImprovementTips = (
    screenshots: Screenshot[],
    projectType: ProjectType
  ) => {
    const tips = [];

    if (screenshots.length < 3) {
      tips.push("Add more screenshots to create a comprehensive showcase");
    }

    if (!screenshots.some((s) => isHeroScreenshot(s))) {
      tips.push("Include a hero/main screenshot for maximum impact");
    }

    if (screenshots.length > 6) {
      tips.push("Consider using a multi-page layout for better organization");
    }

    return tips;
  };

  const handleSelectScreenshot = (screenshot: Screenshot) => {
    if (onScreenshotSelect) {
      onScreenshotSelect(screenshot);
    }
  };

  const handleSelectMultiple = (screenshotId: string) => {
    const newSelected = new Set(selectedScreenshots);
    if (newSelected.has(screenshotId)) {
      newSelected.delete(screenshotId);
    } else {
      newSelected.add(screenshotId);
    }
    setSelectedScreenshots(newSelected);
  };

  const getProjectTypeIcon = (type: ProjectType) => {
    switch (type) {
      case "mobile":
        return <Smartphone className="h-4 w-4" />;
      case "desktop":
        return <Monitor className="h-4 w-4" />;
      case "website":
        return <Globe className="h-4 w-4" />;
      default:
        return <Layout className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Enhanced Header */}
      <div className="text-center space-y-4 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-blue-700">
          <Sparkles className="h-4 w-4" />
          Professional Screenshot Library
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          AI-Powered Screenshot Analysis
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Our AI analyzes your screenshots to suggest optimal arrangements and
          professional layouts that eliminate spacing issues and create
          production-ready portfolios.
        </p>
      </div>

      {/* View Mode Tabs */}
      <Tabs value={viewMode} onValueChange={(value: any) => setViewMode(value)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="grid">Grid View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="grid" className="space-y-4">
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search screenshots..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
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

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="uploaded">Recently Uploaded</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="category">Category</SelectItem>
              </SelectContent>
            </Select>

            <Button
              onClick={analyzeScreenshots}
              disabled={isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <Zap className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  AI Analysis
                </>
              )}
            </Button>
          </div>

          {/* Grid View */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedScreenshots.map((screenshot) => (
              <Card
                key={screenshot.id}
                className="group cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-blue-200"
                onClick={() => handleSelectScreenshot(screenshot)}
              >
                <CardContent className="p-4">
                  <div className="relative aspect-video mb-3 rounded-lg overflow-hidden bg-slate-100">
                    <img
                      src={screenshot.url}
                    alt={screenshot.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200" />

                    {/* Project Type Badge */}
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-xs">
                        {getProjectTypeIcon(projectType)}
                        <span className="ml-1">{projectType}</span>
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm truncate">
                      {screenshot.name}
                    </h3>
                    {screenshot.category && (
                      <Badge variant="outline" className="text-xs">
                        {screenshot.category}
                      </Badge>
                    )}
                    <div className="text-xs text-slate-500">
                      {new Date(screenshot.uploadedAt).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-4">
          {/* List View */}
          <div className="space-y-2">
            {sortedScreenshots.map((screenshot) => (
              <Card
                key={screenshot.id}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-12 rounded overflow-hidden bg-slate-100 flex-shrink-0">
                      <img
                        src={screenshot.url}
                        alt={screenshot.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold truncate">
                        {screenshot.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        {screenshot.category && (
                          <Badge variant="outline" className="text-xs">
                            {screenshot.category}
                          </Badge>
                        )}
                        <span>
                          {new Date(screenshot.uploadedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {getProjectTypeIcon(projectType)}
                      <Button size="sm" variant="outline">
                        Select
                    </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-6">
          {/* AI Analysis Results */}
          {!analysisResults ? (
            <div className="text-center py-12">
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">AI Analysis</h3>
                  <p className="text-sm text-slate-500">
                    Click "AI Analysis" to get professional layout
                    recommendations
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Analysis Summary */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Professional Analysis Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {analysisResults.totalScreenshots}
                      </div>
                      <div className="text-sm text-blue-600">
                        Total Screenshots
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {analysisResults.professionalScore}%
                      </div>
                      <div className="text-sm text-green-600">
                        Professional Score
                      </div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {analysisResults.heroScreenshots.length}
                      </div>
                      <div className="text-sm text-purple-600">
                        Hero Screenshots
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Layout Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5" />
                    Recommended Layout
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        Primary Recommendation
                      </h4>
                      <p className="text-sm text-slate-600">
                        {analysisResults.recommendedLayout} layout
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Layout Suggestions</h4>
                      <ul className="space-y-2">
                        {analysisResults.layoutSuggestions.map(
                          (suggestion: string, index: number) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-sm"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              {suggestion}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
        </div>
      </CardContent>
    </Card>

              {/* Improvement Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Professional Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {analysisResults.improvementTips.map(
                      (tip: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-amber-800">{tip}</p>
                        </div>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
