import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['127.0.0.1'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337', 
        pathname: '/uploads/**', // Görüntülerin bulunduğu dizin
      },
    ],
  },
};

export default withNextIntl(nextConfig);
