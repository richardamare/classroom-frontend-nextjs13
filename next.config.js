/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL
        return [
            {
                source: '/api/:path*',
                destination: `${baseUrl}/api/:path*` // Proxy to Backend
            }
        ]
    }
}

module.exports = nextConfig
