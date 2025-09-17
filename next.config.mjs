/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ignoreDuringBuilds: true, // Re-enable ESLint for production builds
  },
  typescript: {
    // ignoreBuildErrors: true, // Re-enable TypeScript error checking for production builds
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
