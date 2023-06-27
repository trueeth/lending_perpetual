/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
module.exports = nextConfig
