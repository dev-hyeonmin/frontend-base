/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const API_URL = process.env.API_URL

const nextConfig = {
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
        config.resolve.fallback = { fs: false };
        return config;
    },
    i18n,
    async rewrites() {
        return [
            {
                source: '/api/events',
                destination: `${API_URL}/api/eventReApiTemp`,
            },
        ]
    },
}

module.exports = nextConfig
