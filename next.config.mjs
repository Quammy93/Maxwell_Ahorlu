// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/Maxwell_Ahorlu',
  assetPrefix: '/Maxwell_Ahorlu/',
}

export default nextConfig
