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
      {
        hostname: "localhost",
      },
      {
        hostname: "10.20.30.247",
      },
    ],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/auth/sign-in",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
