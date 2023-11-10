/** @type {import('next').NextConfig} */

const nextConfig = {
    trailingSlash: true,
    output: 'export',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
