// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to pages for cleaner URLs in static exports
  trailingSlash: true,
  // The basePath is needed for project sites like https://quammy93.github.io/Maxwell_Ahorlu/
  basePath: '/Maxwell_Ahorlu',
};

module.exports = nextConfig;