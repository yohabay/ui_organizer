import { useCallback, useEffect } from 'react';
import { useAppStore } from '@/lib/store';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
}

interface PortfolioMetrics {
  screenshotCount: number;
  templateUsage: string;
  exportFormat: string;
  projectType: string;
  timeSpent: number;
}

export function useAnalytics() {
  const { projectType, screenshots, selectedTemplate } = useAppStore();

  // Track page views
  const trackPageView = useCallback((page: string) => {
    // In production, integrate with analytics service like Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined') {
      console.log('Page view:', page);
      // gtag('event', 'page_view', { page_title: page });
    }
  }, []);

  // Track custom events
  const trackEvent = useCallback(({ event, properties }: AnalyticsEvent) => {
    if (typeof window !== 'undefined') {
      console.log('Event:', event, properties);
      // gtag('event', event, properties);
    }
  }, []);

  // Track portfolio creation
  const trackPortfolioCreated = useCallback((metrics: PortfolioMetrics) => {
    trackEvent({
      event: 'portfolio_created',
      properties: {
        screenshot_count: metrics.screenshotCount,
        template_used: metrics.templateUsage,
        export_format: metrics.exportFormat,
        project_type: metrics.projectType,
        time_spent_seconds: metrics.timeSpent,
      },
    });
  }, [trackEvent]);

  // Track template usage
  const trackTemplateSelected = useCallback((templateName: string, templateType: string) => {
    trackEvent({
      event: 'template_selected',
      properties: {
        template_name: templateName,
        template_type: templateType,
        screenshot_count: screenshots.length,
        project_type: projectType,
      },
    });
  }, [trackEvent, screenshots.length, projectType]);

  // Track export actions
  const trackExport = useCallback((format: string, quality: string) => {
    trackEvent({
      event: 'portfolio_exported',
      properties: {
        export_format: format,
        quality_setting: quality,
        screenshot_count: screenshots.length,
        template_name: selectedTemplate?.name || 'none',
        project_type: projectType,
      },
    });
  }, [trackEvent, screenshots.length, selectedTemplate, projectType]);

  // Track errors
  const trackError = useCallback((error: Error, context?: string) => {
    trackEvent({
      event: 'error_occurred',
      properties: {
        error_message: error.message,
        error_stack: error.stack,
        context: context || 'unknown',
        project_type: projectType,
        screenshot_count: screenshots.length,
      },
    });
  }, [trackEvent, projectType, screenshots.length]);

  // Track user engagement
  const trackEngagement = useCallback((action: string, value?: number) => {
    trackEvent({
      event: 'user_engagement',
      properties: {
        action,
        value,
        timestamp: Date.now(),
      },
    });
  }, [trackEvent]);

  return {
    trackPageView,
    trackEvent,
    trackPortfolioCreated,
    trackTemplateSelected,
    trackExport,
    trackError,
    trackEngagement,
  };
}

// Hook for performance metrics
export function usePerformanceMetrics() {
  const trackPerformance = useCallback((metric: string, value: number) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      console.log(`Performance ${metric}:`, value);
      // Send to analytics service
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Track Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'measure') {
            trackPerformance(entry.name, entry.duration);
          }
        });
      });

      observer.observe({ entryTypes: ['measure'] });

      return () => observer.disconnect();
    }
  }, [trackPerformance]);

  return { trackPerformance };
}