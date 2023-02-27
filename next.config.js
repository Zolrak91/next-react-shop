/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  disable: false,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['api.lorem.space', 'cdn.pixabay.com', 'placeimg.com', 'www.libreriahuequito.com', 'thumbs.dreamstime.com'],
  },
};

module.exports = withPWA(nextConfig);
