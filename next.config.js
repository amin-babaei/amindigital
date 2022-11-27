/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: "public",
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['server-amindigital.vercel.app'],
  },
  env:{
    BASE_URL:'https://server-amindigital.vercel.app'
  }
})