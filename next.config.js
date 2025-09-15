/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better deployment compatibility
  output: 'export',
  trailingSlash: true,
  
  // Image optimization settings
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Performance optimizations
  compress: true,
  
  // ESLint configuration
  eslint: {
    // Only run ESLint on these directories during production builds
    dirs: ['src'],
    // Don't fail the build on ESLint warnings (only errors)
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig