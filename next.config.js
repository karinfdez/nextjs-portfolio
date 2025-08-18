// Next.js configuration file
// Added to allow remote images from Unsplash
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Redirect from homepage to about page
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
