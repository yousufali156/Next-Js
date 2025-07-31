/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enables /app directory (Next.js 13+)
    // turbopack: false, // Uncomment to disable turbopack if causing issues
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
