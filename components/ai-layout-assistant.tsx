"use client";

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { useAppStore } from '@/lib/store';
import { useAnalytics } from '@/hooks/use-analytics';
import { 
  Brain, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Eye, 
  Palette,
  Layout,
  Zap,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import type { ProjectType, Screenshot, Template } from '@/types';

interface AIAnalysis {
  score: number;
  recommendations: Recommendation[];
  insights: Insight[];
  suggestedTemplates: Template[];
  colorAnalysis: ColorAnalysis;
  compositionScore: number;
}

interface Recommendation {
  id: string;
  type: 'layout' | 'color' | 'spacing' | 'hierarchy';
  priority: 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: string;
}

interface Insight {
  id: string;
  category: 'visual' | 'ux' | 'branding' | 'technical';
  title: string;
  description: string;
  confidence: number;
}

interface ColorAnalysis {
  dominantColors: string[];
  colorHarmony: number;
  contrast: number;
  accessibility: 'excellent' | 'good' | 'fair' | 'poor';
}

export function AILayoutAssistant() {
  const { screenshots, projectType, selectedTemplate } = useAppStore();
  const { trackEvent } = useAnalytics();
  const [analysis, setAnalysis] = useState<AIAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'recommendations' | 'insights'>('overview');

  // Simulate AI analysis (in production, this would call your AI service)
  const analyzePortfolio = useCallback(async () => {
    if (screenshots.length === 0) return;

    setIsAnalyzing(true);
    trackEvent({ event: 'ai_analysis_started', properties: { screenshot_count: screenshots.length } });

    // Simulate analysis delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock AI analysis results
    const mockAnalysis: AIAnalysis = {
      score: Math.floor(Math.random() * 30) + 70, // 70-100
      recommendations: generateRecommendations(screenshots, projectType),
      insights: generateInsights(screenshots, projectType),
      suggestedTemplates: [], // Would be populated by AI
      colorAnalysis: {
        dominantColors: ['#3B82F6', '#EF4444', '#10B981'],
        colorHarmony: Math.random() * 0.3 + 0.7,
        contrast: Math.random() * 0.2 + 0.8,
        accessibility: 'good',
      },
      compositionScore: Math.floor(Math.random() * 20) + 80,
    };

    setAnalysis(mockAnalysis);
    setIsAnalyzing(false);
    
    trackEvent({ 
      event: 'ai_analysis_completed', 
      properties: { 
        score: mockAnalysis.score,
        recommendations_count: mockAnalysis.recommendations.length 
      } 
    });
  }, [screenshots, projectType, trackEvent]);

  // Generate mock recommendations based on portfolio content
  const generateRecommendations = (screenshots: Screenshot[], projectType: ProjectType): Recommendation[] => {
    const recommendations: Recommendation[] = [];

    if (screenshots.length === 1) {
      recommendations.push({
        id: '1',
        type: 'layout',
        priority: 'high',
        title: 'Add Supporting Screenshots',
        description: 'Single screenshots work better with additional context or process shots',
        impact: 'Increases engagement by 40%'
      });
    }

    if (screenshots.length > 8) {
      recommendations.push({
        id: '2',
        type: 'hierarchy',
        priority: 'medium',
        title: 'Create Visual Hierarchy',
        description: 'With many screenshots, establish clear primary and secondary content',
        impact: 'Improves comprehension by 25%'
      });
    }

    if (projectType === 'mobile') {
      recommendations.push({
        id: '3',
        type: 'layout',
        priority: 'high',
        title: 'Use Mobile-First Layout',
        description: 'Mobile projects benefit from storyboard-style arrangements',
        impact: 'Better showcases user flow'
      });
    }

    return recommendations;
  };

  const generateInsights = (screenshots: Screenshot[], projectType: ProjectType): Insight[] => {
    return [
      {
        id: '1',
        category: 'visual',
        title: 'Consistent Visual Style',
        description: 'Your screenshots maintain consistent branding and visual hierarchy',
        confidence: 0.85
      },
      {
        id: '2',
        category: 'ux',
        title: 'Clear User Journey',
        description: 'The flow between screens tells a compelling user story',
        confidence: 0.92
      },
      {
        id: '3',
        category: 'technical',
        title: 'High Quality Assets',
        description: 'All images are high resolution and properly formatted',
        confidence: 0.88
      }
    ];
  };

  useEffect(() => {
    if (screenshots.length > 0) {
      analyzePortfolio();
    }
  }, [screenshots.length, analyzePortfolio]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'secondary';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return <AlertCircle className="h-4 w-4" />;
      case 'medium': return <Info className="h-4 w-4" />;
      case 'low': return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  if (screenshots.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            AI Layout Assistant
          </CardTitle>
          <CardDescription>
            Upload screenshots to get AI-powered layout suggestions and insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Sparkles className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Add some screenshots to begin AI analysis</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-blue-500" />
          AI Layout Assistant
          {analysis && (
            <Badge variant="secondary" className="ml-auto">
              Score: {analysis.score}/100
            </Badge>
          )}
        </CardTitle>
        <CardDescription>
          AI-powered insights and recommendations for your portfolio
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <AnimatePresence>
          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center py-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Sparkles className="h-8 w-8 text-blue-500" />
              </motion.div>
              <p className="text-sm text-muted-foreground">Analyzing your portfolio...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {analysis && !isAnalyzing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            {/* Score Overview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Portfolio Score</h3>
                <span className="text-2xl font-bold text-blue-500">{analysis.score}/100</span>
              </div>
              <Progress value={analysis.score} className="h-2" />
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Layout className="h-4 w-4 text-green-500" />
                  <span>Composition: {analysis.compositionScore}/100</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="h-4 w-4 text-purple-500" />
                  <span>Color Harmony: {Math.floor(analysis.colorAnalysis.colorHarmony * 100)}/100</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Navigation Tabs */}
            <div className="flex gap-2">
              {(['overview', 'recommendations', 'insights'] as const).map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveTab(tab)}
                  className="capitalize"
                >
                  {tab}
                </Button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'overview' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Key Strengths
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Consistent visual hierarchy</li>
                          <li>• High-quality screenshots</li>
                          <li>• Clear user flow</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium flex items-center gap-2">
                          <TrendingUp className="h-4 w-4" />
                          Improvement Areas
                        </h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Add more context shots</li>
                          <li>• Improve color contrast</li>
                          <li>• Enhance visual balance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'recommendations' && (
                  <div className="space-y-3">
                    {analysis.recommendations.map((rec, index) => (
                      <motion.div
                        key={rec.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            {getPriorityIcon(rec.priority)}
                            <h4 className="font-medium">{rec.title}</h4>
                          </div>
                          <Badge variant={getPriorityColor(rec.priority) as any}>
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.description}</p>
                        <p className="text-xs text-blue-600 font-medium">{rec.impact}</p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 'insights' && (
                  <div className="space-y-3">
                    {analysis.insights.map((insight, index) => (
                      <motion.div
                        key={insight.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 border rounded-lg space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{insight.title}</h4>
                          <div className="flex items-center gap-2">
                            <Progress value={insight.confidence * 100} className="w-16 h-2" />
                            <span className="text-xs text-muted-foreground">
                              {Math.floor(insight.confidence * 100)}%
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{insight.description}</p>
                        <Badge variant="outline" className="text-xs">
                          {insight.category}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <Separator />

            <Button
              onClick={analyzePortfolio}
              disabled={isAnalyzing}
              className="w-full"
              variant="outline"
            >
              <Zap className="h-4 w-4 mr-2" />
              Re-analyze Portfolio
            </Button>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}