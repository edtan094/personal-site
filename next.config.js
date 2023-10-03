/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dajiahao-bucket.s3.us-west-1.amazonaws.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://dajiahao-bucket.s3.us-west-1.amazonaws.com",
        port: "3000",
        pathname: "/*",
      },
    ],
  },
};
module.exports = nextConfig;
