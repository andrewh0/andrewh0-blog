/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compiler: {
    // https://nextjs.org/docs/advanced-features/compiler#styled-components
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
