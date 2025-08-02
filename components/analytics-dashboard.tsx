"use client";

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppStore } from '@/lib/store';
import { useAnalytics } from '@/hooks/use-analytics';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from 'recharts';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Eye, 
  Download, 
  Share2,
  Clock,
  Target,
  Zap,
  Award,
  Activity,
  Calendar
} from 'lucide-react';

interface AnalyticsData {
  views: number;
  downloads: number;
  shares: number;
  avgTimeSpent: number;
  conversionRate: number;
  topTemplates: Array<{ name: string; usage: number }>;
  dailyViews: Array<{ date: string; views: number; downloads: number }>;
  deviceBreakdown: Array<{ device: string; percentage: number; color: string }>;
  geographicData: Array<{ country: string; views: number }>;
  engagementMetrics: {
    bounceRate: number;
    avgSessionDuration: number;
    pagesPerSession: number;
    returnVisitorRate: number;
  };
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

export function AnalyticsDashboard() {
  const { screenshots, selectedTemplate, recentProjects } = useAppStore();
  const { trackEvent } = useAnalytics();
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('30d');
  const [isLoading, setIsLoading] = useState(true);

  // Mock analytics data - in production, this would come from your analytics service
  const [analyticsData] = useState<AnalyticsData>({
    views: 12847,
    downloads: 3421,
    shares: 892,
    avgTimeSpent: 245, // seconds
    conversionRate: 26.6,
    topTemplates: [
      { name: 'Modern Hero', usage: 45 },
      { name: 'Creative Grid', usage: 32 },
      { name: 'Minimal Clean', usage: 28 },
      { name: 'Corporate Pro', usage: 21 },
      { name: 'Mobile First', usage: 18 },
    ],
    dailyViews: Array.from({ length: 30 }, (_, i) => ({
      date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      views: Math.floor(Math.random() * 500) + 200,
      downloads: Math.floor(Math.random() * 100) + 50,
    })),
    deviceBreakdown: [
      { device: 'Desktop', percentage: 65, color: '#0088FE' },
      { device: 'Mobile', percentage: 28, color: '#00C49F' },
      { device: 'Tablet', percentage: 7, color: '#FFBB28' },
    ],
    geographicData: [
      { country: 'United States', views: 4521 },
      { country: 'United Kingdom', views: 2103 },
      { country: 'Germany', views: 1876 },
      { country: 'Canada', views: 1543 },
      { country: 'Australia', views: 1204 },
    ],
    engagementMetrics: {
      bounceRate: 23.4,
      avgSessionDuration: 245,
      pagesPerSession: 3.2,
      returnVisitorRate: 42.1,
    },
  });

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getChangeIndicator = (value: number) => {
    const isPositive = value > 0;
    return (
      <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
        {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
        <span>{Math.abs(value)}%</span>
      </div>
    );
  };

  const MetricCard = ({ 
    title, 
    value, 
    change, 
    icon: Icon, 
    format = 'number' 
  }: { 
    title: string; 
    value: number; 
    change: number; 
    icon: any; 
    format?: 'number' | 'percentage' | 'duration';
  }) => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {format === 'number' && value.toLocaleString()}
          {format === 'percentage' && `${value}%`}
          {format === 'duration' && formatDuration(value)}
        </div>
        <div className="flex items-center justify-between mt-2">
          {getChangeIndicator(change)}
          <p className="text-xs text-muted-foreground">vs last {timeRange}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 animate-pulse" />
            Analytics Dashboard
          </CardTitle>
          <CardDescription>Loading your portfolio performance data...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-20 bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-blue-500" />
                Analytics Dashboard
              </CardTitle>
              <CardDescription>
                Track your portfolio performance and user engagement
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {(['7d', '30d', '90d'] as const).map((range) => (
                <Button
                  key={range}
                  variant={timeRange === range ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setTimeRange(range)}
                >
                  {range}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              {/* Key Metrics */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Total Views"
                  value={analyticsData.views}
                  change={12.5}
                  icon={Eye}
                />
                <MetricCard
                  title="Downloads"
                  value={analyticsData.downloads}
                  change={8.2}
                  icon={Download}
                />
                <MetricCard
                  title="Shares"
                  value={analyticsData.shares}
                  change={-2.4}
                  icon={Share2}
                />
                <MetricCard
                  title="Avg. Time Spent"
                  value={analyticsData.avgTimeSpent}
                  change={15.7}
                  icon={Clock}
                  format="duration"
                />
              </div>

              {/* Views and Downloads Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Views & Downloads Trend</CardTitle>
                  <CardDescription>Daily performance over the last {timeRange}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={analyticsData.dailyViews}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="views"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="downloads"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <MetricCard
                  title="Bounce Rate"
                  value={analyticsData.engagementMetrics.bounceRate}
                  change={-5.2}
                  icon={Target}
                  format="percentage"
                />
                <MetricCard
                  title="Session Duration"
                  value={analyticsData.engagementMetrics.avgSessionDuration}
                  change={12.8}
                  icon={Clock}
                  format="duration"
                />
                <MetricCard
                  title="Pages/Session"
                  value={analyticsData.engagementMetrics.pagesPerSession}
                  change={7.3}
                  icon={Activity}
                />
                <MetricCard
                  title="Return Visitors"
                  value={analyticsData.engagementMetrics.returnVisitorRate}
                  change={3.9}
                  icon={Users}
                  format="percentage"
                />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Engagement Score</CardTitle>
                  <CardDescription>Overall portfolio engagement quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-green-600">85/100</span>
                      <Badge className="bg-green-100 text-green-800">Excellent</Badge>
                    </div>
                    <Progress value={85} className="h-3" />
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium text-green-600">Strengths</p>
                        <ul className="text-muted-foreground">
                          <li>• Low bounce rate</li>
                          <li>• High session duration</li>
                          <li>• Strong return rate</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-orange-600">Improvements</p>
                        <ul className="text-muted-foreground">
                          <li>• Increase social shares</li>
                          <li>• Optimize mobile experience</li>
                          <li>• Add more CTAs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="templates" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Most Popular Templates</CardTitle>
                  <CardDescription>Template usage across all portfolios</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={analyticsData.topTemplates}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="usage" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Template Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {analyticsData.topTemplates.slice(0, 3).map((template, index) => (
                        <div key={template.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${
                              index === 0 ? 'bg-gold' : index === 1 ? 'bg-silver' : 'bg-bronze'
                            }`} />
                            <span className="font-medium">{template.name}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">{template.usage}%</p>
                            <p className="text-xs text-muted-foreground">usage rate</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Conversion by Template</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticsData.topTemplates.slice(0, 5).map((template) => (
                        <div key={template.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>{template.name}</span>
                            <span>{template.usage}%</span>
                          </div>
                          <Progress value={template.usage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="audience" className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Device Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <PieChart>
                        <Pie
                          data={analyticsData.deviceBreakdown}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="percentage"
                          label={({ device, percentage }) => `${device}: ${percentage}%`}
                        >
                          {analyticsData.deviceBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Countries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {analyticsData.geographicData.map((country) => (
                        <div key={country.country} className="flex items-center justify-between">
                          <span className="font-medium">{country.country}</span>
                          <div className="text-right">
                            <p className="font-bold">{country.views.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">views</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}