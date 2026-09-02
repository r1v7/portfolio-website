import type { NextConfig } from "next";

// Set BASE_PATH (e.g. "/portfolio-website") when deploying to a GitHub Pages
// project site. Leave empty for a custom domain or user/org site.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
