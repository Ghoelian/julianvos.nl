/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  async rewrites() {
    return [
      {
        source: '/.well-known/matrix',
        destination: 'https://matrix.julianvos.nl/.well-known/matrix'
      },
      {
        source: '/.well-known/matrix/:slug',
        destination: 'https://matrix.julianvos.nl/.well-known/matrix/:slug'
      }
    ];
  },
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
