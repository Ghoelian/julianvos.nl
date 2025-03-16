/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/.well-known/matrix/server',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/server',
                statusCode: 302
            },
            {
                source: '/.well-known/matrix/client',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/client',
                statusCode: 302
            },
            {
                source: '/.well-known/matrix/support',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/support',
                statusCode: 302
            }
        ]
    }
};

export default nextConfig;
