/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['undici']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
      bufferutil: false,
      "utf-8-validate": false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      fs: false,
      path: false,
      net: false,
      dns: false,
      tls: false
    };
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules\/(?!undici)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    });
    config.cache = {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
    };
    return config;
  }
};

module.exports = nextConfig;