import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/crm-implementation",
        destination: "/services/business-systems",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
