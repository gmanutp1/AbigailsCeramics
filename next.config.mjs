/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: "/AbigailsCeramics",
  assetPrefix: "/AbigailsCeramics/",
};

export default nextConfig;
