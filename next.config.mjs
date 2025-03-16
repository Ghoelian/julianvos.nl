/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/.well-known/matrix/:path*',
                destination: 'https://matrix.julianvos.nl/.well-known/matrix/:path*',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
