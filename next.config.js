/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "*.googleusercontent.com",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "media.istockphoto.com",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "auth/sign-in",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
