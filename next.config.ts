import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
  },
  allowedDevOrigins: ['192.168.18.133'],
};

export default nextConfig;
