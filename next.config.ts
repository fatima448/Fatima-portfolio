import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/Fatima-portfolio",
  assetPrefix: "/Fatima-portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;import type { NextConfig } from "next";

const isGitHubPages = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGitHubPages ? "/Fatima-portfolio" : "",
  assetPrefix: isGitHubPages ? "/Fatima-portfolio/" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;