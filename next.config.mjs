/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/.well-known/matrix/*',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/*',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
