/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// dodanie ściezki do zdjęć: /images
const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/icons/',
            outputPath: 'static/icons/',
            name: '[name]-[hash].[ext]',
          },
        },
      ],
      include: path.resolve(__dirname, 'images'),
    })

    return config
  },
}