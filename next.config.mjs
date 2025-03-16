/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/.well-known/matrix/*',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/*',
                statusCode: 302
            },
            {
                source: '/_matrix/*',
                destination: 'https://matrix.julianvos.nl/_matrix/*',
                statusCode: 302
            }
        ]
    }
};

export default nextConfig;
