/** @type {import('next').NextConfig} */
const path = require("path");

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
  sassOptions: {
    includePaths: [path.join(__dirname, "app")],
  },
};
module.exports = nextConfig;
