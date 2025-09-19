/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/matrix',
        destination: 'https://matrix.julianvos.nl/.well-known/matrix',
        basePath: false
      },
      {
        source: '/.well-known/matrix/:slug',
        destination: 'https://matrix.julianvos.nl/.well-known/matrix/:slug',
        basePath: false
      }
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
