import type { NextConfig } from 'next';

const config: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  transpilePackages: ['@memo-ui/react', '@memo-ui/core', '@memo-ui/utils'],
};

export default config;
