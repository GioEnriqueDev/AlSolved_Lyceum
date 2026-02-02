import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: "/AlSolved_Lyceum",
  assetPrefix: "/AlSolved_Lyceum",
};

export default nextConfig;
