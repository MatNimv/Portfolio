/** @type {import('next').NextConfig} */
const withVideos = require('next-videos');

module.exports = withVideos({
    images: {
        domains: ['firebasestorage.googleapis.com'],
        disableStaticImages: true,
        unoptimized: true
    },
    reactStrictMode: false,
    output: 'export'
});