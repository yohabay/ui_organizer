"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Download, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

interface DownloadTroubleshooterProps {
  onTestDownload: () => void;
  browserSupport: {
    supportsDownload: boolean;
    supportsBlob: boolean;
    supportsURL: boolean;
    isSupported: boolean;
  };
}

export function DownloadTroubleshooter({ 
  onTestDownload, 
  browserSupport 
}: DownloadTroubleshooterProps) {
  const [showTroubleshooting, setShowTroubleshooting] = useState(false);

  const commonIssues = [
    {
      title: "Browser Popup Blocker",
      description: "Your browser might be blocking automatic downloads",
      solution: "Allow popups for this site or try right-clicking the download link",
      icon: AlertTriangle,
      severity: "warning" as const,
    },
    {
      title: "Download Folder Permissions",
      description: "Your system might not allow downloads to the default folder",
      solution: "Check your browser's download settings and folder permissions",
      icon: AlertTriangle,
      severity: "warning" as const,
    },
    {
      title: "File Size Too Large",
      description: "Large images might fail to download",
      solution: "Try exporting in JPG format instead of PNG for smaller file sizes",
      icon: AlertTriangle,
      severity: "info" as const,
    },
    {
      title: "Browser Compatibility",
      description: "Older browsers might not support automatic downloads",
      solution: "Use a modern browser like Chrome, Firefox, Safari, or Edge",
      icon: XCircle,
      severity: "error" as const,
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "error":
        return "destructive";
      case "warning":
        return "default";
      case "info":
        return "secondary";
      default:
        return "default";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Download className="h-5 w-5" />
          Download Troubleshooting
        </CardTitle>
        <CardDescription>
          Having trouble downloading? Use these tools to diagnose and fix issues.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Browser Support Status */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Browser Support Status</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <Badge variant={browserSupport.supportsDownload ? "default" : "destructive"}>
              {browserSupport.supportsDownload ? <CheckCircle className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
              Download Attribute
            </Badge>
            <Badge variant={browserSupport.supportsBlob ? "default" : "destructive"}>
              {browserSupport.supportsBlob ? <CheckCircle className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
              Blob API
            </Badge>
            <Badge variant={browserSupport.supportsURL ? "default" : "destructive"}>
              {browserSupport.supportsURL ? <CheckCircle className="h-3 w-3 mr-1" /> : <XCircle className="h-3 w-3 mr-1" />}
              URL.createObjectURL
            </Badge>
          </div>
        </div>

        {/* Test Download Button */}
        <div className="space-y-2">
          <Button 
            onClick={onTestDownload} 
            variant="outline" 
            className="w-full"
          >
            <Download className="h-4 w-4 mr-2" />
            Test Download Function
          </Button>
          <p className="text-xs text-muted-foreground">
            This will create a simple test image to verify download functionality
          </p>
        </div>

        {/* Troubleshooting Toggle */}
        <Button
          variant="ghost"
          onClick={() => setShowTroubleshooting(!showTroubleshooting)}
          className="w-full"
        >
          {showTroubleshooting ? "Hide" : "Show"} Troubleshooting Guide
        </Button>

        {/* Troubleshooting Guide */}
        {showTroubleshooting && (
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Common Issues & Solutions</h4>
            {commonIssues.map((issue, index) => {
              const IconComponent = issue.icon;
              return (
                <Alert key={index} variant={getSeverityColor(issue.severity)}>
                  <IconComponent className="h-4 w-4" />
                  <AlertTitle>{issue.title}</AlertTitle>
                  <AlertDescription>
                    <p className="mb-2">{issue.description}</p>
                    <p className="text-sm font-medium">Solution: {issue.solution}</p>
                  </AlertDescription>
                </Alert>
              );
            })}
          </div>
        )}

        {/* Quick Tips */}
        <div className="bg-blue-50 p-3 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800 mb-2">Quick Tips</h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Try the "Test Download Function" first to verify basic functionality</li>
            <li>• Check your browser's download settings and popup blocker</li>
            <li>• Use JPG format for smaller file sizes if PNG fails</li>
            <li>• Try a different browser if issues persist</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
} 