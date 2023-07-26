/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['serveramindigital.onrender.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
})