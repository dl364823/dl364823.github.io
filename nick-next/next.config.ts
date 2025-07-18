/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  
  },
  basePath: "/docs",
  assetPrefix: "/docs",
};

export default nextConfig;