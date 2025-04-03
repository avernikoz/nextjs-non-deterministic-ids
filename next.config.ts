import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  generateBuildId: () => "static-build-id-v1",

};

export default nextConfig;
