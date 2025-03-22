/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
  domains: [
    "api.microlink.io", // Microlink Image Preview
  ],
};

export default nextConfig;
