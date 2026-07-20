/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Serve the static HTML/CSS/JS portfolio (in /public) at the root URL
        { source: '/', destination: '/index.html' },
      ],
    }
  },
}

export default nextConfig
