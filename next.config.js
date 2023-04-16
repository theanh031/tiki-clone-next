/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "salt.tikicdn.com",
            },
            {
                protocol: "http",
                hostname: "frontend.tikicdn.com",
            }
        ],
        minimumCacheTTL: 15000000,
    },
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};



module.exports = nextConfig
