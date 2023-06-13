/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    IMAGE_DOMAIN: process.env.IMAGE_DOMAIN
  },
})