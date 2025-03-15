/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/.well-known/matrix',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix',
            }
        ]
    }
};

export default nextConfig;
