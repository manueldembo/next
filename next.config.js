const { warnOptionHasBeenMovedOutOfExperimental } = require('next/dist/server/config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'files.stripe.com'
    ]
  },

}

module.exports = nextConfig
