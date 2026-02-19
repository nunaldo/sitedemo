/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow images from external domains if needed
    remotePatterns: [],
    // For faster development, you can temporarily set unoptimized to true
    // unoptimized: true,
  },
}

module.exports = nextConfig
