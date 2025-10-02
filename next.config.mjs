// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // enable static export
  basePath: "/Maxwell_Ahorlu", // 👈 repo name
  images: {
    unoptimized: true, // GitHub Pages doesn’t support next/image optimization
  },
};

export default nextConfig;
