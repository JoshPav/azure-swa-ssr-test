/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["docs.microsoft.com"],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
