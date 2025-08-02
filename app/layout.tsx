import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Toaster as ToastToaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import { FullScreenLoader } from "@/components/ui/loading-spinner";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist",
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Professional Portfolio Designer",
    template: "%s | Portfolio Designer"
  },
  description: "Create competitive UI designer portfolios with AI-powered layouts and professional templates. Transform your screenshots into production-ready portfolio presentations.",
  keywords: [
    "portfolio designer",
    "UI design",
    "portfolio templates",
    "design tools",
    "AI layout",
    "professional portfolio",
    "design showcase"
  ],
  authors: [{ name: "Portfolio Designer Team" }],
  creator: "Portfolio Designer",
  publisher: "Portfolio Designer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://portfolio-designer.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-designer.app',
    title: 'Professional Portfolio Designer',
    description: 'Create competitive UI designer portfolios with AI-powered layouts',
    siteName: 'Portfolio Designer',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Designer - Create Professional Portfolios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Portfolio Designer',
    description: 'Create competitive UI designer portfolios with AI-powered layouts',
    images: ['/og-image.jpg'],
    creator: '@portfoliodesigner',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Portfolio Designer',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

// Error Boundary Component
function ErrorBoundary({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode;
  fallback: React.ReactNode;
}) {
  return (
    <Suspense fallback={<FullScreenLoader text="Loading application..." />}>
      {children}
    </Suspense>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${geist.variable} font-sans antialiased min-h-screen bg-background`}>
        <ErrorBoundary fallback={<FullScreenLoader text="Something went wrong. Please refresh the page." />}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <main className="flex-1">
                <Suspense fallback={<FullScreenLoader text="Loading..." />}>
                  {children}
                </Suspense>
              </main>
            </div>
            <Toaster />
            <ToastToaster />
          </ThemeProvider>
        </ErrorBoundary>
        
        {/* Performance and Analytics Scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Register service worker for PWA
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
              
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart);
                    }
                  }, 0);
                });
              }
              
              // Install prompt for PWA
              let deferredPrompt;
              window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                // Show install button or notification
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
