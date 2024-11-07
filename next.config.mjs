/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "cdn.dribbble.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "assets.aceternity.com",
      "media.licdn.com",
    ],
  },
};

export default nextConfig;
