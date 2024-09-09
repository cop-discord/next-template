/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      removeConsole: true,
    },
    swcMinify: true,
    webpack: (
      config,
      { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
    ) => {
      // Important: return the modified config
      return config
    },
  };
  
  module.exports = nextConfig;
  