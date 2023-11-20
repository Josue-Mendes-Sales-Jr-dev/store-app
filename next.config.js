/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  compiler: {
    styledComponents: {
      ssr: true,
    },
  },
  images: {
    domains: ['mks-sistemas.nyc3.digitaloceanspaces.com']
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],

}

module.exports = nextConfig
