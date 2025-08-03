// Next.js configuration file
// Added to allow remote images from Unsplash
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

module.exports = nextConfig;
