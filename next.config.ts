const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: "/AlSolved_Lyceum",
  assetPrefix: "/AlSolved_Lyceum",
};

export default nextConfig;
