/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'randomuser.me',
      },
      {
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        hostname: 'upload.wikimedia.org',
      },
      {
        hostname: 'www.svgrepo.com',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

module.exports = nextConfig;
