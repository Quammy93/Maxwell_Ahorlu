/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // static export
  images: { unoptimized: true }, // needed because next/image optimization doesn't work on Pages
  basePath: '/Maxwell_Ahorlu',   // 👈 repo name
  assetPrefix: '/Maxwell_Ahorlu/', // required for assets to load
}

export default nextConfig
