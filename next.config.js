/** @type {import('next').NextConfig} */
const fs = require('fs');
const nextConfig = {    
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
