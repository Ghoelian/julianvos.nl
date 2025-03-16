/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/.well-known/matrix/server',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/server',
                permanent: false
            },
            {
                source: '/.well-known/matrix/client',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/client',
                permanent: false
            },
            {
                source: '/.well-known/matrix/support',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/support',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
