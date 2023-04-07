// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// next.config.js
const withPostCSS = require('next-with-postcss');
const tailwindcss = require('tailwindcss');

module.exports = withPostCSS({
  postcss: [tailwindcss],
});
