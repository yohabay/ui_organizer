import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function PremiumAccessGrantedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div> 
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to Premium Access! 🎉
            </h1>
            <p className="text-lg text-gray-600">
              You now have unlimited access to all premium templates
            </p>
          </div>
        </div>

        {/* Access Details */}
        <Card className="border-2 border-green-200 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-green-700">
              <Star className="w-5 h-5" />
              Premium Collection Unlocked
            </CardTitle>
            <CardDescription>
              Your subscription is now active and you can access all premium features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Unlimited premium templates</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Advanced layout options</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Professional shadows & effects</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">High-quality exports</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Priority support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">Regular updates</span>
              </div>
            </div>

            {/* Subscription Info */}
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-gray-900">Active Subscription</span>
              </div>
              <p className="text-sm text-gray-600">
                Your premium access is valid for the selected billing period
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="flex items-center gap-2">
            <Link href="/">
              <Download className="w-4 h-4" />
              Start Using Templates
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/templates">
              Browse Premium Collection
            </Link>
          </Button>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500">
          <p>
            Need help? Contact our support team for assistance with your premium access.
          </p>
        </div>
      </div>
    </div>
  );
}