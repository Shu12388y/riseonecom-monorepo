/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['images.unsplash.com','assets.aceternity.com']
    },
    eslint: {
      // Only run ESLint on non-generated files when building for production
      ignoreDuringBuilds: true, // Set to true if you want to skip linting during builds
      dirs: ['app', 'components', 'lib', 'utils'], // Only run ESLint on these directories
    },
};

export default nextConfig;
