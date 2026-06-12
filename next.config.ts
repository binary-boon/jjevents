// import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Vercel Blob storage
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        // Cloudflare R2 (if you switch later)
        protocol: "https",
        hostname: "**.r2.cloudflarestorage.com",
      },
    ],
  },
};

export default nextConfig;
