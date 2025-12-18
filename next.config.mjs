/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bundle optimization
  experimental: {
    optimizePackageImports: [
      '@heroicons/react',
      'lucide-react',
      'framer-motion',
      'd3',
      '@tensorflow/tfjs'
    ]
  },
  
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Code splitting for large libraries
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        ...config.optimization.splitChunks,
        cacheGroups: {
          ...config.optimization.splitChunks.cacheGroups,
          // Three.js bundle
          three: {
            name: 'three',
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            chunks: 'all',
            priority: 30,
          },
          // D3.js bundle
          d3: {
            name: 'd3',
            test: /[\\/]node_modules[\\/]d3[\\/]/,
            chunks: 'all',
            priority: 25,
          },
          // TensorFlow.js bundle
          tensorflow: {
            name: 'tensorflow',
            test: /[\\/]node_modules[\\/]@tensorflow[\\/]/,
            chunks: 'all',
            priority: 25,
          },
          // Mapbox bundle
          mapbox: {
            name: 'mapbox',
            test: /[\\/]node_modules[\\/]mapbox-gl[\\/]/,
            chunks: 'all',
            priority: 25,
          },
          // UI libraries
          ui: {
            name: 'ui',
            test: /[\\/]node_modules[\\/](@radix-ui|@heroicons|lucide-react)[\\/]/,
            chunks: 'all',
            priority: 20,
          }
        }
      };
    }
    
    return config;
  },
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  
  // Compression
  compress: true,
  
  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
