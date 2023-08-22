/** @type {import('next').NextConfig} */
const API_URL = process.env.API_URL;

const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: '/api/events',
                destination: `${API_URL}/api/eventReApiTemp`
            },
        ]
    }
}

module.exports = nextConfig