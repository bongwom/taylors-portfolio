/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ replaces next export
  images: {
    unoptimized: true,
  },
  basePath: '/taylors-portfolio', // <-- replace with your GitHub repo name
};

module.exports = nextConfig;