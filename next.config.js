/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["d2f1h64iia9ryb.cloudfront.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2f1h64iia9ryb.cloudfront.net",
        port: "3000",
        pathname: "/*",
      },
    ],
  },
};
module.exports = nextConfig;
